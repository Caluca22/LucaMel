/**
 * =============================================================
 *  ONZE DAGEN — Pagina's Bestand
 *  ────────────────────────────────────────────────────────────
 *  Dit is het enige bestand dat je hoeft aan te passen
 *  om nieuwe pagina's toe te voegen aan de website.
 *
 *  HOE EEN PAGINA TOEVOEGEN:
 *  ─────────────────────────
 *  Voeg een nieuw object toe aan de PAGES array hieronder.
 *  Gebruik het formaat: { date: "YYYY-MM-DD", content: `...html...` }
 *
 *  De datum bepaalt wanneer de pagina zichtbaar wordt.
 *  Je mag pagina's voor toekomstige datums al toevoegen —
 *  ze worden pas zichtbaar op die dag.
 *
 *  START DATUM:
 *  ─────────────
 *  De allereerste pagina (dag 1) staat op START_DATE.
 *  Je kunt dit aanpassen als dat ooit nodig is.
 *
 *  TIPS VOOR CONTENT:
 *  ──────────────────
 *  - Gebruik gewone HTML tags: <h2>, <p>, <em>, <strong>, <img>
 *  - Voor een sierlijke scheidingslijn: <div class="heart-divider">♥ ♥ ♥</div>
 *  - Voor een citaat: <blockquote>tekst</blockquote>
 *  - Je mag ook afbeeldingen toevoegen: <img src="images/foto.jpg" alt="..." />
 *    (zet afbeeldingen in de /images/ map)
 *
 *  VOORBEELD:
 *  ──────────
 *  {
 *    date: "2024-06-14",
 *    content: `
 *      <h2>De eerste dag</h2>
 *      <p>Vandaag begint alles...</p>
 *    `
 *  },
 * =============================================================
 */

// ─── STARTDATUM — dag 1 van jullie verhaal ───────────────────
const START_DATE = "2026-06-01";

// ─── PAGINA'S ─────────────────────────────────────────────────
// Voeg hier je pagina's toe. Ze hoeven niet in volgorde te staan.
// Toekomstige datums zijn alvast toegestaan.

const PAGES = [

  {
    date: "2026-06-01",
    content: `
      <h2>Dag één ♥</h2>
      <p>
      Omdat ik een nerd ben en je heel graag zie heb ik een website proberen maken!<br>
      Elke dag krijg je iets nieuws en kan je naar de vorige dingen gaan kijken.<br>
      Soms iets leuks, soms iets klef en soms iets super diepzinnig, maar waarschijnlijk niet want ik schrijf de dingen.<br>
      Ik zal mijn best doen zodat je elke dag iets nieuws hebt! ❤️<br>
      Dat gaat zeker lukken!<br>
      Sowieso<br>
      Ja<br>
      <br>
      <br>
      <br>
      Zie je graag en veel plezier xxx
      <img src="images/foto1.jpg" title="Wajo liefdevol enzo 💕" />
      </p>

    `
  },

  {
    date: "2026-06-05",
    content: `
      <h2>OMG SCHAKEN JOEPIEEEEE</h2>
      <p>
        Eindelijk, een dagelijkse schaakpuzzel!
      </p>
      <iframe src="https://lichess.org/training/frame?theme=brown&bg=dark" style="width: 400px; aspect-ratio: 10/11;" allowtransparency="true" frameborder="0"></iframe>
    `
  },

  {
    date: "2026-06-06",
    content: `
      <h2>Dag drie</h2>
      <p>
        Drie dagen, en het voelt al alsof je er altijd al was.
      </p>
      <p>
        Weet je nog waar we waren? Sluit je ogen en denk terug aan die lach van jou.
        Dat is het eerste wat ik zag en het laatste wat ik vergeet.
      </p>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // VOEG HIER NIEUWE PAGINA'S TOE
  // ─────────────────────────────────────────────────────────────

  // Voorbeeld voor een toekomstige pagina (wordt pas zichtbaar op die datum):
  // {
  //   date: "2025-07-14",
  //   content: `
  //     <h2>Eén maand ♥</h2>
  //     <p>Al een hele maand samen. Ik ben zo blij.</p>
  //   `
  // },

];

// ─── Niet aanpassen hieronder ────────────────────────────────
window.ANNIVERSARY_START = START_DATE;
window.ANNIVERSARY_PAGES = PAGES;
