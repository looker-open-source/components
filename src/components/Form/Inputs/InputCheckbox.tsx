// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import { StyledComponentClass } from '../../../styled_components'
import { ThemeInterface } from '../../../themes'
export { React, StyledComponentClass, ThemeInterface }
// End Typescript component boilerplate

import { resetComponent as styled } from '../../../reset_component'

export const InputCheckbox = styled<{}, 'input'>('input', { type: 'checkbox' })`
  padding: 0 ${props => props.theme.spacing.s};
`
