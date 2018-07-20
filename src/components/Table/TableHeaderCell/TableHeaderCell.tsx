// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../../themes'
export { ThemeInterface }
// End Typescript component boilerplate
import { gray400 } from '../../../styles/colors'

export const TableHeaderCell = styled('th')`
  padding: ${props => props.theme.spacing.s} 0;
  font-size: font-size(6);
  color: ${gray400};
  font-weight: 600;
`
