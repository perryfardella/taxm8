# 🧾 Product Requirements Document (PRD) – Taxm8

---

## 1. Product Name

**Taxm8** – An AI-powered Australian Tax Advisor web application that provides real-time, accurate guidance for individuals navigating the Australian tax system.

---

## 2. Overview

Taxm8 is a trusted, AI-powered web app designed to help Australian individuals understand their tax obligations, deductions, and filing requirements. It answers natural language questions about tax and provides structured guidance using the latest ATO documents and legislation.

---

## 3. Goals

- Provide easy-to-understand, AI-assisted tax help for individuals in Australia.
- Build trust through authoritative, grounded answers.
- Create an MVP with a fast, intuitive interface, leveraging AI and official ATO data.

---

## 4. Target Audience

- Freelancers & gig workers (Uber, Airtasker, Upwork)
- Side hustlers & sole traders
- Crypto traders
- Young professionals doing DIY tax returns

---

## 5. Core Features (MVP)

- **AI Chatbot**: Ask tax-related questions in natural language.
- **RAG (Retrieval-Augmented Generation)**: Answers are grounded in ATO documentation.
- **Document Search**: Searchable tax rulings, deductions, and guides.
- **Auth**: Supabase Auth for email login (anonymous trial optional).
- **Session History**: Store past chats per user (MVP optional).
- **Feedback System**: Users can rate answers and flag inaccuracies.
- **Analytics**: Vercel Analytics to track performance and user behavior.

---

## 6. Tech Stack

| Layer       | Stack                               |
| ----------- | ----------------------------------- |
| Frontend    | Next.js (App Router) + Shadcn UI    |
| Auth        | Supabase Auth                       |
| Backend     | Supabase (Postgres, Edge Functions) |
| AI          | OpenAI API (GPT-4 Turbo)            |
| Vector DB   | Supabase Vector Store (pgvector)    |
| Package Mgr | pnpm                                |
| Hosting     | Vercel                              |
| Analytics   | Vercel Analytics                    |

---

## 7. AI System Design

- **Model**: OpenAI GPT-4-turbo
- **Embedding Model**: `text-embedding-3-small`
- **RAG Pipeline**:
  - Chunk and preprocess ATO content (e.g., PDF fact sheets, web docs).
  - Store embeddings in Supabase Vector.
  - On query, fetch top N results using hybrid semantic + keyword search.
  - Inject those chunks as system context before sending to OpenAI.

---

## 8. Tone & Compliance

- **Voice**: Friendly, confident, and professional.
- **Transparency**: All answers include references (e.g., “According to TR 2023/1...”).
- **Compliance**:
  - Clear disclaimers: "General information only – not a registered tax agent."
  - Checkbox or warning before chat begins.

---

## 9. Monetization (Future)

- Free tier: Limited queries
- Paid plan: Unlimited queries, saved sessions, downloadable PDFs
- Lifetime deal (optional): One-time purchase
- Optional affiliate/referral revenue (e.g. to tax agents or crypto tax platforms)

---

## 10. Milestones

| Feature                    | ETA     |
| -------------------------- | ------- |
| Project scaffolding        | Day 1   |
| Basic chat UI              | Day 2–3 |
| RAG integration            | Day 4–6 |
| Auth & analytics           | Day 7   |
| Initial MVP live on Vercel | Week 2  |

---

## 11. Non-MVP Features (Future Phases)

- AI tax checklists
- Scenario calculators (e.g., PAYG vs sole trader)
- Integration with ATO pre-fill APIs (long-term)
- SME/business support
- Accountant-facing dashboard

---
