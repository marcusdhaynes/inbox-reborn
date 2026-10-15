# Source migration boundary

The current application is shipped as an existing, minified React bundle embedded in the root index.html. Do not reimplement the UI from screenshots. The source modules introduced here are typed helpers for future changes, not a claim that the existing bundled application has been converted to TypeScript. Recover original component source before modifying the interface. Preserve baseline HTML and test functional behavior before and after each migration step.
