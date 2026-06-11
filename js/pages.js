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
const START_DATE = "2026-06-11";

// ─── PAGINA'S ─────────────────────────────────────────────────
// Voeg hier je pagina's toe. Ze hoeven niet in volgorde te staan.
// Toekomstige datums zijn alvast toegestaan.

const PAGES = [

  {
    date: "2026-06-14",
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
    date: "2026-06-15",
    content: `
      <h2>Goed begonnen,...</h2>
      <p>
        Wat is lekker en zit in de onderste lade van je bureau?
      </p>
      `
  },

  {
    date: "2026-06-16",
    content: `
    <h2>Quote van de dag:</h2>
      <p>
        <blockquote>“Yesterday is history, tomorrow is a mystery, but today is a gift. That's why it's called the present.”</blockquote>
        <i>- Master Oogway</i>
        <br>
        <p>
        <img src="images/foto2.jpg" title="Yeah, dude 🍂" style="width: 60%; display: block; margin: 20px auto 0;">
      </p></p>
    `
  },

  {
    date: "2026-06-17",
    content: `
      <h2>Puzzel van de dag:</h2>
      <p>
        Begin in het blauwe vakje, hoe ga je naar het groene vakje door elk wit vakje maar één keer te gebruiken?
      </p>
      <img src="images/Raadsel1.jpeg" title="Gaat da zelfs?" style="height: 300px; display: block; margin: 20px auto 0;">
    `
  },

  {
    date: "2026-06-18",
    content: `
      <h2>Time-waster van de dag:</h2>
      <iframe src="https://www.eyezmaze.com/game/grow_Island.html" style="width:800px;height:640px;border:none;" frameborder="0" scrolling="no"></iframe>
    `
  },

  {
    date: "2026-06-11",
    content: `
      <h2>Diertje van de dag:</h2>
      <h3>De Snijvogel</h3>
      <p>De Snijvogel (tailor bird) is een vogel die zijn nest maakt door een blad dicht te 'naaien' met zijde van spinnewebben.<br>Ze zijn getalenteerde rakkers en verdienen zeker een complimentje als je er één ziet.</p>
      <iframe width="975" height="548" src="https://www.youtube.com/embed/QQMYpzbQIDA?t=33&mute=1" title="Tailorbird building Nest" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `
  },

  {
    date: "2026-06-20",
    content: `
      <h2>OMG SCHAKEN JOEPIEEEEE</h2>
      <p>
        Eindelijk, een dagelijkse schaakpuzzel!
      </p>
      <iframe src="https://lichess.org/training/frame?theme=brown&bg=dark" style="width: 400px; aspect-ratio: 10/11;" allowtransparency="true" frameborder="0"></iframe>
    `
  }

];

// ─── Niet aanpassen hieronder ────────────────────────────────
window.ANNIVERSARY_START = START_DATE;
window.ANNIVERSARY_PAGES = PAGES;
