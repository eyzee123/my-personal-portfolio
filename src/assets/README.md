Asset organization and best-practice notes

Recommended folders:

- public/images/
  - Place user-facing, static images here that should be served as-is by Next.js.
  - Example: `public/images/profile.svg`, `public/images/avatar.png`, `public/images/og-image.png`.
  - Use this for images referenced by `<Image src="/images/..." />` or by CSS `url('/images/...')`.

- src/assets/
  - Project-owned source assets that may be processed by build tools (SVG source files, design tokens, etc.).
  - Example: `src/assets/icons/*.svg`, `src/assets/logo.svg`.

- public/icons/
  - Small favicons or platform icons (icon-192.png, icon-512.png) used for PWA or social previews.

Best practices:
- Keep public images flat and web-optimized: compress PNG/JPEGs and prefer WebP where possible.
- For avatars, prefer SVG (vector) or an optimized 1:1 PNG/WEBP (e.g., 256×256) so it looks crisp on all devices.
- Name assets clearly: `profile.svg`, `project-1.png`, `og-homepage.png`.
- If you have many SVG icons, store source/variants in `src/assets/icons/` and export an icon component library.
- Add a README (this file) to explain how to replace assets and where to update component paths.

How to replace the profile image used by the Hero:
1. Add your image to `public/images/` and name it `profile.svg` (or update the path in `src/components/ClientPortfolio.tsx`).
2. If using a raster image, prefer a square PNG/WEBP around 256×256 or 512×512 and update the component to use `/images/profile.png`.
3. Test in dev: `npm run dev` and verify the Hero shows your image.
