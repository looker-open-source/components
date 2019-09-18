import React from 'react'
import { ThemeProvider } from 'styled-components'
import { CustomizableModalAttributes } from '../src/components/Modal/Modal'
import { CustomizableRichTooltipAttributes } from '../src/components/Tooltip/RichTooltip'
import { CustomizableTooltipAttributes } from '../src/components/Tooltip/Tooltip'
import { theme } from '../src/style'

CustomizableModalAttributes.zIndex = 100
CustomizableTooltipAttributes.zIndex = 100
CustomizableRichTooltipAttributes.zIndex = 100

export interface ThemeWrapperProps {
  children: JSX.Element
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default ThemeWrapper
