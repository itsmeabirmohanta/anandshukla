# Anand Replica Site

[![CI](https://github.com/itsmeabirmohanta/anand-replica-site/workflows/CI/badge.svg)](https://github.com/itsmeabirmohanta/anand-replica-site/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, responsive replica website built with React, TypeScript, and Tailwind CSS. Features a clean design with advanced security implementations, performance optimizations, and accessibility features.

## ✨ Features

- 🎨 Modern, responsive UI with Tailwind CSS
- ⚡ Fast performance with Vite
- 🔒 Advanced security features (XSS protection, CSRF tokens, rate limiting)
- ♿ Accessibility-first approach
- 📱 Mobile-friendly design
- 🎭 Smooth animations and transitions
- 🧩 Modular component architecture
- 🔧 TypeScript for type safety

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/itsmeabirmohanta/anand-replica-site.git
   cd anand-replica-site
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` to view the application.

## 📦 Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🛠️ Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Forms:** React Hook Form + Zod
- **State Management:** TanStack Query
- **Carousel:** Embla Carousel

## 📁 Project Structure

```
anand-replica-site/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   └── ui/         # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   ├── utils/          # Helper utilities
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── .github/            # GitHub workflows and templates
└── docs/               # Documentation files
```

## 🔒 Security Features

This project includes comprehensive security measures:

- XSS (Cross-Site Scripting) protection
- CSRF (Cross-Site Request Forgery) tokens
- Content Security Policy (CSP)
- Rate limiting
- Session timeout management
- Bot detection
- Clickjacking prevention

For more details, see [SECURITY_FEATURES.md](docs/SECURITY_FEATURES.md).

## 🎨 Components

The project uses [shadcn/ui](https://ui.shadcn.com/) components for a consistent and modern UI. All components are:

- Fully customizable
- Accessible (WCAG compliant)
- TypeScript ready
- Dark mode compatible

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](docs/CONTRIBUTING.md) for details on how to submit pull requests, report issues, and contribute to the project.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📚 Documentation

- [Architecture Overview](docs/ARCHITECTURE.md)
- [Security Features](docs/SECURITY_FEATURES.md)
- [Implementation Summary](docs/IMPLEMENTATION_SUMMARY.md)
- [Quick Start Guide](docs/QUICK_START.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Changelog](docs/CHANGELOG.md)
- [Known Issues](docs/KNOWN_ISSUES.md)
- [Code of Conduct](docs/CODE_OF_CONDUCT.md)

## 🐛 Bug Reports & Feature Requests

If you find a bug or have a feature request, please open an issue on our [GitHub Issues](https://github.com/itsmeabirmohanta/anand-replica-site/issues) page.

## 👨‍💻 Author

**Abir Mohanta**

- GitHub: [@itsmeabirmohanta](https://github.com/itsmeabirmohanta)

## 🙏 Acknowledgments

- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

---

Made with ❤️ by Abir Mohanta
