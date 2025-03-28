# Taxm8 - AI-Powered Australian Tax Advisor

## Overview

**Taxm8** is an AI-powered web application designed to provide real-time, accurate guidance for individuals navigating the Australian tax system. It helps users understand their tax obligations, deductions, and filing requirements by answering natural language questions and providing structured guidance using the latest ATO documents and legislation.

## Core Features

- **AI Chatbot**: Interact with an AI to ask tax-related questions in natural language.
- **RAG (Retrieval-Augmented Generation)**: Provides answers grounded in ATO documentation.
- **Document Search**: Search through tax rulings, deductions, and guides.
- **Auth**: Secure login with Supabase Auth, with an optional anonymous trial.
- **Session History**: Optionally store past chats per user.
- **Feedback System**: Users can rate answers and flag inaccuracies.
- **Analytics**: Track performance and user behavior with Vercel Analytics.

## Tech Stack

- **Frontend**: Next.js (App Router) + Shadcn UI
- **Auth**: Supabase Auth
- **Backend**: Supabase (Postgres, Edge Functions)
- **AI**: OpenAI API (GPT-4 Turbo)
- **Vector DB**: Supabase Vector Store (pgvector)
- **Package Manager**: pnpm
- **Hosting**: Vercel
- **Analytics**: Vercel Analytics

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- pnpm as the package manager.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/taxm8.git
   cd taxm8
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your environment variables. Refer to `.env.example` for the required variables.

4. **Run the development server:**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

The application is hosted on Vercel. For deployment, push your changes to the main branch, and Vercel will automatically build and deploy the latest version.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for more details.

## Contact

For any inquiries, please contact [me](mailto:me@perryfardella.com).
