// Required by ThemeProvider to compile the proper declaration files.
import * as React from 'react'
import * as styledComponents from 'styled-components'
// tslint:disable-next-line:no-duplicate-imports
import {
  ThemedStyledFunction,
  ThemedStyledInterface,
  ThemedStyledProps,
} from 'styled-components'
import { Theme } from './themes'

const {
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  withTheme,
} = styledComponents

const reset = css`
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  vertical-align: baseline;
`

// Typescript complains that the `as ThemedStyledComponentsModule` performs
// unnecessary casting, which is not true. Without this line the Themes
// attached to component prop types would not type-check correctly.
//
// tslint:disable-next-line:no-unnecessary-type-assertion
const originalStyled = (styledComponents as styledComponents.ThemedStyledComponentsModule<
  Theme
>).default

const resetComponent = ((component: any) => {
  return originalStyled(originalStyled(component)`${reset};`)
}) as ThemedStyledInterface<Theme>

Object.keys(originalStyled).forEach(k => {
  const componentWithReset = originalStyled[
    k as keyof JSX.IntrinsicElements
  ]`${reset};`

  resetComponent[k as keyof JSX.IntrinsicElements] = ((
    strings: TemplateStringsArray,
    ...interpolations: any[]
  ) => {
    return originalStyled(componentWithReset).apply(null, [
      strings,
      ...interpolations,
    ])
  }) as ThemedStyledFunction<any, Theme>

  resetComponent[k as keyof JSX.IntrinsicElements].attrs = (attrs: any) => {
    return originalStyled(componentWithReset).attrs(attrs)
  }
})

export {
  css,
  injectGlobal,
  keyframes,
  React,
  ThemeProvider,
  ThemedStyledProps,
  withTheme,
}
export default resetComponent
