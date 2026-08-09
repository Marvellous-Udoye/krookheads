# Krookheads Website

Krookheads is an underground digital archive built around 5,555 recovered subject files and the fragments of an operation that was never meant to be exposed. This site expresses that identity through classified documents, recovered artwork, and a controlled, immersive presentation.

## Overview

This repository implements a Next.js archive experience for the Krookheads universe. The site is structured to feel like a recovered dossier and recovered evidence trail, using narrative sections, subject files, and an anticipation-driven timeline rather than a traditional marketing landing page. It does not include minting or wallet connection functionality.

## Features

- Professional, responsive one-page layout
- Hero section with signature Krookheads styling
- Dossier and collection overview panels
- Recovered Files gallery using real subject assets
- Operation Timeline for campaign anticipation
- Config-driven navigation, CTA, and status data
- Lightweight shared UI components and motion support

## Built With

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Custom design system primitives in `components/ui`

## Getting Started

Clone the repository, install dependencies, and run the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Manual Asset Step

The footer requires an official OpenSea logo SVG asset at `public/icons/opensea-logomark.svg`.

- Follow the instructions in `public/icons/README.md` for the correct asset.
- The site will run normally without this file, but the footer link will not render the logo until the file is present.

## Project Structure

- `app/` — Next.js routes, layout, and global styles
- `components/layout/` — global layout components such as `Navbar`, `Footer`, and `PageShell`
- `components/sections/` — page sections like `Hero`, `Dossier`, `RecoveredFiles`, `CollectionInfo`, and `OperationTimeline`
- `components/ui/` — reusable UI primitives used across the site
- `config/` — navigation, links, collection data, timeline data, and archive status
- `lib/` — utility functions, motion presets, and custom hooks
- `public/` — static assets, textures, and recovered subject artwork
- `types/` — shared TypeScript interfaces

## Configuration

Most site content is driven by configuration files in `config/`.

- `config/nav.ts` controls navigation items and quick links
- `config/links.ts` defines the primary CTA and social links
- `config/collection-info.ts` stores supply, network, wallet limit, and status
- `config/operation-timeline.ts` defines the timeline phases and progress

> Note: The site currently does not implement minting or wallet connection. Primary CTAs are managed through configuration only.

