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

  var state = { screen: 'attract', spot: 0, bioIndex: null, bioKind: 'commandant', cmdFilter: 'all' };
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
    stopSpot();
    tracks.forEach(function (tr) { tr.stop(); });
    state.screen = id;
    if (ambient && !ambient.paused) fadeAmbient(ambientTarget());
    Object.keys(el.screens).forEach(function (k) { el.screens[k].classList.toggle('active', k === id); });
    el.topbar.classList.toggle('hidden', id === 'attract');
    syncTopbar();
    if (id === 'commandants') cmdTrack.enter();
    if (id === 'directors') enterDirectors();
    resetIdleTimer();
  }

  // Highlights the top-bar link for the section on screen.
  function syncTopbar() {
    var section = state.screen === 'bio' ? (state.bioKind === 'director' ? 'directors' : 'commandants') : state.screen;
    el.topbarNav.querySelectorAll('[data-nav]').forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-nav') === section); });
  }

  /* ---------------- welcome ---------------- */
  var SWEEP_S = 10; // one turn of the radar sweep (matches .scope-sweep in CSS)

  function buildAttract() {
    // Heading tape: a tick every 5°, labelled every 30°, repeated for a seamless loop.
    var LABELS = { 0: 'N', 90: 'E', 180: 'S', 270: 'W' };
    for (var rep = 0; rep < 2; rep++) {
      for (var deg = 0; deg < 360; deg += 5) {
        var major = deg % 30 === 0;
        var tick = make('span', 'hud-tick' + (major ? ' hud-tick--major' : ''));
        if (major) tick.appendChild(make('span', null, LABELS[deg] || (deg < 100 ? '0' : '') + (deg < 10 ? '0' : '') + deg));
        el.hudTape.appendChild(tick);
      }
    }

    // Radar blips: directors on the outer ring, commandants with portraits on
    // the inner ring. Each lights up as the sweep passes its bearing.
    var R = 410; // scope radius (half of .scope)
    function addBlip(src, radius, bearing, small) {
      var b = make('span', 'blip' + (small ? ' blip--sm' : ''));
      var rad = bearing * Math.PI / 180;
      b.style.left = (R + radius * Math.sin(rad)) + 'px';
      b.style.top = (R - radius * Math.cos(rad)) + 'px';
      b.style.animationDelay = (-(SWEEP_S - bearing / 360 * SWEEP_S)) + 's';
      b.appendChild(img(src));
      el.scopeBlips.appendChild(b);
    }
    var OUTER = 14;
    for (var k = 0; k < OUTER; k++) {
      var d = DIRECTORS[Math.round(k * (DIRECTORS.length - 1) / (OUTER - 1))];
      addBlip(d.photo, 340, k * 360 / OUTER + 8, false);
    }
    var withPhoto = COMMANDANTS.filter(function (c) { return c.photo; });
    var inner = [];
    for (var m = 0; m < Math.min(8, withPhoto.length); m++) {
      inner.push(withPhoto[Math.round(m * (withPhoto.length - 1) / 7)].photo);
    }
    inner.forEach(function (src, n) { addBlip(src, 215, n * 360 / inner.length + 30, true); });

    // Instrument readouts
    var named = COMMANDANTS.filter(function (c) { return !c.pending; });
    var first = Math.min(+year(named[0].from), +year(DIRECTORS[0].from));
    [
      [named.length, 'Commandants'],
      [DIRECTORS.length, 'Directors'],
      [first, 'Since']
    ].forEach(function (s) {
      var g = make('div', 'gauge');
      g.appendChild(make('b', null, String(s[0])));
      g.appendChild(make('span', null, s[1]));
      el.attractStats.appendChild(g);
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
      if (state.screen === screenId) self.schedule(AUTO_SCROLL_RESUME_DELAY);
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
  /* ---------------- biography page (commandants and directors) ---------------- */
  // One page serves both rolls; state.bioKind says which, and prev/next
  // step through that roll's entries that have a biography.
  function bioOrder() {
    if (state.bioKind === 'director') {
      return DIRECTORS.map(function (_, i) { return i; }).filter(function (i) { return DIRECTORS[i].bio && DIRECTORS[i].bio.length; });
    }
    return COMMANDANTS.map(function (_, i) { return i; }).filter(function (i) { return !COMMANDANTS[i].pending; });
  }

  function linkChip(visual, label, name, onClick) {
    var b = make('button', 'chip-btn chip-btn--gold');
    b.appendChild(chipContent(visual, label, name));
    b.addEventListener('click', onClick);
    return b;
  }

  // vm: the page's content, whichever roll it comes from
  function fillBio(vm, i, direction) {
    state.bioIndex = i;
    el.bioBackLabel.textContent = vm.backLabel;
    el.bioFrame.innerHTML = '';
    el.bioFrame.appendChild(vm.visual);
    if (vm.portraitPending) el.bioFrame.appendChild(make('span', 'bio-frame-note', t('portraitPending')));

    el.bioOrdinal.innerHTML = '';
    if (vm.no) el.bioOrdinal.appendChild(make('b', null, ordinal(vm.no)));
    el.bioOrdinal.appendChild(make('span', null, vm.ordinalLabel));

    el.bioService.textContent = vm.tag || '';
    el.bioService.className = 'tag' + (vm.tagClass ? ' ' + vm.tagClass : '');
    el.bioRank.textContent = vm.rank;
    el.bioName.textContent = vm.name;
    el.bioPost.textContent = vm.post || '';
    el.bioFullname.textContent = vm.fullName || '';

    el.bioFacts.innerHTML = '';
    vm.facts.forEach(function (f) {
      var d = make('div');
      d.appendChild(make('dt', null, f.label));
      d.appendChild(make('dd', null, f.value));
      el.bioFacts.appendChild(d);
    });

    var bio = vm.bio || [];
    el.bioPanel.innerHTML = '';
    el.bioPanel.classList.toggle('is-long', bio.join(' ').split(/\s+/).length > 330);
    bio.forEach(function (p) {
      el.bioPanel.appendChild(make('p', 'bio-text' + (/highly recogni[sz]ed/i.test(p) ? ' bio-text--closing' : ''), p));
    });
    el.bioPanel.classList.toggle('bio-empty', !bio.length);
    if (!bio.length) el.bioPanel.appendChild(make('p', null, t('bioPending')));
    el.bioPanel.scrollTop = 0;

    el.bioLinks.innerHTML = '';
    (vm.links || []).forEach(function (b) { el.bioLinks.appendChild(b); });

    var order = bioOrder(), k = order.indexOf(i);
    el.bioPrev.disabled = k <= 0;
    el.bioNext.disabled = k >= order.length - 1;

    if (state.screen !== 'bio') showScreen('bio');
    else syncTopbar();
    // two columns while the text fits; otherwise one column that scrolls
    if (el.bioPanel.scrollWidth > el.bioPanel.clientWidth + 2) el.bioPanel.classList.add('is-long');
    restartAnimation(el.bioWrap, direction ? (direction < 0 ? 'enter-prev' : 'enter-next') : null);
    resetIdleTimer();
  }

  function openBio(i, direction) {
    var c = COMMANDANTS[i];
    if (!c || c.pending) return;
    state.bioKind = 'commandant';
    var facts = [{ label: t('tenure'), value: tenureLong(c) }];
    if (c.from) facts.push({ label: t('duration'), value: durationOf(c) });
    if (c.serviceNo) facts.push({ label: t('serviceNo'), value: c.serviceNo });
    facts = facts.concat((c.facts || []).filter(function (f) { return f.label !== 'Flying hours'; }).slice(0, 5 - facts.length));
    var links = [];
    if (c.director) {
      var di = indexWhere(DIRECTORS, function (d) { return d.name === c.director; });
      if (di >= 0) links.push(linkChip(DIRECTORS[di].photo, t('alsoDirector') + ' · ' + tenureYears(DIRECTORS[di]), shortName(DIRECTORS[di]), function () { openDirectorBio(di); }));
    }
    fillBio({
      backLabel: t('commandantsTitle'), visual: commandantImg(c), portraitPending: !c.photo,
      no: c.no, ordinalLabel: t('commandant'),
      tag: c.service ? C.services[c.service] : '', tagClass: c.service === 'army' ? 'tag--army' : '',
      rank: c.rank, name: c.name, post: c.post, fullName: c.fullName,
      facts: facts, bio: c.bio, links: links
    }, i, direction);
  }

  function openDirectorBio(i, direction) {
    var d = DIRECTORS[i];
    if (!d || !(d.bio && d.bio.length)) return;
    state.bioKind = 'director';
    state.spot = i; // the spotlight shows this director on the way back
    var facts = [{ label: t('appointment'), value: appointmentTitle(d) }, { label: t('tenure'), value: tenureLong(d) }];
    if (d.from) facts.push({ label: t('duration'), value: durationOf(d) });
    var links = [];
    if (d.commandant) {
      var ci = indexWhere(COMMANDANTS, function (c) { return c.id === d.commandant; });
      if (ci >= 0) {
        var c = COMMANDANTS[ci];
        links.push(linkChip(commandantImg(c), t('alsoCommandant') + ' · ' + tenureYears(c), shortName(c), function () { openBio(ci); }));
      }
    }
    fillBio({
      backLabel: t('directorsTitle'), visual: img(d.photo, fullName(d), 'is-sketch'),
      no: i + 1, ordinalLabel: t('director'),
      tag: i === CUR_DIR ? t('current') : appointmentTitle(d),
      tagClass: i === CUR_DIR ? 'tag--current' : (d.era === 'warfare' ? 'tag--gold' : ''),
      rank: d.rank, name: d.name, post: d.post, fullName: d.fullName,
      facts: facts, bio: d.bio, links: links
    }, i, direction);
  }

  function stepBio(dir) {
    var order = bioOrder(), k = order.indexOf(state.bioIndex) + dir;
    if (k < 0 || k >= order.length) return;
    if (state.bioKind === 'director') openDirectorBio(order[k], dir);
    else openBio(order[k], dir);
  }

  function closeBio() {
    showScreen(state.bioKind === 'director' ? 'directors' : 'commandants');
  }

  /* ---------------- directors: spotlight + honour wall ---------------- */
  // The spotlight features one director at a time and moves on by itself;
  // a touch anywhere on the screen holds it for a while before it resumes.
  var SPOT_INTERVAL = 8000;   // ms each director stays in the spotlight
  var SPOT_RESUME = 15000;    // ms of quiet before it starts moving again
  var spotTimer = null;

  function appointmentTitle(d) {
    var era = C.eras.filter(function (e) { return e.id === d.era; })[0];
    return era ? era.title : t('director');
  }
  function surname(p) { var parts = p.name.split(' '); return parts[parts.length - 1]; }

  function buildDirectors() {
    el.dirYears.textContent = year(DIRECTORS[0].from) + ' — ' + t('present');
    el.wallTiles = [];
    C.eras.forEach(function (era) {
      var idx = [];
      DIRECTORS.forEach(function (d, i) { if (d.era === era.id) idx.push(i); });
      if (!idx.length) return;
      var first = DIRECTORS[idx[0]], last = DIRECTORS[idx[idx.length - 1]];
      var box = make('section', 'era era--' + era.id);
      var head = make('div', 'era-head');
      head.appendChild(make('span', 'era-title', era.title));
      var until = idx[idx.length - 1] === DIRECTORS.length - 1 ? t('present') : year(last.to);
      head.appendChild(make('span', 'era-years', year(first.from) + ' — ' + until + ' · ' + idx.length + ' ' + (idx.length === 1 ? t('director') : 'Directors')));
      box.appendChild(head);
      var grid = make('div', 'era-grid');
      idx.forEach(function (i) {
        var d = DIRECTORS[i];
        var tile = make('button', 'wtile' + (i === CUR_DIR ? ' wtile--current' : ''));
        tile.setAttribute('aria-label', fullName(d));
        var frame = make('span', 'wtile-frame');
        frame.appendChild(img(d.photo, ''));
        frame.appendChild(make('span', 'wtile-no', pad2(i + 1)));
        tile.appendChild(frame);
        tile.appendChild(make('span', 'wtile-name', surname(d)));
        tile.addEventListener('click', function () { showDirector(i); });
        grid.appendChild(tile);
        el.wallTiles[i] = tile;
      });
      box.appendChild(grid);
      el.honourWall.appendChild(box);
    });

    el.spotBio.addEventListener('click', function () { openDirectorBio(state.spot); });
    el.spotPrev.addEventListener('click', function () { showDirector(state.spot - 1, -1); });
    el.spotNext.addEventListener('click', function () { showDirector(state.spot + 1, 1); });
    addSwipe(el.spotCard, function (dir) { showDirector(state.spot + dir, dir); });
    el.screens.directors.addEventListener('pointerdown', function () { if (state.screen === 'directors') holdSpot(); });
  }

  function renderSpot(i, direction, auto) {
    var d = DIRECTORS[i];
    state.spot = i;
    el.spotPhoto.src = d.photo;
    el.spotPhoto.alt = fullName(d);
    el.spotNo.textContent = pad2(i + 1);
    el.spotTag.textContent = i === CUR_DIR ? t('current') : appointmentTitle(d);
    el.spotTag.className = 'tag' + (i === CUR_DIR ? ' tag--current' : (d.era === 'warfare' ? ' tag--gold' : ''));
    el.spotRank.textContent = d.rank;
    el.spotName.textContent = d.name;
    el.spotPost.textContent = d.post || '';
    el.spotTenure.textContent = tenureLong(d);
    el.spotDuration.textContent = durationOf(d);

    // the wall and the arrows show the succession; only the cross-link sits here
    el.spotSuccession.innerHTML = '';
    if (d.commandant) {
      var ci = indexWhere(COMMANDANTS, function (c) { return c.id === d.commandant; });
      if (ci >= 0) {
        var c = COMMANDANTS[ci];
        var b = make('button', 'chip-btn chip-btn--gold');
        b.appendChild(chipContent(commandantImg(c), t('alsoCommandant') + ' · ' + tenureYears(c), shortName(c)));
        b.addEventListener('click', function () { openBio(ci); });
        el.spotSuccession.appendChild(b);
      }
    }

    el.spotBio.classList.toggle('hidden', !(d.bio && d.bio.length));

    el.spotCount.innerHTML = '';
    el.spotCount.appendChild(document.createTextNode(t('director') + ' '));
    el.spotCount.appendChild(make('b', null, String(i + 1)));
    el.spotCount.appendChild(document.createTextNode(' ' + t('of') + ' ' + DIRECTORS.length));
    el.spotPrev.disabled = i === 0;
    el.spotNext.disabled = i === DIRECTORS.length - 1;

    el.wallTiles.forEach(function (tile, k) { tile.classList.toggle('is-active', k === i); });
    restartAnimation(el.spotCard, direction ? (direction < 0 ? 'enter-prev' : 'enter-next') : null);

    // progress bar shows the time left in the spotlight while it runs on its own
    el.spotProgress.classList.remove('run');
    void el.spotProgress.offsetWidth;
    if (auto) { el.spotProgress.style.animationDuration = SPOT_INTERVAL + 'ms'; el.spotProgress.classList.add('run'); }
  }

  function scheduleSpot(delay) {
    stopSpot();
    spotTimer = setTimeout(function () {
      spotTimer = null;
      renderSpot((state.spot + 1) % DIRECTORS.length, 1, true);
      scheduleSpot(SPOT_INTERVAL);
    }, delay);
  }
  function stopSpot() { if (spotTimer) { clearTimeout(spotTimer); spotTimer = null; } }
  function holdSpot() {
    el.spotProgress.classList.remove('run');
    scheduleSpot(SPOT_RESUME);
  }

  function enterDirectors() {
    renderSpot(state.spot || 0, null, true);
    scheduleSpot(SPOT_INTERVAL);
  }

  // Shows director i in the spotlight at a visitor's request (holds the auto-advance).
  function showDirector(i, direction) {
    if (i < 0 || i >= DIRECTORS.length) return;
    if (state.screen !== 'directors') showScreen('directors');
    renderSpot(i, direction || (i > state.spot ? 1 : -1), false);
    holdSpot();
    resetIdleTimer();
  }

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
    el.hudTape = $('hud-tape'); el.scopeBlips = $('scope-blips'); el.attractStats = $('attract-stats');
    el.homeCmdArt = $('home-commandants-art'); el.homeCmdMeta = $('home-commandants-meta');
    el.homeDirArt = $('home-directors-art'); el.homeDirMeta = $('home-directors-meta');
    el.cmdYears = $('cmd-years'); el.cmdChips = $('cmd-chips'); el.cmdTrack = $('cmd-track');
    el.dirYears = $('dir-years'); el.honourWall = $('honour-wall');
    el.spotCard = $('spot-card'); el.spotPhoto = $('spot-photo'); el.spotNo = $('spot-no'); el.spotProgress = $('spot-progress');
    el.spotTag = $('spot-tag'); el.spotRank = $('spot-rank'); el.spotName = $('spot-name'); el.spotPost = $('spot-post');
    el.spotTenure = $('spot-tenure'); el.spotDuration = $('spot-duration'); el.spotSuccession = $('spot-succession');
    el.spotCount = $('spot-count'); el.spotPrev = $('spot-prev'); el.spotNext = $('spot-next');
    el.bioWrap = $('bio-wrap'); el.bioBackLabel = $('bio-back-label'); el.spotBio = $('spot-bio'); el.bioFrame = $('bio-frame'); el.bioOrdinal = $('bio-ordinal');
    el.bioService = $('bio-service'); el.bioRank = $('bio-rank'); el.bioName = $('bio-name');
    el.bioPost = $('bio-post'); el.bioFullname = $('bio-fullname'); el.bioFacts = $('bio-facts');
    el.bioPanel = $('bio-panel'); el.bioLinks = $('bio-links'); el.bioPrev = $('bio-prev'); el.bioNext = $('bio-next');
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

    $('bio-back').addEventListener('click', closeBio);
    el.bioPrev.addEventListener('click', function () { stepBio(-1); });
    el.bioNext.addEventListener('click', function () { stepBio(1); });
    addSwipe(el.bioFrame, stepBio);

    document.addEventListener('keydown', function (e) {
      if (state.screen === 'directors') {
        if (e.key === 'ArrowLeft') showDirector(state.spot - 1, -1);
        if (e.key === 'ArrowRight') showDirector(state.spot + 1, 1);
      } else if (state.screen === 'bio') {
        if (e.key === 'ArrowLeft') stepBio(-1);
        if (e.key === 'ArrowRight') stepBio(1);
        if (e.key === 'Escape') closeBio();
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
