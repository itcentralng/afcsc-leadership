# Our Leaders

**Department of Air Warfare Hall of Fame · Armed Forces Command and Staff College, Jaji**

Touch-screen kiosk for the Department of Air Warfare Hall of Fame at the
Armed Forces Command and Staff College, Jaji. It honours the Commandants of
the College and the Directors of the Department (styled Director Air Faculty
until 2004, Director Air Warfare since). It is a static, offline web app (no
build step, no internet needed) designed for a 1920×1080 landscape display
and scaled to fit any screen.

## Screens

- **Welcome**: a cockpit layout. On the left, the title with instrument
  readouts (commandants, directors, since) and a "Touch to begin" target box;
  on the right, a radar scope with the AFCSC and Air Force crests turning at
  its centre and the leaders' portraits as blips that light up as the sweep
  passes. A compass heading tape drifts across the top. Any touch begins.
- **Home**: two halls: Commandants of the College, and Directors of Air Warfare.
- **Commandants of the College**: a two-row gallery of medallions in order of
  appointment, filterable by service (Army / Air Force). Tap one for the
  full biography page: tenure, service number, birth, commissioning and the
  biography text, with previous/next.
- **Directors of Air Warfare**: a spotlight and an honour wall. The spotlight
  features one director (portrait, rank, post-nominals, tenure, duration,
  predecessor and successor) and moves on to the next every 8 seconds, with a
  progress bar under the portrait. The honour wall beside it shows all 35
  portraits grouped as Director Air Faculty and Director Air Warfare; tap one
  to bring it into the spotlight. A touch holds the spotlight for 15 seconds
  before it carries on. "Read biography" opens the director's full
  biography page (full name, appointment, tenure and the biography text,
  with previous/next through the roll). Timings are at the top of the directors section of
  `script.js`.
- Officers who held both offices (AVM SA Leks, AVM AS Liman) link between
  their director spotlight and their commandant biography.

After 100 seconds without a touch the kiosk returns to the welcome screen.

## Running on the kiosk

1. Copy the folder onto the kiosk PC.
2. Run `prepare.bat` once to create a Desktop shortcut (then pin it to the taskbar).
3. Launch with the shortcut or `run.bat`. It opens Microsoft Edge in full-screen kiosk mode.

For development, open `index.html` in any modern browser.

## Updating content

Everything lives in `data/content.js`:

- `directors`: oldest first, from the captions on the portraits. `era` is
  `faculty` or `warfare`. Add `current: true` to the serving director.
  `fullName` and `bio` (the biography's paragraphs) come from
  the deck "BRIEF BIOGRAPHIES OF PAST D DAWS.pptx"; a director with
  a `bio` gets a "Read biography" button.
- `commandants`: in order of appointment. `no` is the ordinal, `service` is
  `army`, `airforce` or `navy`, `bio` is the biography's paragraphs and
  `facts` the short facts shown above it. Dates are `YYYY-MM-DD`; use `null`
  for a date not known yet, and it shows as "-".
- Commandants' tenure dates follow the captions on their portraits on the
  Hall of Fame wall. `photo: null` shows the officer's initials instead of a
  portrait, and `bio: []` shows "Biography to follow".

## Portraits

- `assets/directors/`: the directors' portraits, in greyscale with the
  printed caption removed (the app typesets names and dates itself).
- `assets/commandants/`: the commandants' pencil portraits from the Hall of
  Fame wall, cropped to the drawing (caption removed), in greyscale.

For a new portrait, save a straight-on JPEG about 900–1100px wide in the
right folder as `NN-initials-surname.jpg` and point the entry's `photo` at it.

## Crests

`assets/icons/afcsc.png` (Armed Forces Command and Staff College) and
`assets/icons/naf.png` (Nigerian Air Force) are prepared from the crests
supplied: trimmed, enlarged for the big screen, and with their edges
smoothed. They appear on the welcome screen, the top bar, the home screen and
as section badges (AFCSC on Commandants, Air Force on Directors), and the
AFCSC crest sits behind the initials of commandants still awaiting a
portrait. `app.ico` (browser tab, taskbar and desktop shortcut) is built from the Nigerian Air Force crest, at 16–256px. A larger original of the
AFCSC crest would make it sharper still; replace both PNGs the same way.

## Background music

`assets/audio/ambient.mp3` plays on a loop (the same bed as the Directorate
of Procurement kiosk): softly on the welcome screen, louder once a visitor
begins. The speaker button in the top bar mutes it. Delete the file for silence.

## Structure

```
index.html            markup for every screen
styles.css            theme and layout
script.js             navigation, radar, gallery, spotlight, idle reset
data/content.js       rolls of commandants and directors
assets/directors/     director portraits used by the app
assets/commandants/   commandant portraits and unnamed cut-outs
assets/fonts/         bundled Oswald, Playfair Display, Crimson Text
assets/icons/         AFCSC and Air Force crests, app icon
run.bat, prepare.bat  kiosk launchers
```
