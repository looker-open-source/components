# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [UNRELEASED]

### Fixed

- `ButtonGroup` space between rows when wrapping
- `InputChips` separates chips by newline when pasting

## [0.8.6]

### Fixed

- `InputTime` now renders warning icon when validationType="error" is passed
- `Icon` properly passes through DOM elements

## [0.8.5]

### Added

- `CheckboxGroup` and `RadioGroup` now support wrapping when `inline` is used, and they use the same height as other inputs
- Storybook replaces Playground as preferred development location for components `yarn storybook`

### Changed

- `Icon` now supports "t-shirt" sizing. (i.e.: `size="small"`)
- Jest no longer requires artifact build before being run

### Fixed

- `Tooltip` appends `hover` class if tooltip is open rather and doesn't replace given `className` prop value
- Fixed documentation header
- Fixed a bug in Slider documentation that cause Gatsby to fall over on documentation deployment

## [0.8.4]

### Added

- Icon accepts artwork as props.
- `Fieldset` supports an accordion mode via an `accordion` prop

### Changed

- `ModalContent`
  - Tweaked the presentation of overflow state (simple border on top, more subtle shadow + border at bottom)
  - now supports `borderBottom` that will always display a border at the bottom of the content area regardless of whether the content overflows the container.
- `ModalFooter` now leverages `Space` components internally
- `ModalHeader` refactored to invert Styled Components usage
- `SpaceVertical` now has `align=stretch` by default

### Fixed

- `Fieldset` with inline properly aligns `Field`s with error messages

## [0.8.3]

### Added

- `ButtonGroup` and `ButtonToggle` now support `options` as an alternative to nested `ButtonItem` children
- `TreeGroup` component

### Fixed

- `ButtonGroup` and `ButtonToggle` accessibility issues due to hidden `input`s (they now render a list of `button`s instead)
- `Banner` no longer extra wide margin-right by default
- `Calendar`, `InputDate`, and `InputDateRange` localization props

### Removed

- `ButtonGroup` and `ButtonToggle` no longer support an uncontrolled version, since they now render a list of `button`s instead of checkbox and radio groups.

## [0.8.2]

### Fixed

- `InlineInputText` was mis-rendering underlying text and not absorbing `text-align` from parent element

## [0.8.1]

### Fixed

- `MessageBar` needs to allow DOM properties to be passed through (aria support and the like)
- Fix issue where InputDate did not render the correct month when setting a value prop

## [0.8.0]

### NOTABLE

- `ComponentsProvider` now supports `coreColors` attribute for dynamic theme generation
- `theme.colors.palette` no longer used internally except in very limited (and soon-to-be-deprecated) cases.
- `theme.colors` shape has been significantly refactored (documentation updates to follow)
- `Tooltip` now uses `keyAccent` for link color

### Added

- `ActionListItem` accepts `actionsButtonLabel` prop to help with testing
- `ComboboxList` and `ComboboxOption` now both support a custom `indicator`
  - `Select` and `SelectMulti` also support `indicator` at both the component and option level
- `InputColor` now supports a "null" state
- `Status` component
- `Tree`, `TreeItem` components
  - Includes docs and test suite
- Test helper functions for `Combobox` component using react-testing-library

### Changed

- `Badge` - `default` intent is now `key`
- `Banner` is now `MessageBar`
  - Major style changes to be more Material-esque
  - `warning` is now `warn`
  - `error` is now `critical`
  - `info` is now `inform`
  - `confirmation` is now `positive`
- `Button*` font sizes updated to match design specifications
- `CheckboxGroup` and `RadioGroup` `name` is now optional
- `TextArea` now supports min-height
- Icons: `LookerLogo` and `LogoRings` updated to match new branding

### Fixed

- `CheckboxGroup` and `RadioGroup` now reflect changes to `value` prop
- `InlineInputText` no longer adds a special character to prevent vertical-collapse when empty
- `InlineInputText` `simple` option _actually_ removes border-bottom
- `InlineInputText` & `InlineInputTextArea` inherit color and text-alignment from parent
- `Popover` positioning when placement is "top" and the height changes
  - `usePopper` reinstate the `adaptive` option of `computeStyles`

### Removed

- `SemanticColor[s]` are no longer supported (see new `theme.colors` shape above)

## [0.7.37] - 2020-05-20

### Fixed

- `Space` & `SpaceVertical` default to 100% width of their container again

## [0.7.36] - 2020-05-20

### Added

- created `InputColor`
- `Accordion`, `AccordionLabel`, `AccordionContent` components
- `ButtonGroup` and `ButtonToggle` will now wrap if there are too many items for the container width
- `ButtonToggle` now accepts `nullable`
- `ComboboxList` now accepts properties from `LayoutProps`
- `ComponentsProvider` now accepts `ie11support` parameter to emit IE11 compatibility style
  - `IEGlobalStyle` component (underlying component used by `ComponentsProvider` for IE11)
- `FieldSelectMulti` component
- `FieldTime` component
- `FieldTimeSelect` component
- `Select` now accepts `listLayout` to control the layout of the list
- `Space`
  - now supports `around`, `between` and `evenly` as alternatives to `gap`
  - now supports `verticalAlign` property
- `SpaceVertical` now supports `align` and `stretch` properties
- `Accordion`, `AccordionLabel`, `AccordionContent` components
- `ButtonToggle` now accepts `nullable`
- `ButtonGroup` and `ButtonToggle` will now wrap if there are too many items for the container width
- created `FieldRangeSlider` and `FieldSlider` components

### Changed

- updated `FieldColor` to use `InputColor`
- `Banner` fontSize adjusted and external margin removed
- `Button` and `ButtonOutline` horizontal padding on increased, decreased for `ButtonTransparent`
- `DateTimeFormat` uses date-fns to format human-readable date string (rather than built-in browser default functionality)
- `Tooltip`
  - Now offers a cloneElement version as well as the existing render props version
  - Documentation update to reflect new `children` structure
  - now supports `aria-describedby`
  - `useTooltip` includes a generated id (or passed-in prop value) for the resulting tooltip in the return object
- `MenuDisclosure`, `Banner`, `IconButton`, `ModalHeader` explicitly use their id props to either provide `useTooltip` with an id or to provide another component that uses `useTooltip` with an id to generate the tooltip's id
- Icon used for error states in inputs changed to `CircleInfo`
- Support Warning icon display on Select and SelectMulti inputs
- Refactor use of InputSearch to support more flexible layouts
- Use Babel for building Monorepo ES artifacts
  - Change build artifact path from `dist/` to `lib.`
  - No longer produces multiple artifact formats (`es` only)
  - Leverages `lerna` to largely remove need for per-package scripts
- `yarn playground` & `yarn gatsby` replace `yarn develop` - no need to pre-compile for local development now.
- Updated artwork for `Download` icon

### Fixed

- `Confirm` corrected word wrapping when long strings without white-space are used
- `IconButton` no longer generates spurious DOM outside of itself for `tooltip` (doesn't create funky layout bugs when `IconButton` is within `Space`)
- `InlineInputText` no longer collapses when value is empty
- `FieldTime` update width to be 100%

### Removed

- Deleted `MenuSearch` component in favor of `InputSearch`

## [0.7.31] - 2020-05-12

### Fixed

- `FieldInline` `for` attribute moved to the correct `label`

## [0.7.30] - 2020-05-07

### Added

- Icons: `GitBranch`, `ViewColumn`, `SectionDrop`
- `InlineInputText` supports placeholder attribute
- `InlineTextArea` implemented with test and documentation.
- `RangeSlider` component
- `Menu` now automatically preserves space for icons if any items have an icon assigned
  - `MenuContext` now includes `menuItemStyleContext` for "preserved icon space"-related properties
  - `MenuItem` renders an empty Box with the same size as the icon(s) of sibling `MenuItem's (if any)
  - `MenuList`, `MenuGroup` contain piece of state the tracks the size of the preserved icon space
- `Select` and `SelectMulti` now supports windowing (virtualization)
  - `windowedOptions` prop overrides the default condition of >= 100 options

### Changed

- `ActionList` no longer highlights selected rows or hovered rows (when onClickRowSelect is true)
- `FieldInline` & `ButtonItem` labels now include the `for` attribute
- `Field` & `FieldInline` (therefore all `Field*`) have more explicit line-heights to enforce consistent layout.
- `Fieldset`
  - updated documentation to include label and legend
  - default spacing switched from `xsmall` to `small` to improve visual relationship with their `Input*`
- Icon: `ViewColumn` updated to better match keylines and guides

### Fixed

- `Prompt` behaves better
  - Clears out old `defaultValue` when new `defaultValue` is passed in
  - Clears out any user input after pressing cancel button
  - Updated test suite to prevent future regressions for the above fixes
- `ToggleSwitch` React warning fixed

### Removed

- `ActionListItemAction` no longer supports the `color` prop

## [0.7.29] - 2020-04-24

### Changed

- `Checkbox` & `Radio` remove default margin (previously `3px)
- `Field`
  - Set `id` on label based on field.id to allow for `Fieldset` `legend` replacement / association
  - Removed default margin-bottom
- `FieldColor` defaults to `width=“100%”`
- `Fieldset`
  - Implement with a `Space` / `SpaceVertical` layout (emulate `Form`)
  - Enable `inline` presentation
  - Use `div` instead of `fieldset` for DOM object due to Chrome implementation bug of `fieldset` (doesn’t allow for Flex / Grid layouts within `fieldset`
  - Minor fix-up to Fieldset composition (no visual impact)
- `Form` - supports layout/simple props (spacing & layout)
- `Grid`
  - Correct column specification to prevent grid “blow-out”
  - Remove explicitly specified `width: 100%` (it’s implied)
- `Legend`
  - Extend `Label` styles to keep Label & Legend presentation bound where appropriate
- `Menu` closes by default on `MenuItem` click
- Provide `@types/styled-system` as a package dependency
- `ActionList`
  - Added "select all" functionality and test suite
  - Added documentation
- `Space` & `SpaceVertical`
  - Add `layout` / `layoutProps` to `simpleLayoutProps` to allow for default width specification
  - Improve specificity of child selectors to apply only to direct descendants.
  - Use double selector to override theme reset behavior
- `TextArea` only supports vertical resizing now
- `ToggleSwitch` explicitly specify `margin: 0` to suppress browser-default styling
- Provide `@types/styled-system` as a package dependency
- WWW site keyboard navigation improvement

### Fixed

- `ActionListItem` no longer have shadow and cursor: pointer without an onClick
- `ActionListItemColumn` aligns with header columns
- `RequiredStar` wasn't visual artifact from being rendered (red asterisk)
- `useScrollLock` no longer jitters on attempted scroll (used in modals and overlays)

### Removed

- `Radio` no longer supports `readOnly` (was nice to know you, albeit briefly)
- `TextArea` now only resizes on the Y access

## [0.7.28] - 2020-04-20

### Added

- `ActionList`
  - Added test suite around "select" behaviors
  - Added documentation
- `Checkbox` & `Radio` now support `readOnly` property
- Icons - `CrossFilter`

### Fixed

- `Checkbox` & `Radio` disabled states match design spec
- `ComponentsProvider` now automatically loads `GlobalStyle` (also provides `globalStyle={false}` prop to disable this behavior)

### Changed

- `Radio` only sends `onChange` when state actually changes
- `Field*` components no longer have a bottom margin by default (see `Form` update)
- `Form` now acts as `SpaceVertical` component automatically putting a gap between each child item
- `InputText` will now show red error icon when validation fails

### Removed

- `FieldInline` no longer supports `labelFontWeight`

## [0.7.27] - 2020-04-15

### Added

- New icons for field types `FieldDate`, `FieldDistance`, `FieldDuration`,`FieldLocation`,`FieldNumber`,`FieldString`,`FieldTier`,`FieldYesNo`

### Changed

- `Select` and `SelectMulti` option groups `title` is now `label` and optional.
- `Badge` style updated to use lighter colors for intents. Badges are now always round.

### Fixed

- `ComboBox` crash-bug related to `btoa` dependency needed for Gatsby static-generation reqs.

## [0.7.26] - 2020-04-14

### Added

- Content
  - `ActionList`
    - Now supports sorting
    - Now supports selections
    - `ActionListManager` component
    - `ActionListItemAction` accepts `color` prop (only takes `danger`)
  - `PageSize` component
  - `Pagination` component
- Forms
  - `InputTime` component
  - `InputTimeSelect` component
  - `SelectMulti` component
  - `TextArea` component supports `resize` property
- Icons
  - `Board`
  - `ShareAlt`
  - `SendEmail`, `SendSftp`, `SendWebhook`
  - `VisibilityOutline`,
- Layout
  - `Grid` component
  - `Space` & `SpaceVertical` components
- Overlay
  - `Prompt` component & `usePrompt` hook
- Typography
  - `CodeBlock` component
- Utilities
  - `ComponentsProvider` component to provide a pre-packaged `ThemeProvider` + `theme`

### Changed

48 direct dependency updates (https://github.com/looker-open-source/components/pulls?q=is%3Apr+is%3Aclosed+label%3Adependencies+is%3Amerged+merged%3A2020-03-23..2020-04-15)

- `ActionList` now gives proper white space to `indicator` element
- `Banner` prop `dismissable` is now `canDismiss`
- Icons -`Share` artwork updated
- `Popper` upgraded to 2.x
- ESLint now enforces license header on all files automatically (with `--fix` option)

### Change

- updated Field to remove `alignLabel` and have only default (top) and inline (right) label.

### Fixed

- `IconSize` - corrected icon's size to adjust with `size` prop
- `Select` no longer throws a runtime error when no options, defaultValue or placeholder are specified
- `ToggleSwitch` enabled color corrected
- `usePopper` (used in `Popover` and `Tooltip`) positioning issue with `placement="top"` and offset parent is the window

## [0.7.25] - 2020-03-23

### Added

- `ActionList` now supports sorting
- `ArrowLeft`, `EditOutline`, `ExploreOutline` Icons added
- `FieldTextArea` component was created with documentation and tests
- `ModalHeader` add support for `iconClose` option
- `TextArea` component was created with documentation and tests

### Change

- update TextArea to support resized and documentation
- move path for InlineInputText now under Form/Inputs
- `ActionList` closes Actions menu on `ActionListItemAction` click
- update TextArea to support resized and documentation
- move path for InlineInputText now under Form/Inputs
- `ArrowDropDown` and `ArrowDropUp` Icons renamed to `ArrowUp` and `ArrowDown`
- `CacheRefesh` Icon update
- `Confirm` no longer displays a `Close` `IconButton` in the header
- `InputSearch` now has a `Search` icon

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
