# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [UNRELEASED]

### Added

- `hoverDisclosureRef` prop on `Menu` allows the `MenuDisclosure` only to be shown when the element in question is hovered over.
- `Select` now renders a custom component instead of the native `select`. This allows for new features including `isFilterable` / `onFilter` to allow the user to filter through options, and `isClearable` to allow the user to clear out the value.

### Changes

-

### Fixed

- update tooltip to not use parent CSS config
- update MenuItem to only show focus on keyboard navigation
- update test to respond to the change

## [0.7.10]

### Added

- Proxy Server package
  - New documentation: getting started with local data fetching

### Changes

- `Button` sizes updated to match design specifications
- `Confirm` secondary button color now defaults to `neutral`
  - `Confirm` documentation example simplified
- `esm` & `cjs` builds now produce `es6` (previously produced `es5`)
- Default `theme.reset` is inactive by default now.
  - If your use depends on the previous behavior you can reproduce it via the instructions in this gist: https://gist.github.com/lukelooker/29576e0db918914137638cf9d2649bea

### Fixed

- `Select` drop-down indicator arrow reintroduced
- `Slider` custom knobs now have proper stacking order so as not to appear over `Dialog`, `Popover` and `Drawer`
- Documentation
  - Links between `Dialog` and `Confirm`

## [0.7.8] - 2018-12-16

### Changed

- `ModalManager` (and it's derived `DialogManager` & `DrawerManager`) now support a `onClose` callback that will be called when the modal is closed.

### Bug Fixes

- Correct issue `ModalManager` `surfaceStyles` had `minWidth` and `maxWidth` properties that were difficult to override on an instance.
- Correct usage of `textTransform` in documentation and updated related test suite

## [0.7.7] - 2019-12-13

### Added

- Avatar components and documentation - `AvatarIcon`, `AvatarUser`, `AvatarCombo`
- `Badge` component with test and documentation
- `MenuContext` for holding `Menu` state and `MenuItemStyleContext` for `MenuItem` styling inheritance
- `Popover` now has `escapeWithReference` prop for allowing the overlay to break out of the scroll parent
- `Icon` - added `Api` icon

### Changed

- `Icon` - `ChangeHistory` and `DragHandleDots` artwork fixed up
- `IconButton` now displays a `Tooltip` with the `IconButton`'s label text.
  - Also added `tooltipDisabled` and `tooltipPlacement` to allow for customization of the built-in behavior.
- `InputSearch` - clicking "summary" text or clear button will restore focus to underlying input reproducing the behavior of the native input type="search" control.
- `LuminositySlider` now use standard range input as basis for (rather than extending Slider component)
- Modals
  - Improved `Confirm` layout
  - `Dialog` has updated documentation to endorse use of `Confirm` where appropriate
  - `ModalFooter` now uses css grid to lay out actions
  - `ModalHeader` has improved styling, no longer accepts `Heading` as a sub-component
  - `ModalContext` now includes focus trap and scroll lock methods
- `Slider`
  - Customized appearance / support for `branded` property
  - Update documentation to match updated appearance and functionality
- `Tab` component now replicates `Button` focus behavior. Focus ring only displayed when focus is applied via keyboard interaction
- Update `theme` object to use more vibrant colors by default.
- Documentation Improvements
  - Improved NPM package installation instructions
  - Instructions for adding new components to `www` project (Gatsby documentation)

### Removed

- `Icon` - removed `Users` (use `Group` instead)
- `useMenu` hook deprecated in favor of `MenuContext`

### Fixed

- `Banner` - icons are rendered at proper sizes when used in `www`
- `Menu` issues arising from use of `cloneElement`
- `OverlaySurfaceArrow` - added missing border on
- `Slider` - fix overflow issue in Windows/Edge
- `Tooltip`
  - Respects `width` property as expected
  - Removed confusing `maxWidth` property
  - `Link` color within `Tooltip` is set to `blue200` to ensure readability.
- Improved `useFocusTrap` and `useScrollLock` behavior when `Popover` is nested in a `Modal` or another `Popover`.
- Documentation bugs
  - Prevent theme examples from bleeding into global scope
  - Fix navigation appearance in Windows/Edge

## [0.7.6] - 2019-11-18

### Changed

- `Menu` - Refactor z-index out of menu styles
- Documentation
  - Vertical layout for the Code Sandbox toolbar to prevent unintentional obfuscation of code samples
  - Improved documentation layout and scrolling behavior

### Fixed

- `ColorWheel` - Optimize ColorWheel value change performance & restored `ColorWheel` documentation
- `MenuGroup` - Fix bug where menu group headers render a drop shadow by default
- `MenuSearch` - fixed keyboard shortcuts (up / down arrows to escape focus on input) and Improved documentation example.
- `ModalPortal` - Fixed scrolling within a `Modal` (`Dialog` & `Drawer`)
- Icons - SVG for `ApplicationSelect`, `ArrowChange`, `Beaker`, `BrowseTable`, `ChangeHistory`, `DimensionFill`,`Explore`, `LogoRings`, `NoteOutline`, `Notes`, `Reports`, `SqlRunner`, `User`, `UserAttributes`, `Users`, `ViewGrid`,`VisArea`, `VisBar`, `VisColumn`, `VisLine`, `VisMap`, `VisPie`, `VisScatter`, `VisSingleValue`,`VisTable` icons resized redrawn to fit on the correct icon grid.

## [0.7.5] - 2019-11-13

- Use `ttsc` to offer better formatted Styled Components snapshots

## [0.7.4] - 2019-11-13

- Use `tsc` for build (Babel build pipeline is causing issues for Internet Explorer 11)

## [0.7.3] - 2019-11-13

- Improve package build (CJS, ESM and ES2015 modules now available)
- Updated dependencies including Typescript 3.7
- Removed z-index from Menu

## [0.7.2] - 2019-11-11

### Added

- `IconButton` now supports focusVisible behavior

### Changed

- Set default `ToggleSwitch` size

### Bug Fixes

- Fix components.looker.com deployment setup (CNAME file in correct place)
- `ToggleSwitch` - Correct "prop bleeding" on
- `SidebarToggle` - use CSS transform for positioning rather than JS calculation
- `InputSearch` - fix `onClear` callback reference
- `FieldColor` - fix `onChange` behavior
- `useFocusTrap` - correct complex composition bug

## [0.7.1-alpha] - 2019-11-05

### Added

- components.looker.com setup (Github Pages) & associated fixes

### Removed

- Deprecate "Lens" naming

## [0.6.0] - 2019-11-01

### Added

- Initial Open Source release
