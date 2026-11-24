# Eighteen Diamonds: status

**Updated:** 2026-11-24 17:25 CET (handoff run, Mac). Git state checked today; no change since 14 Nov. This file lives on branch `status-handoff`, not `main`: pushing `main` publishes the live site on Vercel. Local `main` has no commits origin lacks.

## State
Static landing page (`index.html`, `privacy.html`, `assets/`) on Vercel, project `18diamonds` (team "18D"), deployed from `main` at https://www.eighteendiamonds.com. Latest commit on `origin/main` is 7a53558 (14 Nov): phone hero spacing and scroll chevron, footer logo wording matches the header. The Mac working copy is clean and matches `origin/main`.

## In progress
- Local branch `status-handoff-2026-11-16` exists only on the Mac and was never pushed. Check it before deleting anything.
- Nothing else open that the repo records.

## Needs Sacha
- Nothing blocked. DNS changes are made at GoDaddy by Sacha (see `docs/godaddy-dns.md`).

## Next steps
1. After any push to `main`, check the live site on Vercel.
2. Confirm any new copy, price or claim with the owner before adding it (`docs/project-notes.md`: no specific claims until confirmed).
3. Add a dated line to `docs/project-notes.md` after each change.

## Watch out
- Pushing `main` changes the live site at once. Push only finished work.
- No years in business, opening hours or certifications until the owner confirms them.
- The header and footer both use `assets/logo-header.svg`.
- Worktree branches are never pushed as they are: rename or merge first.
