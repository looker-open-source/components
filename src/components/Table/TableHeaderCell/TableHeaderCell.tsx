// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../../styled_components'
import { ThemeInterface } from '../../../themes'
export { React, StyledComponentClass, ThemeInterface }
// End Typescript component boilerplate
import { charcoal400 } from '../../../styles/colors'

export const TableHeaderCell = styled('th')`
  padding: ${props => props.theme.spacing.s} 0;
  font-size: font-size(6);
  color: ${charcoal400};
  font-weight: 600;
`
