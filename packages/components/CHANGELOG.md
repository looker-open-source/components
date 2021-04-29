# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.6](https://github.com/looker-open-source/components/compare/v1.1.5...v1.1.6) (2021-04-29)


### Bug Fixes

* **RangeSlider:** Value stays within bounds when min/max changes ([5997829](https://github.com/looker-open-source/components/commit/5997829a8fd6c678583de7d2ee5c4669036e3ed0))





## [1.1.5](https://github.com/looker-open-source/components/compare/v1.1.4...v1.1.5) (2021-04-28)

**Note:** Version bump only for package @looker/components





## [1.1.4](https://github.com/looker-open-source/components/compare/v1.1.3...v1.1.4) (2021-04-28)


### Bug Fixes

* **List:** Only define height when windowing ([#2208](https://github.com/looker-open-source/components/issues/2208)) ([965a628](https://github.com/looker-open-source/components/commit/965a628859077e1594cfe17b70b6dc74b6eb7ee5))
* **ListDivider:** Correct color for ListDivider, MenuDivider, SelectOptionsDivider ([#2218](https://github.com/looker-open-source/components/issues/2218)) ([524557d](https://github.com/looker-open-source/components/commit/524557da7d2bc4b5731aa8d9740ff139125aa689))
* **MenuHeading:** Added spacing to MenuHeadings that follow MenuDividers ([#2172](https://github.com/looker-open-source/components/issues/2172)) ([7dd2dee](https://github.com/looker-open-source/components/commit/7dd2deef9d4ff1aa04bc4ae5213894cb1f74464e)), closes [#2173](https://github.com/looker-open-source/components/issues/2173) [#2176](https://github.com/looker-open-source/components/issues/2176)
* **Portal:** Insert element earlier to support measured components ([#2185](https://github.com/looker-open-source/components/issues/2185)) ([bdabc45](https://github.com/looker-open-source/components/commit/bdabc453808a1d501a41787851f0f3e9caaf2757))
* **RangeSlider:** Value state reverting if re-rendered before prop is updated ([#2174](https://github.com/looker-open-source/components/issues/2174)) ([6b1ae19](https://github.com/looker-open-source/components/commit/6b1ae1945f9c3951ceede4bb980ba778c95955cd))
* **Truncate:** Prevent spurious scrollbar presentation due to browser settings ([#2175](https://github.com/looker-open-source/components/issues/2175)) ([23c403a](https://github.com/looker-open-source/components/commit/23c403a9504271002e60d6ea3c817568a2d4c333))





## [1.1.3](https://github.com/looker-open-source/components/compare/v1.1.2...v1.1.3) (2021-03-31)


### Bug Fixes

* Remove all internal references from @looker/components to [@looke](https://github.com/looke)… ([#2149](https://github.com/looker-open-source/components/issues/2149)) ([9c368a6](https://github.com/looker-open-source/components/commit/9c368a6777dee2e5556002c8d2673647e6fec915))
* **SelectOptions:** Render an option, not a header, when option value is an empty string ([#2148](https://github.com/looker-open-source/components/issues/2148)) ([ad06185](https://github.com/looker-open-source/components/commit/ad06185e58eb4a7a941631a4a8d64ccba5c49780))





## [1.1.2](https://github.com/looker-open-source/components/compare/v1.1.1...v1.1.2) (2021-03-31)


### Bug Fixes

* **ToggleSwitch:** Remove verticalAlign / inline-block to improve layout ([#2128](https://github.com/looker-open-source/components/issues/2128)) ([47ea669](https://github.com/looker-open-source/components/commit/47ea6690e75a6d3e9dc11f3bd5fc37635b97a46f))





## [1.1.1](https://github.com/looker-open-source/components/compare/v1.1.0...v1.1.1) (2021-03-31)


### Bug Fixes

* Use /lib in deep-import for Icons to correct build portability ([#2143](https://github.com/looker-open-source/components/issues/2143)) ([ef2b299](https://github.com/looker-open-source/components/commit/ef2b2995c602989c25c6925d061844e308a91e2e))





# [1.1.0](https://github.com/looker-open-source/components/compare/v1.0.0...v1.1.0) (2021-03-31)


### Features

* **Select:** Support windowing for grouped options ([#2071](https://github.com/looker-open-source/components/issues/2071)) ([440c0b2](https://github.com/looker-open-source/components/commit/440c0b2c1744711a3c0f5b2fe6b5098ca9e443f1))





# [1.0.0](https://github.com/looker-open-source/components/compare/v0.18.0...v1.0.0) (2021-03-22)

### BREAKING CHANGE

- **Icon**: Changes how Icons are used within @looker/components, shipped within @looker/components and leveraged by downstream consumers.

Fundamentally this changes icons from being a key/name (e.g.: "Calendar") to an SVG or component `<Calendar />`. Looker Components now leverages [Styled Icons](https://github.com/styled-icons/styled-icons) to provide types and design patterns as well as providing a complete set of "stock" Google Material icons.

# [0.18.0](https://github.com/looker-open-source/components/compare/v0.17.0...v0.18.0) (2021-03-22)

### Bug Fixes

- **ListItem:** Prevent props from being spuriously emitted to DOM output ([#2086](https://github.com/looker-open-source/components/issues/2086)) ([b1da0c7](https://github.com/looker-open-source/components/commit/b1da0c7f9a7802a14db15b8e6e90e5d1ae4f5611))
- Correct issue where components that output DOM button w/o type="button" inadvetedly submit HTML forms ([#2096](https://github.com/looker-open-source/components/issues/2096)) ([ae5bc1b](https://github.com/looker-open-source/components/commit/ae5bc1ba3e46da7c387e4125ce88d49cb2798973))

### Features

- **Layout:** add position fixed to Header and Footer ([#2028](https://github.com/looker-open-source/components/issues/2028)) ([6dc9f9a](https://github.com/looker-open-source/components/commit/6dc9f9a6f8b7559a8d6e62081f05d60f9746419a))

# [0.17.0](https://github.com/looker-open-source/components/compare/v0.16.2...v0.17.0) (2021-03-18)

### Bug Fixes

- **DataTable:** display correct font-size when CSS reset is in-use ([#2067](https://github.com/looker-open-source/components/issues/2067)) ([fe30da9](https://github.com/looker-open-source/components/commit/fe30da90c629b8a3c13f4b076ecceea9cfc47807))
- **DataTable:** update gap space between content and indicator ([#2065](https://github.com/looker-open-source/components/issues/2065)) ([7a2975a](https://github.com/looker-open-source/components/commit/7a2975aaf44b2702f6c7c2cef31fb587b89dd400))
- **Grid:** Default to 100% width ([eb9e360](https://github.com/looker-open-source/components/commit/eb9e360496daeec5fd76c01fc705700a531a299a))
- **Listitem:** Improved strategy for :focus-visible CSS (remove z-index from MenuHeading) ([bcbf47c](https://github.com/looker-open-source/components/commit/bcbf47c298d4e935be2cddaf8f9ec33856f21cc8))
- **MenuList:** Deal with MenuDividers in unexpected places ([#2079](https://github.com/looker-open-source/components/issues/2079)) ([ea6e028](https://github.com/looker-open-source/components/commit/ea6e028f75503f16884cafc1ec9acd0e0ae4b5ae))

### Features

- **InputColor:** New ColorPicker base component, major overhaul of InputColor ([#2013](https://github.com/looker-open-source/components/issues/2013)) ([a4d625e](https://github.com/looker-open-source/components/commit/a4d625e9d71250c3654a6646cc018c47397a34f9))
- **Layout:** Aside, Footer & Header now support border\* props ([#2016](https://github.com/looker-open-source/components/issues/2016)) ([c5652ca](https://github.com/looker-open-source/components/commit/c5652ca92e51998be3d27c2b819d15dc76553fa2))

## [0.16.2](https://github.com/looker-open-source/components/compare/v0.16.0...v0.16.2) (2021-03-17)

### Bug Fixes

- **MenuItem:** Remove unnecessary aria attributes when there is no nested menu ([#2049](https://github.com/looker-open-source/components/issues/2049)) ([2c6c784](https://github.com/looker-open-source/components/commit/2c6c784837746fdb539cfb9949f1dacbdde3ccb0))
- **Space:** Remove snapshot tests, add justify support, default DataTable to 100% width ([#2050](https://github.com/looker-open-source/components/issues/2050)) ([fe50f4d](https://github.com/looker-open-source/components/commit/fe50f4d61104f8dee34e48214a25f8d912991584))
- Icon refactor pre-patches ([#2030](https://github.com/looker-open-source/components/issues/2030)) ([776216b](https://github.com/looker-open-source/components/commit/776216b2eed5d922b81bcf585f79de66cfd55811)), closes [#2031](https://github.com/looker-open-source/components/issues/2031)

## [0.16.1](https://github.com/looker-open-source/components/compare/v0.16.0...v0.16.1) (2021-03-17)

### Bug Fixes

- **MenuItem:** Remove unnecessary aria attributes when there is no nested menu ([#2049](https://github.com/looker-open-source/components/issues/2049)) ([2c6c784](https://github.com/looker-open-source/components/commit/2c6c784837746fdb539cfb9949f1dacbdde3ccb0))
- **Space:** Remove snapshot tests, add justify support, default DataTable to 100% width ([#2050](https://github.com/looker-open-source/components/issues/2050)) ([fe50f4d](https://github.com/looker-open-source/components/commit/fe50f4d61104f8dee34e48214a25f8d912991584))
- Icon refactor pre-patches ([#2030](https://github.com/looker-open-source/components/issues/2030)) ([776216b](https://github.com/looker-open-source/components/commit/776216b2eed5d922b81bcf585f79de66cfd55811)), closes [#2031](https://github.com/looker-open-source/components/issues/2031)

# [0.16.0](https://github.com/looker-open-source/components/compare/v0.15.1...v0.16.0) (2021-03-11)

### Bug Fixes

- Export all Date & Time-related components from a sub-location to prevent bundle-size impacts ([#2025](https://github.com/looker-open-source/components/issues/2025)) ([158f3b4](https://github.com/looker-open-source/components/commit/158f3b460302acfa8407023a4ebfe89859e04bc1))
- **Divider:** Remove default vertical margin ([#2014](https://github.com/looker-open-source/components/issues/2014)) ([f64e975](https://github.com/looker-open-source/components/commit/f64e975e972da9e15487bf2a9891119f96d31920))
- **List:** Fixed List / Menu windowing ([#1997](https://github.com/looker-open-source/components/issues/1997)) ([82e726d](https://github.com/looker-open-source/components/commit/82e726d73f110a7055db99523e2b727528d88783))
- **MenuHeading:** Fix MenuHeading style overrides ([#2002](https://github.com/looker-open-source/components/issues/2002)) ([bb293d9](https://github.com/looker-open-source/components/commit/bb293d9a9963b833b452a03b59d15616539c4521)), closes [#2003](https://github.com/looker-open-source/components/issues/2003) [#2004](https://github.com/looker-open-source/components/issues/2004) [#2005](https://github.com/looker-open-source/components/issues/2005)
- **SpaceVertical:** Don't stretch SpaceVertical children by default ([#2017](https://github.com/looker-open-source/components/issues/2017)) ([998a673](https://github.com/looker-open-source/components/commit/998a673a95970e66360629074e77532184614cc3))
- **useClickable:** Improve and export onClick type ([#1985](https://github.com/looker-open-source/components/issues/1985)) ([5eca0a6](https://github.com/looker-open-source/components/commit/5eca0a60cffb02147a073db01ace34b4722d6e1b))

### Features

- **Select:** Caret icon always has default cursor icon ([#2019](https://github.com/looker-open-source/components/issues/2019)) ([64d3b12](https://github.com/looker-open-source/components/commit/64d3b1251c2c2019d3f454138b04351cc38d2700))
- Export i18n strings and utilities ([#2006](https://github.com/looker-open-source/components/issues/2006)) ([75f750b](https://github.com/looker-open-source/components/commit/75f750b5da86f1a04ccab7a3d277d3699afd9318))
- **MultiFunctionButton:** component ([#1955](https://github.com/looker-open-source/components/issues/1955)) ([e602575](https://github.com/looker-open-source/components/commit/e6025755265e9e30d06ec9e4bc5d6925aea8da8b)), closes [#1991](https://github.com/looker-open-source/components/issues/1991)

## [0.15.1](https://github.com/looker-open-source/components/compare/v0.15.0...v0.15.1) (2021-03-01)

### Bug Fixes

- Slider & RangeSlider properly support floating step value ([#1974](https://github.com/looker-open-source/components/issues/1974)) ([797211c](https://github.com/looker-open-source/components/commit/797211c1442e7cdc422a9fe4eb6e411543a526b3))

# [0.15.0](https://github.com/looker-open-source/components/compare/v0.14.1...v0.15.0) (2021-03-01)

### Bug Fixes

- **useArrowKeyNav:** Focus lost when item is removed ([#1971](https://github.com/looker-open-source/components/issues/1971)) ([dd02e5e](https://github.com/looker-open-source/components/commit/dd02e5ed9b436edf138bcabea93c78848ec83738))
- Range Slider Dashboard Integration Fixes ([#1963](https://github.com/looker-open-source/components/issues/1963)) ([a0e35c2](https://github.com/looker-open-source/components/commit/a0e35c237f83a3a30c7f4e2de8e9e59089862aea))
- **DataTable:** firefox border-bottom bug ([#1961](https://github.com/looker-open-source/components/issues/1961)) ([7f5f1e0](https://github.com/looker-open-source/components/commit/7f5f1e05fa64f21df52fd83828dffa6f7b186146))
- **FocusTrap:** Overly aggressive return focus behavior ([#1959](https://github.com/looker-open-source/components/issues/1959)) ([bbea788](https://github.com/looker-open-source/components/commit/bbea788c25e26a1e81d95c4968c3004684eef464))
- **MenuList:** Windowing ([#1966](https://github.com/looker-open-source/components/issues/1966)) ([8ebaa8d](https://github.com/looker-open-source/components/commit/8ebaa8dc6528f7e1fd1026101cbb5e9814567eb9))
- Combobox aria-owns targets ul instead of input ([#1956](https://github.com/looker-open-source/components/issues/1956)) ([55598a6](https://github.com/looker-open-source/components/commit/55598a611280fcd1208a9ce5628483c4a18a5de5))
- InputDate & InputDateRange accessibility improvements ([#1964](https://github.com/looker-open-source/components/issues/1964)) ([3257127](https://github.com/looker-open-source/components/commit/325712776610fea1d4d77fb23414f84ff083ebe0))
- **DataTable:** Safari stick cell bug ([#1965](https://github.com/looker-open-source/components/issues/1965)) ([67d0bc1](https://github.com/looker-open-source/components/commit/67d0bc1589a64105eb98b2130109b5a6debc73ff))

### Features

- **DataTable:** Allow filters to be specified by composition rather than complex prop object ([#1950](https://github.com/looker-open-source/components/issues/1950)) ([a6765e2](https://github.com/looker-open-source/components/commit/a6765e2dde2fcda5c4894d3ea5a0c7f02ae95b42))
- customize icon label for localization ([#1932](https://github.com/looker-open-source/components/issues/1932)) ([2f59ccb](https://github.com/looker-open-source/components/commit/2f59ccb83e95cdd94cf66958d34b922f09641bb9))
- MenuHeading and MenuDivider ([#1948](https://github.com/looker-open-source/components/issues/1948)) ([985e6bd](https://github.com/looker-open-source/components/commit/985e6bd0da010129a83b81623e3788b48bc4256d)), closes [#1958](https://github.com/looker-open-source/components/issues/1958) [#1960](https://github.com/looker-open-source/components/issues/1960)

## [0.14.1](https://github.com/looker-open-source/components/compare/v0.14.0...v0.14.1) (2021-02-23)

### Bug Fixes

- Focusing hidden input element ([#1952](https://github.com/looker-open-source/components/issues/1952)) ([edd2267](https://github.com/looker-open-source/components/commit/edd22673710cd471f90816f2ebf46740e8ec1d87))

# [0.14.0](https://github.com/looker-open-source/components/compare/v0.13.0...v0.14.0) (2021-02-20)

### Bug Fixes

- **ListItem:** Removed reset from ListItemWrapper ([#1933](https://github.com/looker-open-source/components/issues/1933)) ([1fe9ee1](https://github.com/looker-open-source/components/commit/1fe9ee11875826936a8a937bd77b22258bd08550))
- **ListItem:** Set background of disabled ListItemWrapper to transparent ([#1938](https://github.com/looker-open-source/components/issues/1938)) ([2e258cf](https://github.com/looker-open-source/components/commit/2e258cf6c82a85a75e425e25e7385e8b9d66c321))
- **Select** text is no longer highlighted when focused via keyboard ([#1929](https://github.com/looker-open-source/components/issues/1929)) ([d3a5ae4](https://github.com/looker-open-source/components/commit/d3a5ae4d900337c9555a3c06b93626380b8df79e))

### Features

- **Dialog** properly implements `aria-labelledby` ([#1924](https://github.com/looker-open-source/components/issues/1924)) ([15ec7be](https://github.com/looker-open-source/components/commit/15ec7bee23012bca958028b656847b7e97e4e105))
- **Dialog** now places focus on first tabbable node when opened ([#1927](https://github.com/looker-open-source/components/issues/1927)) ([1aac687](https://github.com/looker-open-source/components/commit/1aac6870eb276963d6b089d670f367eba70fc79f)), closes [#1941](https://github.com/looker-open-source/components/issues/1941)
- **Menu:** refactored to use `List` & `ListItem` ([#1906](https://github.com/looker-open-source/components/issues/1906)) ([2ee6809](https://github.com/looker-open-source/components/commit/2ee68096ffcf863558cd02f0e5e21dbf298a0774)), closes [#1907](https://github.com/looker-open-source/components/issues/1907)

# [0.13.0](https://github.com/looker-open-source/components/compare/v0.12.0...v0.13.0) (2021-02-17)

### Bug Fixes

- **design-tokens:** generateTheme now tolerates poorly encoded font stack ([#1915](https://github.com/looker-open-source/components/issues/1915)) ([dfac189](https://github.com/looker-open-source/components/commit/dfac189ca421f6a55906f4ae3395bcabdd110c9b))
- **RangeSlider** improved mobile UX ([#1909](https://github.com/looker-open-source/components/issues/1909)) ([464f055](https://github.com/looker-open-source/components/commit/464f0552c8402afc98d2796c99b9201744ec68f8))
- **MessageBar:** Use intent accent colors for MessageBar background ([#1901](https://github.com/looker-open-source/components/issues/1901)) ([c4ea665](https://github.com/looker-open-source/components/commit/c4ea665884e901ecfa5145b12b08ad0dce8fe4f0))

### Features

- i18n support ([#1881](https://github.com/looker-open-source/components/issues/1881)) ([8377f95](https://github.com/looker-open-source/components/commit/8377f95c143c317f3defae1fa9154c9b9377f831))

# [0.12.0](https://github.com/looker-open-source/components/compare/v0.11.0...v0.12.0) (2021-02-13)

### Bug Fixes

- **Tree** Removed default value on Tree density prop ([#1910](https://github.com/looker-open-source/components/issues/1910)) ([9ba8779](https://github.com/looker-open-source/components/commit/9ba877930768370aa0fa2d198bceb2edee609536)), closes [#1911](https://github.com/looker-open-source/components/issues/1911)
- **DataTable** Simplify onClick behavior ([#1865](https://github.com/looker-open-source/components/issues/1865)) ([1c17444](https://github.com/looker-open-source/components/commit/1c174442a0e731f0b60e8573077b41ff1d5a2c61))
- **InlineInputText** updated test coverage ([#1878](https://github.com/looker-open-source/components/issues/1878)) ([c6e7b5d](https://github.com/looker-open-source/components/commit/c6e7b5d98b128c49dc61a1e30a6d93ba44dc9743))
- **Radio** validation error ([#1850](https://github.com/looker-open-source/components/issues/1850)) ([9b06e39](https://github.com/looker-open-source/components/commit/9b06e3918b7564241d83117814b45a0337580a64)), closes [#1859](https://github.com/looker-open-source/components/issues/1859)
- **SelectMulti** Unable to filter with 1 or more controlled values ([#1873](https://github.com/looker-open-source/components/issues/1873)) ([4c8f214](https://github.com/looker-open-source/components/commit/4c8f214dc51b43e90f50668a9be7315ceb51d209))
- **Label** typography props now actually work ([#1871](https://github.com/looker-open-source/components/issues/1871)) ([fd8793a](https://github.com/looker-open-source/components/commit/fd8793abf5d2e055221421bafd9c2aa22ea8a3c5))

### Features

- **Panel** component ([#1815](https://github.com/looker-open-source/components/issues/1815)) ([62cafc5](https://github.com/looker-open-source/components/commit/62cafc5343062cfda69c6147be7641677df15e04))
- **Tree** refactored to leverage `List` & `ListItem` ([#1846](https://github.com/looker-open-source/components/issues/1846)) ([8940f68](https://github.com/looker-open-source/components/commit/8940f68f6cab0723404a50269c48fc6238aad14b)), closes [#1861](https://github.com/looker-open-source/components/issues/1861) [#1866](https://github.com/looker-open-source/components/issues/1866) [#1874](https://github.com/looker-open-source/components/issues/1874)

# [0.11.0](https://github.com/looker-open-source/components/compare/v0.10.4...v0.11.0) (2021-02-04)

### Bug Fixes

- `Accordion` indicator will now follow theme color changes properly ([#1854](https://github.com/looker-open-source/components/issues/1854)) ([bc2a747](https://github.com/looker-open-source/components/commit/bc2a747afcd8392f693b0365a7e8ae6de540f732))
- `DataTable` "sticky" cell border-bottom now presents properly in Safari ([#1830](https://github.com/looker-open-source/components/issues/1830)) ([cc8fe1d](https://github.com/looker-open-source/components/commit/cc8fe1df7b6f182d057313a8b85102235ded91e3))
- `DataTable` Link color should be derived from theme.colors.link ([#1848](https://github.com/looker-open-source/components/issues/1848)) ([d17540a](https://github.com/looker-open-source/components/commit/d17540a8f366ac6c909af583387bfaf4cee81d73))
- `RangeSlider` & `Slider` properly display on inverted themes ([#1853](https://github.com/looker-open-source/components/issues/1853)) ([54c4ab0](https://github.com/looker-open-source/components/commit/54c4ab01291e68227104cd567467d95f7a145954))
- `Tab` no longer spuriously accepts MarginProps ([#1844](https://github.com/looker-open-source/components/issues/1844)) ([a23c50b](https://github.com/looker-open-source/components/commit/a23c50ba4009fc6670d5e6b91359a23701a1866a))
- Downgrade react-hotkeys-hook to resolve hotkey breakages ([#1825](https://github.com/looker-open-source/components/issues/1825)) ([0fe9851](https://github.com/looker-open-source/components/commit/0fe9851cf6558b61f903836db74daf29b1ba8972))

### Features

- `DataTable` now supports keyboard navigation ([#1776](https://github.com/looker-open-source/components/issues/1776))
- `List` & `ListItem` detail props ([#1800](https://github.com/looker-open-source/components/issues/1800)) ([afe3f41](https://github.com/looker-open-source/components/commit/afe3f41c9503509045f93a9a32adce63680679ab))
- `MenuItem` supports `nestedMenu` ([#1780](https://github.com/looker-open-source/components/issues/1780)) ([7a1fada](https://github.com/looker-open-source/components/commit/7a1fada4523dd0805279baed974dc27836f32207))
- `SelectOption` `prefac`e ([#1823](https://github.com/looker-open-source/components/issues/1823)) ([3016432](https://github.com/looker-open-source/components/commit/30164321fdff15e069367352ff59a264736368b0))

## [0.10.4](https://github.com/looker-open-source/components/compare/v0.10.3...v0.10.4) (2021-01-25)

### Bug Fixes

- Select group heading styles ([#1817](https://github.com/looker-open-source/components/issues/1817)) ([e4cae00](https://github.com/looker-open-source/components/commit/e4cae00da1535ef6e7d71bbe1592c6cff45230c0))

## [0.10.3](https://github.com/looker-open-source/components/compare/v0.10.2...v0.10.3) (2021-01-25)

### Bug Fixes

- **Text:** should not have default `color` and lineHeight based on fontSize ([#1813](https://github.com/looker-open-source/components/issues/1813)) ([226dfa9](https://github.com/looker-open-source/components/commit/226dfa9067d8326f87ce842badfa16c0be29cedd))

## [0.10.2](https://github.com/looker-open-source/components/compare/v0.10.1...v0.10.2) (2021-01-22)

### Bug Fixes

- Export `List` component family ([#1807](https://github.com/looker-open-source/components/issues/1807)) ([c50360c](https://github.com/looker-open-source/components/commit/c50360cd2e9926949cc5489b18794969524416a9))
- On build properly set package.json "files" key ([#1806](https://github.com/looker-open-source/components/issues/1806)) ([c81c4bb](https://github.com/looker-open-source/components/commit/c81c4bb625c58ede49957aad90ac8d9d7b2c4b79))

## [0.10.1](https://github.com/looker-open-source/components/compare/v0.10.0...v0.10.1) (2021-01-22)

### Bug Fixes

- Properly build ems/cjs/ts for easy deep-imports ([#1804](https://github.com/looker-open-source/components/issues/1804)) ([2a523cd](https://github.com/looker-open-source/components/commit/2a523cd70b079944376c6dc87c18202e05a97b01))

# [0.10.0](https://github.com/looker-open-source/components/compare/v0.9.29...v0.10.0) (2021-01-19)

### Bug Fixes

- `DialogLayout` - corrected import path issues interface name conflict ([88f099e](https://github.com/looker-open-source/components/commit/88f099eacf361a83be9149e0ac541b9184d03547))
- `MenuList` windowing initial render performance ([a56ac29](https://github.com/looker-open-source/components/commit/a56ac29067cd25ef31a64d63c9bd742de927fb32))
- `DataTable` overflow shadow now works properly in Safari
- `MenuList` windowing initial render performance
- `Pagination` component now enables first and last page of results at same thresholds for previous and next ([#1781](https://github.com/looker-open-source/components/issues/1781)) ([f7d666a](https://github.com/looker-open-source/components/commit/f7d666a01fa42a992c0368c7f56e0311293d5cc8))
- `TooltipContent` default width is back to `'auto'`
- Properly configure build for tree-shaking support ([9202b72](https://github.com/looker-open-source/components/commit/9202b72bc5fb99eb3e1af7d9e56f3dc15b1df2a4))
- Erratic scrolling after dynamic list resize in all `Combobox`-based components

### Features

- `Breakpoint` component
- `CardMedia` supports background color props
- `DialogContent` now support `hasHeader` & `hasFooter` properties to allow for more flexible compositions ([8039da2](https://github.com/looker-open-source/components/commit/8039da25d1646e8d50ee900e6243a3e3e44ea6ca))
- `DialogLayout` component to manage dialog setup ([bfa94b3](https://github.com/looker-open-source/components/commit/bfa94b3ea75603caf47d184f63b356e666af57c0))
- `DialogHeader` uses responsive padding values
- `ListItemDetail` has smaller font and less padding-left
- `InputDate` & `InputDateRange` vertial margin removed to be consistent with other inputs
- `Menu` & `Tabs` - arrow key navigation persists the last focused item ([#1761](https://github.com/looker-open-source/components/issues/1761)) ([dc2400f](https://github.com/looker-open-source/components/commit/dc2400f6c4237e326f7ccd4a1eb4c93d962d900b))
- `Menu` structure now follows `Popover` structure: `content` prop accepts the items and `children` is the trigger element
- `Pagination` component now enables first and last page of results at same thresholds for previous and next
- `ProgressCircular` component
- `Tree` now uses the same `selected` color as `TreeItem`
- `Tree / TreeItem`
  - disabled and selected states
  - `brand` prop
  - `treeBackgroundColor` util function
- `UnorderedList`, `OrderedList`

#### Experimental

- `List` and `ListItem` ([#1773](https://github.com/looker-open-source/components/issues/1773)) ([ee1e14b](https://github.com/looker-open-source/components/commit/ee1e14b122b5db1716c2d3b2ae6ad6abc1507192))

### BREAKING CHANGES

- `DialogHeader` no longer supports `closeIcon` (always "Close") ([bca25d3](https://github.com/looker-open-source/components/commit/bca25d38959c7af27a6019063a9b7e7ee9294d8d))
- `MenuDisclosure` and `MenuContext` are no longer used with the updated `Menu` structure

## [0.9.30]

### Fixed

- `InputText` issue moving cursor and selecting text when input is already focused

## [0.9.29]

### Fixed

- Clicking outside a focus trap deactivates it

## [0.9.28]

### Removed

- Reverted: `RangeSlider` now supports touch events

## [0.9.27]

### Added

- `CopyToClipboard` component
- `TreeArtificial` + dividers enabled by default

### Changed

- `AccordionDisclosure` now supports `SimpleLayoutProps`
- `Combobox`, `ComboboxMulti`, `Select`, `SelectMulti` background color updates
  - ui1 on hover
  - keySubtle on selected
  - keySubtle on selected + hover
- `Tooltip` can now be nested directly inside a `Popover`
- `Tree`
  - Uses text5 as text color
  - Accepts ReactNode for `label` prop
- `TreeItem`
  - accepts ReactNode for `children` prop
  - background color to ui1 on hover, ui2+itemSelectedColor when selected or selected + hover

### Fixed

- `FieldInline` positioning correction correction. Affects:
  - `FieldCheckbox`
  - `FieldCheckboxGroup`
  - `FieldRadio`
  - `FieldRadioGroup`
  - `FieldToggleSwitch`
- `TabPanel` is tabbable
- `Tree` allocates enough space for indicator icon

## [0.9.26]

### Added

- `FadeIn`

### Changed

- update DataTable for accessibility
- `ComponentsProvider` now includes `FocusTrapContext` to manage all focus traps for `Dialog` and `Popover`
  - Where previously `DialogContext` properties `enableFocusTrap`, `disableFocusTrap`, and `focusTrapEnabled` could previously be used to take control of a focus trap, now use `FocusTrapContext` properties `enableCurrentTrap`, `disableCurrentTrap`, and `activeTrapRef` to do so.
- `DataTable` now supports `primaryAction`
- `DataTableCell` used description instead of detail for consistency.
- `FieldCheckbox`, `FieldToggleSwitch` & `FieldRadio` now support `description` and `detail`
- `MenuList` now supports windowing (virtualization)
  - `ScrollLockContext` properties keys have changed to match those on `FocusTrapContext`
- `doDataTableSort` renamed from `doDefaultDataTableSort` and received improvements
  - Supports "date" columns
  - Infers "string" for columns without an explicit type property
  - Is now a generic, and will properly set the type of the returned data to match the user's data shape
- `Tree` restricts `label` to string
- `TreeItem`
  - Restricts `children` to type string
  - Nested `TreeItem`s align with sibling `Tree` labels (as opposed to `Tree` indicators)
- Changed usage of icon `ArrowDown` to use new name `ArrowDropDown`

### Fixed

- `Checkbox`'s internal input no longer overflows margin
- `Select` / `SelectMulti` / `InputTimeSelect` clicking on the caret icon toggles the list and focuses the field if it was not already focused
- `Tab` now displays properly in Safari
- `TreeGroupLabel` is now properly aligned with sibling `TreeItems` and fits the standard vertical cadence (`24px`)
- `Truncate` with `Link` inside will properly preserve text color from `Link`
- `InputText` & `InlineInputText` for disabled color on Safari.
- `Select`, `SelectMulti` and `Combobox` replace `readOnly` with `inputReadOnly`
- `InputSearch` now supports `disabled` and `readOnly`
- `InputChips` now supports `disabled` and `readOnly`
- `InputDate` removed stories that did not use `value` prop to avoid daily snapshot discrepancies
- `RangeSlider` now supports touch events

### Removed

- `ActionList` aliases to `DataTable` removed
- `Heading` & `Paragraph`, `Span`, `Text` no longer support `variant` (use `color` instead)
- `useTooltip` no longer supports `surfaceStyles` property

## [0.9.25]

### Changed

Library updated to use Styled Components 5 & Typescript 3.9.x

### Fixed

- Update DataTable to support onClick of `Link/Anchor` as text inside rows.

## [0.9.24]

### Added

- `ExtendComponentsProvider`
- `useDataTable` hook for simple `DataTable` rendering (used for testing)

### Fixed

- `Avatar` will consistently maintain it's 1:1 aspect ratio within flex layouts
- `CodeBlock` should now uses `overflow-y: auto` instead of `overflow-y: scroll`
- `DataTable` with number columns now properly aligns the cell content
- `DataTableCell` truncates `description` appropriately now
- `DataTableCell` with a link is presented properly when it gains focus via keyboard
- `DataTableColumn` `width` again supports `number` for percentage-based column widths
- `DataTableHeaderCell` properly aligns sort direction icon when column `size` is specified
- `DataTableItem` supports a single column
- `DialogContent` now will only enter "overflow" state exactly once per render lifecycle
- `DialogFooterLayout` is no longer exported

## [0.9.23]

### Added

- `DataTable` (the component formerly known as `ActionList`)
  - Columns now support `size`
    - If `small`, `medium` or `large` is specified the content will be truncated to fit
    - If `nowrap` column will not wrap white-space and will grow fit content width
  - Responsive support - if table exceeds viewport width it will scroll sideways
    - `firstColumnStuck` developer can specify if the first column should "stick" to the viewport edge when scrolling
    - NOTE: Column for checkbox selection and actions column are always stuck to their respective edges
  - Column selection - the user can select which columns are displayed (if any columns have `hide` specified in their configuration)
  - Supports `state="loading|noResults"` and `noResultsDisplay`
- `autoFocus` prop will now work for inputs in `Popover` and `Dialog`
- `Dialog` & `Drawer` now support semantic sizes (`xxsmall - xlarge`)
- `Dialog` now supports `placement` - `center` (default), `top` & `cover`
- `Drawer` now supports `placement` - `left` & `right` (default)
- `Select`, `SelectMulti`, `InputTimeSelect`, and `InputSearch` now support `autoFocus`

### Changed

- `ActionList` was renamed to `DataTable`
  - Now uses a `table` element instead of previous grid layout (IE11 compatible)
  - Vertical cadence of `ActionList` reduced to a minimum of `36px`
- `Popover`, `Menu`, and `Select` no longer cancel the first click outside by default (use `cancelClickOutside` to override this)
- `DialogContent` no longer has `py` unless it overflows the available space (acting as `overflow: scroll`)
- Padding in `Button`'s has been updated to have better visual balance when icons are used

### Fixed

- `FieldCheckboxGroup` now sets `border-color` of child checkboxes to "critical" when validationMessage.type is equal to 'error'
- `InlineInputText` now supports `disabled` and `readOnly` props
- `InlineTextArea` now supports `disabled` and `readOnly` props
- `InputColor` no longer allows user to click swatch when `readOnly` is assigned
- `MenuItems` within the same `MenuList` align consistently when icons are used
- `Page` fix size to use `%` instead of `vh/vw`
- `Popover` flashing in the upper left corner of the screen on slow pages
- `Select` on a mobile device or with "tap to click" on a touch pad reopens immediately after clicking on an option
- `Select` options not being announced in a screen reader on keyboard navigation
- `Select` that is controlled no longer loses focus if there's delay between `onChange` and `value` update
- `Select` alignment of options when some have icons and others do not
- `Select` inappropriately shows "No options" when the current value is empty, after filtering a long list down to a single option then deleting the filter text
- `Select` remounts its options when the options prop changes, using a shallow comparison. This causes select via click to fail if the options prop "changes" (same values, new array instance) after a mousedown, e.g. if a parent component contains `usePopover`.

### Removed

- `ActionListManager` was removed (`DataTable` now supports `state=loading|noResults`)
- `ActionList` (now known as `DataTable`) no longer supports `header` prop (header is always generated by component now)
  - `column` no longer supports `width` (see new `size` behavior)
- `Dialog` no longer supports `maxWidth` (it's now always `100%` - use `width`)
- `Drawer` no longer supports `height` (use `minHeight`)
- `Dialog` no longer supports `surfaceStyles` (use built-in props instead)
- `DialogManager` is no longer available (`Dialog` is completely compatible with previous interface)
- `groupedPopoversRef` and `groupedMenusRef` (`Popover` and `Menu` no longer cancel the first click outside)

## [0.9.22]

### Fixed

- `AvatarIcon`, `AvatarUser`, `AvatarCombo` - corrected rendering flaw where initials or icon weren't centered

### Removed

- `DialogContent` no longer supports `innerProps`

## [0.9.21]

### Changed

- `InputFilters`
  - Default editor uses `RadioGroup` (single choice) and `CheckboxGroup` (multiple choice)
  - Developers can specify a custom editor that via `fieldFilter.editor` property (must match interface for `InputFilterEditorRenderProp`)

### Fixed

- `InputFilters`
  - improved styling when `Chips` wrap to additional lines
  - `Popover` no longer moves when `Chip` is initially displayed
- `Select` inside a `Dialog` losing focus after clicking an option
- `Tooltip` adding extra space to its child's `className`

## [0.9.20]

### Added

- `IconButton` supports `toggle` prop (uses `key` color when toggled and `aria-pressed`)
- `Tooltip` and `useTooltip` now include a brief delay before showing
  - `delay` prop controls the length
  - Improved test coverage / added image-snapshots
- `Tree` `branchAlign` prop allows item be indented at the same depth as adjacent `TreeItem`(s)
- `Tree` now supports `dividers` to produce a small visual space between each `TreeItem` displayed in the list so that adjacent items in a "selected" or active state have visual separation.

### Changed

- `ButtonItem` used inside `ButtonToggle` and `ButtonGroup` now uses `fonts.body`
- `Dialog`, `Drawer` and `Popover` no longer focus the first "tab-able" child. Instead they now focus the surface of the overlay itself.
- `InputFilter` to support multiline filter tokens
- `useDialog` (`Dialog` & `Drawer`) refactored
  - Removed use of `react-transition-group` dependency
  - Added support for `aria-busy`
  - Simplified implementation of `DialogRender` component
- `Swatch` no longer turns gray when disabled, but has a reduced opacity instead
- Removed dependencies on `polished` library

### Fixed

- `InputTimeSelect` can accept a time that is not included in the select dropdown options
- `FieldInline` refactored to use MS-compatible grid (IE11 compatibility)
  - `FieldCheckbox`
  - `FieldRadio`
  - `FieldToggleSwitch`
- `MenuItem` now receives and uses passed-in rel prop
  - Also auto appends "noopener noreferrer" to rel if target="\_blank"
- `Popover` & `usePopover` refactored internally to be consistent with `Dialog` refactor patterns
  - IMPORTANT NOTE: Popover will no longer apply `active` className to target. Instead it now applies `[aria-expanded='true']` instead. `Button*` has been updated to match this change but implementations that depend on the previous behavior will need to be updated.
- `Select` / `SelectMulti` / `InputTimeSelect` click to select option in IE11

### Removed

- `Drawer` no longer supports `backdrop` prop for customizing backdrop presentation
- `IconButton` support for `color` (`neutral` for all now)
- `ToggleSwitch` no longer supports `size` (now always consistent with `Checkbox` & `Radio`)

## [0.9.19]

### Changed

- `InputDateRange` allows you to specify a single day range by clicking on one of the date range endpoints

### Fixed

- `Truncate` no longer conflicts with `Text/truncate` helper (moved to separate directory)
- `FieldTimeSelect` label ARIA accessibility fixes
- `ComboBox` and constituents caret color corrected, indicator size corrected

## [0.9.18]

### Added

- `TreeGroup` supports `truncate` and `labelColor` props

### Changed

- `IconButton` w/ `size="small"` icon size adjusted to `small` (was `xsmall`)
- `useDialog` needs to support scenario it is controlled but `onClose` isn't specified

### Fixed

- `Space` revert mistakenly applied `flex-shrink: 0`
- Reverts: `HoverDisclosure` toggles visibility with css rather than inserting elements into the DOM

## [0.9.17]

### Added

- `Combobox` and `ComboboxMulti` `openOnClick` prop
- `ComboboxInput` now supports `freeInput` prop
- `MenuItem` & `MenuGroup` now use `list-item-style` to suppress bullet for list item when rendered outside of `MenuList` context.
- `Select`, `SelectMulti` and `InputSearch` now support `isLoading` and `detail` prop on options
- `Span` - same as `Text` without the annoying `fontSize="medium"` (inherits by default instead)
- `Truncate` component
- `useDialog` - all of the power of `Dialog` in a hook!
- Visual Snapshot test for `MenuItem`, `MenuGroup`, `Status`

### Changed

- `Code`, `CodeBlock` & `Paragraph` now explicitly use `theme.colors.text` as default color
- `Dialog`
  - `Backdrop` is now dark (Material-esque)
  - now supports all previous `DialogManager` composition capabilities
  - can be used in either an "uncontrolled" or "controlled" manner
  - _temporarily_ supports optional `content` prop until existing call sites can be updated. `content` will become **required** in next significant release.
- `DialogManager` is deprecated and all existing use cases should be replaced with `Dialog`
  - All internal use of `DialogManager` replaced with `Dialog`
- `Drawer` is nearly a direct pass-through to `Dialog` via `useDrawer` and `DialogRender`
  - `useDrawer` is nearly a direct pass-through to `useDrawer` with the key exception being `Surface` override
- `HoverDisclosure` toggles visibility with css rather than inserting elements into the DOM
- `InputSearch` `onChange` callback argument is now a string rather than an event
- `InputTimeSelect` supports 20- and 60-minute intervals
- `Legend` now applies font-family `brand`
- `MenuGroupLabel` now applies font-family `brand`
- `Span` replaced all library-internal usage of `Text` with `Span`
- `TreeItem`
  - now supports text truncation behavior
  - now wraps long text pleasantly
  - now defaults to `24px` minimum height (was previously `25px`)
  - detail no longer has padding on the right side
- `Tooltip` now has a default `maxWidth` of `30rem` (this can be overridden)
- Brand font defaults to Roboto
- Adjusted icons sizes in `IconButtons`, `Button`, `MenuItems`, `TextField` to ensure consistent sizing across components

### Fixed

- `ComboboxMulti` issue with chips not updating reflecting updated option labels
- `DialogFooter` & `DialogHeader` will no longer shrink in Safari when vertical space is limited
- `InputTimeSelect` disabled state
- `MessageBar` now displays properly in IE11 (switched from grid to flex layout)

### Removed

- `InputSearch` `onClear` – use `onChange` with a check for empty value instead
- `InputSearch` and `InputChips` `hideControls` – use `isClearable={false}` instead

### Preview / Experimental

- Experimental: `InputSearch` supports `onSelectOption`, `changeOnSelect`, `clearOnClose` and all `Select` props except `isFilterable`, `onFilter`, `showCreate` and `formatCreateLabel`

## [0.9.16]

### Added

- `InputFilter` component
- `InputFiltersChipEditor` component
- `InputFiltersChip` component
- `ActionListFilter` component

- `Drawer` component
  - Note: This is a new implementation of the previously deprecated `Drawer` and features a more modern API. `DrawerManager` behaviors are now baked in to `Drawer`
  - Includes `useDrawer` hook
- `TabList` now supports `PaddingProps` and `fontSize`
- `TabList` w/ `distribute` now uses default "small" `fontSize`
- Image snapshots tests
  - Infrastructure to run image snapshot tests leveraging Storybook `storyshots` + `jest-image-snapshots`
  - Image snapshot coverage for `Button*`, `IconButton` & `Tree` components
- Storybook: Preliminary infrastructure for composition
- Storybook: Added support for extract behavior to improve published-Storybook performance

### Changed

- ActionList supports filtering
- `Paragraph`, `Code`, & `CodeBlock` now explicitly sets `theme.colors.text` as default text color
  - Required minor adjustments to `Chip`
- ActionList supports filtering
- `ComponentsProvider` now includes `ScrollLockContext` to manage all scroll locks for `Dialog` and `Popover`
  - Where previously `DialogContext` properties `enableScrollLock`, `disableScollLock`, and `scrollLockEnabled` could previously be used to take control of a scroll lock, now use `ScrollLockContext` properties `enableCurrentLock`, `disableCurrentLock`, and `activeLockRef` to do so.
- `AccordionDisclosure` "indicator" now matches color of container rather than preserving it's initial color

### Fixed

- Page "jumps" when opening a `Popover` due to the scrollbar disappearing

### Preview / Experimental

- Preview: `InputFilters` component and tests (this component is not yet ready for general-use)
- Preview: `ActionListControls` component (this component is not yet ready for general-use)
- Preview: "Semantic" Layout components - `Layout`, `Header`, `Footer`, `Aside`

## [0.9.14]

### Added

- `InputColor` now includes `name` in `onChange` response event
- `InputChips` and `SelectMulti` chip selection and copy-pasting
- `Select` now supports `showCreate` and `formatCreateLabel` that were previously only supported in `SelectMulti`
- `useClickable` hook

### Changed

- `Chip` / `ChipButton` now call `onClick` on enter or space key
- `ComponentsProvider` now takes `colors` prop instead of `coreColors` and accepts `CoreColors & IntentColors`
- `Prompt` / `usePrompt` now _optionally_ support `clearOnCancel` behavior
- `Tree` child `AccordionDisclosure` now receives font-weight value from styled-components selector

### Fixed

- `Icon` colors can be modified when used inside a `MenuItem` detail prop.
- `Popover` cancel first click outside behavior not working with an `onMouseUp` used anywhere on the page
- `SelectMulti` failing to appropriately show "No options" when `showCreate` is used
- `Select` overwriting search value with the current option value if the option's value and label are different

### Removed

- `Tooltip` & `Popover` no longer support (optional) arrow indicator

## [0.9.13]

### Fixed

- Horizontal padding for inputs using `autoResize` prop

## [0.9.12]

### Added

- `DividerVertical` component
- `Select` option icons

### Changed

- Spacing and density adjusted on `TreeGroup` label to better match density of `TreeItem`s

### Fixed

- `MenuItem` now supports `description`
- `RangeSlider` value labels now move with the thumb controls in IE11
- `Slider` style inconsistencies resolved by rendering a div rather than the vanilla slider input
- `Select` name attribute is passed to the input
- `Select` value can now be cleared via external state change
- `Select` and `SelectMulti` performance issue causing poor rendering when inside a `Dialog`
- `Select` layout bug corrected at small sizes (min-width on `InputText` to fix)
- `Space` gap is now consistently rendered across browsers
- `Tabs` fix for distributed so each tab takes up an equal amount of space.

## [0.9.11]

### Added

- Divider now supports orientation.
- `MenuItem` now supports`Tooltip`
- `Tabs` updated for keyboard shortcut for accessibility

### Fixed

- `TabPanels` `tabIndex` shouldn't be set as we don't want it to capture focus

## [0.9.10]

### Added

- `ActionListControlBar` component
- `ChipButton` introduced for limited use cases
- `useActionListSelectManager` hook

### Fixed

- `Accordion` & `Tree` presentation fixes for IE11
- `ActionList` updated documentation to include info on control bar behavior
- `Avatar*` corrected styling conflicts when underlying component is switched to button (via `role="button"`)
- `ButtonSet` & `ButtonGroup` heights corrected to stay at `36px`
- `DialogHeader` presentation fix for IE11
- `InputChips` and `SelectMulti` overflow when a fixed height is used
- `InputChips` and `SelectMulti` long values breaking out of the input
- `InputSearch`, `Select`, `InputChips` and `SelectMulti` x button not clickable with `autoResize` and a max-width reached
- `MenuItem` disabled prop is not clickable and its not a link.
  - detail is part of `MenuItem`'s clickable area
  - update Error Icon for Fields validation message
- `Select` display value now properly updates when the option label for the current value changes
- `SelectMulti` and `InputChips` issues clicking on icons and chips
- `SelectMulti` list height now adjusts as needed when chips are added
- `Select`/`SelectMulti` list closing when trying to scroll by dragging the scrollbar
- `Space` presentation fix for IE11 (also affects consumers)
- `Tabs` no longer show scrollbar when overflowing
- `Select` getting text highlighted in a focus trap when not filterable
- `Tree` default color is text4 (was previously a different color due to browser button defaults)
- `Tree` correct React warning about nested buttons by changing `TreeItem` back to `div` with `role="button`

### Changed

- `ActionList`
  - Updated documentation to include info on control bar behavior
  - Refactored select behavior to flow from a single `select` prop object
  - conditionally renders `ActionListControlBar` based on `bulk` prop
- `ActionListManager` - renamed `noResultsText` to `noResultsDisplay` and now supports a `ReactNode` (supply a JSX for custom formatting)
- `ButtonOutline` and `ButtonTransparent` improved color application to be more inline with design spec
- `ButtonSet`, `ButtonToggle` & `Chip` correlated use of color for
- `InputChipsBase` updated to use styled() wrapped for Chip margin overrides
- `inputHeight`consolidated in single location and usage suite-wide
- `Menu`, `Popover`, `Tooltip` no longer feature arrow by default
- Replace `react-hotkeys` and improve keyboard ux for multiple stacked focus traps (effects `MenuList`, `Surface`, and `OverlaySurface`)

### Removed

- `Chip` removed most prop support

## [0.9.9]

### Fixed

- `MenuItem` correct IE11 patch to apply `aria-hidden={true}` to placeholder

## [0.9.8]

### Fixed

- `DialogContent` patch for IE11 display bug
- `MenuItem` patch for IE11 display bug

## [0.9.7]

### Added

- `Tabs` updated for accessibility
- `AvatarCombo`, `AvatarIcon` & `AvatarUser` now supports `role="button"`
  - Added support for common DOM properties and event handlers (e.g.: `onClick`)
  - Improved a11y for all `Avatar*` components
  - Added Storybook with knobs
- `IconButton` now supports `tooltipWidth` property
- `MenuItem` updated to support `iconArtwork` in addition to `icon`
- `Popover` now supports `cancelClickOutside` (`true` by default) to determine whether the "dismissal" click event is allowed to propagate

### Changed

- `Accordion` added accessibility improvements
- `ActionListCheckbox` now use `aria-describedby` attribute for accessibility purposes
  - Receives id from parent `ActionListRow`, who receives it from parent `ActionListItem` or `ActionListHeader`
- `MenuDisclosure` - tooltip placement now defaults to `bottom`
- `Select` and `SelectMulti` with `isFilterable` or `freeInput` no longer cancel the first click outside when the list is open
- update `Tab` to scroll left to right when overflow

### Fixed

- `Select`/`SelectMulti` toggling the list from the caret
- `Select` and `SelectMulti` keyboard navigation issues when filtering options
- `SelectMulti` with `freeInput` tokenizing the input value when an option is clicked
- `Tabs` now can be controlled
- Fix a few typos in the `Field` documentation
- `ActionList` fixed bug where passing object (with single attribute "all") into `canSelect` results in select all checkbox regardless of "all" setting
- `Link` no longer generates console errors when `keyColor` or `underline` prop are used

## [0.9.6]

### Added

- `iconSizes` style function includes `xxsmall` case
- `Link` now supports explicit `underline` & `keyColor` properties
- `TreeItem` and `Tree`
  - Altered style defaults
- `TreeGroup`
  - Added additional test case for color override behavior
- `undefinedCoalesce` util function

### Changed

- `Accordion`
  - Updated padding props to affect `AccordionDisclosure` and `AccordionContent` containers rather than parent `Accordion` container
  - `AccordionDisclosure` removed default `height: 100%`
- `ButtonBase` removed negative margin from `iconMargins` helper function
- `Calendar`, `FieldDate`, `FieldDateRange`, `InputDate` & `InputDateRange` now require "deep" imports
  - E.g.: `Calendar` imports from `@looker/components/lib/Calendar`)
- `Icon` no longer outputs a `<title />` by default and Icon is marked with `aria-hide` unless a title is explicitly specified
- `InputSearch` clear button is larger and now focusable, divider and summary text spacing refined
- `Menu` now has a new focus style for `MenuItems` as well as updateing sizing
- `MenuGroup` labels improvements when using `compact`
- `MessageBar`
  - MessageBar is dismissable by default. Use prop `noActions` in place of `canDismiss={false}` to hide dismiss button.
  - Adds new `visible` prop to toggle display externally
  - Accepts primary and secondary action overrides and callbacks
- `TabList` now supports distribute prop
- `Tooltip` now renders in a `Portal`
- `Tree` and `TreeItem` updated docs and test suite
- `Tree` increased gap size between indicator and label to align with sibling `TreeItem`s with icons

### Fixed

- `MenuGroup` now includes icon placeholder spacing if higher `MenuItemContext` has `renderIconPlaceholder === true`
- `Select`/`SelectMulti` keyboard navigation when filtering and going from > 100 to < 100 options
- `SelectMulti` with `freeInput` not saving input value on tab key
- `SelectMulti` list not closing on blur
- `TreeGroup` properly overrides color of child `TreeItem` labels and `Tree` labels

### Removed

- Removed `Modal*` aliases to `Dialog*`

## [0.9.5] - 2020-07-01

### Added

- `DialogHeader`
  - Supports `detail` prop as alternative to default `close` icon
  - Supports `fontWeight` & `fontSize` for backwards compatibility

### Changed

- `Fieldset` accordion mode auto-indents elements in the inner `AccordionContent`
- `AccordionDisclosure`, `TreeItem` no longer display purple border on click
  - This purple border will only display when tabbing onto a `TreeItem` or `AccordionDisclosure` (`Tree`)

### Fixed

- `Dialog` focus not returning to trigger when closed
- `DialogContent` with `borderBottom` prop CSS output error (no border, no flex: 8)
- `InputText` interacts poorly with `theme.reset` property in narrow cases
- `Select` not opening when rendered in a `Dialog` opened from a `Popover`

## [0.9.4] - 2020-06-29

### Added

- `autoResize` added to `InputText` and `Select`, allowing component width to adjust to the current value

### Removed

- `InputText` props `prefix` and `suffix` are replaced with `before` and `after`, which accept `ReactNode`

### Fixed

- `InputTimeSelect` tab key behavior

## [0.9.3]

### Fixed

- `MenuItem`
  - properly renders when `[aria-current='false']`
  - is now exported as Styled Component
  - renders properly in Safari / older Chrome implementations

## [0.9.2]

### Added

- `MenuList` now supports `disabled` property
- `Popover` offset issue

### Fixed

- `MenuList` `groupDividers` now displayed correctly

## [0.9.1]- 2020-06-24

### Changed

- `Tree` and `TreeItem`
  - Accept `detailAccessory` and `detailHoverDisclosure` props
  - `TreeItem` styling moved from `Tree` into `TreeItem` itself
  - `TreeItem` layout follows primary-secondary structure

### Fixed

- `ButtonBase` now correctly maps `onKeyDown` & `onKeyUp` props to underlying DOM element
- `ModalContext` alias to `DialogContext`
- `Portal` is now actually exported for use

## [0.9.0]

### Added

- `FieldChips` component
- `Field` now support `hideLabel`
- `Fieldset` now supports `fieldsHideLabel` (hides labels for Fields within)
- `MultiSelect` icon added

### Changed

- `Badge` now uses generated colors rather than referencing colors.palette
- `DialogManager` now supports a non render-props style interface
- `IconButton` improved hover/active states and no background on hover
- `InputText` interface simplified / narrowed
  - No longer supports typography or pseudo props
  - Switch from using defaultProps to `css` block to share common styles with other components
- `Popover` now supports the preferred `cloneElement` style usage in addition to the existing render prop style
  - Additionally the render prop style now exposes `aria-haspopup` for use
- `TextArea` interface simplified / narrowed
  - No longer supports border or typography props
- `IconButton` improved hover/active states and no background on hover
- Deprecate use of `Modal` term throughout code base
- `ModalPortal` is now `Portal`
- `Modal*` has moved to `Dialog*`
  - `ModalContext` is now `DialogContext`
  - `ModalContent` is now `DialogContent`
  - `ModalFooter` is now `DialogFooter`
  - `ModalHeader` is now `DialogHeader`
  - Aliases for the old names are in place to ease the upgrade but these aliases will be deprecated shortly

### Fixed

- `ButtonGroup`/`ButtonToggle` display issues
  - Smaller text in Safari and Firefox
  - White space between highlighted item and border (`ButtonToggle`)
  - Missing horizontal borders in wrapping `ButtonToggle` when `options` are loaded asynchronously
- `CheckboxGroup` & `RadioGroup` options now properly wrap when the exceed the container width
- `FieldSelect`/`FieldSelectMulti` missing `aria-labelledby` attribute on the input
- `Icon` will no longer shrink when placed inside a flex layout
- `Select`/`SelectMulti` keyboard navigation when filtering options
- `Select` & `SelectMulti` option group label alignment
- `SelectMulti` create option unnecessary left padding
- `Tooltip` closing when mouse moves from trigger element to tooltip

### Removed

- `ComboboxMultiOption` prop `hideCheckMark` (instead use `indicator={false}`)
- `CustomizableAttributes` are no longer supported
- `DialogHeader` / `ModalHeader` no longer supports `headerIcon`
- `Drawer` no longer available
- `Label` interface has significantly pared-down (to just DOM-native properties)
- `Menu` no longer supports `marker` presentation
- `MenuList`, `MenuGroup` & `MenuItem` no longer supports `customizationProps`

## [0.8.7]

### Added

- `Badge` now supports `ref` assignment (Tooltip badge is now possible)
- `ComboboxMultiInput` supports `freeInput` to allow inputting of values outside of options, using the behavior of `InputChips`
- `Icon` accepts SVG as via `artwork` prop
- `IconButton` now supports `tooltipTextAlign`
- `InputChips`
  - preserves escaped comma and tab characters
  - supports `removeOnBackspace` (true by default)
- Icons: `TimeZone`

### Changed

- `AccordionContent` & `Tree` no longer add automatic padding at the container level. Padding happens at the individual item level
- `Icon` can now only be sized via `size` (no height/width since it's a square)
- `InputTime` now renders warning icon when validationType="error" is passed
- `FieldInline` (`FieldCheckbox`, `FieldRadio` & `FieldToggleSwitch`)
  - Now supports `detail` property
  - Disabled state slightly more discernable from default state now
- `OptionsGroup` (`CheckboxGroup`, `RadioGroup`)
  - Now have tighter vertical spacing to feel more connected
  - Supports `detail` on Options array
- `Status` now allows DOM attributes (`aria-*` and the like)

### Fixed

- `Radio` & `Checkbox` disabled states corrected
- `ComponentsProvider` actually uses the `theme` passed in
- `Select` selected option check mark icon size
- `ButtonGroup` space between rows when wrapping
- `InputChips` separates chips by newline when pasting
- `Slider` and `RangeSlider` design tweaks

### Removed

- `Field`
  - No longer supports `labelWidth` property (unused feature)
  - No longer supports `labelFontSize` and `labelFontWeight` properties (all your fonts belong to us)

## [0.8.6]

### Fixed

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

- `FieldTextArea` now properly links label + textarea via `id` assignment to textarea
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
