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
const START_DATE = "2025-06-14";

// ─── PAGINA'S ─────────────────────────────────────────────────
// Voeg hier je pagina's toe. Ze hoeven niet in volgorde te staan.
// Toekomstige datums zijn alvast toegestaan.

const PAGES = [

  {
    date: "2025-06-14",
    content: `
      <h2>Dag één ♥</h2>
      <p>
        Vandaag begint iets bijzonders. Dit is de eerste pagina van ons kleine dagboek —
        één pagina voor elke dag dat wij samen zijn.
      </p>
      <div class="heart-divider">♥ ♥ ♥</div>
      <p>
        Elke dag wacht hier iets nieuws op je. Kom elke dag terug.
      </p>
      <p><em>— Met heel veel liefde</em></p>
    `
  },

  {
    date: "2025-06-15",
    content: `
      <h2>Dag twee</h2>
      <p>
        Al de tweede dag — en ik denk al aan niets anders dan jou.
      </p>
      <blockquote>
        "Liefde is niet kijken naar elkaar, maar samen in dezelfde richting kijken."
      </blockquote>
      <p><em>— Antoine de Saint-Exupéry</em></p>
    `
  },

  {
    date: "2025-06-16",
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
