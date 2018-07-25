// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../../themes'
export { ThemeInterface }
import { themeSpacing } from '../../../themes/theme_spacing'
import { FontRamp, fontSizes } from '../../../styles/font_sizes'
// End Typescript component boilerplate
import { space800 } from '../../../styles/colors'

export const Label = styled.label`
  font-weight: 600;
  color: ${space800};
  margin-right: ${themeSpacing.s};
  font-size: ${fontSizes[5]};
`
