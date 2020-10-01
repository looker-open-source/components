# Storybook Image Snapshots

This collects shared configurations for Storybook usage across the monorepo

### Add a package

Want to add image-snapshots to another package?

1. Add .storybook to package root
2. Add babel.config.js to package root (needed for Storybook to properly transpile TS)
3. Add `storybook` and `storybook-build` scripts to package manifest (`package.json`)
4. Copy `stories.shots.ts` to package `src/` directory (needs file-relative `path` to find stories and Storybook configuration)

### TODO

1. Add steps about registering package for Storybook composition at publish-time
