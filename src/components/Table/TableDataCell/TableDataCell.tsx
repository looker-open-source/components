// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../../styled_components'
import { ThemeInterface } from '../../../themes'
export { React, StyledComponentClass, ThemeInterface }
// End Typescript component boilerplate
import { charcoal200 } from '../../../styles/colors'

export const TableDataCell = styled('td')`
  padding: ${props => props.theme.spacing.s} 0;
  border-top: solid 1px ${charcoal200};
`
