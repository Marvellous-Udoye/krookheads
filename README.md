# Krookheads — Website

Official headquarters of the Krookheads universe.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## ⚠️ One manual step needed

Drop OpenSea's real official logo SVG into `public/icons/`. Full
instructions and the exact download link are in
`public/icons/README.md` — short version: this sandbox couldn't
download binary assets, so `Footer.tsx` points at
`/icons/opensea-logomark.svg`, which doesn't exist until you add it.
Nothing else is blocked by this.

## V2 — Refinement pass (quality over quantity)

No new sections this round. Every existing section (Hero, Dossier,
Recovered Files, Collection Information, Operation Timeline) plus
Navbar and Footer were revisited against seven goals:

**1. Mobile-first pass** — nav touch targets bumped to 44px, mobile
link padding increased, breakpoints re-checked at 640/768.

**2. Simplified the archive aesthetic** — the biggest single fix: the
bordered `<Stamp />` "FILE 00X // SECTION NAME" pattern was repeated
as a header on every section, plus per-item stamps inside Recovered
Files (6) and Operation Timeline (5). That's what made each section
read as "another classified document." Stamp is now used exactly
**once** on the whole page (Hero's sighting tag) — every other
section header uses the new quiet `<SectionLabel />` (no border, light
tracking). Corner-bracket frames are similarly down to one place
(Hero) instead of appearing on Dossier's panel and every file card.

**3. Visual hierarchy / spacing** — Hero dropped its compact Archive
Status module so the headline isn't sharing attention with a data
box. Recovered Files' grid gap widened now that cards are chrome-free.
Collection Info's stat "spreadsheet" (hairline grid) became a plain
generously-spaced fact list.

**4. Footer — complete redesign.** Old footer: bordered two-column
layout, a full data-grid Archive Status card, plus a separate bordered
box with a rotating log ticker and live clock. New footer: one
editorial column stack — brand block, quick nav links, socials, a
single quiet one-line Archive Status, legal line. Log ticker and live
clock are dropped entirely (components still exist in `ui/` if a
future section wants that flavor, just unused here now).

**5. OpenSea logo** — see the manual step above. Rather than
freehand-redraw their trademark a second time (the actual root cause
of "incorrect logo"), `Footer` now points at a real asset path with
exact official download links documented.

**6. Typography audit** — body copy bumped from `beige/80` to
`beige/90` for better contrast. Introduced a lighter `tracking-wide`
token (0.06em) for general UI text (nav links, labels, captions);
the heavy 0.2em+ tracking is now reserved for the two places it's a
deliberate brand choice — the wordmark and buttons — instead of
scattered across every label and stamp.

**7. Reduced UI chrome** — `FileCard` dropped its corner brackets and
always-visible bordered status stamp in favor of a soft caption
gradient (subject number only) and a status dot that reveals its
label on hover. Dossier's placeholder panel lost its corner brackets
and crimson "pending" stamp for a single quiet caption. Operation
Timeline's five per-phase status stamps became plain colored text
next to the rail's existing dot (which already carried that signal —
the stamp was redundant).

## What's built

1. **Foundation** — Next.js 14, TypeScript, Tailwind token system,
   Framer Motion, Navbar, Hero, Footer, shared `ui/` library.
2. **The Dossier** — world/identity intro.
3. **Recovered Files** — six real Krookheads pieces in `public/subjects/`.
4. **Collection Information** — 5,555 supply, Arc Mainnet, 3 per
   wallet, status `PENDING`. Mint price is `"Coming Soon"` (no
   currency ticker) until final pricing is confirmed.
5. **Operation Timeline** — five-phase, dateless anticipation rail,
   kept in sync with `collection-info.status`.

## Config-driven CTA / links

**Nothing about mint or wallet connection lives on this site.**
`config/links.ts` is the single source for the primary CTA. When mint
goes live:

```ts
export const ctaConfig: CtaConfig = {
  primary: {
    label: "Mint on OpenSea",
    href: "https://opensea.io/collection/krookheads",
    external: true,
  },
  ...
};
```

Also update at that point: `config/collection-info.ts` → `status:
"ACTIVE"`, and `config/operation-timeline.ts`'s Phase 03/04 statuses.

## Adding the next section

1. Create `components/sections/<Name>.tsx`.
2. Import it into `app/page.tsx`, after the last existing section.
3. In `config/nav.ts`, flip that item's `enabled` to `true` — Navbar
   and Footer's quick links both read from this automatically.

Use `<SectionLabel>` for the header, not `<Stamp>` — Stamp is reserved
for Hero only, per the V2 simplification above.

## Folder structure

```
app/                 # routes, root layout, global CSS
components/
  layout/            # Navbar, Footer, PageShell
  sections/          # Hero, Dossier, Recovered Files, Collection Information,
                      # Operation Timeline
  ui/                # portable design-system primitives
  icons/             # inline SVG social icons (X, Discord — OpenSea via public/icons/)
config/              # site metadata, nav IA, CTA/social links, archive status,
                      # recovered files, collection info, operation timeline
lib/                 # motion tokens, cn() utility, hooks
types/               # shared TypeScript interfaces
public/
  textures/           # grain.svg
  subjects/           # real Krookheads artwork (Recovered Files)
  icons/               # OpenSea official asset goes here (see README.md there)
```

## Not built yet (by design)

Traits, Intelligence Briefing, and Community — paused per V2 refinement
priority. `config/nav.ts` lists both with `enabled: false`.
