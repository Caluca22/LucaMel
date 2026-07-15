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
      ["croque-monsieur"],
      ["croquemonsieur"],
      ["croque monsieur"],
      ["croque-machine"],
      ["croque machine"]
    ]
  },
  {
    text: "Kabouter Philippe, even groot als je duim",
    keywords: ["philippe", "kabouter", "even", "duim"]
  },
  {
    text: "Een Dacia Duster",
    keywords: ["dacia", "duster"]
  },
  {
    text: "Een regenboog",
    keywords: ["regenboog"]
  },
  {
    text: "27 rollen WC papier",
    any: [
      ["27", "wc"],
      ["27", "toiletpapier"]
    ]
  },
  {
    text: "Een toilet groot genoeg voor de luchtbizon",
    any: [
      ["toilet", "luchtbizon"],
      ["wc", "luchtbizon"]
    ]
  },
  {
    text: "STB busticketjes",
    any: [
      ["stb"],
      ["bus", "ticket"],
      ["bus", "kaartje"]
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
    keywords: ["gele", "duikboot"]
  },
  {
    text: "Één klein champignonnetje",
    keywords: ["champignon"]
  },
  {
    text: "Louis de kabouter, iets groter dan je duim",
    any: [
      ["louis", "kabouter", "groter"],
      ["lowie", "kabouter", "groter"]
    ]
  },
  {
    text: "Karels crypto",
    keywords: ["karel", "crypto"]
  },
  {
    text: "Een diadeem",
    keywords: ["diadeem"]
  },
  {
    text: "Smeagol",
    any: [
      ["smeagol"],
      ["sméagol"]
    ]
  },
  {
    text: "Een gouden troon",
    keywords: ["troon"]
  },
  {
    text: "Een Chinese vaas",
    keywords: ["vaas"]
  },
  {
    text: "Star Wars: A New Hope",
    keywords: ["star", "wars","new", "hope"]
  },
  {
    text: "Barbie Mariposa",
    keywords: ["barbie", "mariposa"]
  },
  {
    text: "Een ruimtevloot",
    keywords: ["ruimte", "vloot"]
  },
  {
    text: "De noot mi",
    any: [
      ["noot mi"],
      ["nootmi"]
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
    keywords: ["japans", "man"]
  },
  {
    text: "Een tapijt met luipaardprint",
    keywords: ["luipaard"]
  },
  {
    text: "Meer dan je denkt",
    keywords: ["meer dan je denkt"]
  },
  {
    text: "Perenfanta",
    any: [
      ["perenfanta"],
      ["peren", "fanta"]
    ]
  },
  {
    text: "Tia Hellebaut",
    any: [
      ["hellebaut"],
      ["hellebout"]
    ]
  },
  {
    text: "Een lat met een identiteitscrisis",
    keywords: ["lat", "identiteitscrisis"]
  },
  {
    text: "Een depressieve robot",
    keywords: ["robot"]
  },
  {
    text: "Een blauwe handdoek met rode bollen",
    keywords: ["blauw", "rode", "bollen", "handdoek"]
  },
  {
    text: "Een bal",
    keywords: ["bal"]
  },
  {
    text: "Een snoeppot",
    any: [
      ["snoeppot"],
      ["snoep pot"]
    ]
  },
  {
    text: "The Black Pearl",
    keywords: ["black", "pearl"]
  },
  {
    text: "De Koekendoos",
    any: [
      ["koekendoos"],
      ["koeken", "doos"]
    ]
  },
  {
    text: "Bavo",
    keywords: ["bavo"]
  },
  {
    text: 'Een sticker met "hier drukken" erop',
    keywords: ["drukken", "sticker"]
  },
  {
    text: "Een knop die niks met die sticker te maken heeft",
    keywords: ["knop", "sticker"]
  },
  {
    text: "Een hondenfluitje",
    keywords: ["hondenfluitje"]
  },
  {
    text: "Een inktvis met 7 tentakels",
    any: [
      ["inktvis", "7"],
      ["inktvis", "zeven"],
      ["octopus", "7"],
      ["octopus", "zeven"]
    ]
  },
  {
    text: "10 en een halve condoom",
    keywords: ["10", "halve", "condoom"]
  },
  {
    text: "Een blije man met een halve piet",
    keywords: ["blij", "man", "halve"]
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
      <iframe 
        style="width: 100%; aspect-ratio: 16 / 9;"
        src="https://www.youtube.com/embed/QQMYpzbQIDA?t=33&mute=1" 
        title="Tailorbird building Nest" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>
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
      <img src="images/foto5.jpg"/>
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
      Welk getal past er op de bezette parkeerplaats?
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
              showFeedback('Hmmm nee het was iets anders...', true);
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
    <iframe 
        style="width: 100%; aspect-ratio: 16 / 9;"
        src="https://www.youtube.com/embed/sNfB9jC0xn4" 
        title="Jonagolds are gone - Aldi Belgium" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>
    `
  },

  {
    date: "2026-07-04",
    content: `
      <h2>Nutteloos weetje van de dag</h2>
      <p>Niemand geboren na 1935 heeft ooit op de maan gewandeld 🌖</p>
    `
  },

  {
    date: "2026-07-05",
    content: `
      <h2>Top 8 van de dag</h2>
      <h3>De beste veelhoeken!</h3>
      
      <ul class="top10-list">
      
        <li class="top10-item">
          <span class="top10-rank">8</span>
          <img class="top10-img" src="images/decagon.webp" alt="">
          <div class="top10-text">
            <p class="top10-title">Tienhoek</p>
            <p class="top10-desc">De decagon wordt wel eens "zo goed als rond" en "pointless" genoemd. Ook de jury ziet weinig hoop voor de tienhoek. Ondanks de vele betichtingen weigert ze de gelijkenissen met een cirkel te erkennen. Ze eindigt dit jaar dan ook op de laatste plaats.</p>
          </div>
        </li>
      
        <li class="top10-item">
          <span class="top10-rank">7</span>
          <img class="top10-img" src="images/heptagon.png" alt="">
          <div class="top10-text">
            <p class="top10-title">Zevenhoek</p>
            <p class="top10-desc">"More bark than bite" klinkt het in de wandelgangen. Heptagon is een coole naam, maar dat is het dan ook.</p>
          </div>
        </li>
      
        <li class="top10-item">
          <span class="top10-rank">6</span>
          <img class="top10-img" src="images/nonagon.png" alt="">
          <div class="top10-text">
            <p class="top10-title">Negenhoek</p>
            <p class="top10-desc">Na het breken van nonagon's banden met de tienhoek lijkt ze haar eigen weg te zoeken. Momenteel heeft ze nog weinig kunnen laten zien, maar verlies haar niet uit het oog!</p>
          </div>
        </li>
      
        <li class="top10-item">
          <span class="top10-rank">5</span>
          <img class="top10-img" src="images/octagon.png" alt="">
          <div class="top10-text">
            <p class="top10-title">achthoek</p>
            <p class="top10-desc">Hoewel de achthoek evenwichtigheid en evenwijdigheid uitstraalt, kon ze dit jaar opnieuw niet overtuigen. Critici erkennen de symmetrie, maar missen concrete verwezelijkingen.</p>
          </div>
        </li>
      
        <li class="top10-item">
          <span class="top10-rank">4</span>
          <img class="top10-img" src="images/hexagon.png" alt="">
          <div class="top10-text">
            <p class="top10-title">Zeshoek</p>
            <p class="top10-desc">Hexagon is best-agon! Steeds meer mensen grijpen naar de modernere en "stylish" zeshoek en stappen af van het traditionele vierkant. De zeshoek eindigt net onder haar bordspelconcurent, maar is aan een stevige opmars bezig. We kijken uit naar wat de hexagon ons nog te bieden heeft in de toekomst!</p>
          </div>
        </li>
      
        <li class="top10-item">
          <span class="top10-rank">3</span>
          <img class="top10-img" src="images/vierkant.png" alt="">
          <div class="top10-text">
            <p class="top10-title">Vierhoek</p>
            <p class="top10-desc">Stabiel en betrouwbaar. De vierhoek draait al jaren mee aan de top, maar wordt misschien overschat. Niet elke vierhoek is een vierkant en de ene is al nuttiger dan de andere. De vierhoek is nog steeds "in vorm", maar zakt dit jaar weg naar de derde plaats.</p>
          </div>
        </li>
      
        <li class="top10-item">
          <span class="top10-rank">2</span>
          <img class="top10-img" src="images/pentagon.avif" alt="">
          <div class="top10-text">
            <p class="top10-title">Vijfhoek</p>
            <p class="top10-desc">Een controversiële keuze van de jury, maar de vijhoek staat niet zonder reden zo hoog aangeschreven. Naast haar bekende rol bij de Amerikaanse defensie is de pentagon ook aanwezig in de kunst. Veel kunstenaars zien de vijfhoek als een fundamentele bouwsteen van het menselijk lichaam. Het is de vorm waar men naar vraagt in deze moderne tijden en staat daarom verdiend op een mooie tweede plaats.</p>
          </div>
        </li>
      
        <li class="top10-item top10-item--first">
          <span class="top10-rank">1</span>
          <img class="top10-img" src="images/driehoek.jpg" alt="">
          <div class="top10-text">
            <p class="top10-title">Driehoek</p>
            <p class="top10-desc">Uiteraard, hoe kon het ook anders! De driehoek staat dit jaar weer op de eerste plaats.<br>In architectuur, de liefde en zelfs op het voetbalveld, de driehoek is overal aanwezig en met goede reden. Ze straalt fundamentele stabiliteit en betrouwbaarheid uit en is daarom opnieuw de beste veelhoek van het jaar!</p>
          </div>
        </li>
      </ul>
    `
  },

  {
    date: "2026-07-06",
    content: `
    <h2>Quote van de dag:</h2>
      <p>
        <blockquote>“La música es lo que me hace sentir libre.”</blockquote>
        <i>- Violetta</i>
        <br>
        <p>
        <img src="images/violetta.webp" title="Sorry xx" style="width: 80%; display: block; margin: 20px auto 20px;">
      </p></p>
    `
  },

  {
    date: "2026-07-07",
    content: `
      <h2>Mopje van de dag</h2>
      <p>Hoe noem je een boomerang die niet terug keert?</p>
      <br>
      <p>...</p>
      <br>
      <p>Een stok!</p>
    `
  },
  {
    date: "2026-07-08",
    content: `

      <h2>Wavelength van de dag</h2>

      <div class="dag26-grid">
        <div>
          <img src="images/nederlands.jpg" />
          <p class="dag26-caption">Dit vak op school</p>
        </div>
        <div>
          <img src="images/17.jpg" />
          <p class="dag26-caption">Dit getal</p>
        </div>
        <div>
          <img src="images/kleur.png" />
          <p class="dag26-caption">Deze kleur</p>
        </div>
        <div>
          <img src="images/donna.jpg" />
          <p class="dag26-caption">Deze persoon om thee mee te drinken</p>
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
            if (parseInt(input.value, 10) === 3) {
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
    date: "2026-07-09",
    content: `
    <h2>Liedje van de dag:</h2>
    <iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/KC3GrzoQG9U" title="Don&#39;t Stop &#39;Til You Get Enough - Jacob Collier" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `
  },
  

  {
    date: "2026-07-10",
    content: `
      <h2>Foto van de dag</h2>
      <img src="images/OudeFoto1.JPG" title="It's-a-me, Rico." style="width: 80%; display: block; margin: 20px auto 0;">
      
    `
  },

  {
    date: "2026-07-11",
    content: `
      <h2>Raadsel van de dag:</h2>
      <p>
      Kan je de slang vinden tussen de schildpadden?
      </p>
      <img src="images/raadsel2.jpeg" title="Sssssssstom raadseltje" style="height: 80%; display: block; margin: 20px auto 20px;">
      <details class="spoiler">
        <summary>Klik hier voor het antwoord</summary>
        <p>beginnend linksonder, net boven het vierde schild, kijkend naar rechts!</p>
      </details>
    `
  },

  {
    date: "2026-07-12",
    content: `
    <h2>Meme van de dag:</h2>
    
    <iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/fMLQVPpzx64" title="Aaah minnen arm" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `
  },

  {
    date: "2026-07-13",
    content: `
      <h2>Plant van de dag:</h2>
      <h3>Monilaria Moniliformis</h3>
      <p>
      Want als die klein is zijn het allemaal konijntjes! 🐰
      </p>
      <img src="images/plant2.webp"/>
    `
  },

  {
    date: "2026-07-14",
    content: `
      <h2>Nutteloos weetje van de dag</h2>
      <p>Er is geen enkele Spanjaard geboren op 10 oktober 1582.</p>
      <br>
      <br>
      <p>In 1582 zijn enkele landen van kalender gewisseld zoals Spanje, Portugal en Italië.<br>Na 4 oktober kwam direct 15 oktober!</p>
      <img src="images/kalender.jpg" title="Wauw dagen" style="width: 80%; display: block; margin: 20px auto 20px;">
    `
  },

  {
    date: "2026-07-15",
    content: `
      <h2>Tijdverspilling van de dag</h2>
      <h3>Gelieve een wachtwoord in te stellen</h3>
      <p>Stel <a href="https://neal.fun/password-game/">hier</a> een wachtwoord in.</p>
    `
  },

  {
    date: "2026-07-16",
    content: `
    <h2>Quote van de dag:</h2>
      <p>
        <blockquote>“My mother told me, "If you are a soldier, you will become a general. If you are a monk, you will become the Pope.” Instead, I was a painter, and became Picasso”</blockquote>
        <i>- Pablo Picasso</i>
        <br>
        <p>
        <img src="images/pablo.jpg" title="Grote meneer" style="width: 60%; display: block; margin: 20px auto 0;">
      </p></p>
    `
  },

  {
    date: "2026-07-17",
    content: `
      <h2>Thema kiezen 🎨</h2>
      <p>Hier kan je een kleurtje kiezen voor de site</p>

      <div class="theme-grid">

        <button class="theme-btn theme-btn--amber" onclick="setTheme('amber', this)">
          <span class="theme-swatch" style="background: radial-gradient(circle at 35% 35%, #E8A940, #C17B2B, #7A2E0E);"></span>
          Stella
        </button>

        <button class="theme-btn theme-btn--roos" onclick="setTheme('roos', this)">
          <span class="theme-swatch" style="background: radial-gradient(circle at 35% 35%, #e8a0b0, #c4687e, #6b2040);"></span>
          Flora
        </button>

        <button class="theme-btn theme-btn--bos" onclick="setTheme('bos', this)">
          <span class="theme-swatch" style="background: radial-gradient(circle at 35% 35%, #8fba5e, #5a8a3a, #1e3d12);"></span>
          Aisha
        </button>

        <button class="theme-btn theme-btn--zee" onclick="setTheme('zee', this)">
          <span class="theme-swatch" style="background: radial-gradient(circle at 35% 35%, #7ab8d4, #4a8aaa, #0e3a5a);"></span>
          Bloom
        </button>

        <button class="theme-btn theme-btn--nacht" onclick="setTheme('nacht', this)">
          <span class="theme-swatch" style="background: radial-gradient(circle at 35% 35%, #9b6fd4, #7a4bb5, #3d1f6e);"></span>
          Trix
        </button>

      </div>

      <p id="theme-confirm" class="theme-confirm"></p>

      <script>
        (function () {
          const confirmEl = document.getElementById('theme-confirm');

          const labels = {
            amber: 'Amber 🍂',
            nacht: 'Nacht 🌙',
            roos:  'Roos 🌸',
            bos:   'Bos 🌿',
            zee:   'Zee 🌊'
          };

          function markActive(theme) {
            document.querySelectorAll('.theme-btn').forEach(function (btn) {
              btn.classList.toggle('active', btn.classList.contains('theme-btn--' + theme));
            });
          }

          window.setTheme = function (theme, btn) {
            if (theme === 'amber') {
              document.documentElement.removeAttribute('data-theme');
            } else {
              document.documentElement.setAttribute('data-theme', theme);
            }
            localStorage.setItem('onzedagen-theme', theme);
            markActive(theme);
            confirmEl.textContent = 'Thema opgeslagen!';
            setTimeout(function () { confirmEl.textContent = ''; }, 2500);
          };

          // Mark whichever theme is currently active on page load
          const current = localStorage.getItem('onzedagen-theme') || 'amber';
          markActive(current);
        })();
      </script>
    `
  },

  {
    date: "2026-07-18",
    content: `
    <h2>Diertje van de dag:</h2>
    <h3>De axolotl</h3>
    <p>Want die zijn cool wooow. Die rare friemels zijn blijkbaar zijn kiewen en ze kunnen hun botten, spieren, ledematen en zelf hun brein opnieuw groeien, jawadde!</p>
      <p>
        <img src="images/axo1.webp" title="Wauw." style="width: 60%; display: block; margin: 20px auto 0;">
        <img src="images/axo2.webp" title="Wow." style="width: 60%; display: block; margin: 20px auto 0;">
        <img src="images/axo3.png" title="Wiew." style="width: 60%; display: block; margin: 20px auto 0;">
      </p>
    `
  },
  {
    date: "2026-07-19",
    content: `

      <h2>Wavelength van de dag</h2>

      <div class="dag26-grid">
        <div>
          <img src="images/voetbal.webp" />
          <p class="dag26-caption">Deze sport om te kijken</p>
        </div>
        <div>
          <img src="images/klok.webp" />
          <p class="dag26-caption">Dit tijdstip</p>
        </div>
        <div>
          <img src="images/vlag.svg" />
          <p class="dag26-caption">Deze vlag</p>
        </div>
        <div>
          <img src="images/patat.png" />
          <p class="dag26-caption">Dit eten</p>
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
            if (parseInt(input.value, 10) === 5) {
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
    date: "2026-07-20",
    content: `
      <h2>Foto van de dag</h2>
      <img src="images/OudeFoto2.JPG" title="Moh, wat een gekke hoed" style="width: 80%; display: block; margin: 20px auto 0;">
      
    `
  },

  {
    date: "2026-07-21",
    content: `
      <h2>Nieuwe queeste! ⚔️</h2>

      <div class="quest-card">
        <div class="quest-scroll-top"></div>

        <div class="quest-body">
          <p class="quest-label">Jouw queeste</p>
          <p class="quest-description">
            Stuur je geliefde 5 foto's van iets oranje.
          </p>
        </div>

        <div class="quest-scroll-bottom"></div>
      </div>

      <div class="quest-reward">
        <div class="quest-wax-seal">♥</div>
        <div class="quest-reward-text">
          <p class="quest-reward-label">Beloning</p>
          <p class="quest-reward-title">Hartjes</p>
          <p class="quest-reward-hearts">+5 ♥</p>
        </div>
      </div>
    `
  },

  {
    date: "2026-07-22",
    content: `
    <h2>Meme van de dag:</h2>
    <iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/E2760kPimNc" title="Doe gewoon de prikken weg! 1080p" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `
  },

  {
    date: "2026-07-23",
    content: `
      <h2>Mopje van de dag</h2>
      <p>Ik zag een bijbel op de rommelmarkt voor 12 euro. Heb 10 geboden.</p>
    `
  },

  {
    date: "2026-07-24",
    content: `
      <h2>Nutteloos weetje van de dag</h2>
      <p>Als je iemand zijn been amputeert dan gaat zijn BMI omlaag, als je beide benen amputeert dan gaat zijn BMI omhoog!</p>
    `
  },

  {
    date: "2026-07-25",
    content: `
      <h2>Liedje van de dag:</h2>
      <p>(Misschien op Spotify luisteren want dit is maar een stukje)</p>
      <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5hCdqb1dCo5k3zq9XvAyDK?utm_source=generator&si=22436ecc8c904932" width="80%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <img src="images/Celeste.gif" title="Chillende" style="width: 80%; display: block; margin: 20px auto 0;">
    `
  },

  {
    date: "2026-07-26",
    content: `
      <h2>Tijdverspilling van de dag</h2>
      <p><a href="https://thetruesize.com/">Hier</a> kan je landen vergelijken door ze te verslepen. Gek voor je wereldbeeld en zo, wauuuuuuw.</p>
    `
  },
  {
    date: "2026-07-27",
    content: `
      <h2>Plant van de dag:</h2>
      <h3>Kruidje-roer-me-niet (mimosa pudica)</h3>
      <p>
      Die ken je waarschijnlijk al, maar toch is ze cool! Ookal is ze een beetje verlegen.
      </p>
      <iframe style="width: 100%; aspect-ratio: 16 / 9;" frameborder="0" loading="lazy" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; web-share" allowfullscreen src="https://commons.wikimedia.org/wiki/File:Mimosa_pudica_leaves_folding_when_touched_2.ogv?embedplayer=true" />
    `
  },

  {
    date: "2026-07-28",
    content: `
      <h2>Puzzel van de dag</h2>
      <p>Bavo rijdt en wil graag iedereen naar de boot brengen na een gezellige week in Engeland. Maar er zijn een paar probleempjes!</p>
      <ul>
        <li>Merel kan niet alleen bij oma blijven, want dan drinken ze de hele dag thee en staan ze te laat klaar</li>
        <li>Oma en Michiel kunnen niet alleen blijven want dan spelen ze alleen maar Rumikub en zijn de valiezen niet op tijd klaar</li>
      </ul>
      <p>Door al dat grief dat mee moet is er maar plaats voor Bavo en één passagier, hij zal dus een paar keer heen en weer moeten rijden...<br>In welke volgorde kan Bavo Merel, oma en Michiel meenemen zonder dat er problemen zijn?</p>
    `
  },

  {
    date: "2026-07-29",
    content: `
    <h2>Diertje van de dag:</h2>
    <h3>De bidsprinkhaankreeft</h3>
    <p>Lijst met coole dingen over de mantis shrimp:</p>
    <ul>
    <li>Ziet er cool uit</li>
    <li>Bokst tegen roofdieren met slagen tot 23 m/s (de GIF is in slow-motion) waardoor het water rond zijn poten soms kookt</li>
    <li>Ze zijn moeilijk te houden in een aquarium want ze maken het glas kapot</li>
    <li>Er zijn ook soorten met stekels die even snel gaan</li>
    <li>Heeft het meest complexe kleurenzicht van alle dieren op aarde</li>
    </ul>

      <p>
        <img src="images/mantis1.jpg" title="Wauw." style="width: 60%; display: block; margin: 20px auto 0;">
        <img src="images/mantis2.jpg" title="Wow." style="width: 60%; display: block; margin: 20px auto 0;">
        <img src="images/mantis3.gif" title="Wiew." style="width: 60%; display: block; margin: 20px auto 0;">
        <img src="images/mantis4.jpg" title="Wuuw." style="width: 60%; display: block; margin: 20px auto 0;">
      </p>
    `
  },

  {
    date: "2026-07-30",
    content: `
      <h2>Foto van de dag</h2>
      <img src="images/OudeFoto3.jpg" title="Wassup, bro" style="width: 80%; display: block; margin: 20px auto 0;">
      
    `
  },

  {
    date: "2026-07-31",
    content: `
      <h2>Nieuwe queeste! ⚔️</h2>

      <div class="quest-card">
        <div class="quest-scroll-top"></div>

        <div class="quest-body">
          <p class="quest-label">Jouw queeste</p>
          <p class="quest-description">
            Teken een kameel en stuur hem naar je geliefde.<br>Vergeet niet de naam van je kameel erbij te schrijven.
          </p>
        </div>

        <div class="quest-scroll-bottom"></div>
      </div>

      <div class="quest-reward">
        <div class="quest-wax-seal">♥</div>
        <div class="quest-reward-text">
          <p class="quest-reward-label">Beloning</p>
          <p class="quest-reward-title">Hartjes</p>
          <p class="quest-reward-hearts">+3 ♥</p>
        </div>
      </div>
    `
  },

  {
    date: "2026-08-01",
    content: `
    <h2>Meme van de dag:</h2>
    <iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/ZbNHUA1FKi0" title="BYE BYE DRIVER!!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `
  },
  {
    date: "2026-08-02",
    content: `

      <h2>Wavelength van de dag 🔎</h2>

      <div class="dag26-grid">
        <div>
          <img src="images/WL2A.jpg" />
          <p class="dag26-caption">Deze dino om op te rijden</p>
        </div>
        <div>
          <img src="images/WL2B.jpg" />
          <p class="dag26-caption">Dit dier</p>
        </div>
        <div>
          <img src="images/WL2C.gif" />
          <p class="dag26-caption">Deze GIF</p>
        </div>
        <div>
          <img src="images/WL2D.png" />
          <p class="dag26-caption">Deze letter</p>
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
            if (parseInt(input.value, 10) === 2) {
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
    date: "2026-08-03",
    content: `
      <h2>Nutteloos weetje van de dag</h2>
      <p>In de tijd tussen de ontdekking van Pluto en het moment waarop hij niet meer als planeet werd beschouwd, heeft Pluto niet eens een volledige baan rond de zon afgelegd.</p>
    `
  },

  {
    date: "2026-08-04",
    content: `
      <h2>Mopje van de dag</h2>
      <img src="images/hertz.jpg" title="*slapslapslapslap*" style="width: 80%; display: block; margin: 20px auto 0;">
    `
  },

  {
    date: "2026-08-05",
    content: `
    <h2>Quote van de dag:</h2>
      <p>
        <blockquote>“I love deadlines. I love the whooshing noise they make as they go by.”</blockquote>
        <i>- Douglas Adams</i>
        <br>
        <p>
        <img src="images/Douglas.avif" title="Gekke rakker toch" style="width: 60%; display: block; margin: 20px auto 0;">
      </p></p>
    `
  },

  {
    date: "2026-08-06",
    content: `
      <h2>Plant van de dag:</h2>
      <h3>Methusela</h3>
      <p>
      Methusela is een pinus longaeva uit Californië en wordt gezien als de oudste boom ter wereld. Ze wordt geschat ruim 4800 jaar oud te zijn.<br>Dat er geen duidelijke foto van is, is blijkbaar express, zodat er geen toeristen de boom gaan zoeken.
      </p>
        <img src="images/oudeBoom.jpg" title="Oh denneboom, oh denneboom, oh no denneboom" style="width: 60%; display: block; margin: 20px auto 0;">
    `
  },

  {
    date: "2026-08-07",
    content: `
      <h2>Tijdverspilling van de dag</h2>
      <h3>Kleur</h3>
      <p>Ben je goed in <a href="https://dialed.gg/">kleuren</a> kiezen?</p>
    `
  },

  {
    date: "2026-08-09",
    content: `
      <h2>Foto van de dag</h2>
      <img src="images/OudeFoto4.JPG" title="No-shoes summer" style="width: 80%; display: block; margin: 20px auto 0;">
      
    `
  },

  {
    date: "2026-08-12",
    content: `
      <h2>Mopje van de dag</h2>
      <img src="images/harryWatt.jpg" title="Y'arrr a pirate, Harry" style="width: 80%; display: block; margin: 20px auto 0;">
    `
  },

  {
    date: "2026-08-13",
    content: `
      <h2>Nutteloos weetje van de dag</h2>
      <p>Ik was verkozen als "Time Person of the Year" in 2006.</p>
    `
  },

  {
    date: "2026-08-14",
    content: `
    <h2>Meme van de dag</h2>
    <iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/8fSgXuPUP38" title="ik zeg niet ja ik zeg niet nee" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `
  },

  {
    date: "2026-08-19",
    content: `
      <h2>Foto van de dag</h2>
      <img src="images/PetworthHouse.png" title="Op tour in Engeland en regio Westveld" style="width: 80%; display: block; margin: 20px auto 0;">
      
    `
  },

  {
    date: "2026-08-23",
    content: `
      <h2>Weetje van de dag</h2>
      <p>Een groep flamingo's wordt een flamboyance genoemd!</p>
    `
  },

  {
    date: "2026-09-02",
    content: `
      <h2>Weetje van de dag</h2>
      <p>In de jaren 80 en 90 gaf de Zweedse marine miljoenen uit aan het opsporen van snel getik waarvan ze dachten dat het geheime Russische duikboten waren.
        Het bleek te gaan om de scheten van gigantische scholen haring. Toepasselijk FRTs (Fast Repetitive Ticks) genoemd. Haringen doen dit vooral 's nachts om de school samen te houden bij lage visibiliteit.</p>
    `
  }
];

// ─── Niet aanpassen hieronder ────────────────────────────────
window.ANNIVERSARY_START = START_DATE;
window.ANNIVERSARY_PAGES = PAGES;
window.REISGAME_ITEMS = REISGAME_ITEMS;
