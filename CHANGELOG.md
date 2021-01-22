# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.10.1](https://github.com/looker-open-source/components/compare/v0.10.0...v0.10.1) (2021-01-22)


### Bug Fixes

* Properly build ESM, CJS & TS for easy deep-imports ([#1804](https://github.com/looker-open-source/components/issues/1804)) ([2a523cd](https://github.com/looker-open-source/components/commit/2a523cd70b079944376c6dc87c18202e05a97b01))
* **deps:** Update dependencies to resolve external vulnerabilities (socket.io & immer) ([#1803](https://github.com/looker-open-source/components/issues/1803)) ([1023026](https://github.com/looker-open-source/components/commit/1023026dc35c526d718efbfc8dafcc18b21b2ddc))





# [0.10.0](https://github.com/looker-open-source/components/compare/v0.9.29...v0.10.0) (2021-01-19)

### Bug Fixes

- Properly configure build for tree-shaking support ([9202b72](https://github.com/looker-open-source/components/commit/9202b72bc5fb99eb3e1af7d9e56f3dc15b1df2a4))

## [0.9.26]

### Changed

- Now using Typescript 4.1 internally

### Fixed

- `image-snapshot-update` package script now correctly deletes all existing snapshots before running

## [0.9.25]

### Changed

Library updated to use Styled Components 5 & Typescript 3.9.x

### Added

- update InputDate and InputDateRange to support disabled and readOnly

### Fixed

- Update DataTable to support onClick of `Link/Anchor` as text inside rows.

## [0.9.23]

### Added

- Refine Storybook config to support build-modes
  - enables faster image-snapshot generation and better development performance.
  - specify mode via shell export: `export storybookBuildMode=develop `
    - `fast` - disables Typescript extraction and all addons
    - `develop` - disables "Docs" addon
    - `publish` - enables Typescript extraction and full `addon-essentials` support

## [0.9.19]

### Fixed

- Fix `image-snapshots` issue

## [0.9.16]

### Added

- Image snapshots tests
  - Infrastructure to run image snapshot tests leveraging Storybook `storyshots` + `jest-image-snapshots`
  - Image snapshot coverage for `Button*`, `IconButton` & `Tree` components
- Storybook: Preliminary infrastructure for composition
- Storybook: Added support for extract behavior to improve published-Storybook performance

### Changed

- Storybook configuration improvements
  - `addons-essentials` now used
  - Replace `withKnobs` with `Controls` & `Args`
- `TreeItemLabel` keep the hover behavior for selected `TreeItem`

## [0.9.15]

### Changed

- `theme.fonts.*` now produced with single quotes rather than double quotes
- `@looker/components-test-utils` helpers will no longer produce `globalStyles`

## [0.9.14]

### Fixed

- Storybook fixes to silence console warnings

## [0.9.6] - 2020-07-15

- Storybook is now deployed to `https://components.looker.com/storybook`

## [0.9.0]

### Added

- `eslint-config`, `prettier-config` and `stylelint-config` packages moved from separate repository and updated to integrate any overrides needed previously.

### Fixed

- Major CSS linting clean-up

# Older Releases

We retroactively split our single CHANGELOG into per-package changelogs at the `0.9.x` series. For changes before that look at the [@looker/components package CHANGELOG](./packages/components/CHANGELOG.md)
