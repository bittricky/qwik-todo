# Qwik Todo

A modern, fast Todo application built with Qwik and TailwindCSS. This application demonstrates the power of Qwik's resumability and fine-grained reactivity features.

## Prerequisites

- Node.js (^18.17.0 || ^20.3.0 || >=21.0.0)
- pnpm (^8.15.6)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd qwik-todo
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `pnpm dev` - Start development server with SSR
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm fmt` - Format code with Prettier
- `pnpm fmt.check` - Check code formatting

## Project Structure

```
qwik-todo/
├── src/
│   ├── components/     # Reusable UI components
│   ├── routes/         # Application routes and pages
│   ├── entry.dev.tsx   # Development entry point
│   ├── entry.ssr.tsx   # Server-side rendering entry point
│   ├── global.css      # Global styles
│   └── root.tsx        # Root component
├── public/             # Static assets
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.ts      # Vite configuration
```

## Technologies Used

- [Qwik](https://qwik.builder.io/) - The HTML-first framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
