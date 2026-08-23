# Medicare Diagnostic Lab — Website

Website for **Medicare Diagnostic Lab**, run by **Deepshika (MLT)**, Yamuna Vihar B Block, Delhi.

## Structure

```
deeshika_apollo_diagnostic/
├── index.html        # all page content/sections
├── css/style.css      # styling (design tokens at top of file)
├── js/script.js       # mobile nav + animated sample report
├── images/            # add real photos here (see below)
└── README.md
```

## Adding real photos

Two placeholders in `index.html` are ready to swap for real images:

1. **Deepshika's photo** — save as `images/deepshika.jpg`, then in `index.html`
   find the `about__photo-placeholder` div and replace it with:
   ```html
   <img src="images/deepshika.jpg" alt="Deepshika, MLT">
   ```
2. **Clinic photo** — save as `images/clinic.jpg`, then find the
   `clinic__photo-placeholder` div and replace it with:
   ```html
   <img src="images/clinic.jpg" alt="Medicare Diagnostic Lab clinic">
   ```

## Editing content

All text (address, phone, tests offered, timings) lives directly in
`index.html` — no build step, no dependencies. Open the file in any editor,
change the text, save, and refresh the browser.

## Running locally

Just open `index.html` in a browser, or serve the folder with any static
server, e.g.:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying

This is a static site, so it can be hosted for free on:
- **GitHub Pages** (Settings → Pages → deploy from `main` branch)
- **Netlify** or **Vercel** (drag-and-drop the folder)

## Contact on file

- Phone: 70424 40671
- Email: deepshika7042@gmail.com
- Address: Medicare, Yamuna Vihar B Block Main Road, Opp. RPVV School, Delhi
- Timing: 8:00 AM – 10:00 PM, daily
