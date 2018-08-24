import * as styledComponents from 'styled-components'
// tslint:disable-next-line:no-duplicate-imports
import {
  ThemedStyledComponentsModule,
  ThemedStyledProps
} from 'styled-components'
import { ThemeInterface } from './themes'

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
  // tslint:disable-next-line:no-unnecessary-type-assertion
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>

export { css, injectGlobal, keyframes, ThemeProvider, ThemedStyledProps }
export default styled

// Typescript complains that the `as ThemedStyledComponentsModule` performs
// unnecessary casting, which is not true. Without this line the Themes
// attached to component prop types would not type-check correctly.
//
// tslint:disable-next-line:no-unnecessary-type-assertion
// const styled = (styledComponents as styledComponents.ThemedStyledComponentsModule<
//   ThemeInterface
// >).default

// export { css, injectGlobal, keyframes, ThemeProvider }
// export default styled
