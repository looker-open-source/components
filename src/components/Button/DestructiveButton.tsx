import * as React from 'react'
import styled, { StyledComponentClass } from '../../styled_components'
import { rgba } from 'polished'
import { ThemeInterface } from '../../themes'
import { Button, ButtonProps } from './Button'

export const DestructiveButton = Button.extend`
  --background-color: ${props => props.variant ? 'transparent' : props.theme.colors.destructive };
  --color: ${props => props.variant ? props.theme.colors.destructive : props.theme.colors.destructiveText };
  --border-color: ${props => props.variant == 'transparent' ? 'transparent' : props.theme.colors.destructive };
  --hover-color: ${props => props.variant ? props.theme.colors.destructiveLighter : props.theme.colors.destructiveDark };
  --active-color: ${props => props.variant ? props.theme.colors.destructiveLight : props.theme.colors.destructiveDarker };
  --outline-color: ${props => rgba(props.theme.colors.destructive, .25)};
`
