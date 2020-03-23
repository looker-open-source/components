# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## UNRELEASED

### Added

- `TextArea` component was created with documentation and tests
- `FieldTextArea` component was created with documentation and tests
- `ArrowLeft`, `EditOutline`, `ExploreOutline` Icons added
- `ActionList` supports sorting
- `ModalHeader` add support for `iconClose` option

### Change

- move path for InlineInputText now under Form/Inputs
- update InputSearch to display search icon
- `ArrowDropDown` and `ArrowDropUp` Icons renamed to `ArrowUp` and `ArrowDown`
- `CacheRefesh` Icon update
- `ActionList` closes Actions menu on `ActionListItemAction` click
- `Confirm` no longer displays a `Close` `IconButton` in the header


## [0.7.24] - 2020-03-12

### Added

- `Checkbox` supports `defaultChecked` property.
- `TabPanels` supports `FlexBoxProps` & `LayoutProps`

## Fixed

- `IconButton` Fixed duplicate Tooltips scenario
- Reverted to stable version of `react-day-picker`
- Fix for focusTrap on Modal with no tabbable element

### Removed

- `Checkbox`, `Radio` & `Slider` no longer support `branded` property, use theme's key color (default: purple) and have design-spec focus rings

## [0.7.23] - 2020-03-09

### Added

- `ActionList` and related sub-components - general layout and base functionality added; currently renders a list with data in columns and associated actions at the item level
- `InputText` now supports `iconBefore`, `iconAfter`, `prefix`, `suffix` properties
- `InputDateRange` component
- Icons `ArrowRight`, `Function`, `IdeDimension`, `IdeDimensionGroup`, `IdeParameter`, `NotificationBellOff`, `NotificationBellOn`

### Changed

- `FieldColor` state can now be fully controlled.
- Icon `CaretDown` optically centered
- `IconButton` tooltip callbacks no longer override passed in callbacks
- `InputChips` no longer supports summary prop, and style updates to allow vertical scrolling
- `InputDate` now supports controlled component behavior
- `Menu` renamed isHovered variable to showDisclosure to make this prop's use alongside `MenuDisclosure` more obvious
- `MenuContext` renamed isHovered property to showDisclosure
- `MenuDisclosure` now has focus and blur handlers, which allows for tab-traversal to hidden `MenuDisclosure`
- `Slider` component style updates

### Fixed

- `InputDate` and `InputDateRange` test mocks

## [0.7.22] - 2020-02-27

### Fixed

- `usePopover` issue where the next click after a popover closes is canceled – _actual fix_

## [0.7.21] - 2020-02-26

- Updated inputText to supports iconBefore iconAfter & prefix suffix.

- # new component `InlineInputText` plus documentations and test

### Fixed

- `usePopover` issue where the next click after a popover closes is canceled

## [0.7.20] - 2020-02-25

### Fixed

- `usePopover` event handlers not getting properly cleaned up

## [0.7.19] - 2020-02-24

### Added

- `InlineInputText` component
- `Select` now supports grouped options with a `title` and option `description`, as well as `FlexboxProps` for layout styling.
- `InputDate` and `Calendar` components
- Download icon
- Documentation in the icons package README that describes the recommended way to name icons

### Changed

- `Select` now only defaults to the first option if neither `placeholder` nor `isClearable` is defined.
- Removed images with unknown ownership in documentation

### Fixed

- Corrected links to source in documentation
- `Select` styling issues when `GlobalStyle` is not used, missing down caret icon in documentation
- `usePopover`, when the toggle was a mousedown event, would open just before the "click outside" listener was able to close any prior popovers. If both popovers were inside a `Modal`, the closing popover would re-enable the parent scroll lock, and the one that just opened would be un-scrollable. This especially affected multiple `Select`s inside a `Modal`.

## [0.7.18] - 2020-02-11

### Added

- `Checkbox` now supports `checked='mixed'` (indeterminate state)
- `Date`, `DateTime`, `Time` new date and time formatting components

### Changed

- Moved ESLint, TSConfig, Prettier & StyleLint to [@looker/eslint-config](https://www.npmjs.com/package/@looker/eslint-config)
- `GlobalStyle` no longer imports fonts from Google Fonts CDN.
  - Updated documentation to reflect how to import fonts
  - Added documentation for `GlobalStyle` under a new "Utilities" section

### Fixed

- Corrected links to source in documentation
- `Swatch` border style when used directly (not via `FieldColor`)

## [0.7.17] - 2020-01-31

### Added

- `InputChips` now immediately converts pasted content to chips instead of waiting for a comma as it does when the user is typing.

### Fixed

- `InputChips` now trims whitespace from each value before calling `validate`.

## [0.7.16] - 2020-01-30

### Fixed

- `Select` - Addressed integration test issue where events happen fast enough to reveal state change issue

## [0.7.15] - 2020-01-28

### Added

- `useMouseDownClick` hook supports testing frameworks and scenarios where the user triggers just a "click" event and not it's proceeding "mousedown" event.

### Fixed

- `Select` Addressed issue where co-located `Select`s width acted undesirably

## [0.7.14] - 2020-01-27

### Added

- New modal component: `ConfirmLayout` for laying out standard user confirmation dialog content
- `Button` now has a `fullWidth` prop that will set the button's width to 100%, filling its parent container.
- `ConfirmLayout` - new modal for laying out standard user confirmation dialog content
- `InputChips` displays multiple values as `Chip`s inside a text box

### Changed

- `Banner` children are now wrapped in `<Box display="auto">` so they will expand to the full available width.
- `ConfirmationDialog` uses `ConfirmLayout` to render modal content
- `ModalHeader` accepts a new headerIcon prop to render next to the title content
- `ModalManager` children prop is now optional
- `ModalSurface`
  - all consumers now support a responsive `maxWidth` prop
  - `surfaceStyle` renamed to `surfaceStyles` in order to make the modal and DialogManager consistent
- Edited modal documentation for clarity

### Fixed

- `MenuItem` improved for use-case where itemRole="link" interacted poorly with unrelated CSS in applying :hover and :focus pseudo-styles

## [0.7.13] - 2020-01-16

### Added

- `Chip` component (more `Chip`-related features coming soon)

### Fixed

- `Select` used inside of a `Dialog` would intermittently lose focus and fail to update when clicking on an option.

## [0.7.12] - 2020-01-13

### Fixed

- `MenuList` would get a bad value for the attribute`aria-labelledby` when used without `Menu`.
- `InputText` - `autoComplete` not being passed down to `input`

## [0.7.11] - 2020-01-09

### Added

- Menu now supports hoverDisclosureRef prop so that MenuDisclosure is only shown when the element in question is hovered over.
- Select now renders a custom component instead of the native select.
  - Allows for new features including isFilterable / onFilter to allow the user to filter through options, and isClearable to allow the user to clear out the value.
  - Uses experimental ComboBox components (more info on this soon!)

### Changed

- Lots of minor dependency updates (gatsby-\*, typescript, etc.)
- `MenuItem` now supports focusVisible behavior

### Fixed

- `Dialog` / `DialogManager` TS interfaces correct to properly reflect support for responsive sizes
- `Tooltip` will no longer inherit `white-space`, `text-transform` or `word-break` behaviors of the component it uses for positioning calculation

## [0.7.10] - 2019-12-20

### Added

- Proxy Server package
  - New documentation: getting started with local data fetching

### Changed

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

## [0.7.8] - 2019-12-16

### Changed

- `ModalManager` (and it's derived `DialogManager` & `DrawerManager`) now support a `onClose` callback that will be called when the modal is closed.

### Fixed

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
