# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.10.0](https://github.com/looker-open-source/components/compare/v0.9.29...v0.10.0) (2021-01-19)


### Bug Fixes

* Correct import path issues DialogLayout interface name conflict ([88f099e](https://github.com/looker-open-source/components/commit/88f099eacf361a83be9149e0ac541b9184d03547))
* Correct release-drafter yaml config typo ([34b10bc](https://github.com/looker-open-source/components/commit/34b10bc6b60fa5e2becf0ad065e4325bccd8258a))
* MenuList windowing initial render performance ([a56ac29](https://github.com/looker-open-source/components/commit/a56ac29067cd25ef31a64d63c9bd742de927fb32))
* Pagination component now enables first and last page of results at same thresholds for previous and next ([#1781](https://github.com/looker-open-source/components/issues/1781)) ([f7d666a](https://github.com/looker-open-source/components/commit/f7d666a01fa42a992c0368c7f56e0311293d5cc8))
* Properly configure build for tree-shaking support ([9202b72](https://github.com/looker-open-source/components/commit/9202b72bc5fb99eb3e1af7d9e56f3dc15b1df2a4))


### Features

* Add DialogLayout component to manage dialog setup ([bfa94b3](https://github.com/looker-open-source/components/commit/bfa94b3ea75603caf47d184f63b356e666af57c0))
* Arrow key navigation persists selected item (Menu, Tabs) ([#1761](https://github.com/looker-open-source/components/issues/1761)) ([dc2400f](https://github.com/looker-open-source/components/commit/dc2400f6c4237e326f7ccd4a1eb4c93d962d900b))
* DialogContent hasFooter & hasHeader support ([8039da2](https://github.com/looker-open-source/components/commit/8039da25d1646e8d50ee900e6243a3e3e44ea6ca))
* DialogHeader no longer supports `closeIcon` ([bca25d3](https://github.com/looker-open-source/components/commit/bca25d38959c7af27a6019063a9b7e7ee9294d8d))
* List and ListItem ([#1773](https://github.com/looker-open-source/components/issues/1773)) ([ee1e14b](https://github.com/looker-open-source/components/commit/ee1e14b122b5db1716c2d3b2ae6ad6abc1507192))


### BREAKING CHANGES

* `DialogHeader` no longer supports `closeIcon` (always "Close")





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
