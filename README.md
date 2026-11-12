# Netflix Clone (Next.js, Prisma, MongoDB)

A full-stack streaming-site clone built to practise authentication, server-side APIs and a database-backed UI. Learning project, not affiliated with Netflix.

## Features

- **Authentication** with NextAuth: email and password (bcrypt-hashed), **Google** and **GitHub** OAuth, JWT sessions.
- **Profiles page** after sign-in, protected routes via a server-side auth helper.
- **Billboard** with a random featured movie from the API (`/api/random`).
- **Responsive navbar** with mobile menu and account menu.
- Data fetching with **SWR**, global state with **Zustand**.

## Tech stack

Next.js (Pages Router) · React · TypeScript · Tailwind CSS · NextAuth · Prisma · MongoDB · SWR · Zustand · Axios

## Project structure

```
pages/        auth, profiles, home + API routes (auth, register, current user, random movie)
components/   Navbar, Billboard, AccountMenu, MobileMenu, Input
hooks/        useCurrentUser, useBillboard
lib/          Prisma client, SWR fetcher, server-side auth check
prisma/       schema: User, Account, Session, Movie (MongoDB)
movies.json   sample movie data
```

## Run it locally

Requirements: Node.js 18+ and a MongoDB database (Atlas works).

```bash
npm install
```

Create `.env`:

```
DATABASE_URL=mongodb+srv://...
NEXTAUTH_SECRET=...
NEXTAUTH_JWT_SECRET=...
GITHUB_ID=...
GITHUB_SECRET=...
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
```

Then:

```bash
npx prisma db push
npm run dev
```

Open http://localhost:3000.

## Author

Ridha Lezzar · [LinkedIn](https://linkedin.com/in/ridha-lezzar-8322222b5)
