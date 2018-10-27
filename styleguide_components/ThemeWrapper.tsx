import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { palette, theme } from '../src/style'

theme.components.Overlay.zIndex = 100
theme.components.Tooltip.bubble.color = palette.red000

export default class ThemeWrapper extends React.Component {
  public render() {
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
  }
}
