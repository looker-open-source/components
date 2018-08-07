// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import { ThemedStyledFunction } from 'styled-components'
import { StyledComponentClass } from '../../../styled_components'
import { ThemeInterface } from '../../../themes'
export { React, StyledComponentClass, ThemeInterface, ThemedStyledFunction }
// End Typescript component boilerplate

import { resetComponent as styled } from '../../../reset_component'
import { charcoal800 } from '../../../styles/colors'

export const Label = styled<{}, 'label'>('label')`
  font-weight: 600;
  color: ${charcoal800};
  margin-right: ${props => props.theme.spacing.s};
  font-size: ${props => props.theme.fontRamp.five};
`
