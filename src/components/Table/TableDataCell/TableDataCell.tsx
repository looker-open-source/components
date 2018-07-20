// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../../themes'
export { ThemeInterface }
// End Typescript component boilerplate
import { gray200 } from '../../../styles/colors'

export const TableDataCell = styled('td')`
  padding: ${props => props.theme.spacing.s} 0;
  border-top: solid 1px ${gray200};
`
