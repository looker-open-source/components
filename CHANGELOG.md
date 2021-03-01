# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.15.1](https://github.com/looker-open-source/components/compare/v0.15.0...v0.15.1) (2021-03-01)

### Bug Fixes

- **Slider** & **RangeSlider** properly support floating step value ([#1974](https://github.com/looker-open-source/components/issues/1974)) ([797211c](https://github.com/looker-open-source/components/commit/797211c1442e7cdc422a9fe4eb6e411543a526b3))

# [0.15.0](https://github.com/looker-open-source/components/compare/v0.14.1...v0.15.0) (2021-03-01)

### Bug Fixes

- **Combobox** aria-owns targets ul instead of input ([#1956](https://github.com/looker-open-source/components/issues/1956)) ([55598a6](https://github.com/looker-open-source/components/commit/55598a611280fcd1208a9ce5628483c4a18a5de5))
- **DataTable:** firefox border-bottom bug ([#1961](https://github.com/looker-open-source/components/issues/1961)) ([7f5f1e0](https://github.com/looker-open-source/components/commit/7f5f1e05fa64f21df52fd83828dffa6f7b186146))
- **DataTable:** Safari stick cell bug ([#1965](https://github.com/looker-open-source/components/issues/1965)) ([67d0bc1](https://github.com/looker-open-source/components/commit/67d0bc1589a64105eb98b2130109b5a6debc73ff))
- **FocusTrap:** Overly aggressive return focus behavior ([#1959](https://github.com/looker-open-source/components/issues/1959)) ([bbea788](https://github.com/looker-open-source/components/commit/bbea788c25e26a1e81d95c4968c3004684eef464))
- **InputDate** & **InputDateRange** accessibility improvements ([#1964](https://github.com/looker-open-source/components/issues/1964)) ([3257127](https://github.com/looker-open-source/components/commit/325712776610fea1d4d77fb23414f84ff083ebe0))
- **MenuList:** Windowing ([#1966](https://github.com/looker-open-source/components/issues/1966)) ([8ebaa8d](https://github.com/looker-open-source/components/commit/8ebaa8dc6528f7e1fd1026101cbb5e9814567eb9))
- **RangeSlider** Dashboard Integration Fixes ([#1963](https://github.com/looker-open-source/components/issues/1963)) ([a0e35c2](https://github.com/looker-open-source/components/commit/a0e35c237f83a3a30c7f4e2de8e9e59089862aea))
- **useArrowKeyNav:** Focus lost when item is removed ([#1971](https://github.com/looker-open-source/components/issues/1971)) ([dd02e5e](https://github.com/looker-open-source/components/commit/dd02e5ed9b436edf138bcabea93c78848ec83738))

### Features

- **DataTable:** Allow filters to be specified by composition rather than complex prop object ([#1950](https://github.com/looker-open-source/components/issues/1950)) ([a6765e2](https://github.com/looker-open-source/components/commit/a6765e2dde2fcda5c4894d3ea5a0c7f02ae95b42))
- **FontFaceLoader:** new component to support flexible font loading ([#1954](https://github.com/looker-open-source/components/issues/1954)) ([c16690b](https://github.com/looker-open-source/components/commit/c16690beed86235f94fd79b9d8b8e619c9fccf92))
- **MenuHeading** and **MenuDivider** ([#1948](https://github.com/looker-open-source/components/issues/1948)) ([985e6bd](https://github.com/looker-open-source/components/commit/985e6bd0da010129a83b81623e3788b48bc4256d)), closes [#1958](https://github.com/looker-open-source/components/issues/1958) [#1960](https://github.com/looker-open-source/components/issues/1960)
- customize icon label for localization ([#1932](https://github.com/looker-open-source/components/issues/1932)) ([2f59ccb](https://github.com/looker-open-source/components/commit/2f59ccb83e95cdd94cf66958d34b922f09641bb9))

## [0.14.1](https://github.com/looker-open-source/components/compare/v0.14.0...v0.14.1) (2021-02-23)

### Bug Fixes

- **FocusTrap** Correct behavior where focusTrap is apply focus to `input[type="hidden"]` ([#1952](https://github.com/looker-open-source/components/issues/1952)) ([edd2267](https://github.com/looker-open-source/components/commit/edd22673710cd471f90816f2ebf46740e8ec1d87))

# [0.14.0](https://github.com/looker-open-source/components/compare/v0.13.0...v0.14.0) (2021-02-20)

### Bug Fixes

- **ListItem:** Removed reset from ListItemWrapper ([#1933](https://github.com/looker-open-source/components/issues/1933)) ([1fe9ee1](https://github.com/looker-open-source/components/commit/1fe9ee11875826936a8a937bd77b22258bd08550))
- **ListItem:** Set background of disabled ListItemWrapper to transparent ([#1938](https://github.com/looker-open-source/components/issues/1938)) ([2e258cf](https://github.com/looker-open-source/components/commit/2e258cf6c82a85a75e425e25e7385e8b9d66c321))
- **CompatibleHTMLProps** interface now omits `label` ([#1930](https://github.com/looker-open-source/components/issues/1930)) ([0f43673](https://github.com/looker-open-source/components/commit/0f43673e04e9a596d479b6e40d7b4ad5f385a659))
- **Select** text is no longer highlighted when focused via keyboard ([#1929](https://github.com/looker-open-source/components/issues/1929)) ([d3a5ae4](https://github.com/looker-open-source/components/commit/d3a5ae4d900337c9555a3c06b93626380b8df79e))

### Features

- **Dialog** properly implements `aria-labelledby` ([#1924](https://github.com/looker-open-source/components/issues/1924)) ([15ec7be](https://github.com/looker-open-source/components/commit/15ec7bee23012bca958028b656847b7e97e4e105))
- **Dialog** now places focus on first tabbable node when opened ([#1927](https://github.com/looker-open-source/components/issues/1927)) ([1aac687](https://github.com/looker-open-source/components/commit/1aac6870eb276963d6b089d670f367eba70fc79f)), closes [#1941](https://github.com/looker-open-source/components/issues/1941)
- **Menu:** refactored to use `List` & `ListItem` ([#1906](https://github.com/looker-open-source/components/issues/1906)) ([2ee6809](https://github.com/looker-open-source/components/commit/2ee68096ffcf863558cd02f0e5e21dbf298a0774)), closes [#1907](https://github.com/looker-open-source/components/issues/1907)

# [0.13.0](https://github.com/looker-open-source/components/compare/v0.12.0...v0.13.0) (2021-02-17)

### Bug Fixes

- **design-tokens:** `generateTheme` now tolerates poorly encoded font stack ([#1915](https://github.com/looker-open-source/components/issues/1915)) ([dfac189](https://github.com/looker-open-source/components/commit/dfac189ca421f6a55906f4ae3395bcabdd110c9b))
- **RangeSlider** improved mobile UX ([#1909](https://github.com/looker-open-source/components/issues/1909)) ([464f055](https://github.com/looker-open-source/components/commit/464f0552c8402afc98d2796c99b9201744ec68f8))
- **MessageBar:** Use intent accent colors for MessageBar background ([#1901](https://github.com/looker-open-source/components/issues/1901)) ([c4ea665](https://github.com/looker-open-source/components/commit/c4ea665884e901ecfa5145b12b08ad0dce8fe4f0))

### Features

- i18n support ([#1881](https://github.com/looker-open-source/components/issues/1881)) ([8377f95](https://github.com/looker-open-source/components/commit/8377f95c143c317f3defae1fa9154c9b9377f831))

# [0.12.0](https://github.com/looker-open-source/components/compare/v0.11.0...v0.12.0) (2021-02-13)

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
