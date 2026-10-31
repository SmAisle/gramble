# Gramble

*Spin the reels to spell all 20 words before your money runs out.*

A word slot machine from smAisle, in The Daily 15's newspaper style. Daily: everyone gets the same 20 words (and the same spins for the same choices) each day, and the first game counts. Replays of today's list are free and don't count; ⭐ Plus (paid later, open while testing) gives fresh random lists. No real money.

Play: https://smaisle.github.io/gramble/ (once GitHub Pages is on)

## Rules
- Each game draws **20 words** from The Daily 15's everyday five-letter puzzle words (`source/tray.txt`). You start with **$10**; every spin costs **50¢**.
- Tap a reel to **lock** it 🔒; tap again to unlock. Spin again spins only the unlocked reels.
- Locked letters show as tiles under the machine. Drag a tile to rearrange; tap one to unlock it.
- When the five letters on the line spell a list word **in any order**, it's found, crossed off, and pays Scrabble points × **20¢**.
- Words that still fit your locked letters light up on the list, with the letters you already have in gray.
- **Jackpot:** a list word on a spin with nothing locked pays double. Rare (about once in 10 games), because the machine gives no help on those spins.
- **Bonus words:** any other everyday five-letter word (The Daily 15's accepted list, `source/bonus.txt`) offers Cash in (half pay, once per game) or Pass.
- Reels stop one at a time, left to right. The "Found" pop-up stays about 3 seconds.
- **Win** by finding all 20. Game over when you can't afford a spin. **Cash out** from the menu.

## The loaded machine
When at least one letter is locked, each spinning reel lands, with chance `LOAD` (0.4), on a letter that fits a list word you could still make with what's held (counting reels that already landed this spin). Otherwise it lands on a letter from a random word still on the list. With nothing locked there is no help (`NOHELP_FULL`). Daily spins are seeded, so the same choices give the same letters for everyone. Robot tests (`tests/bal.js`, 15 games each): careful play wins 11, sloppy play 2. `START`, `COST`, `PER_PT` and `LOAD` in `source/src.html` tune it.

## Sound and looks
Sounds are made in the browser (`source/sounds.js`, shared with the sound board). The game plays Jeff's picks (`PICK` in `source/src.html`). Sound plays with the iPhone ringer switch on silent. Machine looks (menu → Look): Onyx (default), Classic red, Navy & brass, Walnut, Ivory & gold, Oxblood.

## Name
This game was called Reel Words while it was being built. `SEED='Reel Words'` keeps the daily lists, and `CODE='rw'` keeps saved games and the `rw_devices` stats, so nothing reset with the rename.

## Screens
Cover (stats row, Play / Keep playing, Stats · How to play, smAisle link), 4-card intro, menu with Sound, Look and Cash out, Stats, game-over card (found and missed words, tap for meanings) with Share.

## Files
- `index.html`: the whole game (built). `source/src.html` is the template; `python3 source/build.py` fills in the words from `source/tray.txt` and `source/bonus.txt`, the sound engine and the smAisle icon and writes `index.html`. `index-artifact.html` is the same without the invite gate, for the Claude copy.
- `owner.html`: usage page (Jeff's Google sign-in), reads `rw_devices`.
- `icon-*.png`, `manifest.json`: home-screen icon.
- `tests/play3.js` plays six games with a robot in Playwright and takes screenshots. `tests/money-sim.js` is the older money check.

## Version
Shown on the cover, in the menu and How to Play. Bump `VERSION`/`VDATE` in `source/src.html` on every change, and keep the Claude artifact copy on the same version.

## Usage tracking
Website only (github.io / smaisle.app): an anonymous check-in to Firebase project `aislerun-88e79`, collection `rw_devices`, once a day on open and when a game ends. Fields: `first`, `last`, `days`, `v`, `games`, `wins`, `most` (most words found), `desk`, `t`, `h` (day → words found in that day's first game, -1 = opened only, last 60 days).

## Invite gate
On smaisle.github.io the page loads `https://smaisle.github.io/gate.js` with `data-game="gramble"`. The gate needs a `gramble` entry (the existing one) before it lets anyone in.

