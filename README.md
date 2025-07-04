#  Events Explorer - Next.js Developer Assessment

A fully responsive **Events Explorer** web app built using **Next.js**, **TypeScript**, and **Tailwind CSS**. This app lists mock events, allows filtering by location, and supports dynamic routing to detailed event pages — all optimized for SEO and accessibility.

---

##  Features

-  List of 6–10 mock events from local JSON file
-  Filter events by location (client-side only)
-  Dynamic routing with static generation using `[id].tsx`
-  Uses `getStaticPaths` and `getStaticProps`
-  Fully responsive layout with Tailwind CSS
-  SEO optimized using `next/head`
-  Accessible with semantic HTML elements and keyboard navigation

---

##  Tech Stack

- [Next.js v15 (Pages Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Static data via local `events.json`

---

##  Folder Structure

    events-explorer/
    ├── components/           # Reusable UI components (e.g., EventCard, Layout)
    │   ├── EventCard.tsx
    │   └── Layout.tsx
    │
    ├── data/                 # Local mock data
    │   └── events.json
    │
    ├── pages/                # All application routes
    │   ├── api/              # API route (default placeholder)
    │   ├── events/           # Dynamic route for event details
    │   │   └── [id].tsx
    │   ├── _app.tsx          # Global app config
    │   ├── _document.tsx     # Custom HTML document
    │   └── index.tsx         # Home page (event list + filter)
    │
    ├── public/               # Static assets (images, icons)
    │
    ├── styles/               # Global styles
    │   └── globals.css
    │
    ├── types/                # TypeScript type declarations
    │   └── index.ts
    │
    ├── .gitignore
    ├── README.md
    ├── next.config.ts
    ├── package.json
    ├── package-lock.json
    ├── postcss.config.mjs
    ├── tailwind.config.js
    └── tsconfig.json


##  Installation & Running the App Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/PrithviGowda16/events-explorer.git
   cd events-explorer

##  Vercel Live Demo Link

    [Live Demo Link](https://events-explorer-two.vercel.app/)


##  Notes on Improvements (if more time were available)

-  List of 6–10 mock events from local JSON file.
-  Add filters by date and category, not just location.
-  Add event cover images to enhance UI and storytelling.
-  Add buttons to share events via WhatsApp, Twitter, or Facebook.
-  Let users save events for later viewing like Bookmark/Favorite.