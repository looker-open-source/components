// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../../styled_components'
import { ThemeInterface } from '../../../themes'
export { React, StyledComponentClass, ThemeInterface }
// End Typescript component boilerplate

export enum TableBodyAlignment {
  Bottom = 'botton',
  Middle = 'middle',
  Top = 'top'
}

export enum TableTextAlignment {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

export interface TableBodyProps {
  align?: TableBodyAlignment
  textAlign?: TableTextAlignment
}

export const TableBody = styled<TableBodyProps, 'tbody'>('tbody')`
  vertical-align: ${props => props.align || TableBodyAlignment.Top};
  text-align: ${props => props.textAlign || TableTextAlignment.Left};
`
