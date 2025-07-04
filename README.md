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
    ├── components/
    │ └── EventCard.tsx
    ├── data/
    │ └── events.json
    ├── pages/
    │ ├── events/
    │ │ └── [id].tsx
    │ ├── _app.tsx
    │ ├── _document.tsx
    │ └── index.tsx
    ├── public/
    ├── styles/
    ├── types/
    │ └── index.ts
    ├── README.md
    ├── package.json
    ├── tailwind.config.js
    └── tsconfig.json

##  Installation & Running the App Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/PrithviGowda16/events-explorer.git
   cd events-explorer

##  Vercel Live Demo Link

    [Live Demo Link](https://events-explorer-two.vercel.app/)

