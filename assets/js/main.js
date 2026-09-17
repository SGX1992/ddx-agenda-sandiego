import { CONF, SPACES, PEOPLE, SESSIONS, KIND_LABEL } from './agenda.js?v=20260917072543';

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const CHEV = '<span class="s__chev" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></span>';
const ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const CUP = '<svg viewBox="0 0 24 24"><path d="M4 8h12v6a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V8zM16 9h1.5a2.5 2.5 0 0 1 0 5H16M7 3v2M10 3v2M13 3v2"/></svg>';
const FORK = '<svg viewBox="0 0 24 24"><path d="M7 3v7a3 3 0 0 0 3 3v8M7 3h0M4 3v5a3 3 0 0 0 3 3M10 3v5a3 3 0 0 1-3 3M17 3c-1.5 1.5-2 4-2 7v1h3v10"/></svg>';
const GLASS = '<svg viewBox="0 0 24 24"><path d="M6 3h12l-1 8a5 5 0 0 1-10 0L6 3zM12 16v5M8 21h8M6.5 8h11"/></svg>';
const DOOR = '<svg viewBox="0 0 24 24"><path d="M4 21V4a1 1 0 0 1 1-1h9v18H4zM14 5l6-2v18l-6-2M11 11v2"/></svg>';

/* ---------- time in San Diego ---------- */
const q = new URLSearchParams(location.search);
const partsFmt = new Intl.DateTimeFormat('en-US', { timeZone: CONF.tz, hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
const clockFmt = new Intl.DateTimeFormat('en-US', { timeZone: CONF.tz, hour: 'numeric', minute: '2-digit' });
const toMin = (hhmm) => { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m; };
const ampm = (hhmm) => { const [h, m] = hhmm.split(':').map(Number); const hr = ((h + 11) % 12) + 1; return `${hr}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`; };
const range = (a, b) => `${ampm(a).replace(' ', ' ')} – ${ampm(b).replace(' ', ' ')}`;

/* ?d=2026-09-17&t=14:10 previews the page as it looks at that moment. */
function now() {
  if (q.get('t')) return { date: q.get('d') || CONF.date, min: toMin(q.get('t')), clock: ampm(q.get('t')) };
  const p = Object.fromEntries(partsFmt.formatToParts(new Date()).map((x) => [x.type, x.value]));
  return { date: `${p.year}-${p.month}-${p.day}`, min: Number(p.hour) % 24 * 60 + Number(p.minute), clock: clockFmt.format(new Date()) };
}

/* ---------- pieces ---------- */
const person = (id) => PEOPLE[id] || { name: id, role: '', org: '' };
const initials = (name) => name.split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
const avatar = (p, cls = '') => p.photo
  ? `<img class="ava ${cls}" src="${p.photo}" alt="" loading="lazy" width="80" height="80">`
  : `<span class="ava ava--blank ${cls}" aria-hidden="true">${esc(initials(p.name))}</span>`;
const roleLine = (p) => [p.role, p.org].filter(Boolean).join(', ');

function faces(s) {
  if (s.photo) return `<span class="faces"><img class="ava ava--wide" src="${s.photo}" alt="" loading="lazy" width="132" height="92"></span>`;
  const ids = (s.speakers || []).slice(0, 3);
  return `<span class="faces">${ids.map((id) => avatar(person(id))).join('')}</span>`;
}

function names(s) {
  const ids = s.speakers || [];
  if (!ids.length) return '';
  const ps = ids.map(person);
  if (ps.length === 1) return `<b>${esc(ps[0].name)}</b><small>${esc(roleLine(ps[0]))}</small>`;
  const mod = s.moderator ? `<small class="mod">Moderated by ${esc(person(s.moderator).name)}</small>` : '';
  if (ps.length === 2) return `<b>${esc(ps[0].name)} &amp; ${esc(ps[1].name)}</b><small>${esc(ps[0].org)} · ${esc(ps[1].org)}</small>${mod}`;
  return `<b>${esc(ps.map((p) => p.name.split(' ')[0]).slice(0, -1).join(', '))} &amp; ${esc(ps[ps.length - 1].name.split(' ')[0])}</b><small>${esc(ps.map((p) => p.org).filter(Boolean).join(' · '))}</small>${mod}`;
}

const SRC_NOTE = { step3: 'As submitted by the speaker.', step1: 'From the speaker’s profile.', briefing: 'From the DDX programme notes.', site: '' };

function aboutHTML(about) {
  if (!about) return '';
  const paras = about.text.split(/\n\n+/).map((p) => `<p>${esc(p)}</p>`).join('');
  const note = SRC_NOTE[about.src] ? `<p class="src">${SRC_NOTE[about.src]}</p>` : '';
  return `<div><p class="label">About this session</p><div class="about">${paras}</div>${note}</div>`;
}

function personHTML(id, tag = '') {
  const p = person(id);
  const bio = p.bio ? `<p class="bio">${esc(p.bio)}</p><button type="button" class="more" data-more>Read more</button>` : '';
  return `<div class="person">${avatar(p)}<div><p class="person__name">${esc(p.name)}${tag ? `<span class="tag">${tag}</span>` : ''}<small>${esc(roleLine(p))}</small></p>${bio}</div></div>`;
}

function peopleHTML(s) {
  const ids = [...(s.moderator ? [s.moderator] : []), ...(s.speakers || [])];
  if (!ids.length) return '';
  const label = ids.length > 1 ? 'Who is on' : 'Speaker';
  const shot = s.photo && ids.length > 1 ? `<img class="groupshot" src="${s.photo}" alt="" loading="lazy">` : '';
  return `<div><p class="label">${label}</p>${shot}<div class="people">${ids.map((id) => personHTML(id, id === s.moderator ? 'Moderator' : '')).join('')}</div></div>`;
}

function hasMore(s) {
  const ids = [...(s.moderator ? [s.moderator] : []), ...(s.speakers || [])];
  return Boolean(s.about || s.link || ids.some((id) => person(id).bio || person(id).photo) || ids.length > 1);
}

function sessionHTML(s) {
  const space = SPACES[s.space] || {};
  const kind = KIND_LABEL[s.kind] || '';
  const meta = `<p class="s__meta"><span class="s__kind">${esc(kind)}</span><i class="dot"></i><span>${esc(range(s.start, s.end))}</span>${space.name ? `<i class="dot"></i><span class="s__room">${esc(space.name)}</span>` : ''}</p>`;
  const photo = Boolean(s.photo) && s.kind === 'social';
  const expandable = hasMore(s);
  const link = s.link ? `<a class="s__link" href="${s.link.href}">${esc(s.link.label)} ${ARROW}</a>` : '';
  const more = expandable ? `<div class="s__more"><div><div class="s__more-in">${aboutHTML(s.about)}${peopleHTML(s)}${link}</div></div></div>` : '';
  const title = `<h3 class="s__title">${esc(s.title)}${s.by ? `<small>${esc(s.by)}</small>` : s.sub ? `<small>${esc(s.sub)}</small>` : ''}</h3>`;
  const logos = s.logos ? `<div class="s__logos">${s.logos.map((l, i) => `${i ? '<i class="sep"></i>' : ''}<img src="${l.src}" alt="${esc(l.alt)}" style="height:${l.h}px" loading="lazy">`).join('')}</div>` : '';
  const who = (s.speakers || []).length ? `<div class="s__who">${faces(s)}<p class="s__names">${names(s)}</p></div>` : logos;
  return `
<article class="s s--${s.kind}${photo ? ' s--photo' : ''}${expandable ? '' : ' s--static'}" id="${s.id}" data-space="${s.space || ''}" data-start="${s.start}" data-end="${s.end}" data-date="${CONF.date}">
  ${photo ? `<div class="s__photo"><img src="${s.photo}" alt="" loading="lazy">${meta}</div>` : ''}
  <button type="button" class="s__head" ${expandable ? 'aria-expanded="false"' : 'tabindex="-1"'} data-toggle>
    ${meta}${title}${who}${expandable ? CHEV : ''}
  </button>
  ${more}
</article>`;
}

function tableHTML(t) {
  const h = person(t.host);
  const expandable = Boolean(t.about || h.bio);
  const more = expandable ? `<div class="s__more"><div><div class="s__more-in">${aboutHTML(t.about)}<div><p class="label">Host</p><div class="people">${personHTML(t.host)}</div></div></div></div></div>` : '';
  return `
<article class="t s${expandable ? '' : ' s--static'}" data-space="tables">
  <button type="button" class="t__head" ${expandable ? 'aria-expanded="false"' : 'tabindex="-1"'} data-toggle>
    <span class="t__n">#${t.n}</span>${avatar(h)}
    <span class="t__text"><span class="t__title">${esc(t.title)}</span><span class="t__host">${esc(h.name)} · ${esc(h.org)}</span></span>
    ${CHEV}
  </button>
  ${more}
</article>`;
}

function breakHTML(s) {
  const icon = s.kind === 'doors' ? DOOR : s.id === 'lunch' ? FORK : CUP;
  const tables = s.tables ? `<div class="tables"><p class="tables__label">Table Talks<span>Join expert discussions</span></p>${s.tables.map(tableHTML).join('')}</div>` : '';
  return `
<article class="b" id="${s.id}" data-space="${s.space}" data-tables="${s.tables ? 1 : 0}" data-start="${s.start}" data-end="${s.end}" data-date="${CONF.date}">
  <div class="b__head"><span class="b__icon" aria-hidden="true">${icon}</span>
    <h3 class="b__title">${esc(s.title)}</h3>
    <p class="b__sub">${esc(s.sub || '')}<i class="dot"></i>${esc(range(s.start, s.end))}<i class="dot"></i>${esc(SPACES[s.space]?.name || '')}</p>
  </div>${tables}
</article>`;
}

/* ---------- build ---------- */
function build() {
  const slots = new Map();
  for (const s of SESSIONS) { if (!slots.has(s.start)) slots.set(s.start, []); slots.get(s.start).push(s); }
  const day = document.getElementById('day');
  day.innerHTML = `<p class="daylabel"><b>Thu 17 Sep</b> Conference day</p>` + [...slots].map(([start, list]) => `
<section class="slot" data-start="${start}" data-end="${list.reduce((m, s) => (s.end > m ? s.end : m), '00:00')}">
  <h2 class="slot__time"><span>${esc(ampm(start))}</span><span class="slot__live"><i></i>Now</span></h2>
  <div class="slot__cards">${list.map((s) => (s.kind === 'break' || s.kind === 'doors') ? breakHTML(s) : sessionHTML(s)).join('')}</div>
</section>`).join('');
}

/* ---------- open / close ---------- */
function toggle(card, open) {
  const on = open ?? !card.classList.contains('is-open');
  card.classList.toggle('is-open', on);
  card.querySelector('[data-toggle]')?.setAttribute('aria-expanded', String(on));
}
document.addEventListener('click', (e) => {
  const more = e.target.closest('[data-more]');
  if (more) { const bio = more.previousElementSibling; const full = bio.classList.toggle('is-full'); more.textContent = full ? 'Less' : 'Read more'; return; }
  const head = e.target.closest('[data-toggle]');
  if (!head || head.hasAttribute('tabindex')) return;
  toggle(head.closest('.s'));
});

/* ---------- filter ---------- */
let filter = 'all';
function applyFilter() {
  document.querySelectorAll('.day .s:not(.t)').forEach((c) => c.classList.toggle('is-filtered', filter !== 'all' && c.dataset.space !== filter));
  document.querySelectorAll('.day .b').forEach((b) => {
    const show = filter === 'all' || filter !== 'tables' || b.dataset.tables === '1';
    b.classList.toggle('is-filtered', !show);
    b.querySelector('.tables')?.classList.toggle('is-filtered', !(filter === 'all' || filter === 'tables'));
  });
  document.querySelectorAll('.slot').forEach((slot) => {
    const any = [...slot.querySelectorAll('.slot__cards > *')].some((c) => !c.classList.contains('is-filtered'));
    slot.classList.toggle('is-filtered', !any);
  });
}
document.getElementById('chips').addEventListener('click', (e) => {
  const chip = e.target.closest('.chip'); if (!chip) return;
  filter = chip.dataset.filter;
  document.querySelectorAll('.chip').forEach((c) => { const on = c === chip; c.classList.toggle('is-on', on); c.setAttribute('aria-pressed', String(on)); });
  applyFilter();
  chip.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
});

/* ---------- now ---------- */
const nowBtn = document.getElementById('nowBtn');
const nowLabel = document.getElementById('nowLabel');
let liveTarget = null;

function tick() {
  const t = now();
  const today = t.date === CONF.date;
  const after = t.date > CONF.date;
  liveTarget = null;
  document.querySelectorAll('[data-start][data-end]').forEach((el) => {
    const d = el.dataset.date || CONF.date;
    const past = t.date > d || (t.date === d && t.min >= toMin(el.dataset.end));
    const live = t.date === d && t.min >= toMin(el.dataset.start) && t.min < toMin(el.dataset.end);
    el.classList.toggle('is-past', past);
    el.classList.toggle('is-live', live);
    if (live && el.classList.contains('slot') && !liveTarget) liveTarget = el;
  });
  if (!liveTarget && today) liveTarget = [...document.querySelectorAll('.slot')].find((s) => toMin(s.dataset.start) > t.min) || null;
  const show = today && t.min >= 7 * 60 && t.min <= 21 * 60 && liveTarget;
  nowBtn.hidden = !show;
  nowLabel.textContent = `Now · ${t.clock}`;
  if (after) document.querySelector('.hero .eyebrow span+span').textContent = 'That was DDX San Diego 2026';
}
nowBtn.addEventListener('click', () => liveTarget?.scrollIntoView({ block: 'start', behavior: 'smooth' }));

/* ---------- go ---------- */
build();
applyFilter();
tick();
setInterval(tick, 30_000);
document.addEventListener('visibilitychange', () => { if (!document.hidden) tick(); });

/* #id in the URL opens that session. The browser's own hash jump happens
   before the cards exist, so do it again once everything has laid out. */
function openHash() {
  if (!location.hash) return;
  const card = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (!card?.classList.contains('s')) return;
  toggle(card, true);
  const go = () => card.scrollIntoView({ block: 'start', behavior: 'auto' });
  go(); setTimeout(go, 250); setTimeout(go, 900);
}
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
openHash();
window.addEventListener('hashchange', openHash);
