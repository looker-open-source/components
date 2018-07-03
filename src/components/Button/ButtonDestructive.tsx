import * as React from 'react'
import styled, { StyledComponentClass } from '../../styled_components'
import { ThemeInterface } from '../../themes'
import { Button, ButtonProps } from './Button'

export const ButtonDestructive = Button.extend`
  --background-color: ${props => props.variant? 'transparent' : props.theme.colors.destructive };
  --color: ${props => props.variant? props.theme.colors.destructive : props.theme.colors.destructiveText };
  --border-color: ${props => props.variant == 'transparent'? 'transparnet' : props.theme.colors.destructive };
  --hover-color: ${props => props.variant? props.theme.colors.destructiveLightOver : props.theme.colors.destructiveOver };
  --active-color: ${props => props.variant? props.theme.colors.destructiveLightPress : props.theme.colors.destructivePress };
`
