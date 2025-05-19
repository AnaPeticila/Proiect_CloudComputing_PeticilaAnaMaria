# 🌍 Ghid de Călătorii - Aplicație Web

## 📌 Introducere
Acest proiect constă în realizarea unei aplicații web de tip **„Ghid de călătorii”**, dezvoltată în **JavaScript** folosind **Next.js** și **MongoDB**. Utilizatorii pot:
- Împărtăși experiențele lor din diverse excursii
- Consulta informații utile pentru viitoare vacanțe
- Folosi aplicația cu sau fără autentificare

Scopul este de a maximiza **accesibilitatea** și **ușurința în utilizare**, oferind un spațiu sincer și comunitar de schimb de informații.

---

## ❗ Problema
Lipsa unei platforme centralizate unde utilizatorii obișnuiți să documenteze și consulte informații reale despre călătorii duce la:
- Dificultăți în planificarea vacanțelor
- Dependenta de forumuri generale sau bloguri sponsorizate

🔍 Soluția propusă: o platformă fără bias comercial, unde oricine poate contribui cu experiențe personale.

---

## 🧠 Descriere API
- API-ul este creat cu **Next.js** (rute API)
- Stochează și gestionează:
  - Înregistrarea / autentificarea utilizatorilor
  - Postările legate de călătorii
- **MongoDB** este folosită pentru stocarea datelor.
- API-ul a fost testat cu **Postman**.

---

## 🔁 Flux de date & Exemple de request/response

### 🔸 `POST /api/posts`
Adaugă o postare nouă:
```json
{
  "title": "Vacanță în Roma",
  "content": "Am vizitat Colosseumul și Vaticanul. Recomand!"
}



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

