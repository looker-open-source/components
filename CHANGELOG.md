# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.12.0](https://github.com/looker-open-source/components/compare/v0.11.0...v0.12.0) (2021-02-13)


### Bug Fixes

* **FocusTrap:** Return focus behavior on nested focus traps ([#1886](https://github.com/looker-open-source/components/issues/1886)) ([78bfd87](https://github.com/looker-open-source/components/commit/78bfd87532c65cf33bc8fc00941387a3249a139e))
* **theme:** Enable sanitizeFontFace to properly quote font-faces in font-family ([#1893](https://github.com/looker-open-source/components/issues/1893)) ([4aed07e](https://github.com/looker-open-source/components/commit/4aed07ea1c8278e5fd0188de7123111319f7e0f7))
* **Tree:** Removed default value on Tree density prop ([#1910](https://github.com/looker-open-source/components/issues/1910)) ([9ba8779](https://github.com/looker-open-source/components/commit/9ba877930768370aa0fa2d198bceb2edee609536)), closes [#1911](https://github.com/looker-open-source/components/issues/1911)
* DataTable Simplify onClick behavior ([#1865](https://github.com/looker-open-source/components/issues/1865)) ([1c17444](https://github.com/looker-open-source/components/commit/1c174442a0e731f0b60e8573077b41ff1d5a2c61))
* InlineInputText updated test coverage ([#1878](https://github.com/looker-open-source/components/issues/1878)) ([c6e7b5d](https://github.com/looker-open-source/components/commit/c6e7b5d98b128c49dc61a1e30a6d93ba44dc9743))
* Radio validation error ([#1850](https://github.com/looker-open-source/components/issues/1850)) ([9b06e39](https://github.com/looker-open-source/components/commit/9b06e3918b7564241d83117814b45a0337580a64)), closes [#1859](https://github.com/looker-open-source/components/issues/1859)
* Unable to filter SelectMulti with 1 or more controlled values ([#1873](https://github.com/looker-open-source/components/issues/1873)) ([4c8f214](https://github.com/looker-open-source/components/commit/4c8f214dc51b43e90f50668a9be7315ceb51d209))
* **Label:** typography props now actually work ([#1871](https://github.com/looker-open-source/components/issues/1871)) ([fd8793a](https://github.com/looker-open-source/components/commit/fd8793abf5d2e055221421bafd9c2aa22ea8a3c5))


### Features

* Panel component ([#1815](https://github.com/looker-open-source/components/issues/1815)) ([62cafc5](https://github.com/looker-open-source/components/commit/62cafc5343062cfda69c6147be7641677df15e04))
* Tree refactor with List pieces ([#1846](https://github.com/looker-open-source/components/issues/1846)) ([8940f68](https://github.com/looker-open-source/components/commit/8940f68f6cab0723404a50269c48fc6238aad14b)), closes [#1861](https://github.com/looker-open-source/components/issues/1861) [#1866](https://github.com/looker-open-source/components/issues/1866) [#1874](https://github.com/looker-open-source/components/issues/1874)





# [0.11.0](https://github.com/looker-open-source/components/compare/v0.10.4...v0.11.0) (2021-02-04)

## [0.10.4](https://github.com/looker-open-source/components/compare/v0.10.3...v0.10.4) (2021-01-25)

### Bug Fixes

- `Select` group heading styles ([#1817](https://github.com/looker-open-source/components/issues/1817)) ([e4cae00](https://github.com/looker-open-source/components/commit/e4cae00da1535ef6e7d71bbe1592c6cff45230c0))

## [0.10.3](https://github.com/looker-open-source/components/compare/v0.10.2...v0.10.3) (2021-01-25)

### Bug Fixes

- **Text:** `should not have default `color` and lineHeight based on fontSize ([#1813](https://github.com/looker-open-source/components/issues/1813)) ([226dfa9](https://github.com/looker-open-source/components/commit/226dfa9067d8326f87ce842badfa16c0be29cedd))

## [0.10.2](https://github.com/looker-open-source/components/compare/v0.10.1...v0.10.2) (2021-01-22)

### Bug Fixes

- Export `List` component family ([#1807](https://github.com/looker-open-source/components/issues/1807)) ([c50360c](https://github.com/looker-open-source/components/commit/c50360cd2e9926949cc5489b18794969524416a9))
- Properly specify package.json "files" key to correct build ([#1806](https://github.com/looker-open-source/components/issues/1806)) ([c81c4bb](https://github.com/looker-open-source/components/commit/c81c4bb625c58ede49957aad90ac8d9d7b2c4b79))

## [0.10.1](https://github.com/looker-open-source/components/compare/v0.10.0...v0.10.1) (2021-01-22)

### Bug Fixes

- Properly build ESM, CJS & TS for easy deep-imports ([#1804](https://github.com/looker-open-source/components/issues/1804)) ([2a523cd](https://github.com/looker-open-source/components/commit/2a523cd70b079944376c6dc87c18202e05a97b01))
- **deps:** Update dependencies to resolve external vulnerabilities (socket.io & immer) ([#1803](https://github.com/looker-open-source/components/issues/1803)) ([1023026](https://github.com/looker-open-source/components/commit/1023026dc35c526d718efbfc8dafcc18b21b2ddc))

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
