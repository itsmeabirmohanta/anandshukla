# Known Issues

This document tracks known issues in the project that are pending resolution.

## Linting Warnings/Errors

### Low Priority - UI Component Files

The following linting issues exist in UI component files (from shadcn/ui):

1. **Fast Refresh Warnings** (7 warnings)

   - Files: `badge.tsx`, `button.tsx`, `form.tsx`, `navigation-menu.tsx`, `sidebar.tsx`, `sonner.tsx`, `toggle.tsx`
   - Issue: Files export both components and constants/functions
   - Impact: Minimal - affects hot reload in development only
   - Resolution: Can be fixed by separating constants into separate files if needed

2. **Empty Interface** (2 errors)

   - Files: `command.tsx`, `textarea.tsx`
   - Issue: Empty interfaces that extend other types
   - Impact: None on functionality
   - Resolution: Can use `type` instead of `interface` or add explicit members

3. **Require Import** (1 error)
   - File: `tailwind.config.ts`
   - Issue: Uses `require()` for tailwindcss-animate plugin
   - Impact: None on functionality
   - Resolution: Can be converted to ES6 import if needed

### Status

These issues are **non-critical** and do not affect:

- ✅ Application functionality
- ✅ Build process
- ✅ Production deployment
- ✅ User experience

### Next Steps

- [ ] Consider fixing empty interfaces by converting to types
- [ ] Update tailwind.config.ts to use ES6 imports
- [ ] Optionally separate constants from component files
- [ ] Or suppress specific warnings in ESLint config if deemed acceptable

## Build Status

Despite linting warnings, the application:

- ✅ Builds successfully
- ✅ Runs without errors
- ✅ Passes all functional tests
- ✅ Ready for deployment

## Notes for Contributors

When contributing:

- Follow existing code patterns
- Address linting warnings when modifying affected files
- Run `npm run lint` before submitting PRs
- Discuss major linting rule changes in issues first

---

**Last Updated:** October 7, 2025
