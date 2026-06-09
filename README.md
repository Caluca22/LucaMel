# Onze Dagen — Anniversary Website

Een dagelijkse pagina voor elke dag samen.

---

## 📁 Bestandsstructuur

```
anniversary-site/
├── index.html          ← De hoofdpagina (niet aanpassen)
├── css/
│   └── style.css       ← Kleuren en stijl (optioneel aanpassen)
├── js/
│   ├── pages.js        ← ✏️ DIT IS HET BESTAND DAT JE AANPAST
│   └── app.js          ← Logica (niet aanpassen)
├── images/             ← Zet hier je afbeeldingen
└── README.md           ← Dit bestand
```

---

## ✏️ Een nieuwe pagina toevoegen

Open `js/pages.js` en voeg een object toe aan de `PAGES` array:

```javascript
{
  date: "2025-07-14",
  content: `
    <h2>Eén maand ♥</h2>
    <p>Al een hele maand samen. Elke dag mooier dan de vorige.</p>
    <div class="heart-divider">♥ ♥ ♥</div>
    <p><em>Ik hou van je.</em></p>
  `
},
```

**De pagina wordt pas zichtbaar op die datum.** Je mag dus gerust pagina's voor toekomstige datums al toevoegen.

---

## 🖼️ Afbeeldingen gebruiken

Zet je afbeelding in de `images/` map en gebruik dit in je content:

```html
<img src="images/onze-foto.jpg" alt="Wij samen" />
```

---

## 🎨 HTML elementen die je kunt gebruiken

| Element | Resultaat |
|---|---|
| `<h2>Titel</h2>` | Grote warme titel |
| `<h3>Subtitel</h3>` | Kleinere titel |
| `<p>Tekst</p>` | Alinea |
| `<em>cursief</em>` | Cursieve tekst |
| `<strong>vet</strong>` | Dikgedrukte tekst |
| `<blockquote>citaat</blockquote>` | Sierlijk citaat |
| `<div class="heart-divider">♥ ♥ ♥</div>` | Hartjes scheidingslijn |
| `<img src="images/foto.jpg" alt="..." />` | Afbeelding |
| `<ul><li>item</li></ul>` | Lijst |

---

## 🚀 Uploaden naar GitHub Pages

1. Maak een repository aan op GitHub (bijv. `onze-dagen`)
2. Upload alle bestanden (inclusief `images/` map)
3. Ga naar **Settings → Pages**
4. Kies als source: **Deploy from a branch → main → / (root)**
5. Je site is beschikbaar op `https://jouwgebruikersnaam.github.io/onze-dagen/`

**Nieuwe pagina toevoegen:** open `js/pages.js` op GitHub, bewerk het bestand, en sla op. De wijziging is meteen live.

---

## ⚙️ Startdatum aanpassen

In `js/pages.js` bovenaan:

```javascript
const START_DATE = "2025-06-14";
```

Verander dit naar welke datum je wilt als dag 1.

---

Gemaakt met ♥
