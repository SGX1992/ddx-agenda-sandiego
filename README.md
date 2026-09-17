# DDX San Diego — agenda

agenda-sandiego.ddxconference.com. The conference-day programme for phones:
one column, a pinned room filter, a live "Now" clock on the day, and every
session opening to what it is about and who is on.

Static site, no build step, same DDX chrome as the side-event page.

```bash
node serve.mjs        # http://localhost:8796
./deploy-pages.sh     # → GitHub Pages, repo SGX1992/ddx-agenda-sandiego
```

## Files

```
index.html             shell: top bar, hero, room chips, footer
assets/css/style.css   mobile-first; ≥760px lays the slots out in two columns
assets/js/agenda.js    THE PROGRAMME — times, rooms, people, bios, session texts
assets/js/main.js      renders the day, the folds, the filter, the live state
assets/img/speakers/   portraits: .webp straight from the website, .jpg faces
                       cut out of the website's group shots
```

## Where the content comes from

The website leads: <https://www.ddxconference.com/sd-agenda> gives times, rooms,
titles, names and roles. Everything else is layered underneath, in this order:

1. Notion → DDX → **Sessions (Step 3)** (`collection://2669967f-86f3-80ab-9ef4-000bdc12831a`),
   the speaker's own session text — `about.src: 'step3'`.
2. Only when Step 3 has nothing: the short description from **Speakers, VIPs &
   Jury Profiles (Step 1)** (`collection://1689967f-86f3-8129-a0c1-000b43543931`)
   — `about.src: 'step1'`. Bios come from Step 1 too.
3. Prayag Narula's talk had neither, so its line comes from the team's Forum
   Stage moderator briefing — `about.src: 'briefing'`.

Sessions with no submitted text carry a short generic line written by us — `about.src: 'ddx'` — so every card opens to something. To change the
programme, edit `agenda.js` and redeploy.

## The live state

`main.js` reads the clock in America/Los_Angeles. On 17 September the top bar
shows **Now · h:mm** and jumps to the current slot; past slots dim, the current
one is outlined in yellow. `?t=14:10` (and `&d=YYYY-MM-DD`) previews any moment.
`#session-id` in the URL opens that session.
