# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).\

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
