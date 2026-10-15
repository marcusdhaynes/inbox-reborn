# Inbox Reborn cross-platform migration

This branch deliberately preserves the existing root `index.html` byte-for-byte. It contains the production React bundle, not the original TypeScript/JSX source. This stage introduces Vite, TypeScript tooling and Tauri 2 packaging without claiming to have recovered original components. Future source migration should happen incrementally with regression tests.

## Web
Install Node.js 20.19+ or 22.12+, then run `npm install`, `npm run dev`, `npm run build`. Publish the `dist/` directory to GitHub Pages at `/inbox-reborn/`. Do not switch Pages to the new build until tested.

## Windows
Install Rust, Microsoft C++ build tools and WebView2 prerequisites. Run `npm install` then `npm run desktop:build`. The Windows installer is under `src-tauri/target/release/bundle/`.

## Android
Install Rust, Android Studio SDK/NDK and Java prerequisites, set up Android environment variables, run `npm run android:init` and `npm run android:build`. The generated APK is under the Android build outputs. Signing is needed for distribution.

## Known limitations
- The existing bundle is minified and embedded in HTML; this does **not** yet convert its application logic into TypeScript source.
- Google OAuth redirect URIs, origin policies, local storage, permissions and mobile gestures must be tested separately on native platforms.
- The Tauri shell requires app icons in `src-tauri/icons/`; generate them before compiling native bundles. No installer/APK has been compiled or validated here.
- The Vite GitHub Pages base path is configured separately from native builds, but should be verified with actual builds.
- The public main branch and Pages deployment remain unchanged.
