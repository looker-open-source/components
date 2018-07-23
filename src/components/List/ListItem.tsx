// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../themes'
export { ThemeInterface }
// End Typescript component boilerplate
import { spacing } from '../../styles/spacing'

export const ListItem = styled('li')`
  margin-bottom: ${spacing.xs};
`
