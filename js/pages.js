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
const START_DATE = "2026-06-14";

// ─── OPLOSSINGEN VOOR PUZZEL-PAGINA'S ────────────────────────
// Hier zet je de juiste antwoorden voor de foto-puzzels.
const PUZZEL_26_ANTWOORD = 7; // 👈 pas dit getal aan naar het juiste antwoord voor 26 juni
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
        Wat is lekker en ligt onder je bed?
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
      <p>Deze zal op de laptop moeten x</p>
      <iframe src="https://www.eyezmaze.com/game/grow_Island.html" style="width:800px;height:640px;border:none;" frameborder="0" scrolling="no"></iframe>
    `
  },

  {
    date: "2026-06-19",
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
      <h2>Foto van de dag</h2>
      <img src="images/foto3.jpg" title="Me and the gang 💯" style="width: 60%; display: block; margin: 20px auto 0;">
      
    `
  },
  {
    date: "2026-06-21",
    content: `
      <h2>Nutteloos weetje van de dag</h2>
      <p>Als je Ctrl + Alt + Shift + Windows + L indrukt start LinkedIn op je windows laptop</p>
      <p>Wauuuuuuw</p>      
    `
  },
  {
    date: "2026-06-22",
    content: `
      <h2>Mopje van de dag</h2>
      <p>Loopt een olifant het toneel op</p>
      <br>
      <br>
      <p>...</p>
      <br>
      <br>
      <p>Toneelstuk!</p>  
    `
  },
  {
    date: "2026-06-23",
    content: `
      <h2>OMG SCHAKEN JOEPIEEEEE</h2>
      <p>
        Eindelijk, een dagelijkse schaakpuzzel!<br>
        (Je kan er op klikken)
      </p>
      <iframe src="https://lichess.org/training/frame?theme=brown&bg=dark" style="width: 400px; aspect-ratio: 10/11;" allowtransparency="true" frameborder="0"></iframe>
    `
  },
  {
    date: "2026-06-24",
    content: `
      <h2>Weetje van de dag:</h2>
      <p>
        Over de Tiwi eilanden ten noorden van Australië is er een storm die tussen september en maart elke dag om exact 15u verschijnt.<br>
        Hij heeft de naam <a href="https://www.sciencefocus.com/nature/hector-the-convector">Hector de Convector</a> Gekregen.
      </p>
    `
  },
  {
    date: "2026-06-25",
    content: `
      <h2>Liedje van de dag:</h2>
      <p>(Misschien op Spotify luisteren want dit is maar een stukje)</p>
      <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6fyI2QGPzUiqRHnuYD7oOp?utm_source=generator&si=9065a818f3cf4afe" width="80%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <img src="images/HollowKnight.gif" title="Chillende" style="width: 80%; display: block; margin: 20px auto 0;">

    `
  },
  {
    date: "2026-06-23",
    content: `
      <h2>OMG SCHAKEN JOEPIEEEEE</h2>
      <p>
        Eindelijk, een dagelijkse schaakpuzzel!<br>
        (Je kan er op klikken)
      </p>
      <iframe src="https://lichess.org/training/frame?theme=brown&bg=dark" style="width: 400px; aspect-ratio: 10/11;" allowtransparency="true" frameborder="0"></iframe>
    `
  },
  {
    date: "2026-06-24",
    content: `
      <h2>Weetje van de dag:</h2>
      <p>
        Over de Tiwi eilanden ten noorden van Australië is er een storm die tussen september en maart elke dag om exact 15u verschijnt.<br>
        Hij heeft de naam <a href="https://www.sciencefocus.com/nature/hector-the-convector">Hector de Convector</a> Gekregen.
      </p>
    `
  },
  {
    date: "2026-06-25",
    content: `
      <h2>Liedje van de dag:</h2>
      <p>(Misschien op Spotify luisteren want dit is maar een stukje)</p>
      <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6fyI2QGPzUiqRHnuYD7oOp?utm_source=generator&si=9065a818f3cf4afe" width="80%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <img src="images/HollowKnight.gif" title="Chillende" style="width: 80%; display: block; margin: 20px auto 0;">

    `
  },
  {
    date: "2026-06-26",
    content: `
      <style>
        .dag26-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          max-width: 480px;
          margin: 16px auto 0;
        }
        .dag26-grid img {
          width: 100%;
          border-radius: 10px;
          display: block;
        }
        .dag26-input {
          padding: 10px 14px;
          font-size: 1.1rem;
          border-radius: 10px;
          border: 2px solid #ccc;
          width: 140px;
          text-align: center;
        }
        .dag26-input.shake {
          animation: dag26shake 0.4s;
          border-color: #c0392b;
        }
        @keyframes dag26shake {
          10%, 90% { transform: translateX(-4px); }
          20%, 80% { transform: translateX(4px); }
          30%, 50%, 70% { transform: translateX(-6px); }
          40%, 60% { transform: translateX(6px); }
        }
        .dag26-btn {
          padding: 10px 18px;
          font-size: 1rem;
          border-radius: 10px;
          border: none;
          background: #6c63ff;
          color: white;
          cursor: pointer;
          margin-left: 8px;
        }
        .dag26-btn:hover { background: #5a52e0; }
        .dag26-result {
          margin-top: 16px;
          font-size: 1.15rem;
          min-height: 1.4em;
        }
        .dag26-correct {
          color: #2e7d32;
          font-weight: bold;
          animation: dag26pop 0.5s;
        }
        @keyframes dag26pop {
          0% { transform: scale(0.5); opacity: 0; }
          60% { transform: scale(1.25); }
          100% { transform: scale(1); opacity: 1; }
        }
        .dag26-wrong { color: #c0392b; }
      </style>

      <h2>Foto-puzzel van de dag 🔎</h2>
      <p>
        Deze 4 foto's hebben samen iets te vertellen... ergens zit er een getal in verstopt!<br>
        Welk getal is het?
      </p>

      <div class="dag26-grid">
        <img src="images/Raadsel2-1.jpg" title="Hint 1" />
        <img src="images/Raadsel2-2.jpg" title="Hint 2" />
        <img src="images/Raadsel2-3.jpg" title="Hint 3" />
        <img src="images/Raadsel2-4.jpg" title="Hint 4" />
      </div>

      <div style="text-align:center; margin-top: 24px;">
        <input
          type="number"
          id="dag26-input"
          class="dag26-input"
          placeholder="Getal..."
          onkeypress="if (event.key === 'Enter') { document.getElementById('dag26-btn').click(); }"
        />
        <button
          id="dag26-btn"
          class="dag26-btn"
          onclick="
            var input = document.getElementById('dag26-input');
            var result = document.getElementById('dag26-result');
            var goedeAntwoorden = ['Yes!! 🎉','Juist hoor! 🥳','Helemaal correct! ❤️','Slimmerik! 🧠✨'];
            var foutAntwoorden = ['Niet helemaal... proberen opnieuw! 🙈','Bijna! Nog een poging 🤔','Helaas, dat was het niet 😅','Foutje, bedankt! Nog eens proberen 🍀'];
            if (parseInt(input.value, 10) === PUZZEL_26_ANTWOORD) {
              result.textContent = goedeAntwoorden[Math.floor(Math.random() * goedeAntwoorden.length)];
              result.className = 'dag26-result dag26-correct';
              input.classList.remove('shake');
            } else {
              result.textContent = foutAntwoorden[Math.floor(Math.random() * foutAntwoorden.length)];
              result.className = 'dag26-result dag26-wrong';
              input.classList.remove('shake');
              void input.offsetWidth;
              input.classList.add('shake');
            }
          "
        >
          Check! ✅
        </button>
        <p id="dag26-result" class="dag26-result"></p>
      </div>
    `
  }
];

// ─── Niet aanpassen hieronder ────────────────────────────────
window.ANNIVERSARY_START = START_DATE;
window.ANNIVERSARY_PAGES = PAGES;
