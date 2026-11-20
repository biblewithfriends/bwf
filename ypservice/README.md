# Church in Burlingame YP (CiB YP) — home page, Q Box, daily games, Serving Ones site

Everything lives in one GitHub repo and is powered by one Google Sheet.

| Page | Link (after GitHub Pages is on) | Who |
|---|---|---|
| YP home | `https://biblewfriends.org/burlingameyp/` | Today's reading, a Tree of Life preview, the week's reading, Bubble Blitz, Instagram link |
| Tree of Life 🍂 | `https://biblewfriends.org/burlingameyp/tree.html` | Autumn tree where everyone hangs their enjoyment as a leaf |
| Q Box | `https://biblewfriends.org/burlingameyp/qbox.html` | Ask a question (anonymous or with a name) + read answered questions |
| Transformed 🦋 | `https://biblewfriends.org/burlingameyp/games/transformed.html` | Daily word ladder |
| Overcomers 🧗 | `https://biblewfriends.org/burlingameyp/games/overcomers.html` | Daily rare-answer climb |
| High scores 🏆 | `https://biblewfriends.org/burlingameyp/games/scores.html` | Leaderboards for both games + Bubble Blitz |
| Serving Ones | `https://biblewfriends.org/ypservice/` | Answer questions, set the reading plan, hang leaves and hide/remove any leaf on the Tree of Life, remove scores (passcode) |

## Where the files go (Version 2 and later)
The site now lives inside your **Bible with Friends** repository (the one behind biblewfriends.org), in two folders:
```
burlingameyp/   → https://biblewfriends.org/burlingameyp/   (YP site: home, Tree, Q Box, games)
ypservice/      → https://biblewfriends.org/ypservice/      (Serving Ones site; uses files in burlingameyp/assets)
```
Nothing on the Bible with Friends pages links to these folders, and these pages don't link back, so only people with the link find them. The pages also ask search engines not to list them.
`google-apps-script/Code.gs` is pasted into Apps Script; it does not go on GitHub.

## Setup (about 15 minutes)

**1. Apps Script**
1. Open the Google Sheet → Extensions → Apps Script. Delete what's there and paste in `google-apps-script/Code.gs`.
2. At the top, fill in:
   - `NOTIFY_EMAILS`: who gets an email for each new question (one per line).
   - `PARENT_PASSCODE`: the Serving Ones passcode.
   - `SERVE_SITE_URL` (optional): your `https://biblewfriends.org/ypservice/` link, so emails include an "answer it" link.
3. Pick `setup` in the function menu → Run → allow access (Sheets, Drive for screenshots, Gmail for sending).
   This creates the tabs **Questions, Readings, Tree of Life, YP Quotes, High Scores**, copies the old Google Form questions into **Questions**, and makes a Drive folder called **YP Tree of Life Photos**.
4. Optional: run `sendTestEmail` to check the emails arrive.
5. Deploy → New deployment → **Web app** → Execute as **Me**, Who has access **Anyone** → Deploy. Copy the URL ending in `/exec`.

**2. Connect the site** — paste that URL into `SCRIPT_URL` in `assets/config.js`.
Until then every page runs in preview mode with sample data (saved only in your own browser).

**3. GitHub Pages** — upload everything → Settings → Pages → Branch `main`, folder `/ (root)`.

**4. The old Google Form** — no longer used. In the form, go to Responses → ⋮ → *Unlink form*, and turn off "Accepting responses" so nobody uses the old link.

## Changing the script later
Deploy → Manage deployments → ✏️ → Version: **New version** → Deploy. The URL stays the same.
Changing `NOTIFY_EMAILS` or the passcode also needs this step.

## Day to day (Serving Ones site)
- **Questions:** write an answer → *Post to YP site*, or *Hide*. Names show here only, never on the YP site.
- **Reading plan:** pick book + chapter per day, or use *Fill the week* and *Save this week*. This sets the YP home page and the daily games.
- **Tree of Life:** write your enjoyment (feeling, verse and photo optional) and tap *Hang leaf on the tree*; it shows as a gold leaf. YP leaves appear right away (or after approval if `LEAVES_NEED_APPROVAL = true` in the script); use *Hide* or *Delete* on any leaf.
- **Scores:** remove any unkind nickname.
- **Quotes banner:** edit the **YP Quotes** tab in the Sheet (column A = quote, column B = show/hide).

## How the games pick content
Each day the games read that day's assigned chapter. If `games/bank.js` has a pack for that chapter (right now: Hebrews 11–13, James 1–2) they use it. Otherwise they rotate through general Bible packs, so there's always a game. To add chapters, ask Claude: *"Write Transformed + Overcomers packs for James 3–5 in the bank.js format."*

## Versions
Each update is numbered (Version 1, 2, 3…). The number is set in `assets/config.js` (`SITE_VERSION`) and shows at the bottom of the YP pages and beside the title on the Serving Ones site, so you can check GitHub has the newest files.

## Notes
- Version 3 adds: a tappable boba cup, bouncy title, pop combos with musical notes, a READ stamp, tap sparkles, an idea dice in the Q Box, and sounds in Transformed. Overcomers is unchanged from version 2.
- Version 2 has the same pages, games and Google script as version 1; only the look changed, plus a bubble pop sound (🔊 button on the home page turns it off).
- Reading links open the chapter on the Recovery Version site (text.recoveryversion.bible).
- Tapping a leaf opens it in a calm, blurred-background reading view. Leaves older than 3 weeks fall to the ground under the tree.
- Bubble Blitz is a 30-second round on the home page; the best per nickname per day goes on the high-score board.
- Game progress and "I read it" checkmarks save on each phone/browser (no login).
- High scores keep each nickname's best score per day. A basic filter blocks rude nicknames; you can remove others on the Serving Ones site.
- Tree of Life photos (serving ones only) are saved to Drive as "anyone with the link can view" so the site can show them.
- The Serving Ones site has its own berry-coloured icon so it's easy to tell apart when shared or saved to a phone.
