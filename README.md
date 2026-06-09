# Our Year Together — Site Guide

A private anniversary website that reveals one new page per day, from **June 14 2025** to **June 14 2026**.

---

## How it works

- The site lives in this folder and can be hosted on **GitHub Pages** for free.
- Every day has its own HTML file in the `/pages/` folder, named `YYYY-MM-DD.html`.
- Pages are only visible **on or after their date** — future pages show a lock.
- You can write pages weeks or months in advance; they'll unlock automatically.

---

## Adding a new page

1. Open `pages/template.html` — copy its contents.
2. Create a new file in the `pages/` folder named after the date:
   ```
   pages/2025-07-20.html
   ```
3. Paste the template, then write your content between the HTML tags.
4. Save, commit, and push to GitHub. Done!

### What you can put on a page

```html
<h1>Big romantic title</h1>

<p>A paragraph of text.</p>

<div class="highlight">
  "A quote or highlighted moment."
</div>

<em>Italic text (shows in rose colour)</em>
<strong>Bold text</strong>

<!-- A photo (put images in /photos/) -->
<img src="../photos/our-walk.jpg" alt="Our walk in the park" />
```

---

## Deploying to GitHub Pages

1. Create a new **private** repository on GitHub (private keeps it personal).
2. Push this entire folder to the `main` branch.
3. Go to **Settings → Pages**, set source to `main` branch, root folder `/`.
4. GitHub will give you a URL like `https://yourusername.github.io/our-year/`.
5. Share that link with her!

### Updating later

Whenever you write new pages:
```bash
git add pages/
git commit -m "Add pages for July"
git push
```
GitHub Pages rebuilds in ~30 seconds.

---

## Folder structure

```
/
├── index.html          ← main shell (don't edit unless customising layout)
├── style.css           ← all visual styles
├── script.js           ← date logic & navigation
├── pages/
│   ├── template.html   ← copy this for every new page
│   ├── 2025-06-14.html ← Day 1
│   ├── 2025-06-15.html ← Day 2
│   └── ...             ← add more here
└── photos/             ← (create this folder if you use images)
```

---

## Navigation

- **Arrow keys** (← →) or the on-screen arrows cycle through days.
- The **calendar button** (top right) lets you jump to any past date.
- The URL updates with the date, so you can share a specific day:
  `https://yoursite.github.io/#2025-12-25`

---

*Made with love.*
