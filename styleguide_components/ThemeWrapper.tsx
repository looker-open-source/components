import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import primaryTheme from '../src/themes'

export default class ThemeWrapper extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={primaryTheme}>{this.props.children}</ThemeProvider>
    )
  }
}
