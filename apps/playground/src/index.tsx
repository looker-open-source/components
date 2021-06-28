/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import React from 'react'
import { render } from 'react-dom'
import {
  Box,
  ComponentsProvider,
  FieldToggleSwitch,
  Heading,
  SpaceVertical,
  useToggle,
} from '@looker/components'
import { FontFaceLoader } from '@looker/components-providers'
import { theme, Theme } from '@looker/design-tokens'

const App = () => {
  const { toggle, value } = useToggle(false)

  const { key, background } = theme.colors

  const customTheme: Theme = {
    ...theme,
    colors: {
      ...theme.colors,
      background: value ? key : background,
      key: value ? background : key,
    },
    fontSources: [
      {
        url: 'https://fonts.googleapis.com/css2?family=Grandstander:wght@200;300;400;500&display=swap',
      },
    ],
    fonts: {
      ...theme.fonts,
      brand: 'Grandstander',
    },
  }

  return (
    <ComponentsProvider theme={customTheme}>
      <Box p="medium">
        <SpaceVertical>
          <FontFaceLoader />
          <FieldToggleSwitch on={value} onChange={toggle} label="Toggle me" />
          <Heading color="key">Some text here</Heading>
        </SpaceVertical>
      </Box>
    </ComponentsProvider>
  )
}
document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('container'))
})
