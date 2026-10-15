# Eighteen Diamonds - project notes

Landing page for Eighteen Diamonds Inc, wholesale diamonds and fine jewelry (trade only).
Contact: info@eighteendiamonds.com. Domain: eighteendiamonds.com (registered at GoDaddy).

## Stack

- Plain static site, no build step: `index.html`, `privacy.html`, `assets/`.
- Hosted on Vercel (Hobby), deployed automatically from GitHub `szaidman55/18diamonds`, branch
  `main`. Every push to `main` goes live.
- `vercel.json` sets `cleanUrls`, so `privacy.html` is served at `/privacy`.
- Fonts: Cormorant Garamond (headings) and Raleway (body) from Google Fonts.

## Assets

- `assets/hero.webp`: 3D wall sign photo, used as the hero background.
- `assets/logo.svg`: horizontal logo (icon + "Eighteen Diamonds"), original colors.
  Source: `iCloudDrive/018 Logos/Definitif/Logos/Logo 18 D outline.svg` (vector equivalent of
  `18D Outlined.ai`).
- `assets/logo-light.svg`: same logo with light text, for the dark header.
- `assets/mark.svg`: diamond icon only, also used as favicon.

## Decisions

- Hero: on landscape screens the photo covers the hero and the copy sits under the wall sign;
  on portrait screens (`max-aspect-ratio: 5/4`) the photo is scaled to show the whole sign at the
  top and fades into navy under the copy.
- Privacy page text is the SMS/mobile wording provided by the owner, used verbatim.
- Copy avoids specific claims (years in business, location, certifications) until confirmed.

## DNS

See [godaddy-dns.md](godaddy-dns.md).

## Local preview

```bash
npx serve@14.2.4 -l 4321 .
```

## Status

- 2026-10-15: first version of landing page and privacy page built and pushed.
- Next: add domain in Vercel, update GoDaddy DNS, confirm live site.
