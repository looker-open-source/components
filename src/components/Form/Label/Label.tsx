// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../../themes'
export { ThemeInterface }
// End Typescript component boilerplate
import { space800 } from '../../../styles/colors'

export interface LabelProps {
  for: string
}

export const Label = styled<LabelProps, 'label'>('label')`
  font-weight: 600;
  color: ${space800};
  margin-right: 8px;
  font-size: 14px;
  min-width: 175px;
  text-align: right;
`
