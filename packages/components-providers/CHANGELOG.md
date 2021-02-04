# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.11.0](https://github.com/looker-open-source/components/compare/v0.10.4...v0.11.0) (2021-02-04)


### Features

* **components:** nestedMenu on MenuItem ([#1780](https://github.com/looker-open-source/components/issues/1780)) ([7a1fada](https://github.com/looker-open-source/components/commit/7a1fada4523dd0805279baed974dc27836f32207))





## [0.10.4](https://github.com/looker-open-source/components/compare/v0.10.3...v0.10.4) (2021-01-25)

**Note:** Version bump only for package @looker/components-providers





## [0.10.3](https://github.com/looker-open-source/components/compare/v0.10.2...v0.10.3) (2021-01-25)

**Note:** Version bump only for package @looker/components-providers





## [0.10.2](https://github.com/looker-open-source/components/compare/v0.10.1...v0.10.2) (2021-01-22)


### Bug Fixes

* On build properly set package.json "files" key ([#1806](https://github.com/looker-open-source/components/issues/1806)) ([c81c4bb](https://github.com/looker-open-source/components/commit/c81c4bb625c58ede49957aad90ac8d9d7b2c4b79))





## [0.10.1](https://github.com/looker-open-source/components/compare/v0.10.0...v0.10.1) (2021-01-22)


### Bug Fixes

* Properly build ems/cjs/ts for easy deep-imports ([#1804](https://github.com/looker-open-source/components/issues/1804)) ([2a523cd](https://github.com/looker-open-source/components/commit/2a523cd70b079944376c6dc87c18202e05a97b01))





# [0.10.0](https://github.com/looker-open-source/components/compare/v0.9.29...v0.10.0) (2021-01-19)


### Bug Fixes

* Properly configure build for tree-shaking support ([9202b72](https://github.com/looker-open-source/components/commit/9202b72bc5fb99eb3e1af7d9e56f3dc15b1df2a4))





## [0.9.26]

### Added

- `ComponentsProvider` now includes `FocusTrapContext` to manage all focus traps for `Dialog` and `Popover`
  - Where previously `DialogContext` properties `enableFocusTrap`, `disableFocusTrap`, and `focusTrapEnabled` could previously be used to take control of a focus trap, now use `FocusTrapContext` properties `enableCurrentTrap`, `disableCurrentTrap`, and `activeTrapRef` to do so.

## [0.9.16]

### Changed

- `ComponentsProvider` now includes `ScrollLockContext` to manage all scroll locks for `Dialog` and `Popover`
  - Where previously `DialogContext` properties `enableScrollLock`, `disableScrollLock`, and `scrollLockEnabled` could previously be used to take control of a scroll lock, now use `ScrollLockContext` properties `enableCurrentLock`, `disableCurrentLock`, and `activeLockRef` to do so.

## [0.9.14]

### Changed

- `ComponentsProvider` now takes `colors` prop instead of `coreColors` and accepts `CoreColors & IntentColors`
