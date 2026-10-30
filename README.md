# Gramble

*Hold your words, or play it safe.*

A daily falling-letter word game from smAisle, in The Daily 15's newspaper style. Everyone gets the same 100 letters in the same order each day on a 9×9 board.

Play: https://smaisle.github.io/gramble/ (once GitHub Pages is on)

## Rules
- Letters fall one at a time. Tap a column to move the letter there, tap it again to drop it (like Straight Down). ◀ ▶ ▼ and arrow keys work too.
- 3+ letters across, down or up that spell a word light up. Diagonal words score double.
- **Hold or clear:** each new word pauses the game. Clear it for its points now, or hold it to build a longer word. A held word can be cleared later with a double tap, or press and hold it to bring the choice back. The pop-up sits over the emptier half of the board; the word in question floats up with a red line through it (one word at a time when there are several); 👁 Hold to see board makes the pop-up see-through.
- **Points:** A, B, C, Deal letter values; +5 for each letter past 4.
- **2× vowels:** one A, E, I, O and U each day doubles any word it's in (they stack).
- **⛓ Chains:** a word made by letters dropping after a clear scores double.
- **⚠️ Final 10:** the last 10 letters are a mystery (Next shows ?, the pause screen doesn't count them), have a gold edge and ★, and any word using one scores double.
- **Game over** when the stack reaches the top, or as soon as the last letter lands. Every letter left on the board takes its points off (like Scrabble), and held words don't score.
- **Stars:** 75 / 150 / 250 points.
- Words: The Daily 15's common list for 3–4 letters, plus ENABLE 5–8 letter words (rude words removed). ~77,000 words.

## Screens
Cover (date, Game No., streak, stats row, Archive · Stats · How to play, smAisle link), 4-card intro + 6-step guided demo for first-timers (☰ → Play the demo replays it), menu with letters left, Stats, Archive (last 7 days, played late), result card with Share.

## Files
- `index.html`: the whole game (built). `source/src.html` is the template; `python3 source/build.py` fills in `source/words.txt` and writes `index.html`.
- `owner.html`: usage page (Jeff's Google sign-in), reads `gr_devices`.
- `icon-*.png`, `manifest.json`: home-screen icon.
- `tests/robot.js` (plays all 100 letters), `tests/demo.js` (walks the demo, checks the game ends on the last letter). Run with Node + Playwright.

## Version
Shown in the menu and How to Play. Bump `VERSION`/`VDATE` in `source/src.html` on every change, and keep the Claude artifact copy on the same version.

## Usage tracking
Website only (github.io / smaisle.app): an anonymous check-in to Firebase project `aislerun-88e79`, collection `gr_devices`, once a day on open and when the daily game ends. Fields: `first`, `last`, `days`, `v`, `daily`, `demo`, `desk`, `t`, `h` (day → score, -1 = opened only, last 60 days). Archive (late) games don't check in.

## Clock check
On open, the game reads the website's `Date` header; if the phone's clock is more than 10 minutes off, today's game and streaks use the real date and the cover shows a note. Offline, it uses the phone clock.

## Testing
The Testing buttons (restart today, try the ending with 15 letters left) are hidden on the website. Add `#test` to the address to show them.
