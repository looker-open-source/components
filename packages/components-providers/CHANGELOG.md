# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
