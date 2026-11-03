# Department of Air Warfare — Hall of Fame

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
  before it carries on. Timings are at the top of the directors section of
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
- `commandants`: in order of appointment. `no` is the ordinal, `service` is
  `army`, `airforce` or `navy`, `bio` is the biography's paragraphs and
  `facts` the short facts shown above it. Dates are `YYYY-MM-DD`; use `null`
  for a date not known yet, and it shows as "To be confirmed".
- `photo: null` shows a monogram until the portrait is matched.

### Matching the unnamed commandant photos

The unnamed photos supplied are saved, one per person (duplicates removed),
as `assets/commandants/unidentified/photo-01.png` … `photo-13.png`, and
`Leaders/Commandants/photo-key.jpg` shows them side by side with their
numbers. To attach one, set that commandant's `photo` in `data/content.js`,
for example:

```js
photo: 'assets/commandants/unidentified/photo-06.png'
```

## Portraits

`Leaders/` holds the material as supplied. The app uses:

- `assets/directors/`: each page of the directors' PDF, cropped to the
  drawing (the printed caption is removed, as the app typesets it), in greyscale.
- `assets/commandants/`: the two framed official portraits, cropped inside
  their frames, and the cut-out photos in `unidentified/`.

## Crests

`assets/icons/afcsc.png` (Armed Forces Command and Staff College) and
`assets/icons/naf.png` (Nigerian Air Force) are prepared from the files in
`Leaders/Logos/`: trimmed, enlarged for the big screen, and with their edges
smoothed. They appear on the welcome screen, the top bar, the home screen and
as section badges (AFCSC on Commandants, Air Force on Directors), and the
AFCSC crest sits behind the initials of commandants still awaiting a
portrait. `app.ico` is built from the AFCSC crest. A larger original of the
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
Leaders/              original PDF, Word documents, photos and crests
run.bat, prepare.bat  kiosk launchers
```
