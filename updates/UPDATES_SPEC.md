# Auto-Update System — Spec

Repo: `marcusdhaynes/inbox-reborn` · App: Deltos (legacy repo: inbox-reborn) · Current version (at rollout): `0.0.0` (no package.json in this repo — current version unknown, recorded as 0.0.0 placeholder)
Category: **B** — legacy-duplicate — dormant / spec-only by instruction, not wired live.

## Flow (identical in every app)

1. The app checks `https://api.github.com/repos/marcusdhaynes/inbox-reborn/releases/latest`.
2. The release tag (semver `vX.Y.Z`) is compared with the app's current version.
3. If a newer version exists:
   - **Ribbon:** a thin ribbon at the **top center** of the app, very low height — just
     enough for short text like `Update available · vX.Y.Z`. It is styled **neutrally /
     theme-aware** so it does not clash with the app's own theme. The ribbon itself is
     the button: **clicking it executes the update**. The **X** on its right dismisses it
     **permanently for that version** (stored in local storage; it does not come back on
     the next launch). Full update information remains in Settings (below).
   - **Settings → Updates section:** permanently at the **very bottom of Settings**,
     showing current version, available version, **What's New** (release notes),
     a **Check for updates** button, and an **Update** button. It stays there until updated.
4. On **Update**: download, close the current version, install/swap, and reopen.
   Web apps simply refresh to the newly deployed version. APK/native builds still
   require the platform install tap (e.g. Android's install prompt).

## Release format

- Proper **GitHub Releases** — commits alone are not enough.
- Tag: semver `vX.Y.Z`; release notes become the **What's New** text.
- Attach the installable assets for the platform (web deploy / APK / desktop build).

## Future-proof rule

- If this app **already has a Settings menu**, the Updates section is implemented
  **live now**, at the bottom of Settings, and the ribbon is wired in the app root.
- If this app has **no Settings menu anywhere**, this code is present
  **prepared / dormant only** — it is not imported or displayed anywhere and makes
  **no visible UI change**. When a Settings menu is added later, the Updates section
  is implemented at the **bottom of that Settings menu** at that time (Marcus will
  ask Muse to wire it if a future Settings menu does not pick it up automatically).

## This repo

Classification: Category B (dormant / spec-only) **by instruction**: `inbox-reborn` is the LEGACY repo of the Deltos mail app; the canonical `Deltos` repo is handled separately, so nothing is wired live here and the two repos must not diverge in behaviour. (Note: the bundled single-file `index.html` does contain a settings view in its minified build, but the live implementation belongs to the canonical Deltos repo.)

Files: `updates/updates.js` — dormant, not loaded by `index.html`. No `package.json` exists in this repo, so the current version is unknown; `0.0.0` is a placeholder.
