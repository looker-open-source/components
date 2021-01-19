# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
