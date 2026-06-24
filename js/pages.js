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

// ─── "IK GA OP REIS EN IK NEEM MEE" — lijst ──────────────────
// Voeg hier elke paar weken een nieuw item toe.
//
// - text:     wat er getoond wordt in de lijst zodra het goed is
// - keywords: woorden die ALLEMAAL in haar antwoord moeten staan
//             (matcht ook binnen samengestelde woorden, dus
//             "zonnebrand" matcht ook in "zonnebrandcreme")
// - any:      gebruik dit i.p.v. keywords als er meerdere losse
//             manieren zijn om het juiste antwoord te geven —
//             als 1 van de keyword-sets matcht, is het goed
//             (zie het zonnebrandcrème-voorbeeld hieronder)
//
// Het spel zelf (logica + styling) staat in de pagina van
// 2026-07-02 hieronder, en hoeft niet aangepast te worden.

const REISGAME_ITEMS = [
  {
    text: "Een passievrucht drankje",
    keywords: ["passievrucht"]
  },
  {
    text: "Een rolstoel",
    keywords: ["rolstoel"]
  },
  {
    text: "Een cactus",
    keywords: ["cactus"]
  },
  {
    text: "Een luchtbizon",
    keywords: ["luchtbizon"]
  },
  {
    text: "Een croque-monsieur machine",
    any: [
      ["croque"],
      ["croquemachine"],
      ["monsieur"],
      ["croque-monsieurmachine"]
    ]
  },
  {
    text: "Kabouter Philippe, even groot als je duim",
    keywords: ["philippe", "kabouter", "duim", "even"]
  },
  {
    text: "Een Dacia Duster",
    keywords: ["Dacia", "Duster"]
  },
  {
    text: "Een regenboog",
    keywords: ["regenboog"]
  },
  {
    text: "27 rollen WC papier",
    keywords: ["papier", "27"]
  },
  {
    text: "Toilet groot genoeg voor de luchtbizon",
    any: [
      ["toilet", "bizon"]
    ]
  },
  {
    text: "STB busticketjes",
    any: [
      ["stb"],
      ["busticket"],
      ["ticket"]
    ]
  },
  {
    text: "Een nagelknipper",
    keywords: ["nagelknipper"]
  },
  {
    text: "Rico",
    keywords: ["rico"]
  },
  {
    text: "Gandalf",
    keywords: ["gandalf"]
  },
  {
    text: "Een barometer",
    keywords: ["barometer"]
  },
  {
    text: "Een gele duikboot",
    any: [
      ["duikboot"],
      ["gele", "duikboot"]
    ]
  },
  {
    text: "Één klein champignonnetje",
    any: [
      ["champignon"],
      ["paddenstoel"]
    ]
  },
  {
    text: "Louis de kabouter, iets groter dan je duim",
    any: [
      ["louis"],
      ["kabouter", "louis"]
    ]
  },
  {
    text: "Karels crypto",
    any: [
      ["karel", "crypto"],
      ["crypto"]
    ]
  },
  {
    text: "Een diadeem",
    keywords: ["diadeem"]
  },
  {
    text: "Smeagol",
    any: [
      ["smeagol"],
      ["gollum"]
    ]
  },
  {
    text: "Een gouden troon",
    any: [
      ["gouden", "troon"],
      ["troon"]
    ]
  },
  {
    text: "Een Chinese vaas",
    any: [
      ["chinese", "vaas"],
      ["vaas"]
    ]
  },
  {
    text: "Star Wars: A New Hope",
    any: [
      ["new", "hope"],
      ["star", "wars"]
    ]
  },
  {
    text: "Barbie Mariposa",
    any: [
      ["barbie"],
      ["mariposa"]
    ]
  },
  {
    text: "Een ruimtevloot",
    keywords: ["ruimtevloot"]
  },
  {
    text: "De noot mi",
    any: [
      ["mi"],
      ["noot", "mi"]
    ]
  },
  {
    text: "Een gezonde dosis zelfreflectie",
    keywords: ["zelfreflectie"]
  },
  {
    text: "Een zwaard",
    keywords: ["zwaard"]
  },
  {
    text: "Een verwarde Japanse man",
    any: [
      ["japanse", "man"],
      ["verward"]
    ]
  },
  {
    text: "Een tapijt met luipaardprint",
    any: [
      ["luipaardprint"],
      ["tapijt"]
    ]
  },
  {
    text: "Meer dan je denkt",
    keywords: ["meer"]
  },
  {
    text: "Perenfanta",
    any: [
      ["perenfanta"],
      ["fanta", "peer"]
    ]
  },
  {
    text: "Tia Hellebaut",
    any: [
      ["tia"],
      ["hellebaut"]
    ]
  },
  {
    text: "Een lat met een identiteitscrisis",
    keywords: ["lat"]
  },
  {
    text: "Een depressieve robot",
    any: [
      ["robot"],
      ["depressieve", "robot"]
    ]
  },
  {
    text: "Een blauwe handdoek met rode bollen",
    any: [
      ["blauwe", "handdoek"],
      ["rode", "bollen"]
    ]
  },
  {
    text: "Een bal",
    keywords: ["bal"]
  },
  {
    text: "Een snoeppot",
    keywords: ["snoeppot"]
  },
  {
    text: "The Black Pearl",
    any: [
      ["black", "pearl"],
      ["pearl"]
    ]
  },
  {
    text: "Een koekendoos",
    keywords: ["koekendoos"]
  },
  {
    text: "Bavo",
    keywords: ["bavo"]
  },
  {
    text: "Een sticker met \"hier drukken\" erop",
    any: [
      ["hier", "drukken"],
      ["sticker"]
    ]
  },
  {
    text: "Een knop die niks met die sticker te maken heeft",
    keywords: ["knop"]
  },
  {
    text: "Een hondenfluitje",
    any: [
      ["hondenfluitje"],
      ["fluitje"]
    ]
  },
  {
    text: "Een inktvis met 7 tentakels",
    any: [
      ["inktvis"],
      ["7", "tentakels"]
    ]
  },
  {
    text: "10 en een halve condoom",
    any: [
      ["condoom"],
      ["halve", "condoom"]
    ]
  },
  {
    text: "Een blije man met een halve piet",
    any: [
      ["blije", "man"],
      ["halve", "piet"]
    ]
  }
];

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

      <h2>Wavelength van de dag 🔎</h2>

      <div class="dag26-grid">
        <div>
          <img src="images/wavelength_26juni_1.jpg" />
          <p class="dag26-caption">Dit Avatar karakter</p>
        </div>
        <div>
          <img src="images/wavelength_26juni_2.jpg" />
          <p class="dag26-caption">Deze standbeeld-pose</p>
        </div>
        <div>
          <img src="images/wavelength_26juni_3.jpg" />
          <p class="dag26-caption">Dit fruit</p>
        </div>
        <div>
          <img src="images/wavelength_26juni_4.jpg" />
          <p class="dag26-caption">Deze Pixar film</p>
        </div>
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
            var goedeAntwoorden = ['Yes!! 🎉','Zeker wel! 🥳','Helemaal juist! ❤️','Slimmerik! 🧠✨'];
            var foutAntwoorden = ['Probeer opnieuw! 🙈','Bijna! Nog een poging 🤔','Ai, dat was em niet 😅','Neeje neeje! Nog eens proberen 🍀'];
            if (parseInt(input.value, 10) === 8) {
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
  },
  {
    date: "2026-06-27",
    content: `
      <h2>Plant van de dag:</h2>
      <h3>Frizzle Sizzle (albuca spiralis)</h3>
      <p>
      Hi hi, plant goes "weeeeeeeeeeeh"
      </p>
      <img src="images/foto5.jpg" />
    `
  },

  {
    date: "2026-06-28",
    content: `
    <h2>Quote van de dag:</h2>
      <p>
        <blockquote>“I think you ought to know i'm feeling very depressed”</blockquote>
        <i>- Marvin</i>
        <br>
        <p>
        <img src="images/foto6.png" title="Sipte." style="width: 60%; display: block; margin: 20px auto 0;">
      </p></p>
    `
  },

  {
    date: "2026-06-29",
    content: `
      <h2>Raadsel van de dag:</h2>
      <p>
      Welk getal past er op de lege parkeerplaats?
      </p>
      <img src="images/foto7.png" title="Daarom pak ik de fiets" style="height: 80%; display: block; margin: 20px auto 20px;">
      <details class="spoiler">
        <summary>Klik hier voor het antwoord</summary>
        <p>87! De getallen staan omgekeerd 🙃</p>
      </details>
    `
  },

  {
    date: "2026-06-30",
    content: `
      <h2>Foto van de dag</h2>
      <img src="images/foto4.jpg" title="De squad" style="width: 80%; display: block; margin: 20px auto 0;">
      
    `
  },

  {
    date: "2026-07-01",
    content: `
    <h2>Diertje van de dag:</h2>
    <h3>De zeeslak</h3>
    <p>Want die zijn mooi en ik snap ze niet zo goed x</p>
      <p>
        <img src="images/zeeslak1.webp" title="Wauw." style="width: 60%; display: block; margin: 20px auto 0;">
        <img src="images/zeeslak2.jpg" title="Wow." style="width: 60%; display: block; margin: 20px auto 0;">
        <img src="images/zeeslak3.jpg" title="Wiew." style="width: 60%; display: block; margin: 20px auto 0;">
      </p>
    `
  },

  {
    date: "2026-07-02",
    content: `
      <h2>Spelletje van de dag 🧳</h2>
      <p>Ik ga op reis en ik neem mee...</p>

      <div id="reisgame-progress" class="reisgame-progress"></div>
      <ul id="reisgame-list" class="reisgame-list"></ul>

      <div id="reisgame-input-area" class="reisgame-input-area">
        <input id="reisgame-input" type="text" class="reisgame-input" placeholder="Wat neem je mee?" />
        <button id="reisgame-submit" class="reisgame-btn">✓</button>
      </div>

      <p id="reisgame-feedback" class="reisgame-feedback"></p>

      <div id="reisgame-win" class="reisgame-win" style="display:none;">
        <p>🎉 Helemaal juist! Alles ingepakt! 🎉</p>
      </div>

      <script>
        (function () {
          const items = window.REISGAME_ITEMS || [];
          let currentIndex = 0;

          const listEl       = document.getElementById('reisgame-list');
          const inputEl       = document.getElementById('reisgame-input');
          const submitEl       = document.getElementById('reisgame-submit');
          const feedbackEl     = document.getElementById('reisgame-feedback');
          const progressEl     = document.getElementById('reisgame-progress');
          const winEl          = document.getElementById('reisgame-win');
          const inputAreaEl    = document.getElementById('reisgame-input-area');

          function normalize(str) {
            return str
              .toLowerCase()
              .normalize('NFD').replace(/[\\u0300-\\u036f]/g, '')
              .replace(/[^\\w\\s]/g, ' ')
              .replace(/\\s+/g, ' ')
              .trim();
          }

          function checkAnswer(input, item) {
            const normInput = normalize(input);
            function allKeywordsPresent(keywordList) {
              return keywordList.every(function (kw) {
                return normInput.indexOf(normalize(kw)) !== -1;
              });
            }
            if (item.keywords) return allKeywordsPresent(item.keywords);
            if (item.any) return item.any.some(allKeywordsPresent);
            return false;
          }

          function renderProgress() {
            progressEl.textContent = currentIndex + ' / ' + items.length;
          }

          function renderList() {
            listEl.innerHTML = '';
            for (let i = 0; i < currentIndex; i++) {
              const li = document.createElement('li');
              li.className = 'reisgame-list-item';
              li.textContent = (i + 1) + '. ' + items[i].text;
              listEl.appendChild(li);
            }
          }

          function showFeedback(message, isError) {
            feedbackEl.textContent = message;
            feedbackEl.classList.toggle('reisgame-feedback--error', !!isError);
            feedbackEl.classList.toggle('reisgame-feedback--ok', !isError);
          }

          function handleSubmit() {
            if (currentIndex >= items.length) return;
            const value = inputEl.value;
            if (!value.trim()) return;

            if (checkAnswer(value, items[currentIndex])) {
              currentIndex++;
              inputEl.value = '';
              renderList();
              renderProgress();
              if (currentIndex >= items.length) {
                showFeedback('', false);
                inputAreaEl.style.display = 'none';
                winEl.style.display = 'block';
              } else {
                showFeedback('Goed zo! Volgende...', false);
              }
            } else {
              showFeedback('Niet helemaal goed, probeer het nog eens!', true);
            }
            inputEl.focus();
          }

          submitEl.addEventListener('click', handleSubmit);
          inputEl.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') handleSubmit();
          });

          renderProgress();
          renderList();
        })();
      </script>
    `
  },

  {
    date: "2026-07-03",
    content: `
    <h2>Meme van de dag:</h2>
    <iframe width="989" height="556" src="https://www.youtube.com/embed/sNfB9jC0xn4" title="Jonagolds are gone - Aldi Belgium" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `
  }
];

// ─── Niet aanpassen hieronder ────────────────────────────────
window.ANNIVERSARY_START = START_DATE;
window.ANNIVERSARY_PAGES = PAGES;
window.REISGAME_ITEMS = REISGAME_ITEMS;
