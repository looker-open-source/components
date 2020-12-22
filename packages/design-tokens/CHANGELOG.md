# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
