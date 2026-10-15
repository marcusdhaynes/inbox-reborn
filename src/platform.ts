/** Typed platform helpers for new source modules; the legacy app remains intact. */
export type Platform = 'web' | 'tauri';
export const platform: Platform = '__TAURI_INTERNALS__' in window ? 'tauri' : 'web';
export const isNative = platform === 'tauri';
