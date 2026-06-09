/**
 * ONZE DAGEN — app.js
 * Core logic: navigation, calendar, date calculations
 */

;(function () {
  'use strict';

  // ─── Helpers ─────────────────────────────────────────────────

  /** Parse "YYYY-MM-DD" to a local midnight Date object */
  function parseDate(str) {
    const [y, m, d] = str.split('-').map(Number);
    return new Date(y, m - 1, d);
  }

  /** Format Date to "YYYY-MM-DD" */
  function toKey(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  /** Format Date to Belgian day string: "14 juni 2025" */
  function formatBelgian(date) {
    return date.toLocaleDateString('nl-BE', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
  }

  /** Format for short header: "14 jun 2025" */
  function formatShort(date) {
    return date.toLocaleDateString('nl-BE', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  }

  /** Add days to a date (returns new Date) */
  function addDays(date, n) {
    const d = new Date(date);
    d.setDate(d.getDate() + n);
    return d;
  }

  /** Return today at local midnight */
  function today() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }

  /** Difference in whole days: b - a */
  function dayDiff(a, b) {
    return Math.round((b - a) / 86400000);
  }

  // ─── State ───────────────────────────────────────────────────

  const startDate  = parseDate(window.ANNIVERSARY_START);
  const pagesArray = window.ANNIVERSARY_PAGES || [];
  const pageMap    = {};  // "YYYY-MM-DD" → HTML string

  pagesArray.forEach(function (p) {
    pageMap[p.date] = p.content;
  });

  let currentDate = null;  // the date currently being displayed

  // ─── DOM refs ────────────────────────────────────────────────

  const headerDateEl    = document.getElementById('headerDate');
  const stampNumberEl   = document.getElementById('stampNumber');
  const pageContentEl   = document.getElementById('pageContent');
  const navPrevBtn      = document.getElementById('navPrev');
  const navNextBtn      = document.getElementById('navNext');
  const navDateLabelEl  = document.getElementById('navDateLabel');
  const calendarToggle  = document.getElementById('calendarToggleBtn');
  const calendarOverlay = document.getElementById('calendarOverlay');
  const calCloseBtn     = document.getElementById('calCloseBtn');
  const calPrevMonth    = document.getElementById('calPrevMonth');
  const calNextMonth    = document.getElementById('calNextMonth');
  const calMonthLabel   = document.getElementById('calMonthLabel');
  const calGrid         = document.getElementById('calGrid');

  // ─── Page rendering ──────────────────────────────────────────

  function getPageContent(date) {
    const todayDate = today();
    const key = toKey(date);

    // Future date — locked
    if (date > todayDate) {
      return `
        <div class="locked-page">
          <div class="lock-icon">🔒</div>
          <p>Deze pagina is nog niet beschikbaar.<br>Kom terug op ${formatBelgian(date)}.</p>
        </div>`;
    }

    // Before start date
    if (date < startDate) {
      return `
        <div class="locked-page">
          <div class="lock-icon">📅</div>
          <p>Ons verhaal begon op ${formatBelgian(startDate)}.</p>
        </div>`;
    }

    // Has content
    if (pageMap[key]) {
      return pageMap[key];
    }

    // Available date, but no content yet <p class="day-quote">"Elke dag met jou is een geschenk."</p>
    const dayNum = dayDiff(startDate, date) + 1;
    return `
      <div class="default-page">
        <p class="day-note">Dag ${dayNum} — Oei wacht hier is niks. Zie je toch graag, euhm... Deze lege pagina staat symbool voor alle mogelijke dingen die we nog samen kunnen doen!<br/>Een eindeloze vlakte vol mogelijke avonturen.<br/>Ofzo<br/>ok doei</p>
      </div>`;
  }

  function renderPage(date, direction) {
    const dayNum = Math.max(1, dayDiff(startDate, date) + 1);
    const todayDate = today();

    // Update stamp
    stampNumberEl.textContent = dayDiff(startDate, date) + 1 > 0
      ? dayDiff(startDate, date) + 1
      : '–';

    // Update header date
    headerDateEl.textContent = formatShort(date);

    // Update nav label
    navDateLabelEl.textContent = formatBelgian(date);

    // Update nav buttons
    const prevDate = addDays(date, -1);
    const nextDate = addDays(date, 1);
    navPrevBtn.disabled = prevDate < startDate;
    navNextBtn.disabled = nextDate > todayDate;

    // Animate
    const dir = direction || 0;
    pageContentEl.classList.remove('fade-out', 'fade-in');

    if (dir !== 0) {
      pageContentEl.classList.add('fade-out');
      if (dir > 0) pageContentEl.style.transform = 'translateX(-18px)';
      else pageContentEl.style.transform = 'translateX(18px)';
    }

    setTimeout(function () {
      pageContentEl.innerHTML = getPageContent(date);
      pageContentEl.classList.remove('fade-out');
      pageContentEl.style.transform = '';
      if (dir !== 0) {
        if (dir > 0) pageContentEl.style.transform = 'translateX(18px)';
        else pageContentEl.style.transform = 'translateX(-18px)';
        pageContentEl.style.opacity = '0';
        requestAnimationFrame(function () {
          pageContentEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          pageContentEl.style.opacity = '';
          pageContentEl.style.transform = '';
          setTimeout(function () {
            pageContentEl.style.transition = '';
          }, 320);
        });
      }
    }, dir !== 0 ? 160 : 0);

    currentDate = date;
  }

  // ─── Navigation ──────────────────────────────────────────────

  navPrevBtn.addEventListener('click', function () {
    if (!navPrevBtn.disabled) {
      renderPage(addDays(currentDate, -1), -1);
    }
  });

  navNextBtn.addEventListener('click', function () {
    const todayDate = today();
    if (!navNextBtn.disabled && addDays(currentDate, 1) <= todayDate) {
      renderPage(addDays(currentDate, 1), 1);
    }
  });

  // Keyboard nav
  document.addEventListener('keydown', function (e) {
    if (calendarOverlay.classList.contains('open')) return;
    if (e.key === 'ArrowLeft'  && !navPrevBtn.disabled) navPrevBtn.click();
    if (e.key === 'ArrowRight' && !navNextBtn.disabled) navNextBtn.click();
  });

  // ─── Calendar ────────────────────────────────────────────────

  let calViewYear  = null;
  let calViewMonth = null;

  function buildCalendar(year, month) {
    calViewYear  = year;
    calViewMonth = month;

    const todayDate = today();

    // Month label
    const labelDate = new Date(year, month, 1);
    calMonthLabel.textContent = labelDate.toLocaleDateString('nl-BE', {
      month: 'long', year: 'numeric'
    });

    // First weekday of the month (Monday = 0)
    const firstDay = new Date(year, month, 1);
    let startOffset = firstDay.getDay() - 1; // 0=Mon
    if (startOffset < 0) startOffset = 6;

    // Days in month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    calGrid.innerHTML = '';

    // Empty cells
    for (let i = 0; i < startOffset; i++) {
      const empty = document.createElement('div');
      empty.className = 'cal-day cal-day--empty';
      calGrid.appendChild(empty);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const dateObj = new Date(year, month, d);
      const key = toKey(dateObj);

      const btn = document.createElement('button');
      btn.className = 'cal-day';
      btn.textContent = d;

      const isFuture   = dateObj > todayDate;
      const isToday    = toKey(dateObj) === toKey(todayDate);
      const isSelected = currentDate && toKey(dateObj) === toKey(currentDate);
      const isBeforeStart = dateObj < startDate;
      const hasPage    = !!pageMap[key];

      if (isFuture || isBeforeStart) {
        btn.classList.add(isBeforeStart ? 'cal-day--disabled' : 'cal-day--future');
        btn.disabled = true;
      } else {
        if (isToday)    btn.classList.add('cal-day--today');
        if (isSelected) btn.classList.add('cal-day--selected');
        if (hasPage)    btn.classList.add('cal-day--has-page');

        btn.addEventListener('click', function () {
          closeCalendar();
          renderPage(dateObj, 0);
        });
      }

      calGrid.appendChild(btn);
    }
  }

  function openCalendar() {
    const d = currentDate || today();
    buildCalendar(d.getFullYear(), d.getMonth());
    calendarOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCalendar() {
    calendarOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  calendarToggle.addEventListener('click', openCalendar);
  calCloseBtn.addEventListener('click', closeCalendar);
  calendarOverlay.addEventListener('click', function (e) {
    if (e.target === calendarOverlay) closeCalendar();
  });

  calPrevMonth.addEventListener('click', function () {
    let m = calViewMonth - 1;
    let y = calViewYear;
    if (m < 0) { m = 11; y--; }
    buildCalendar(y, m);
  });

  calNextMonth.addEventListener('click', function () {
    // Don't allow navigating past current month
    const todayDate = today();
    let m = calViewMonth + 1;
    let y = calViewYear;
    if (m > 11) { m = 0; y++; }
    if (y > todayDate.getFullYear() || (y === todayDate.getFullYear() && m > todayDate.getMonth())) return;
    buildCalendar(y, m);
  });

  // ─── Init ────────────────────────────────────────────────────

  function init() {
    const todayDate = today();
    // Start on today (or startDate if today is before it)
    const initDate = todayDate >= startDate ? todayDate : startDate;
    renderPage(initDate, 0);
  }

  init();

})();
