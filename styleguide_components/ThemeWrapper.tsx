import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { CustomizableModalAttributes } from '../src/components/Modal/Modal'
import { CustomizableRichTooltipAttributes } from '../src/components/Tooltip/RichTooltip'
import { CustomizableTooltipAttributes } from '../src/components/Tooltip/Tooltip'
import { theme } from '../src/style'

CustomizableModalAttributes.zIndex = 100
CustomizableTooltipAttributes.zIndex = 100
CustomizableRichTooltipAttributes.zIndex = 100

export default class ThemeWrapper extends React.Component {
  public render() {
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
  }
}
