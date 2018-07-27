// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../../styled_components'
import { ThemeInterface } from '../../../themes'
export { React, StyledComponentClass, ThemeInterface }
import { themeSpacing } from '../../../themes/theme_spacing'
// End Typescript component boilerplate

export const InputCheckbox = styled.input.attrs({
  type: 'checkbox'
})`
  padding: 0 ${themeSpacing.s};
`
