# Contributing to Anand Replica Site

Thank you for your interest in contributing! We welcome contributions from the community.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:

- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (browser, OS, etc.)

### Suggesting Features

We welcome feature suggestions! Please open an issue with:

- A clear description of the feature
- Use cases and benefits
- Any implementation ideas

### Pull Requests

1. **Fork the repository** and create your branch from `main`

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards:

   - Write clean, readable code
   - Follow the existing code style
   - Add comments where necessary
   - Keep commits focused and atomic

3. **Test your changes**:

   ```bash
   npm run dev     # Test in development
   npm run build   # Ensure it builds successfully
   npm run lint    # Check for linting errors
   ```

4. **Commit your changes** with clear commit messages:

   ```bash
   git commit -m "feat: add new feature"
   ```

   Follow conventional commits:

   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation changes
   - `style:` for formatting changes
   - `refactor:` for code refactoring
   - `test:` for adding tests
   - `chore:` for maintenance tasks

5. **Push to your fork** and submit a pull request:

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Describe your PR** with:
   - What changes you made
   - Why you made them
   - Any related issues

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/anand-replica-site.git
cd anand-replica-site

# Install dependencies
npm install

# Start development server
npm run dev
```

## Code Style

- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Keep components small and focused
- Use Tailwind CSS for styling
- Follow the existing project structure

## Questions?

Feel free to open an issue if you have any questions about contributing!

## Code of Conduct

Please be respectful and constructive in all interactions. We aim to maintain a welcoming and inclusive community.
