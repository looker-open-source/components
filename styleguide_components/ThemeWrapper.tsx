import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { CustomizableModalAttributes } from '../src/components/Modal/Modal'
import { theme } from '../src/style'

CustomizableModalAttributes.zIndex = 100

export default class ThemeWrapper extends React.Component {
  public render() {
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
  }
}
