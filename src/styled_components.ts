import * as styledComponents from 'styled-components'
import { Theme } from './theme'

const {
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  withTheme,
} = styledComponents

// Typescript complains that the `as ThemedStyledComponentsModule` performs
// unnecessary casting, which is not true. Without this line the Themes
// attached to component prop types would not type-check correctly.
//
// tslint:disable-next-line:no-unnecessary-type-assertion
const styled = (styledComponents as styledComponents.ThemedStyledComponentsModule<
  Theme
>).default

export { InterpolationValue, ThemedStyledProps } from 'styled-components'

export { css, injectGlobal, keyframes, ThemeProvider, withTheme }

export default styled
