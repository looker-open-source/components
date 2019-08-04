# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.1-beta.22] - 2019-08-02

### Added

- Icons
  - `Format Italic`
  - `FormatBold`
  - `FormatUnderlined`

### Changed

- Major refactor of `OverlayManager` (and `Tooltip` / `RichtoolTip`) [LENS-257]
  - Now supports `usePortal={false}` to preserve `:hover` behavior.
  - Major refactor / clean-up of Overlay code (BIG Thank you to @AprilArcus)

### Bug Fixes

- `Popover` now supports `arrow` property
- `Tooltip` now supports `width` property [LENS-264]

## [0.0.1-beta.21] - 2019-07-14

### Changed

- Documentation fix (removed spurious note about Lens not be published online)
- Made `react` and `react-dom` peerDependencies
- Update to `react-hotkeys` 2.x and use it for all hotkey registration consistently (`Modal` now supports hotkeys, previously only `ModalManager` offered support)
- Upgraded all dependencies except Styled Components & Styled System
- Addressed `lodash` security notice by resolving to version with fixes

## [0.0.1-beta.20] - 2019-07-05

### Changed

- `IconButton` - tweaks to icon button sizes keeps icons the size consistent
- `Menu` - now supports `compact` property that tightens layout of `MenuItem` and gives slightly more padding around `MenuGroup`
- `ModalContent`, `ModalFooter`, `ModalHeader` padding adjustments
  - Removed asserted heights and instead now uses content fit
  - Set horizontal padding on all to `xlarge`
- `ModalFooter`
  - children elements are now automatically given spacing between items (developer does not need to specify margin on adjacent buttons)
  - added `secondary` “slot” prop to support buttons positioned on the left side of the footer.
  - corrected source order so that tab order is correct. Default button will get first focus and then tab will move to cancel and secondary options.
- `Overlay`
  - Refactor `Popover` to be more predictable when content overflows viewport
  - Removed `pin` behavior from popover (preserved on `MenuOverlay`)
  - Removed backdrop pointer icon on backdrop hover for popover
- `Tooltip` - overflowWrap is applied to make sure non-breaking text does not overflow the Tooltip container.
- `VisuallyHidden` now exported

## [0.0.1-beta.19.5] - 2019-06-26

### Changed

- Icons `DashboardFile`, `ModelFile` and `ViewFile` sizes changed to be on the correct icon grid.

## [0.0.1-beta.19.4] - 2019-06-19

### Bug Fixes

- Fix `Overlay` `stopPropogation` behavior to stop native DOM events too.

## [0.0.1-beta.19.1,2,3] - 2019-06-14

- `/dist` had old MenuItem.d.ts, caused ambient build errors

## [0.0.1-beta.19] - 2019-06-14

### Added

- Icons
  - Alignment: `AlignCenter`, `AlignLeft`, `AlignRight`
  - Color: `ColorFill`, `ColorText`
  - `Flag`
  - `SalesAnalytics`
  - `Update`
- `MenuSearch` component

### Changed

- Minor update to `FieldRadio` and `FieldChecked` examples
- Major refactor of `MenuItem`, `MenuGroup` and `Menu`
  - Better keyboard control support
  - MenuItem now can be a link itself (supports `href` and `target` props)
  - `customizations` prop now accepts `fontSize` & `iconSize`.
  - `customizations` prop no longer accepts `icon: { color: '...', size: '...' }` instead use `iconColor: '...'`
  - Deprecated "active" mode and `active` / `canActivate` props removed
  - `Menu` now supports `groupDividers={false}` to hide the divider between adjacent MenuGroups
  - `Menu` no longer supports `focusOnMount` prop (placing a Menu inside a Overlay or Modal will "just work" now)

### Bug Fixes

- Fixed typing on FieldRadio

## [0.0.1-beta.18.2] - 2019-06-10

### Bug Fixes

- Properly import SVG for Select indicator

## [0.0.1-beta.18] - 2019-06-10

### Bug Fixes

- Loosened typing on `innerRef`
- Fixed typing on FieldCheckbox

## [0.0.1-beta.17] - 2019-05-29

### Added

- Link icon

### Changed

- All components should now support innerRef assignment
- All (styleable) components are exported as Styled Components (`DialogManager` & `DialogManager` are examples of components that don't support style props)

- `Select` visual rendering update to be consistent with Figma specs
- Removed duplicate documentation for Modal & Overlay component families.
- `Text` now has a default fontSize specified
- `MenuItem` customizationProps supports partial object
- `MenuItem` focus color is properly applied
- `MenuOverlay` is no longer exported and should not be used except by MainNav
- `Overlay` family components (Tooltip, Popover, etc) now support a `stopPropogation` prop that prevents the click from bubbling up to parents in the DOM. This will allow for removal of the `PreventDefault` component in Helltool.

- CI/CD Improvements (move configuration to `./ci`)

### Bug Fixes

- MenuItem gets focus color assigned properly and other test improvements
- MenuOverlay should have transparent background.

## [0.0.1-beta.16] - 2019-04-26

### Added

- `MarketPlace` Icon

### Changed

- Fixed `IconButton` sizing to match `Button`
- `VisuallyHidden` now exported as StyledComponent
- Added respnosive values for `fontSize` & `lineHeight`
- `MenuItem` aria enhancements
- `Popover` backdrop is now transparent by default and cursor is `default`
- `Icon` now accepts `ref` and exported as StyledComponent

#### Bug Fixes

- `Overlay` (and ancestors) are properly positioned when trigger is within container with `overflow: auto` or `overflow: scroll`
- `Overlay` (and ancestors) arrow is properly positioned with `placement='left*'` or `placement='right*'`

## [0.0.1-beta.15] - 2019-04-19

### Added

- `CacheRefresh` Icon

### Changed

- "Color Palette" shows up once again under Colors in the styleguide
- Icon build docs fixed
- OverlayHover now uses React Portal (via ModalPortal)

### Removed

## [0.0.1-beta.14] - 2019-04-17

### Added

- `IconButton` component
- `VisuallyHidden` component (allows for items to exist but be hidden on the DOM)
- `Space` Icon
- `CalendarQuarter` Icon
- `CircleInfoOutline` Icon
- `ModalManager`, `DialogManager`, and `DrawerManager` components which use render props to construct modals, dialogs, and managers

### Changed

- FlexProps added to `Box` component
- Current `MenuItem` to have bold font be default now
- `MenuItem` styling improved
- `Select` and `FieldSelect` refinements:
  - Now valid to set `options` as an empty array
  - Specify `Select` width on `FieldSelect`
- `Overlay` and `Modal` based components are now constructed via render props
- `Popover` arrow can be hidden now

### Removed

- Text Smoothing

## [0.0.1-beta.13] - 2019-03-19

### Added

- Export for `FieldSelect`, making it now usable
- `Banner` component that can display warning, error, info, and confirmation messages

### Changed

- The calendar week icon has been updated due to a coloration issue

### Removed

## [0.0.1-beta.12] - 2019-03-14

### Added

- This changelog.
- Four new calendar icons, and one "Circle-Plus" icon
- New components: `Select` and `FieldSelect`
- Better `MenuItem` accessibility

### Changed

- The icon documentation page no longer has a partial list of icons, but rather a link to a page with all the icons
- `MenuItem` now takes a new prop called `itemRole` which is either `link` or `button`

### Removed
