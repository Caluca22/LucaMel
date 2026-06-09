/* ═══════════════════════════════════════════════
   anniversary / script.js
   ═══════════════════════════════════════════════ */

// ── config ──────────────────────────────────────
const START_DATE = new Date('2025-06-14T00:00:00');   // Day 0 (page 1)
const END_DATE   = new Date('2026-06-14T00:00:00');   // Last day
const PAGES_DIR  = 'pages/';                          // folder with daily HTML files

// ── helpers ─────────────────────────────────────
function today() {
  const d = new Date();
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

// Return Date for day-offset from START_DATE
function dayToDate(offset) {
  const d = new Date(START_DATE);
  d.setDate(d.getDate() + offset);
  return d;
}

// Return day-offset from START_DATE for a given Date
function dateToDayOffset(date) {
  const ms = date - START_DATE;
  return Math.round(ms / 86400000);
}

// Format date nicely: "Sunday, 14 June 2025"
function formatDate(date) {
  return date.toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });
}

// YYYY-MM-DD key
function dateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// Total days available = 0..totalDays (inclusive of start & end)
const TOTAL_DAYS = dateToDayOffset(END_DATE);  // 365

// ── state ───────────────────────────────────────
let currentOffset = 0;   // which day we're showing

// ── elements ────────────────────────────────────
const cardWrap    = document.getElementById('cardWrap');
const cardContent = document.getElementById('cardContent');
const cardDate    = document.getElementById('cardDate');
const prevBtn     = document.getElementById('prevBtn');
const nextBtn     = document.getElementById('nextBtn');
const calToggle   = document.getElementById('calToggle');
const calPanel    = document.getElementById('calendarPanel');
const calOverlay  = document.getElementById('calOverlay');
const calGrid     = document.getElementById('calGrid');
const calLabel    = document.getElementById('calMonthLabel');
const calPrev     = document.getElementById('calPrevMonth');
const calNext     = document.getElementById('calNextMonth');
const lockedTpl   = document.getElementById('lockedTpl');
const missingTpl  = document.getElementById('missingTpl');

// ── load a page ──────────────────────────────────
async function loadPage(offset, direction) {
  const date    = dayToDate(offset);
  const todayDt = today();
  const isFuture = date > todayDt;

  // Flip animation
  cardWrap.classList.remove('flipping');
  void cardWrap.offsetWidth;  // reflow
  cardWrap.classList.add('flipping');
  setTimeout(() => cardWrap.classList.remove('flipping'), 420);

  // Update date label
  cardDate.textContent = `Day ${offset + 1}  ·  ${formatDate(date)}`;

  if (isFuture) {
    // Show locked state
    const frag = lockedTpl.content.cloneNode(true);
    const msg = frag.querySelector('.locked-date');
    msg.textContent = `Available from ${formatDate(date)}`;
    cardContent.replaceChildren(frag);
    return;
  }

  // Try to fetch the page file
  const file = `${PAGES_DIR}${dateKey(date)}.html`;
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error('not found');
    const html = await res.text();
    cardContent.innerHTML = html;
  } catch {
    // File doesn't exist yet — show placeholder
    const frag = missingTpl.content.cloneNode(true);
    cardContent.replaceChildren(frag);
  }
}

// ── navigate ─────────────────────────────────────
function navigate(newOffset) {
  const maxOffset = clamp(dateToDayOffset(today()), 0, TOTAL_DAYS);
  newOffset = clamp(newOffset, 0, maxOffset);
  if (newOffset === currentOffset && cardContent.children.length) return;
  currentOffset = newOffset;
  updateArrows();
  loadPage(currentOffset);
  updateURL();
}

function updateArrows() {
  const maxOffset = clamp(dateToDayOffset(today()), 0, TOTAL_DAYS);
  prevBtn.disabled = currentOffset <= 0;
  nextBtn.disabled = currentOffset >= maxOffset;
}

prevBtn.addEventListener('click', () => navigate(currentOffset - 1));
nextBtn.addEventListener('click', () => navigate(currentOffset + 1));

// ── keyboard navigation ──────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft')  prevBtn.click();
  if (e.key === 'ArrowRight') nextBtn.click();
});

// ── URL hash for bookmarking a specific day ───────
function updateURL() {
  const key = dateKey(dayToDate(currentOffset));
  history.replaceState(null, '', `#${key}`);
}

function readInitialOffset() {
  const hash = location.hash.slice(1);  // "YYYY-MM-DD"
  if (/^\d{4}-\d{2}-\d{2}$/.test(hash)) {
    const d = new Date(`${hash}T00:00:00`);
    const off = dateToDayOffset(d);
    if (off >= 0 && off <= TOTAL_DAYS) return off;
  }
  // Default: today (clamped)
  return clamp(dateToDayOffset(today()), 0, TOTAL_DAYS);
}

// ── calendar ─────────────────────────────────────
let calViewYear  = today().getFullYear();
let calViewMonth = today().getMonth();

function openCalendar() {
  // Open on the month containing today (or current page)
  const d = dayToDate(currentOffset);
  calViewYear  = d.getFullYear();
  calViewMonth = d.getMonth();
  renderCalendar();
  calPanel.classList.add('open');
  calPanel.setAttribute('aria-hidden', 'false');
  calOverlay.classList.add('show');
}

function closeCalendar() {
  calPanel.classList.remove('open');
  calPanel.setAttribute('aria-hidden', 'true');
  calOverlay.classList.remove('show');
}

calToggle.addEventListener('click', () => {
  calPanel.classList.contains('open') ? closeCalendar() : openCalendar();
});
calOverlay.addEventListener('click', closeCalendar);

calPrev.addEventListener('click', () => {
  calViewMonth--;
  if (calViewMonth < 0) { calViewMonth = 11; calViewYear--; }
  renderCalendar();
});
calNext.addEventListener('click', () => {
  calViewMonth++;
  if (calViewMonth > 11) { calViewMonth = 0; calViewYear++; }
  renderCalendar();
});

function renderCalendar() {
  const todayDt    = today();
  const maxOffset  = clamp(dateToDayOffset(todayDt), 0, TOTAL_DAYS);
  const maxDate    = dayToDate(maxOffset);

  calLabel.textContent = new Date(calViewYear, calViewMonth, 1)
    .toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });

  // Prev/next month button visibility
  const firstOfView = new Date(calViewYear, calViewMonth, 1);
  const firstStart  = new Date(START_DATE.getFullYear(), START_DATE.getMonth(), 1);
  const lastEnd     = new Date(END_DATE.getFullYear(),   END_DATE.getMonth(),   1);
  calPrev.disabled = firstOfView <= firstStart;
  calNext.disabled = firstOfView >= lastEnd;

  calGrid.innerHTML = '';

  // Day names
  ['Mo','Tu','We','Th','Fr','Sa','Su'].forEach(n => {
    const el = document.createElement('div');
    el.className = 'cal-day-name';
    el.textContent = n;
    calGrid.appendChild(el);
  });

  const firstDay = new Date(calViewYear, calViewMonth, 1);
  // Monday-based offset (0=Mo, 6=Su)
  let startDow = firstDay.getDay() - 1;
  if (startDow < 0) startDow = 6;

  // Empty cells before month starts
  for (let i = 0; i < startDow; i++) {
    const el = document.createElement('div');
    el.className = 'cal-cell empty';
    calGrid.appendChild(el);
  }

  const daysInMonth = new Date(calViewYear, calViewMonth + 1, 0).getDate();
  const currentPageDate = dayToDate(currentOffset);

  for (let d = 1; d <= daysInMonth; d++) {
    const cellDate = new Date(calViewYear, calViewMonth, d);
    const el = document.createElement('div');
    el.textContent = d;

    const offset = dateToDayOffset(cellDate);
    const inRange = offset >= 0 && offset <= TOTAL_DAYS;

    if (!inRange) {
      el.className = 'cal-cell out-of-range';
    } else if (cellDate > maxDate) {
      el.className = 'cal-cell future-cell';
    } else {
      el.className = 'cal-cell available';
      el.addEventListener('click', () => {
        navigate(offset);
        closeCalendar();
      });
    }

    // Mark current page
    if (cellDate.toDateString() === currentPageDate.toDateString()) {
      el.classList.add('current-page');
    }
    // Mark today
    if (cellDate.toDateString() === todayDt.toDateString()) {
      el.classList.add('today-cell');
    }

    calGrid.appendChild(el);
  }
}

// ── floating petals ──────────────────────────────
(function initPetals() {
  const canvas = document.getElementById('petalCanvas');
  const ctx    = canvas.getContext('2d');

  // Only a handful of petals — subtle, not shouty
  const COUNT = 12;
  const petals = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COLORS = ['#E8A5AC', '#C8707A', '#C9A84C', '#D4B8BE'];

  for (let i = 0; i < COUNT; i++) {
    petals.push({
      x:   Math.random() * window.innerWidth,
      y:   Math.random() * window.innerHeight,
      r:   3 + Math.random() * 5,
      vx:  (Math.random() - .5) * .3,
      vy:  .15 + Math.random() * .25,
      rot: Math.random() * Math.PI * 2,
      vr:  (Math.random() - .5) * .015,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: .2 + Math.random() * .35,
    });
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, p.r * 1.8, p.r, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(p => {
      p.x  += p.vx;
      p.y  += p.vy;
      p.rot += p.vr;
      // wrap around
      if (p.y > canvas.height + 10) { p.y = -10; p.x = Math.random() * canvas.width; }
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
      drawPetal(p);
    });
    requestAnimationFrame(tick);
  }

  // Respect reduced-motion preference
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    tick();
  }
})();

// ── init ─────────────────────────────────────────
currentOffset = readInitialOffset();
updateArrows();
loadPage(currentOffset);
