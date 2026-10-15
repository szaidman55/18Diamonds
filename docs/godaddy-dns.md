# Pointing eighteendiamonds.com (GoDaddy) to Vercel

The site is hosted on Vercel and deployed from the GitHub repo `szaidman55/18diamonds`.
The domain stays registered at GoDaddy; only two DNS records change.

## Current setup (done 2026-10-15)

| Type  | Name  | Value                                  |
| ----- | ----- | -------------------------------------- |
| A     | `@`   | `216.198.79.1`                         |
| CNAME | `www` | `cd4c18f513f8d8da.vercel-dns-017.com`  |

`www.eighteendiamonds.com` is the primary domain; `eighteendiamonds.com` redirects to it.
GoDaddy asks for identity verification (text code or security key) on every DNS change.

The steps below explain how this was set up.

## 1. Add the domain in Vercel

1. Open the project in the Vercel dashboard.
2. Go to **Settings > Domains**.
3. Add `eighteendiamonds.com`. When asked, also add `www.eighteendiamonds.com`
   (Vercel recommends redirecting the apex to `www`; that is what is set up).
4. Vercel then shows the exact DNS records it wants. Keep that page open: if its values differ
   from the ones below, use Vercel's values.

## 2. Change the DNS records at GoDaddy

1. Sign in at godaddy.com and open **My Products**.
2. Next to `eighteendiamonds.com`, choose **DNS** (or **Manage DNS**).
3. If the domain is **parked** or has **Forwarding** turned on:
   - In the **Forwarding** section, delete any domain forwarding.
   - The parked page is the `A` record with name `@` and value `Parked`. It is replaced in the
     next step.
4. Edit the records so they match this table:

| Type  | Name  | Value                                           | TTL         |
| ----- | ----- | ----------------------------------------------- | ----------- |
| A     | `@`   | `76.76.21.21` (or the IP Vercel shows)           | 1 hour      |
| CNAME | `www` | `cname.vercel-dns.com` (or the value Vercel shows) | 1 hour    |

   - Edit the existing `A @` record (value `Parked` or another IP) and set it to the Vercel IP.
     There must be only **one** `A` record for `@`. Delete any other `A @` records.
   - Edit the existing `CNAME www` record (usually `@` or `eighteendiamonds.com`) and set it to
     the Vercel value.
   - Delete any `AAAA` record with name `@` if one exists.
5. Save.

## Do not touch

- **MX records**, and `TXT` records with `v=spf1`, `DKIM` or `_dmarc`. These deliver email for
  `info@eighteendiamonds.com`. Changing them would stop email.
- `NS` (nameserver) and `SOA` records. Keep GoDaddy's nameservers.

## 3. Check

- Back in **Vercel > Settings > Domains**, both domains should show **Valid Configuration**
  within minutes (DNS can take up to 48 hours, usually under one hour).
- Vercel issues the HTTPS certificate automatically once the records are valid.
- Test: https://eighteendiamonds.com and https://www.eighteendiamonds.com and
  https://eighteendiamonds.com/privacy
