# Changelog — SAMRAH PRIVE

## [v1.0.1] - 2026-07-15

### Added
- Created `SocialIcon.tsx` component to DRY up duplicate icons
- Created `NotFound.tsx` for 404 page routes
- Extracted agents and testimonials data into `src/data/agents.ts` and `src/data/testimonials.ts`
- Generated `sitemap.xml` with dynamic and static routes and updated `robots.txt`
- Added GitHub Actions workflow (`.github/workflows/deploy.yml`) for automatic deployment to cPanel via FTP

### Fixed
- Fixed broken CEO image by copying it to `public/images/`
- Fixed 'SAMRA PRIVE' typos in `index.html` and `Contact.tsx`
- Fixed invalid double `<main>` tag nesting in `Layout.tsx`
- Fixed broken hover zoom effect in `Properties.tsx` by adding `group` class
- Fixed `PropertyDetail.tsx` to display property image
- Fixed full page reloads by replacing `<a>` with `<Link>` in `Home.tsx`, `PropertyDetail.tsx`, and `Footer.tsx`
- Fixed dead `href="#"` links and missing submit handler in `Footer.tsx`
- Fixed 2 security vulnerabilities by running `npm audit fix`
- Cleaned up dead variables in `App.tsx` and removed orphaned `About copy.tsx`
- Fixed `Contact.tsx` accessibility by adding `htmlFor` and `id` to labels and inputs
- Fixed `robots.txt` by removing missing sitemap reference
- Fixed `index.html` OG meta tags to use absolute URLs

### Changed
- Conducted full line-by-line codebase audit across all 18+ source files
- Generated detailed report.md with 24 identified issues (bugs, warnings, security vulnerabilities)
- Removed unused dependencies (`framer-motion`, `@emailjs/browser`)
- Deleted unused images, duplicate `images/` folder, and old `services.html`
- Renamed project name in `package.json` to `samrah-prive`
- Changed absolute URLs to relative paths in `sitemap.xml` and `robots.txt`
