# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.12.0](https://github.com/looker-open-source/components/compare/v0.11.0...v0.12.0) (2021-02-13)


### Bug Fixes

* **theme:** Enable sanitizeFontFace to properly quote font-faces in font-family ([#1893](https://github.com/looker-open-source/components/issues/1893)) ([4aed07e](https://github.com/looker-open-source/components/commit/4aed07ea1c8278e5fd0188de7123111319f7e0f7))





# [0.11.0](https://github.com/looker-open-source/components/compare/v0.10.4...v0.11.0) (2021-02-04)

### Bug Fixes

- `tintOrShadeUiColor` now works with dark color and high mixAmount value ([#1827](https://github.com/looker-open-source/components/issues/1827)) ([6c2b8cc](https://github.com/looker-open-source/components/commit/6c2b8cc8befcda1e842cb9dd592496b39353c250))

### Features

- Add aliases (`body`, & `title`) for theme.colors.text to allow for upstream flexibility ([#1862](https://github.com/looker-open-source/components/issues/1862)) ([4c2b399](https://github.com/looker-open-source/components/commit/4c2b399e19407cd07fc394f1193988817e349621))

## [0.10.4](https://github.com/looker-open-source/components/compare/v0.10.3...v0.10.4) (2021-01-25)

**Note:** Version bump only for package @looker/design-tokens

## [0.10.3](https://github.com/looker-open-source/components/compare/v0.10.2...v0.10.3) (2021-01-25)

**Note:** Version bump only for package @looker/design-tokens

## [0.10.2](https://github.com/looker-open-source/components/compare/v0.10.1...v0.10.2) (2021-01-22)

### Bug Fixes

- On build properly set package.json "files" key ([#1806](https://github.com/looker-open-source/components/issues/1806)) ([c81c4bb](https://github.com/looker-open-source/components/commit/c81c4bb625c58ede49957aad90ac8d9d7b2c4b79))

## [0.10.1](https://github.com/looker-open-source/components/compare/v0.10.0...v0.10.1) (2021-01-22)

### Bug Fixes

- Properly build ems/cjs/ts for easy deep-imports ([#1804](https://github.com/looker-open-source/components/issues/1804)) ([2a523cd](https://github.com/looker-open-source/components/commit/2a523cd70b079944376c6dc87c18202e05a97b01))

# [0.10.0](https://github.com/looker-open-source/components/compare/v0.9.29...v0.10.0) (2021-01-19)

### Bug Fixes

- Properly configure build for tree-shaking support ([9202b72](https://github.com/looker-open-source/components/commit/9202b72bc5fb99eb3e1af7d9e56f3dc15b1df2a4))

## [0.9.26]

### Added

- `AliasColor` to support color aliases previously used via `variant` property
- Added colors: `secondary` & `subdued`
- Added colors: `informAccent`, `positiveAccent`, & `warnAccent`

## [0.9.20]

### Changed

- `theme.transitions` durations are now integers (in milliseconds) rather than strings
- Reduced & consolidated dependencies on `polished` library

## [0.9.17]

### Changed

- Brand font defaults to `Roboto`

## [0.9.15] - 2020-09-21

### Changed

- `theme.fonts.*` now produced with single quotes rather than double quotes

## [0.9.14]

### Changed

- `theme.fonts.*` updates
  - `body` added (now default for most components)
  - `brand` is now used just for `Button*`, `Heading` & `Tabs`
  - Default values changed (now `body='Roboto'`, `brand='Red Hat Display'`, `code='Roboto Mono'`)
- `theme.fontWeights.extraBold` & `theme.fontWeights.light` removed

### Removed

- `prismTheme` is no longer published
- `theme.colors.palette` is no longer available (`palette` _can_ be import from `@looker/design-tokens` but this is a legacy behavior and is not encouraged)

## [0.9.10]

### Added

- Added `xxxxxlarge` to sizes to support updated type ramp.

### Changed

- `FontSizes` and `LineHeights` design tokens updated to match new type ramp spec.
- `neutral` intent color is now defaults to `charcoal500`

## [0.9.7]

### Changed

- `theme` "pressed" colors are more discernable from other stateful colors
- `theme.colors.*Pressed` colors are more discernable from other stateful colors
- `theme.colors.textX` restructured
  - `text1-5` now go from lightest to darkest to match `ui1-5`
  - Reduced number of steps:
    - `text0` is now `text5` (consolidated the former `text0` & `text1`)
    - `text6` is now `text1` (consolidated the former `text6` & `text5`)

## [0.9.6]

### Changed

- `theme.zIndexFloor` now defaults to `1` instead of `undefined` (this helps with compatibility due to Firefox's stacking order eccentricities)

## [0.9.0]

### Added

- `zIndexFloor` added to `theme` (used as base value for Overlay & Modal z-index value:q)

### Removed

- `pseudo` support from design-tokens (prefer using `styled` when pseudo selectors are required)
