### ✅ STEP 1: Scaffold the App

Based on this PRD, scaffold a Next.js 14 app using App Router, pnpm, Supabase, and Shadcn UI. Include:

- Supabase project initialization
- Auth setup (email login)
- Vercel Analytics setup
- Tailwind config
- Project structure: `components/`, `lib/`, `app/`, `types/`, etc.

### ✅ STEP 2: Build the Landing Page

Create a simple landing page for Taxm8 with:

- Hero section (H1: “Your AI-Powered Aussie Tax Mate”)
- Tagline
- Feature list (chat, grounded in ATO docs, instant answers)
- CTA: “Start Chatting”
- Login/signup button if user not authenticated
  Use Shadcn components.

### ✅ STEP 3: Implement Supabase Auth

Set up Supabase Auth for email/password login.

- Create sign-in and sign-up pages
- Use Supabase client
- Show user info when logged in
- Redirect to chat after login

### ✅ STEP 4: Build AI Chat Interface

Build a chat interface using OpenAI GPT-4 Turbo:

- Message input and display
- Streamed responses
- Store chat history in local state (MVP) - update this to store chat history in Supabase in the future (maybe a premium feature?)
- Add disclaimer above chat box
  Use Shadcn UI components.

### ✅ STEP 5: Integrate Vercel Analytics

Set up Vercel Analytics for this project.

- Add the Vercel Analytics script
- Track page views and user sessions

### ✅ STEP 6: Build RAG System for ATO Docs

Implement a simple RAG system:

- Take ATO fact sheets and rulings (plain text or markdown)
- Chunk the text (~500–800 tokens per chunk)
- Embed chunks with `text-embedding-3-small`
- Store in Supabase pgvector table
- On chat query, run hybrid search to retrieve top 5 chunks
- Inject retrieved context into the system prompt
- Use that to answer with GPT-4 turbo

### ✅ STEP 7: Display Sources in Chat

Update the AI response renderer to show cited sources:

- At the bottom of each answer, list source titles (e.g. “TR 2022/1”)
- Optionally, link to original ATO page if available

### ✅ STEP 8: Add Feedback UI

Let users rate each AI response with thumbs up/down.

- Store response feedback in Supabase
- Optional: Add “Leave a comment” field

### ✅ STEP 9: Deploy to Prod

Prepare project for deployment:

- Buy .com.au domain
- Config domain in Vercel
- Add Redirect URL to Supabase under Auth/URL Config
- Deploy and test end-to-end flow

### Step 10: Add an email provider

- Supabase emails aren't meant to be used for prod environments.

### ✅ TODO:

- Add email verification for joining the waitlist.
- If OpenAI Becomes too expensive, switch to DeepSeek
- Make sure all env variables are added to Vercel
- Need to add a Forgot Password flow
