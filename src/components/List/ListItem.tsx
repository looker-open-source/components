// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../styled_components'
import { ThemeInterface } from '../../themes'
export { React, StyledComponentClass, ThemeInterface }
// End Typescript component boilerplate
import { themeSpacing } from '../../themes/theme_spacing'

export const ListItem = styled('li')`
  margin-bottom: ${themeSpacing.xs};
`
