# Prevayam Nutrition — Brand Website

India's first honey-based sports nutrition. A React + Vite branding site (no e‑commerce).

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## Deploy

The `/dist` folder is a static site — host it anywhere.

**Vercel** (recommended, free)
1. Push this folder to a GitHub repo.
2. On vercel.com → "New Project" → import the repo.
3. Vercel auto-detects Vite. Click Deploy. `vercel.json` is already included.

**Netlify**
1. Push to GitHub, then "Add new site" → import the repo.
2. Build command `npm run build`, publish directory `dist` (already set in `netlify.toml`).

**Any static host / cPanel**
Run `npm run build` and upload the contents of `/dist`.

## Custom domain
After deploying, add `prevayam.com` (or your domain) in your host's Domain settings and point the DNS records they give you. SSL is automatic on Vercel/Netlify.

## Where to edit content
- All copy + sections: `src/App.jsx`
- Colors, type, layout: `src/styles.css` (brand colors are CSS variables at the top)
- Logo: `public/assets/mark.png`
- Email/social links: search `hello@prevayam.com` and `aria-label="Instagram"` in `src/App.jsx`

## To add later
- Product photos: drop into `public/assets/` and add `<img>` tags in the `Range` and `Hero` components.
- Real store list / map, contact form.
