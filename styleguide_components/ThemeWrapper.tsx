import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { CustomizableOverlayAttributes } from '../src/components/Overlay/Overlay'
import { theme } from '../src/style'

CustomizableOverlayAttributes.zIndex = 100
theme.components.Modal.zIndex = 100

export default class ThemeWrapper extends React.Component {
  public render() {
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
  }
}
