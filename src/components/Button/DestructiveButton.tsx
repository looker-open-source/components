import * as React from 'react'
import styled, { StyledComponentClass } from '../../styled_components'
import { rgba } from 'polished'
import { ThemeInterface } from '../../themes'
import { Button, ButtonProps } from './Button'

export const DestructiveButton = Button.extend`

--primary: ${props => props.theme.colors.destructive };
--hover: ${props =>props.theme.colors.destructiveDark };
--active: ${props => props.theme.colors.destructiveDarker };
--variantLight: ${props => props.theme.colors.destructiveLight };
--variantLighter: ${props => props.theme.colors.destructiveLighter };
--textColor: ${props => props.theme.colors.destructiveText };
--accessibilityOutline ${props => rgba(props.theme.colors.destructive, .25)};
`
