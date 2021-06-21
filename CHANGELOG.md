# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 2.0.0

## @looker/components

### BREAKING CHANGES

- **`@looker/components-date`** package introduced
  - `Calendar`, `Locales`, `InputDate`, `InputTime`, and other [date-related components](https://github.com/looker-open-source/components/tree/main/packages/components-date/src) are now exported from this separate, specialized package. This is intended to reduce the package size for downstream consumers that don't support tree-shaking.
- `List`, `ListItem`, `Tree`, `TreeItem` & `MenuItem` no longer support `keyColor` (use `color="key"` to accomplish the same visual presentation)
- `ListItem` (and therefore `MenuItem` & `TreeItem`) no longer support `current` property. `selected` property offers the same visual presentation and properly emits `aria-selected="true"` to the DOM
- `ComponentsProvider`
  - No longers supports `ieSupport` prop (IE11 functions properly without any special support since `v1.2`
  - No longer supports `globalStyle` props (previously deprecated and non-functional)
- `TreeArtificial` deprecated and removed
- `useWindow`'s `windowedOptions` prop was renamed to `windowing`
  - `List` (and derivatives) `windowProp` is now `boolean`
  - `Combobox`' (and derivatives including `Select`) `windowedOptions` is now `windowing`

### Features

- **PopoverContent:** new component to enhance Popover layout ([#2448](https://github.com/looker-open-source/components/issues/2448)) ([c1f0fa0](https://github.com/looker-open-source/components/commit/c1f0fa0076f2ce6eda7c8c66df4a1b21528dc6c6))
- **PopoverFooter:** new component to enhance Popover layout ([#2430](https://github.com/looker-open-source/components/issues/2430)) ([7838a9e](https://github.com/looker-open-source/components/commit/7838a9ed08ce1ea0b46ef535a7d6050485412485))
- **PopoverHeader:** new component for improved Popover layouts ([#2434](https://github.com/looker-open-source/components/issues/2434)) ([cf82bfc](https://github.com/looker-open-source/components/commit/cf82bfc30054da378671f0b354216fc63be76776))
- **TabPanel:** Added tabStop boolean prop to TabPanel ([#2413](https://github.com/looker-open-source/components/issues/2413)) ([70d6e1f](https://github.com/looker-open-source/components/commit/70d6e1f5740e0706e4a8f7d5f21ae73edaae68cb))

### Bug Fixes

- **Panel:**
  - Render properly in Drawer or Dialog ([#2508](https://github.com/looker-open-source/components/issues/2508)) ([3202fe2](https://github.com/looker-open-source/components/commit/3202fe2f7d20d048a91f575ef7c1dd7f3717c1c5))
  - always stack on top ([#2408](https://github.com/looker-open-source/components/issues/2408)) ([35ddd3f](https://github.com/looker-open-source/components/commit/35ddd3fc9eb95f3d5f4385daed76c792488b55b9))
- **InlineInputText:** Correct issue where long values couldn't be scrolled ([#2469](https://github.com/looker-open-source/components/issues/2469)) ([9ed95ab](https://github.com/looker-open-source/components/commit/9ed95ab09fc61dc58b5327c958a46c1ef9384422))
- **InputColor:** Call onChange if input value is cleared ([#2489](https://github.com/looker-open-source/components/issues/2489)) ([2d12d4e](https://github.com/looker-open-source/components/commit/2d12d4e60c93b998a6ae67856ebc93e25abb6d31))
- **Listitem:**
  - Correct type export for ListItemProps ([#2463](https://github.com/looker-open-source/components/issues/2463)) ([3a04dc3](https://github.com/looker-open-source/components/commit/3a04dc303df4aefa107af1776b3f45ceef143ee6))
  - Moved cursor styling to ListItemWrapper ([#2459](https://github.com/looker-open-source/components/issues/2459)) ([ead039e](https://github.com/looker-open-source/components/commit/ead039ec9ea168a2b764ef972efba17198d1025b))
  - Properly disperse ARIA props onto ListItem's label container ([#2433](https://github.com/looker-open-source/components/issues/2433)) ([4566246](https://github.com/looker-open-source/components/commit/45662462b38a875346fbd6ed00c4638e45c521fa))
  - Allow icon to have more specific color than ListItem ([#2492](https://github.com/looker-open-source/components/issues/2492)) ([978d444](https://github.com/looker-open-source/components/commit/978d444781623e2e2d4d45c61ff88bb0b39024ff))
- **MultiFunctionButton:** Properly set width of smaller button, properly hide in-active button from screen-readers ([#2447](https://github.com/looker-open-source/components/issues/2447)) ([3f53094](https://github.com/looker-open-source/components/commit/3f5309470e19324f701f5e47e5f1440a7e3ba3fe))
- **RangeSlider:** use DOMRect in lieu of ClientRect ([#2202](https://github.com/looker-open-source/components/issues/2202)) ([dade533](https://github.com/looker-open-source/components/commit/dade533775f71cce773fdee388b29c131499e5b8))
- **ReplaceText:** Performance improvement ([#2486](https://github.com/looker-open-source/components/issues/2486)) ([7c2bbec](https://github.com/looker-open-source/components/commit/7c2bbec286b02387d4ecffd1796b06c968952720))
- **Tooltip:** no longer includes spurious `undefined` className on disable Tooltip target ([#2496](https://github.com/looker-open-source/components/issues/2496)) ([3356f0b](https://github.com/looker-open-source/components/commit/3356f0b092ec1670594e405c22edf149d12c4fcd))
- **Tree:**
  - Fix border alignment ([#2462](https://github.com/looker-open-source/components/issues/2462)) ([259cb36](https://github.com/looker-open-source/components/commit/259cb368e3016f1708f82f141ded788b6b9987a2))
  - Updated Tree icon / indicator alignment ([#2449](https://github.com/looker-open-source/components/issues/2449)) ([8892598](https://github.com/looker-open-source/components/commit/8892598bb1cb6c5673f53a6f65d9f834d01e31c1)), closes [#2450](https://github.com/looker-open-source/components/issues/2450) [#2455](https://github.com/looker-open-source/components/issues/2455) [#2456](https://github.com/looker-open-source/components/issues/2456)
- **useTooltip:** Don't include `aria-describedby` on target when Tooltip disabled ([#2464](https://github.com/looker-open-source/components/issues/2464)) ([ddda539](https://github.com/looker-open-source/components/commit/ddda539b52d163e55792ffe1c5aa54836226e99f))
- **useWindow:** Simplify windowing for long lists ([#2485](https://github.com/looker-open-source/components/issues/2485)) ([d6b2699](https://github.com/looker-open-source/components/commit/d6b2699d8065a1209a512876057036496c267627))
- Include @types/styled-system in devDependencies to simplify installation ([#2495](https://github.com/looker-open-source/components/issues/2495)) ([00a841e](https://github.com/looker-open-source/components/commit/00a841e7731464e07acb152bee0eeb345a8a6732))

## @looker/components-date

### Features

- Introduced @looker/components-date package ([#2274](https://github.com/looker-open-source/components-date/issues/2274)) ([5aa01e0](https://github.com/looker-open-source/components-date/commit/5aa01e0b996647a60d251fc5cd00ba7af185356c))

## @looker/design-tokens

### BREAKING CHANGES

- **`theme.reset`** removed (previously deprecated and non-functional)
- Removed color "aliases" from theme
  - `theme.colors.subdued` (use `theme.colors.text1` instead)
  - `theme.colors.secondary` (use `theme.colors.text2` instead)
- **palette:** is no longer exported from root, deprecated for 3.x

### Features

- **visualizations:** Vis Component prerelease infrastructure ([#2286](https://github.com/looker-open-source/components/issues/2286)) ([dbb54dd](https://github.com/looker-open-source/components/commit/dbb54dde7a0276fecd1a228818bb48fa406236d9))
- **palette:** No longer export palette, mark all as deprecated ([#2445](https://github.com/looker-open-source/components/issues/2445)) ([04587a0](https://github.com/looker-open-source/components/commit/04587a0a6148c84ec113d90d90b93eacb5b5d29c))

### Bug Fixes

- text5 color is now identical to text (blend=100%) ([#2410](https://github.com/looker-open-source/components/issues/2410)) ([50e5272](https://github.com/looker-open-source/components/commit/50e52721e5ec4a9177dc21dc36ed6d0146d2fa4d))

# 1.5.0

## @looker/eslint-config

### Bug Fixes

- Remove `sort-keys-fix` from `oss-compat` ESLint ruleset ([#2454](https://github.com/looker-open-source/eslint-config/issues/2454)) ([b5283f1](https://github.com/looker-open-source/eslint-config/commit/b5283f18b11c214d2407c37a1764e5c1ee42bd7e))

## [1.4.2](https://github.com/looker-open-source/components/compare/v1.4.1...v1.4.2) (2021-06-17)

### Bug Fixes

- **HoverDisclosure:** Remove strategy prop, add placeholderWidth ([#2510](https://github.com/looker-open-source/components/issues/2510)) ([dfce57d](https://github.com/looker-open-source/components/commit/dfce57df51a4d3791af752f5d5fa0f450eea05cb))

## [1.4.1](https://github.com/looker-open-source/components/compare/v1.4.0...v1.4.1) (2021-05-25)

### Bug Fixes

- **ListItem:** Removed background transition ([#2429](https://github.com/looker-open-source/components/issues/2429)) ([c6898f5](https://github.com/looker-open-source/components/commit/c6898f5ecd2d91d98b5ffae297184e8acb26b225))

# [1.4.0](https://github.com/looker-open-source/components/compare/v1.4.0-alpha.0...v1.4.0) (2021-05-23)

### Bug Fixes

- **Tree:** Properly disperse ListItem related props onto inner TreeItem ([#2406](https://github.com/looker-open-source/components/issues/2406)) ([9438bdd](https://github.com/looker-open-source/components/commit/9438bdd6c2a3c7381eca679634947dbed810beb0))

### Features

- **Layout:** Supports displaying shadow when content overflows container height ([#2300](https://github.com/looker-open-source/components/issues/2300)) ([b0231fe](https://github.com/looker-open-source/components/commit/b0231fec9795c1e2c8afd150e530d7ddb4a2a1db))
- **Truncate:** now supports an optional `description` property ([#2403](https://github.com/looker-open-source/components/issues/2403)) ([83dd55f](https://github.com/looker-open-source/components/commit/83dd55fb1cae543d8b620107da0c25c002f3f48c))

## [1.3.1](https://github.com/looker-open-source/components/compare/v1.3.0...v1.3.1) (2021-05-19)

### Bug Fixes

- **Tree:** Detail padding is properly controllable ([#2401](https://github.com/looker-open-source/components/issues/2401)) ([9ba99fc](https://github.com/looker-open-source/components/commit/9ba99fcc8fbb7ab554adda10f01efa419278a40b))

# [1.3.0](https://github.com/looker-open-source/components/compare/v1.3.0-alpha.0...v1.3.0) (2021-05-19)

### Bug Fixes

- **HoverDisclosure:** Use CSS visibility instead of de-rendering ([#2359](https://github.com/looker-open-source/components/issues/2359)) ([4186c52](https://github.com/looker-open-source/components/commit/4186c5212ffa4f2545fc95984696ca8b52f3667c))
- **IconButton:** Match focus ring to toggleColor ([#2282](https://github.com/looker-open-source/components/issues/2282)) ([31df370](https://github.com/looker-open-source/components/commit/31df37044b086f459cdd16a8c0d38fbdb04d1218))
- **Panel:** PanelHeader icon should always be `ArrowBack` ([#2360](https://github.com/looker-open-source/components/issues/2360)) ([f86b4e1](https://github.com/looker-open-source/components/commit/f86b4e17e2ac5665bf43feb464f36d3196d581f6))

### Features

- **HoverDisclosure:** Support strategy to allow developer to use display or visibility control ([#2398](https://github.com/looker-open-source/components/issues/2398)) ([359ee9f](https://github.com/looker-open-source/components/commit/359ee9f3a261276a741c51dbc819112feb5f1dbe))
- **Tree:** Keyboard Navigation ([#2397](https://github.com/looker-open-source/components/issues/2397)) ([1ad8fe4](https://github.com/looker-open-source/components/commit/1ad8fe428bbf25edb5dd9a10fc64cbb4f2c1a3b6))
- **Accordion:** Toggle on spacebar key ([#2281](https://github.com/looker-open-source/components/issues/2281)) ([221c2e9](https://github.com/looker-open-source/components/commit/221c2e97cfcbb2d92507386800ec98f99ebc2ae5))
- **Aside:** adding prop collapse ([#2288](https://github.com/looker-open-source/components/issues/2288)) ([c3f949a](https://github.com/looker-open-source/components/commit/c3f949a6f9a9441dbed36fa9248aa18436a11295))
- **Aside:** standardized width size ([#2348](https://github.com/looker-open-source/components/issues/2348)) ([05676ab](https://github.com/looker-open-source/components/commit/05676abfd96eb03bfbbc9976a06935625f6c2ea9))
- useFocusVisible hook ([#2277](https://github.com/looker-open-source/components/issues/2277)) ([68d124e](https://github.com/looker-open-source/components/commit/68d124ef2b8981a33de48ef2caf228a49b290ea0))

# [1.2.0](https://github.com/looker-open-source/components/compare/v1.2.0..v1.1.6) (2021-05-17)

### Bug Fixes

- **Accordion:** Correctly infer icon style from indicatorPosition="left" ([#2235](https://github.com/looker-open-source/components/issues/2235)) ([f9208e4](https://github.com/looker-open-source/components/commit/f9208e4bfcbe7e038e61a32a5e7c0e5a7b899d67))
- **MenuHeading:** Hide shadow initially ([#2326](https://github.com/looker-open-source/components/issues/2326)) ([a68ef47](https://github.com/looker-open-source/components/commit/a68ef4756843726d244eb58cccb34d5d1b4fcb79))
- **NavList:** Properly style Trees within NavList ([#2338](https://github.com/looker-open-source/components/issues/2338)) ([594038d](https://github.com/looker-open-source/components/commit/594038dc5d71f1815114d73a5a32607c66518ff1))
- **RangeSlider:** Value state reverting if re-rendered before prop is updated ([#2174](https://github.com/looker-open-source/components/issues/2174)) ([9d0b66f](https://github.com/looker-open-source/components/commit/9d0b66f20d5ac066fab1bc2ee20b84c3f2847645))
- **Slider:** Correct default margin on input[type="slider"] ([#2197](https://github.com/looker-open-source/components/issues/2197)) ([b68eda9](https://github.com/looker-open-source/components/commit/b68eda9685aac5947e98300ade429fb0a0e29f21))
- **Textarea:** Prevent browser-default margin on bottom of textarea ([#2201](https://github.com/looker-open-source/components/issues/2201)) ([8d997ac](https://github.com/looker-open-source/components/commit/8d997acea390b8ea4f79452543fd182e589d89e6))
- **TreeItem:** Clicks on padding trigger onClick when parent Tree labelBackgroundColor is true ([#2189](https://github.com/looker-open-source/components/issues/2189)) ([7a960a2](https://github.com/looker-open-source/components/commit/7a960a2141081a673836c4c902de4fec1bdb8847))
- **useHovered:** Invalid argument error ([#2238](https://github.com/looker-open-source/components/issues/2238)) ([6daf576](https://github.com/looker-open-source/components/commit/6daf57662a65251061878f3f90dbba3f2dbeadbe))
- **List** overflow & **Tree** color typing ([#2337](https://github.com/looker-open-source/components/issues/2337)) ([c777721](https://github.com/looker-open-source/components/commit/c777721d83304f43a06e8af9f3662c32e204d64c))

### Features

- **Accordion:** Refactored interface and composition ([#2199](https://github.com/looker-open-source/components/issues/2199)) ([8d6ef53](https://github.com/looker-open-source/components/commit/8d6ef530d85702efa354fa9a0f4b9064cb81ad12)), closes [#2231](https://github.com/looker-open-source/components/issues/2231)
- **Chip:** Support maxWidth ([#2260](https://github.com/looker-open-source/components/issues/2260)) ([5e32aea](https://github.com/looker-open-source/components/commit/5e32aeae055c4f8e4fcd51f98375f1795cb4fe3c))
- **design-tokens:** Add support for new color slots - calculation, dimension & measure ([#2250](https://github.com/looker-open-source/components/issues/2250)) ([74de869](https://github.com/looker-open-source/components/commit/74de8692c86206029cac9b74d2f85455f9b78ae1))
- **IconButton:** Support for toggleColor ([28a0b5a](https://github.com/looker-open-source/components/commit/28a0b5aace052cc088f29b6a14798319cfc91b94))
- **IconButton:** Support `keyColor` background with `toggle` ([#2118](https://github.com/looker-open-source/components/issues/2118)) ([27047b0](https://github.com/looker-open-source/components/commit/27047b0f99b1f518daa95645a9479472080c4579))
- **Layout:** scroll use cases ([#2186](https://github.com/looker-open-source/components/issues/2186)) ([36ba0f8](https://github.com/looker-open-source/components/commit/36ba0f8bfbc6ed2894ec23c08025662987fda3e0))
- **Link:** new `isExternal` prop which displays icon indicating link is "external" ([#2156](https://github.com/looker-open-source/components/issues/2156)) ([19b9e27](https://github.com/looker-open-source/components/commit/19b9e27c801daadb7109562a0fb41c5dd5644bc6))
- **List:** NavList ([#2115](https://github.com/looker-open-source/components/issues/2115)) ([a701e6f](https://github.com/looker-open-source/components/commit/a701e6f8010fc02038ac3410a198d218ed6a557a))
- **List:** supports `fontFamily` as prop ([#2216](https://github.com/looker-open-source/components/issues/2216)) ([8484f8a](https://github.com/looker-open-source/components/commit/8484f8a086e9bee2c07d3996968375b126e7374f)), closes [#2226](https://github.com/looker-open-source/components/issues/2226)
- **Pagination:** and PageSize support alwaysVisible - visible even when there are no pages to paginate ([#2273](https://github.com/looker-open-source/components/issues/2273)) ([530848f](https://github.com/looker-open-source/components/commit/530848f403b6d5f20df9ad32bc45a0988f3601e5)), closes [#2275](https://github.com/looker-open-source/components/issues/2275)
- **Theme:** generateTheme customizations now supports body and title slots ([#2255](https://github.com/looker-open-source/components/issues/2255)) ([e15c7eb](https://github.com/looker-open-source/components/commit/e15c7eb7a6ff046ac817da8d8fb1642051bc70a2))
- **Tree:** ARIA-labeling ([#2271](https://github.com/looker-open-source/components/issues/2271)) ([0ffaa4b](https://github.com/looker-open-source/components/commit/0ffaa4b2edf9657446463aef4f085cbb9783ec66))
- **Tree:** Added "no-icon" option to forceLabelPadding prop ([#2329](https://github.com/looker-open-source/components/issues/2329)) ([b33d361](https://github.com/looker-open-source/components/commit/b33d361ab60e09b0e54998d563a341fbe4522f13)), closes [#2330](https://github.com/looker-open-source/components/issues/2330)
- **Tree:** `forceLabelPadding` prop ([#2233](https://github.com/looker-open-source/components/issues/2233)) ([a8a7707](https://github.com/looker-open-source/components/commit/a8a7707bcc0e435dee66fef2e02284f44adccf4c)), closes [#2234](https://github.com/looker-open-source/components/issues/2234)
- **Tree:** Added labelBackgroundOnly prop ([#2154](https://github.com/looker-open-source/components/issues/2154)) ([13fb624](https://github.com/looker-open-source/components/commit/13fb624937d6a250c211f9c3821c6e5685944ab2)), closes [#2155](https://github.com/looker-open-source/components/issues/2155)
- CSS Reset now uses a "defensive" rather than "offensive" strategy (no more GlobalStyles) ([#2120](https://github.com/looker-open-source/components/issues/2120)) ([266e2f2](https://github.com/looker-open-source/components/commit/266e2f25c3396eee5a5b2d2be234c7ccad608811))

## [1.1.6](https://github.com/looker-open-source/components/compare/v1.1.5...v1.1.6) (2021-04-29)

### Bug Fixes

- **RangeSlider:** Value stays within bounds when min/max changes ([5997829](https://github.com/looker-open-source/components/commit/5997829a8fd6c678583de7d2ee5c4669036e3ed0))

## [1.1.5](https://github.com/looker-open-source/components/compare/v1.1.4...v1.1.5) (2021-04-28)

**Note:** Version bump only for package monorepo

## [1.1.4](https://github.com/looker-open-source/components/compare/v1.1.3...v1.1.4) (2021-04-28)

### Bug Fixes

- **List:** Only define height when windowing ([#2208](https://github.com/looker-open-source/components/issues/2208)) ([965a628](https://github.com/looker-open-source/components/commit/965a628859077e1594cfe17b70b6dc74b6eb7ee5))
- **ListDivider:** Correct color for ListDivider, MenuDivider, SelectOptionsDivider ([#2218](https://github.com/looker-open-source/components/issues/2218)) ([524557d](https://github.com/looker-open-source/components/commit/524557da7d2bc4b5731aa8d9740ff139125aa689))
- **MenuHeading:** Added spacing to MenuHeadings that follow MenuDividers ([#2172](https://github.com/looker-open-source/components/issues/2172)) ([7dd2dee](https://github.com/looker-open-source/components/commit/7dd2deef9d4ff1aa04bc4ae5213894cb1f74464e)), closes [#2173](https://github.com/looker-open-source/components/issues/2173) [#2176](https://github.com/looker-open-source/components/issues/2176)
- **Portal:** Insert element earlier to support measured components ([#2185](https://github.com/looker-open-source/components/issues/2185)) ([bdabc45](https://github.com/looker-open-source/components/commit/bdabc453808a1d501a41787851f0f3e9caaf2757))
- **RangeSlider:** Value state reverting if re-rendered before prop is updated ([#2174](https://github.com/looker-open-source/components/issues/2174)) ([6b1ae19](https://github.com/looker-open-source/components/commit/6b1ae1945f9c3951ceede4bb980ba778c95955cd))
- **Truncate:** Prevent spurious scrollbar presentation due to browser settings ([#2175](https://github.com/looker-open-source/components/issues/2175)) ([23c403a](https://github.com/looker-open-source/components/commit/23c403a9504271002e60d6ea3c817568a2d4c333))

## [1.1.3](https://github.com/looker-open-source/components/compare/v1.1.2...v1.1.3) (2021-03-31)

### Bug Fixes

- Remove all internal references from @looker/components to [@looke](https://github.com/looke)… ([#2149](https://github.com/looker-open-source/components/issues/2149)) ([9c368a6](https://github.com/looker-open-source/components/commit/9c368a6777dee2e5556002c8d2673647e6fec915))
- **SelectOptions:** Render an option, not a header, when option value is an empty string ([#2148](https://github.com/looker-open-source/components/issues/2148)) ([ad06185](https://github.com/looker-open-source/components/commit/ad06185e58eb4a7a941631a4a8d64ccba5c49780))

## [1.1.2](https://github.com/looker-open-source/components/compare/v1.1.1...v1.1.2) (2021-03-31)

### Bug Fixes

- **ToggleSwitch:** Remove verticalAlign / inline-block to improve layout ([#2128](https://github.com/looker-open-source/components/issues/2128)) ([47ea669](https://github.com/looker-open-source/components/commit/47ea6690e75a6d3e9dc11f3bd5fc37635b97a46f))
- Revert changes to Babel build format ([#2145](https://github.com/looker-open-source/components/issues/2145)) ([a27f8c6](https://github.com/looker-open-source/components/commit/a27f8c68b5ddc43e6f1436519063ad548d94a01d))

## [1.1.1](https://github.com/looker-open-source/components/compare/v1.1.0...v1.1.1) (2021-03-31)

### Bug Fixes

- Use /lib in deep-import for Icons to correct build portability ([#2143](https://github.com/looker-open-source/components/issues/2143)) ([ef2b299](https://github.com/looker-open-source/components/commit/ef2b2995c602989c25c6925d061844e308a91e2e))

# [1.1.0](https://github.com/looker-open-source/components/compare/v1.0.0...v1.1.0) (2021-03-31)

### Features

- **Select:** Support windowing for grouped options ([#2071](https://github.com/looker-open-source/components/issues/2071)) ([440c0b2](https://github.com/looker-open-source/components/commit/440c0b2c1744711a3c0f5b2fe6b5098ca9e443f1))
- refactor `icon` imports to improve bundle-size impacts for non-tree shakable consumers

# [1.0.0](https://github.com/looker-open-source/components/compare/v0.18.0...v1.0.0) (2021-03-22)

### BREAKING CHANGE

Version `1.0` changes how Icons are used within @looker/components, shipped within @looker/components and leveraged by downstream consumers.

Fundamentally this changes icons from being a key/name (e.g.: "Calendar") to an SVG or component `<Calendar />`. Looker Components now leverages [Styled Icons](https://github.com/styled-icons/styled-icons) to provide types and design patterns as well as providing a complete set of "stock" Google Material icons.

# [0.18.0](https://github.com/looker-open-source/components/compare/v0.17.0...v0.18.0) (2021-03-22)

### Bug Fixes

- **ListItem:** Prevent props from being spuriously emitted to DOM output ([#2086](https://github.com/looker-open-source/components/issues/2086)) ([b1da0c7](https://github.com/looker-open-source/components/commit/b1da0c7f9a7802a14db15b8e6e90e5d1ae4f5611))
- Correct issue where components that output DOM button w/o type="button" inadvetedly submit HTML forms ([#2096](https://github.com/looker-open-source/components/issues/2096)) ([ae5bc1b](https://github.com/looker-open-source/components/commit/ae5bc1ba3e46da7c387e4125ce88d49cb2798973))

### Features

- **Layout:** now supports `fixed` to fix to Header and Footer within `Layout` / `Page` ([#2028](https://github.com/looker-open-source/components/issues/2028)) ([6dc9f9a](https://github.com/looker-open-source/components/commit/6dc9f9a6f8b7559a8d6e62081f05d60f9746419a))

# [0.17.0](https://github.com/looker-open-source/components/compare/v0.16.2...v0.17.0) (2021-03-18)

### Bug Fixes

- **DataTable:** Properly display font-size when CSS reset in use ([#2067](https://github.com/looker-open-source/components/issues/2067)) ([fe30da9](https://github.com/looker-open-source/components/commit/fe30da90c629b8a3c13f4b076ecceea9cfc47807))
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

- **MenuItem** Remove unnecessary aria attributes when there is no nested menu ([#2049](https://github.com/looker-open-source/components/issues/2049)) ([2c6c784](https://github.com/looker-open-source/components/commit/2c6c784837746fdb539cfb9949f1dacbdde3ccb0))
- **Space** Remove snapshot tests, add justify support, ([#2050](https://github.com/looker-open-source/components/issues/2050)) ([fe50f4d](https://github.com/looker-open-source/components/commit/fe50f4d61104f8dee34e48214a25f8d912991584))
- **DataTable** now defaults to 100% width
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

- **MultiFunctionButton:** component ([#1955](https://github.com/looker-open-source/components/issues/1955)) ([e602575](https://github.com/looker-open-source/components/commit/e6025755265e9e30d06ec9e4bc5d6925aea8da8b)), closes [#1991](https://github.com/looker-open-source/components/issues/1991)
- **Select:** Caret icon always has default cursor icon ([#2019](https://github.com/looker-open-source/components/issues/2019)) ([64d3b12](https://github.com/looker-open-source/components/commit/64d3b1251c2c2019d3f454138b04351cc38d2700))
- Export i18n strings and utilities ([#2006](https://github.com/looker-open-source/components/issues/2006)) ([75f750b](https://github.com/looker-open-source/components/commit/75f750b5da86f1a04ccab7a3d277d3699afd9318))

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
