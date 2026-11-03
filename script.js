/* ============================================================
   DEPARTMENT OF AIR WARFARE HALL OF FAME — kiosk app logic
   ============================================================ */

(function () {
  'use strict';

  var STAGE_W = 1920, STAGE_H = 1080;
  var IDLE_TIMEOUT_MS = 100000; // 100 s without a touch -> back to the welcome screen
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var ORDINAL_WORDS = ['', 'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth',
    'Eleventh', 'Twelfth', 'Thirteenth', 'Fourteenth', 'Fifteenth', 'Sixteenth', 'Seventeenth', 'Eighteenth', 'Nineteenth'];
  var TENS = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty'];

  // Tracks drift slowly on their own, pause while a visitor browses, and
  // resume after a quiet spell, bouncing between the two ends.
  var AUTO_SCROLL_SPEED = 0.45;          // px per frame (~27 px/s)
  var AUTO_SCROLL_START_DELAY = 1800;    // ms before the drift begins, and at each end
  var AUTO_SCROLL_RESUME_DELAY = 10000;  // ms of quiet before it resumes
  var AUTO_SCROLL_END_EPSILON = 2;

  var C = HOF_CONTENT;
  var DIRECTORS = C.directors;
  var COMMANDANTS = C.commandants;
  var CUR_DIR = indexWhere(DIRECTORS, function (d) { return d.current; });

  var state = { screen: 'attract', profileIndex: null, bioIndex: null, cmdFilter: 'all' };
  var el = {};
  var idleTimer = null;

  /* ---------------- helpers ---------------- */
  function t(key) { var v = C.ui[key]; return v !== undefined ? v : key; }
  function indexWhere(list, fn) { for (var i = 0; i < list.length; i++) if (fn(list[i], i)) return i; return -1; }

  function parseDate(iso) { var p = iso.split('-'); return new Date(Date.UTC(+p[0], +p[1] - 1, +p[2])); }
  function today() { var n = new Date(); return new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate())); }
  function fmtLong(d) { return d.getUTCDate() + ' ' + MONTHS[d.getUTCMonth()] + ' ' + d.getUTCFullYear(); }
  function fmtShort(d) { return MONTHS[d.getUTCMonth()].slice(0, 3) + ' ' + d.getUTCFullYear(); }
  function year(iso) { return iso ? iso.slice(0, 4) : null; }
  function plural(n, w) { return n + ' ' + w + (n === 1 ? '' : 's'); }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  function fmtDuration(from, to) {
    var y = to.getUTCFullYear() - from.getUTCFullYear();
    var m = to.getUTCMonth() - from.getUTCMonth();
    var d = to.getUTCDate() - from.getUTCDate();
    if (d < 0) { m--; d += new Date(Date.UTC(to.getUTCFullYear(), to.getUTCMonth(), 0)).getUTCDate(); }
    if (m < 0) { y--; m += 12; }
    var parts = [];
    if (y) parts.push(plural(y, 'year'));
    if (m) parts.push(plural(m, 'month'));
    if (!parts.length) parts.push(plural(d, 'day'));
    return parts.join(', ');
  }

  function ordinal(n) { var s = ['th', 'st', 'nd', 'rd'], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); }
  function ordinalWord(n) {
    if (n < 20) return ORDINAL_WORDS[n];
    var tens = TENS[Math.floor(n / 10)], unit = n % 10;
    if (!unit) return tens.replace(/y$/, 'ieth');
    return tens + ' ' + ORDINAL_WORDS[unit];
  }

  // A person's end date: their "to", today while serving, or null if unknown.
  function endOf(p) { return p.to ? parseDate(p.to) : (p.current ? today() : null); }
  function durationOf(p) { var e = endOf(p); return p.from && e ? fmtDuration(parseDate(p.from), e) : t('tbc'); }
  function tenureLong(p) {
    if (!p.from) return t('tbc');
    return fmtLong(parseDate(p.from)) + ' — ' + (p.to ? fmtLong(parseDate(p.to)) : (p.current ? t('present') : t('tbc')));
  }
  function tenureShort(p) {
    if (!p.from) return t('tbc');
    return fmtShort(parseDate(p.from)) + ' — ' + (p.to ? fmtShort(parseDate(p.to)) : (p.current ? t('present') : '…'));
  }
  function tenureYears(p) {
    if (!p.from) return t('tbc');
    var a = year(p.from), b = p.to ? year(p.to) : (p.current ? t('present') : '');
    if (!b) return 'From ' + a;
    return a === b ? a : a + ' — ' + b;
  }

  function make(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null) n.textContent = text;
    return n;
  }
  function img(src, alt, cls) {
    var i = document.createElement('img');
    i.src = src; i.alt = alt || ''; i.draggable = false;
    if (cls) i.className = cls;
    return i;
  }
  // Commandant visual: framed portrait, cut-out (PNG), or, until a
  // portrait is matched, a monogram of first initial and surname initial.
  function commandantImg(c) {
    if (c.pending) return img('assets/icons/afcsc.png', '', 'is-emblem');
    if (!c.photo) {
      var parts = c.name.split(' ');
      var mono = parts[0].charAt(0) + parts[parts.length - 1].charAt(0);
      return make('span', 'monogram' + (c.service === 'army' ? ' monogram--army' : ''), mono);
    }
    return img(c.photo, fullName(c), /\.png$/i.test(c.photo) ? 'is-cutout' : '');
  }
  function fullName(p) { return p.rank + ' ' + p.name; }
  function shortName(p) { return p.rankShort + ' ' + p.name; }
  function restartAnimation(node, cls) {
    node.classList.remove('enter', 'enter-next', 'enter-prev');
    void node.offsetWidth;
    if (cls) node.classList.add(cls);
  }

  /* ---------------- stage scaling ---------------- */
  function scaleStage() {
    var s = Math.min(window.innerWidth / STAGE_W, window.innerHeight / STAGE_H);
    el.stage.style.transform = 'scale(' + s + ')';
  }
  function currentScale() {
    var m = /scale\(([\d.]+)\)/.exec(el.stage.style.transform);
    return m ? parseFloat(m[1]) : 1;
  }
  function applyStaticI18n() {
    document.querySelectorAll('[data-i18n]').forEach(function (n) { n.textContent = t(n.getAttribute('data-i18n')); });
  }

  /* ---------------- background music ---------------- */
  // Plays assets/audio/ambient.mp3 on a loop: softly on the welcome screen,
  // a little louder once a visitor begins. A missing file means silence.
  var AMBIENT_SRC = 'assets/audio/ambient.mp3';
  var AMBIENT_VOLUME = 0.35, AMBIENT_ATTRACT_VOLUME = 0.18, AMBIENT_FADE_MS = 1200;
  var ambient = null, ambientMuted = false, ambientFadeRaf = null;

  function ambientTarget() { return ambientMuted ? 0 : (state.screen === 'attract' ? AMBIENT_ATTRACT_VOLUME : AMBIENT_VOLUME); }
  function startAmbient() {
    if (ambient) return;
    var audio = new Audio(AMBIENT_SRC);
    audio.loop = true; audio.volume = 0; ambient = audio;
    audio.addEventListener('error', function () { ambient = null; el.btnSound.classList.add('hidden'); });
    audio.addEventListener('playing', function () { el.btnSound.classList.remove('hidden'); });
    playAmbient();
  }
  function playAmbient() {
    if (!ambient || ambientMuted) return;
    ambient.play().then(function () { fadeAmbient(ambientTarget()); })
      .catch(function () { document.addEventListener('pointerdown', playAmbient, { once: true }); });
  }
  function fadeAmbient(target, onDone) {
    if (!ambient) return;
    if (ambientFadeRaf) cancelAnimationFrame(ambientFadeRaf);
    var audio = ambient, from = audio.volume, t0 = null;
    function step(now) {
      if (t0 === null) t0 = now;
      var k = Math.min(1, (now - t0) / AMBIENT_FADE_MS);
      audio.volume = from + (target - from) * k;
      if (k < 1) { ambientFadeRaf = requestAnimationFrame(step); return; }
      ambientFadeRaf = null;
      if (onDone) onDone();
    }
    ambientFadeRaf = requestAnimationFrame(step);
  }
  function toggleAmbient() {
    ambientMuted = !ambientMuted;
    el.btnSound.classList.toggle('is-muted', ambientMuted);
    el.btnSound.setAttribute('aria-pressed', String(ambientMuted));
    el.btnSound.setAttribute('aria-label', ambientMuted ? 'Play background music' : 'Mute background music');
    if (ambientMuted) fadeAmbient(0, function () { if (ambient && ambientMuted) ambient.pause(); });
    else playAmbient();
  }

  /* ---------------- navigation ---------------- */
  function showScreen(id) {
    closeProfile();
    tracks.forEach(function (tr) { tr.stop(); });
    state.screen = id;
    if (ambient && !ambient.paused) fadeAmbient(ambientTarget());
    Object.keys(el.screens).forEach(function (k) { el.screens[k].classList.toggle('active', k === id); });
    el.topbar.classList.toggle('hidden', id === 'attract');
    var section = id === 'bio' ? 'commandants' : id;
    el.topbarNav.querySelectorAll('[data-nav]').forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-nav') === section); });
    if (id === 'commandants') cmdTrack.enter();
    if (id === 'directors') dirTrack.enter();
    resetIdleTimer();
  }

  /* ---------------- welcome ---------------- */
  function buildAttract() {
    ['a', 'b', 'c'].forEach(function (r, ri) {
      var row = make('div', 'wall-row wall-row--' + r);
      var order = DIRECTORS.map(function (_, i) { return DIRECTORS[(i + ri * 11) % DIRECTORS.length]; });
      order.concat(order).forEach(function (d) {
        var tile = make('div', 'wall-tile');
        tile.appendChild(img(d.photo));
        row.appendChild(tile);
      });
      el.attractWall.appendChild(row);
    });

    var named = COMMANDANTS.filter(function (c) { return !c.pending; });
    var first = Math.min(+year(named[0].from), +year(DIRECTORS[0].from));
    [
      [named.length, t('menuCommandants')],
      [DIRECTORS.length, t('menuDirectors')],
      ['Since ' + first, t('college')]
    ].forEach(function (s) {
      var n = make('div', 'attract-stat');
      n.appendChild(make('b', null, String(s[0])));
      n.appendChild(make('span', null, s[1]));
      el.attractStats.appendChild(n);
    });
  }

  /* ---------------- home ---------------- */
  function buildHome() {
    // Commandants: the five medallions listed in content (centre one gold).
    (C.homeCommandantPhotos || []).slice(0, 5).forEach(function (src) {
      var m = make('span', 'home-medal');
      m.appendChild(img(src, '', /\.png$/i.test(src) ? 'is-cutout' : ''));
      el.homeCmdArt.appendChild(m);
    });
    var named = COMMANDANTS.filter(function (c) { return !c.pending; });
    el.homeCmdMeta.textContent = named.length + ' Commandants · Since ' + year(named[0].from);

    var n = DIRECTORS.length;
    [0, Math.floor(n * 0.3), n - 1, Math.floor(n * 0.6), Math.floor(n * 0.85)].forEach(function (k) {
      var s = make('span', 'home-sketch');
      s.appendChild(img(DIRECTORS[k].photo));
      el.homeDirArt.appendChild(s);
    });
    el.homeDirMeta.textContent = n + ' Directors · Since ' + year(DIRECTORS[0].from);
  }

  /* ---------------- drifting tracks (shared) ---------------- */
  var tracks = [];
  var dragMoved = false;

  function Track(node, screenId, onScroll) {
    var self = this, timer = null, raf = null, dir = 1, pos = 0;
    this.node = node;
    this.stop = function () {
      if (timer) { clearTimeout(timer); timer = null; }
      if (raf) { cancelAnimationFrame(raf); raf = null; }
    };
    this.schedule = function (delay) {
      self.stop();
      timer = setTimeout(function () { timer = null; raf = requestAnimationFrame(step); }, delay);
    };
    this.enter = function () {
      node.scrollLeft = 0; pos = 0; dir = 1;
      if (onScroll) onScroll();
      self.schedule(AUTO_SCROLL_START_DELAY);
    };
    function step() {
      var max = node.scrollWidth - node.clientWidth;
      if (max <= 0) return;
      if (Math.abs(pos - node.scrollLeft) >= 1) pos = node.scrollLeft;
      pos = Math.max(0, Math.min(max, pos + AUTO_SCROLL_SPEED * dir));
      node.scrollLeft = pos;
      var atEnd = dir > 0 ? pos >= max - AUTO_SCROLL_END_EPSILON : pos <= AUTO_SCROLL_END_EPSILON;
      if (atEnd) { dir = -dir; self.schedule(AUTO_SCROLL_START_DELAY); return; }
      raf = requestAnimationFrame(step);
    }

    // Touch scrolls natively; this adds the same for a mouse.
    var startX = 0, startLeft = 0, dragging = false;
    node.addEventListener('pointerdown', function (e) {
      self.stop(); dragMoved = false;
      if (e.pointerType !== 'mouse') return;
      dragging = true; startX = e.clientX; startLeft = node.scrollLeft;
    });
    window.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var dx = (e.clientX - startX) / currentScale();
      if (Math.abs(dx) > 8) dragMoved = true;
      node.scrollLeft = startLeft - dx;
    });
    window.addEventListener('pointerup', function () {
      dragging = false;
      if (state.screen === screenId && state.profileIndex === null) self.schedule(AUTO_SCROLL_RESUME_DELAY);
    });
    node.addEventListener('touchmove', function () { dragMoved = true; }, { passive: true });
    node.addEventListener('wheel', function (e) {
      self.stop();
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) node.scrollLeft += e.deltaY;
      self.schedule(AUTO_SCROLL_RESUME_DELAY);
    }, { passive: true });
    if (onScroll) node.addEventListener('scroll', onScroll, { passive: true });

    this.scrollTo = function (child, align) {
      var target = align === 'start' ? child.offsetLeft - 80 : child.offsetLeft + child.offsetWidth / 2 - node.clientWidth / 2;
      node.scrollTo({ left: target, behavior: 'smooth' });
    };
    tracks.push(this);
  }

  function buildChips(root, items, onPick) {
    items.forEach(function (it, i) {
      var b = make('button', 'chip' + (i === 0 ? ' active' : ''), it.label);
      if (it.note) b.appendChild(make('small', null, it.note));
      b.addEventListener('click', function () {
        Array.prototype.forEach.call(root.children, function (c) { c.classList.toggle('active', c === b); });
        onPick(it.id);
      });
      root.appendChild(b);
    });
  }

  /* ---------------- commandants ---------------- */
  var cmdTrack;
  function commandantTitle(c) { return c.no ? ordinalWord(c.no) + ' ' + t('commandant') : t('commandant'); }

  function buildCommandants() {
    var named = COMMANDANTS.filter(function (c) { return !c.pending; });
    el.cmdYears.textContent = year(named[0].from) + ' — ' + t('present');

    var grid = make('div', 'cmd-grid');
    COMMANDANTS.forEach(function (c, i) {
      var card = make('button', 'ccard' + (c.pending ? ' ccard--pending' : ''));
      card.style.animationDelay = (i * 0.035) + 's';
      card.setAttribute('data-service', c.service || '');
      card.appendChild(make('span', 'ccard-no', c.no ? pad2(c.no) : '—'));
      if (c.service) card.appendChild(make('span', 'ccard-service ccard-service--' + c.service));
      var medal = make('span', 'medal');
      medal.appendChild(commandantImg(c));
      card.appendChild(medal);
      if (c.pending) {
        card.appendChild(make('span', 'ccard-rank', commandantTitle(c)));
        card.appendChild(make('span', 'ccard-name', 'Details to follow'));
      } else {
        card.appendChild(make('span', 'ccard-rank', c.rankShort));
        card.appendChild(make('span', 'ccard-name', c.name));
        card.appendChild(make('span', 'ccard-dates', tenureYears(c)));
        card.setAttribute('aria-label', fullName(c));
        card.addEventListener('click', function () { if (!dragMoved) openBio(i); });
      }
      grid.appendChild(card);
    });
    el.cmdTrack.appendChild(grid);
    el.cmdCards = grid.children;
    cmdTrack = new Track(el.cmdTrack, 'commandants');

    var count = function (s) { return COMMANDANTS.filter(function (c) { return !c.pending && (!s || c.service === s); }).length; };
    var chips = [{ id: 'all', label: t('all'), note: String(count()) }];
    ['army', 'airforce', 'navy'].forEach(function (s) {
      var n = count(s);
      if (n) chips.push({ id: s, label: C.services[s].replace('Nigerian ', ''), note: String(n) });
    });
    buildChips(el.cmdChips, chips, function (id) {
      state.cmdFilter = id;
      Array.prototype.forEach.call(el.cmdCards, function (card) {
        var s = card.getAttribute('data-service');
        card.classList.toggle('is-hidden', id !== 'all' && s !== id);
      });
      cmdTrack.enter();
    });
  }

  /* ---------------- commandant biography ---------------- */
  function bioOrder() {
    return COMMANDANTS.map(function (_, i) { return i; }).filter(function (i) { return !COMMANDANTS[i].pending; });
  }

  function openBio(i, direction) {
    var c = COMMANDANTS[i];
    if (!c || c.pending) return;
    state.bioIndex = i;

    el.bioFrame.innerHTML = '';
    el.bioFrame.appendChild(commandantImg(c));
    if (!c.photo) el.bioFrame.appendChild(make('span', 'bio-frame-note', t('portraitPending')));

    el.bioOrdinal.innerHTML = '';
    if (c.no) el.bioOrdinal.appendChild(make('b', null, ordinal(c.no)));
    el.bioOrdinal.appendChild(make('span', null, t('commandant')));

    el.bioService.textContent = c.service ? C.services[c.service] : '';
    el.bioService.className = 'tag' + (c.service === 'army' ? ' tag--army' : '');
    el.bioRank.textContent = c.rank;
    el.bioName.textContent = c.name;
    el.bioPost.textContent = c.post || '';
    el.bioFullname.textContent = c.fullName || '';

    el.bioFacts.innerHTML = '';
    var facts = [{ label: t('tenure'), value: tenureLong(c) }];
    if (c.from) facts.push({ label: t('duration'), value: durationOf(c) });
    if (c.serviceNo) facts.push({ label: t('serviceNo'), value: c.serviceNo });
    facts = facts.concat((c.facts || []).filter(function (f) { return f.label !== 'Flying hours'; }).slice(0, 5 - facts.length));
    facts.forEach(function (f) {
      var d = make('div');
      d.appendChild(make('dt', null, f.label));
      d.appendChild(make('dd', null, f.value));
      el.bioFacts.appendChild(d);
    });

    el.bioPanel.innerHTML = '';
    var words = (c.bio || []).join(' ').split(/\s+/).length;
    el.bioPanel.classList.toggle('is-long', words > 330);
    (c.bio || []).forEach(function (p) {
      el.bioPanel.appendChild(make('p', 'bio-text' + (/highly recogni[sz]ed/i.test(p) ? ' bio-text--closing' : ''), p));
    });
    el.bioPanel.scrollTop = 0;

    el.bioLinks.innerHTML = '';
    if (c.director) {
      var di = indexWhere(DIRECTORS, function (d) { return d.name === c.director; });
      if (di >= 0) {
        var b = make('button', 'chip-btn chip-btn--gold');
        b.appendChild(chipContent(DIRECTORS[di].photo, t('alsoDirector') + ' · ' + tenureYears(DIRECTORS[di]), shortName(DIRECTORS[di])));
        b.addEventListener('click', function () { showScreen('directors'); openProfile(di); });
        el.bioLinks.appendChild(b);
      }
    }

    var order = bioOrder(), k = order.indexOf(i);
    el.bioPrev.disabled = k <= 0;
    el.bioNext.disabled = k >= order.length - 1;

    if (state.screen !== 'bio') showScreen('bio');
    restartAnimation(el.bioWrap, direction ? (direction < 0 ? 'enter-prev' : 'enter-next') : null);
    resetIdleTimer();
  }

  function stepBio(dir) {
    var order = bioOrder(), k = order.indexOf(state.bioIndex) + dir;
    if (k >= 0 && k < order.length) openBio(order[k], dir);
  }

  /* ---------------- directors ---------------- */
  var dirTrack;
  function appointmentTitle(d) {
    var era = C.eras.filter(function (e) { return e.id === d.era; })[0];
    return era ? era.title : t('director');
  }

  function buildDirectors() {
    el.dirYears.textContent = year(DIRECTORS[0].from) + ' — ' + t('present');

    var rail = make('div', 'rail');
    var eraFirst = {};
    el.dirCards = [];
    DIRECTORS.forEach(function (d, i) {
      if (!(d.era in eraFirst)) {
        eraFirst[d.era] = i;
        var era = C.eras.filter(function (e) { return e.id === d.era; })[0];
        var last = DIRECTORS.length - 1 - indexWhere(DIRECTORS.slice().reverse(), function (x) { return x.era === d.era; });
        var mark = make('div', 'era-mark');
        var pill = make('div', 'era-mark-pill', era.label);
        pill.appendChild(make('small', null, year(d.from) + ' — ' + (last === DIRECTORS.length - 1 ? t('present') : year(DIRECTORS[last].to))));
        mark.appendChild(pill);
        mark.appendChild(make('span', 'era-mark-label', era.title));
        mark.setAttribute('data-era', d.era);
        rail.appendChild(mark);
      }
      var card = make('button', 'dcard' + (i === CUR_DIR ? ' dcard--current' : '') + (i === DIRECTORS.length - 1 ? ' is-last' : ''));
      card.style.animationDelay = (i * 0.04) + 's';
      card.setAttribute('aria-label', fullName(d));
      var node = make('span', 'dcard-node');
      node.appendChild(make('span', 'dcard-dot'));
      node.appendChild(make('span', 'dcard-num', pad2(i + 1)));
      card.appendChild(node);
      var frame = make('span', 'dcard-frame');
      frame.appendChild(img(d.photo, fullName(d)));
      card.appendChild(frame);
      var body = make('span', 'dcard-body');
      body.appendChild(make('span', 'dcard-rank', d.rankShort));
      body.appendChild(make('span', 'dcard-name', d.name));
      body.appendChild(make('span', 'dcard-dates', tenureShort(d)));
      card.appendChild(body);
      card.addEventListener('click', function () { if (!dragMoved) openProfile(i); });
      rail.appendChild(card);
      el.dirCards.push(card);
    });
    el.dirTrack.appendChild(rail);
    el.dirRail = rail;

    buildRibbon();
    dirTrack = new Track(el.dirTrack, 'directors', syncFocus);

    var chips = [{ id: 'all', label: t('all'), note: String(DIRECTORS.length) }];
    C.eras.forEach(function (e) {
      var n = DIRECTORS.filter(function (d) { return d.era === e.id; }).length;
      if (n) chips.push({ id: e.id, label: e.label, note: String(n) });
    });
    buildChips(el.dirChips, chips, function (id) {
      dirTrack.stop();
      if (id === 'all') el.dirTrack.scrollTo({ left: 0, behavior: 'smooth' });
      else dirTrack.scrollTo(rail.querySelector('[data-era="' + id + '"]'), 'start');
      dirTrack.schedule(AUTO_SCROLL_RESUME_DELAY);
    });
  }

  function buildRibbon() {
    var start = parseDate(DIRECTORS[0].from);
    var last = DIRECTORS[DIRECTORS.length - 1];
    var end = endOf(last) || parseDate(last.from);
    var span = end - start;
    DIRECTORS.forEach(function (d, i) {
      var e = endOf(d) || parseDate(d.from);
      var days = Math.max(1, (e - parseDate(d.from)) / 864e5);
      var seg = make('button', 'ribbon-seg ribbon-seg--' + d.era);
      seg.style.flexGrow = days;
      seg.setAttribute('aria-label', fullName(d));
      if (days > 500) seg.appendChild(make('span', null, pad2(i + 1)));
      seg.addEventListener('click', function () {
        dirTrack.stop();
        dirTrack.scrollTo(el.dirCards[i]);
        dirTrack.schedule(AUTO_SCROLL_RESUME_DELAY);
      });
      el.ribbonBar.appendChild(seg);
    });
    var first = start.getUTCFullYear(), lastY = end.getUTCFullYear();
    for (var y = Math.ceil((first + 1) / 5) * 5; y <= lastY; y += 5) {
      var tick = make('span', 'ribbon-year', String(y));
      tick.style.left = ((Date.UTC(y, 0, 1) - start) / span * 100) + '%';
      el.ribbonYears.appendChild(tick);
    }
  }

  function syncFocus() {
    var track = el.dirTrack;
    var max = track.scrollWidth - track.clientWidth;
    var progress = max > 0 ? track.scrollLeft / max : 0.5;
    var center = track.scrollLeft + track.clientWidth * (0.1 + 0.8 * progress);
    var best = 0, bestDist = Infinity;
    el.dirCards.forEach(function (c, i) {
      var dist = Math.abs(c.offsetLeft + c.offsetWidth / 2 - center);
      if (dist < bestDist) { bestDist = dist; best = i; }
    });
    el.dirCards.forEach(function (c, i) {
      c.classList.toggle('is-focus', i === best);
      el.ribbonBar.children[i].classList.toggle('is-focus', i === best);
    });
  }

  /* ---------------- director profile overlay ---------------- */
  function chipContent(visual, label, name) {
    var frag = document.createDocumentFragment();
    var thumb = make('span', 'chip-thumb');
    thumb.appendChild(typeof visual === 'string' ? img(visual) : visual);
    frag.appendChild(thumb);
    var text = make('span', 'chip-text');
    text.appendChild(make('span', 'chip-label', label));
    text.appendChild(make('span', 'chip-name', name));
    frag.appendChild(text);
    return frag;
  }

  function openProfile(i, direction) {
    if (i < 0 || i >= DIRECTORS.length) return;
    dirTrack.stop();
    var d = DIRECTORS[i];
    state.profileIndex = i;

    el.profileOrdinal.textContent = pad2(i + 1);
    el.profilePhoto.src = d.photo;
    el.profilePhoto.alt = fullName(d);
    el.profileKicker.textContent = t('director') + ' ' + (i + 1) + ' ' + t('of') + ' ' + DIRECTORS.length;
    el.profileTag.textContent = i === CUR_DIR ? t('current') : appointmentTitle(d);
    el.profileTag.className = 'tag' + (i === CUR_DIR ? ' tag--current' : (d.era === 'warfare' ? ' tag--gold' : ''));
    el.profileRank.textContent = d.rank;
    el.profileName.textContent = d.name;
    el.profilePost.textContent = d.post || '';
    el.profileAppt.textContent = appointmentTitle(d);
    el.profileTenure.textContent = tenureLong(d);
    el.profileDuration.textContent = durationOf(d);

    el.profileSuccession.innerHTML = '';
    if (i > 0) el.profileSuccession.appendChild(successionChip(i - 1, t('precededBy'), -1));
    if (i < DIRECTORS.length - 1) el.profileSuccession.appendChild(successionChip(i + 1, t('succeededBy'), 1));
    if (d.commandant) {
      var ci = indexWhere(COMMANDANTS, function (c) { return c.id === d.commandant; });
      if (ci >= 0) {
        var c = COMMANDANTS[ci];
        var b = make('button', 'chip-btn chip-btn--gold');
        b.appendChild(chipContent(commandantImg(c), t('alsoCommandant') + ' · ' + tenureYears(c), shortName(c)));
        b.addEventListener('click', function () { closeProfile(); openBio(ci); });
        el.profileSuccession.appendChild(b);
      }
    }

    el.profilePrev.disabled = i === 0;
    el.profileNext.disabled = i === DIRECTORS.length - 1;

    var wasOpen = !el.profile.classList.contains('hidden');
    el.profile.classList.remove('hidden');
    el.profile.setAttribute('aria-hidden', 'false');
    restartAnimation(el.profileBody, wasOpen ? (direction < 0 ? 'enter-prev' : 'enter-next') : null);
    if (state.screen === 'directors') dirTrack.scrollTo(el.dirCards[i]);
    resetIdleTimer();
  }

  function successionChip(i, label, dir) {
    var b = make('button', 'chip-btn');
    b.appendChild(chipContent(DIRECTORS[i].photo, label, shortName(DIRECTORS[i])));
    b.addEventListener('click', function () { openProfile(i, dir); });
    return b;
  }

  function closeProfile() {
    if (state.profileIndex === null) return;
    state.profileIndex = null;
    el.profile.classList.add('hidden');
    el.profile.setAttribute('aria-hidden', 'true');
    if (state.screen === 'directors') dirTrack.schedule(AUTO_SCROLL_RESUME_DELAY);
  }

  /* ---------------- swipe ---------------- */
  function addSwipe(node, onSwipe) {
    var x0 = null, y0 = null;
    node.addEventListener('pointerdown', function (e) { x0 = e.clientX; y0 = e.clientY; });
    node.addEventListener('pointerup', function (e) {
      if (x0 === null) return;
      var dx = (e.clientX - x0) / currentScale(), dy = (e.clientY - y0) / currentScale();
      x0 = null;
      if (Math.abs(dx) > 90 && Math.abs(dx) > Math.abs(dy) * 1.5) onSwipe(dx < 0 ? 1 : -1);
    });
  }

  /* ---------------- idle ---------------- */
  function resetIdleTimer() {
    if (idleTimer) clearTimeout(idleTimer);
    idleTimer = null;
    if (state.screen === 'attract') return;
    idleTimer = setTimeout(function () {
      el.idleOverlay.classList.remove('hidden');
      setTimeout(function () { el.idleOverlay.classList.add('hidden'); showScreen('attract'); }, 1600);
    }, IDLE_TIMEOUT_MS);
  }

  /* ---------------- init ---------------- */
  function $(id) { return document.getElementById(id); }

  function init() {
    el.stage = $('stage');
    el.topbar = $('topbar');
    el.topbarNav = $('topbar-nav');
    el.screens = {
      attract: $('screen-attract'), home: $('screen-home'),
      commandants: $('screen-commandants'), directors: $('screen-directors'), bio: $('screen-bio')
    };
    el.attractWall = $('attract-wall'); el.attractStats = $('attract-stats');
    el.homeCmdArt = $('home-commandants-art'); el.homeCmdMeta = $('home-commandants-meta');
    el.homeDirArt = $('home-directors-art'); el.homeDirMeta = $('home-directors-meta');
    el.cmdYears = $('cmd-years'); el.cmdChips = $('cmd-chips'); el.cmdTrack = $('cmd-track');
    el.dirYears = $('dir-years'); el.dirChips = $('dir-chips'); el.dirTrack = $('dir-track');
    el.ribbonBar = $('ribbon-bar'); el.ribbonYears = $('ribbon-years');
    el.bioWrap = $('bio-wrap'); el.bioFrame = $('bio-frame'); el.bioOrdinal = $('bio-ordinal');
    el.bioService = $('bio-service'); el.bioRank = $('bio-rank'); el.bioName = $('bio-name');
    el.bioPost = $('bio-post'); el.bioFullname = $('bio-fullname'); el.bioFacts = $('bio-facts');
    el.bioPanel = $('bio-panel'); el.bioLinks = $('bio-links'); el.bioPrev = $('bio-prev'); el.bioNext = $('bio-next');
    el.profile = $('profile'); el.profileBody = $('profile-body'); el.profileOrdinal = $('profile-ordinal');
    el.profilePhoto = $('profile-photo'); el.profileKicker = $('profile-kicker'); el.profileTag = $('profile-tag');
    el.profileRank = $('profile-rank'); el.profileName = $('profile-name'); el.profilePost = $('profile-post');
    el.profileAppt = $('profile-appt'); el.profileTenure = $('profile-tenure'); el.profileDuration = $('profile-duration');
    el.profileSuccession = $('profile-succession'); el.profilePrev = $('profile-prev'); el.profileNext = $('profile-next');
    el.idleOverlay = $('idle-overlay');
    el.btnSound = $('btn-sound');

    applyStaticI18n();
    buildAttract();
    buildHome();
    buildCommandants();
    buildDirectors();

    el.screens.attract.addEventListener('click', function () { showScreen('home'); });
    $('btn-home').addEventListener('click', function () { showScreen('home'); });
    $('btn-close').addEventListener('click', function () { window.close(); });
    el.btnSound.addEventListener('click', toggleAmbient);
    document.querySelectorAll('[data-nav]').forEach(function (b) {
      b.addEventListener('click', function () { showScreen(b.getAttribute('data-nav')); });
    });

    $('profile-close').addEventListener('click', closeProfile);
    $('profile-backdrop').addEventListener('click', closeProfile);
    el.profilePrev.addEventListener('click', function () { openProfile(state.profileIndex - 1, -1); });
    el.profileNext.addEventListener('click', function () { openProfile(state.profileIndex + 1, 1); });
    addSwipe($('profile-panel'), function (dir) { openProfile(state.profileIndex + dir, dir); });

    $('bio-back').addEventListener('click', function () { showScreen('commandants'); });
    el.bioPrev.addEventListener('click', function () { stepBio(-1); });
    el.bioNext.addEventListener('click', function () { stepBio(1); });
    addSwipe(el.bioFrame, stepBio);

    document.addEventListener('keydown', function (e) {
      if (state.profileIndex !== null) {
        if (e.key === 'Escape') closeProfile();
        if (e.key === 'ArrowLeft') openProfile(state.profileIndex - 1, -1);
        if (e.key === 'ArrowRight') openProfile(state.profileIndex + 1, 1);
      } else if (state.screen === 'bio') {
        if (e.key === 'ArrowLeft') stepBio(-1);
        if (e.key === 'ArrowRight') stepBio(1);
        if (e.key === 'Escape') showScreen('commandants');
      }
    });

    ['pointerdown', 'touchstart', 'wheel', 'keydown'].forEach(function (evt) {
      document.addEventListener(evt, resetIdleTimer, { passive: true });
    });
    document.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    window.addEventListener('resize', scaleStage);
    scaleStage();
    startAmbient();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
