import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import primaryTheme from '../src/theme'

export default class ThemeWrapper extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={primaryTheme}>{this.props.children}</ThemeProvider>
    )
  }
}
