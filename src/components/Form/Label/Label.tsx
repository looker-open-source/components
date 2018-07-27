// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../../styled_components'
import { ThemeInterface } from '../../../themes'
export { React, StyledComponentClass, ThemeInterface }
// End Typescript component boilerplate

import { themeSpacing } from '../../../themes/theme_spacing'
import { FontRamp, fontSizes } from '../../../styles/font_sizes'
// import { component as styled } from '../../../component'
import { space800 } from '../../../styles/colors'

export const Label = styled<{}, 'label'>('label')`
  font-weight: 600;
  color: ${space800};
  margin-right: ${themeSpacing.s};
  font-size: ${fontSizes[FontRamp.Five]};
`
