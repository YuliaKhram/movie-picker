# Movie Picker

A web application to discover and pick your next favorite movie.

## Tech Stack

- **Next.js 16** with TypeScript and App Router
- **React 19** with TanStack Query for data fetching
- **Environment-based Configuration**

## Setup Instructions

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Running the Project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
npm start
```

## Environment Variables

Copy `.env.example` to your local setup or create a `.env.local` file:

```bash
cp .env.example .env.local
```

Available environment variables:

- `USE_MOCK_DATA` - Use mock data instead of real API calls (default: `true`)
- `TMDB_BEARER_TOKEN` - The Movie Database API bearer token (leave empty for mock data)
- `ENABLE_LLM` - Enable Large Language Model integration (default: `false`)
- `LLM_PROVIDER` - LLM provider to use (default: `ollama`)

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout with QueryProvider
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
└── providers/        # Context providers
    └── query-provider.tsx  # TanStack Query provider
```
