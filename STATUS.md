# Eighteen Diamonds Inc: status

**Updated:** 2026-11-16 (handoff from the Mac working copy). Committed on branch `status-handoff-2026-11-16`, not on `main` (see Needs Sacha).

## State
Static landing page and privacy page at www.eighteendiamonds.com (Vercel, team "18D", project `18diamonds`). Pushing `main` goes live. Last change: footer logo and phone hero layout (commit 7a53558 and the commits before it). Working tree is clean on `main`, in sync with origin.

## In progress
- Nothing half done.

## Needs Sacha
1. Decide where handoff notes live for this site. This file sits on its own branch so it does not reach the live site; merging it to `main` would publish it with the next deploy.
2. Check whether `docs/` should be public. There is no `.vercelignore`, so the Vercel static deploy probably serves `docs/project-notes.md` and `docs/godaddy-dns.md` at www.eighteendiamonds.com/docs/.

## Next steps
1. Keep `docs/project-notes.md` as the record of changes, and add dated lines there.
2. Check the live site returns 200 after any push to main.

## Watch out
- Every push to `main` goes live on Vercel.
- DNS is at GoDaddy (see `docs/godaddy-dns.md`). Email records (Microsoft 365 MX, SPF, autodiscover) must stay as they are.
- Never write secrets into the repo.
- Work not yet approved for `main` goes on a named branch, never straight to `main`.
