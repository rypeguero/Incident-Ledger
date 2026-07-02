# Incident Ledger

A full-stack incident tracking application for documenting incidents, recording actions taken, managing status changes, and supporting cleaner operational handoffs.

## About

Incident Ledger helps teams maintain accountability and transparency during incident response. The app supports structured incident logging, timestamps, status tracking, and reporting-oriented documentation across software development, building management, custodial work, and healthcare environments.

## Tech Stack

- **Framework**: Next.js
- **UI Library**: React
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Runtime**: Node.js
- **Database**: PostgreSQL
- **API Style**: Next.js API routes / REST-style endpoints

## Requirements

- Node.js 18 or higher
- npm, yarn, pnpm, or bun package manager
- PostgreSQL database
- `DATABASE_URL` environment variable

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/rypeguero/Incident-Ledger.git
cd Incident-Ledger
```

2. Install dependencies:
```bash
npm install
```

3. Configure the database connection:
```bash
DATABASE_URL="postgresql://username:password@localhost:5432/incident_ledger"
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features

- Multi-category incident tracking for software, building, custodial, and healthcare workflows
- PostgreSQL-backed incident records
- Comprehensive incident logging with timestamps and status tracking
- Action and result documentation
- Status management: Open, Investigating, Resolved
- Responsive UI with navigation patterns
- Contact form for feature requests

## Project Status

This is a beta project in active development. The current focus is strengthening the PostgreSQL-backed workflow, improving reporting features, and refining the user experience.
