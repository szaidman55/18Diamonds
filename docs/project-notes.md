# Eighteen Diamonds - project notes

Landing page for Eighteen Diamonds Inc: wholesale diamonds and fine jewelry; buys and sells vintage
jewelry and watches; buys diamonds.
Address: 20 W 47th St, New York, NY 10036. Phone: (212) 542-0949. Email: info@eighteendiamonds.com. Domain: eighteendiamonds.com (registered at GoDaddy).

## Stack

- Plain static site, no build step: `index.html`, `privacy.html`, `assets/`.
- Hosted on Vercel (Hobby, team "18D", project `18diamonds`), deployed automatically from GitHub `szaidman55/18diamonds`, branch
  `main`. Every push to `main` goes live.
- `vercel.json` sets `cleanUrls`, so `privacy.html` is served at `/privacy`.
- Fonts: Cormorant Garamond (headings) and Raleway (body) from Google Fonts.

## Assets

- `assets/hero.webp`: 3D wall sign photo with the logo centered at the top, used as the hero
  background; hero copy is centered below the sign.
- `assets/logo.svg`: horizontal logo (icon + "Eighteen Diamonds"), original colors.
  Source: `iCloudDrive/018 Logos/Definitif/Logos/Logo 18 D outline.svg` (vector equivalent of
  `18D Outlined.ai`).
- `assets/logo-light.svg`: same logo with light text, for the dark header.
- `assets/logo-header.svg`: header-only version of `logo-light.svg` with the "Eighteen Diamonds"
  wording twice as large and set further from the diamond (owner request). Used in the header and
  the footer. On phones the header phone number uses tighter letter spacing so both fit.
- `assets/mark.svg`: diamond icon only, also used as favicon.

## Decisions

- Hero: on landscape screens the photo covers the hero and the copy sits under the wall sign;
  on portrait screens (`max-aspect-ratio: 5/4`) the photo is scaled to show the whole sign at the
  top and fades into navy under the copy. There the hero is at least one screen tall (`100lvh`, so it also runs under iPhone Safari's floating toolbar) so the
  ivory section never shows on first load, and the strip above the photo is plain navy with the photo
  fading into it (the mirrored strip showed a flipped copy of the sign on phones).
- Privacy page text is the SMS/mobile wording provided by the owner, used verbatim.
- Copy avoids specific claims (years in business, opening hours, certifications) until confirmed.
- No "open a trade account" call to action (owner request); main actions are call and email.
- Page sections: hero, intro statement, six services, "We buy" band, visit (address, phone, email,
  Google Maps embed), footer. Navy and ivory alternate. `assets/site.js` handles the header on scroll
  and fade-in on scroll.
- Hero height is capped (`clamp(560px, 50vw, 820px)`) so it does not take the whole screen.

## DNS

See [godaddy-dns.md](godaddy-dns.md).

## Local preview

```bash
npx serve@14.2.4 -l 4321 .
```

## Status

- 2026-10-15: first version of landing page and privacy page built and pushed.
- 2026-10-15: Vercel project created and deployed (https://18diamonds.vercel.app). Domains added:
  `www.eighteendiamonds.com` is the primary domain, `eighteendiamonds.com` redirects to it (308).
  GoDaddy DNS set: `A @ 216.198.79.1` (new record) and `CNAME www cd4c18f513f8d8da.vercel-dns-017.com`
  (was `eighteendiamonds.com.`). Email records (Microsoft 365 MX, SPF, autodiscover) unchanged.
  Vercel reported www as Valid Configuration; SSL for the apex was being issued.
- 2026-10-15: redesign: services now include vintage and estate jewelry, watches and diamond buying;
  address, phone and map added; shorter hero.
- 2026-10-15: footer bottom line: copyright left, "Forged by" + 18 Forge logo centered, linking to
  https://18forge.com (hover color #f37021), same credit as the 58 Diamonds site. Hero top band
  removed: the strip above the photo shows a mirrored copy of the wall (`.hero::before`).
