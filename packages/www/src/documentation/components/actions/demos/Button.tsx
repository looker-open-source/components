/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import styled from 'styled-components'
import {
  Box,
  Button,
  ButtonOutline,
  ComponentsProvider,
  theme,
} from '@looker/components'

const RoundBtnStyled = styled(Button)`
  border-radius: 2rem;
`

export const RoundBtn = () => (
  <RoundBtnStyled>Hello Round Button</RoundBtnStyled>
)

const primary = Object.assign({}, theme.colors.semanticColors.primary, {
  main: '#2db264',
  dark: '#198044',
  darker: '#12593c',
})
const danger = Object.assign({}, theme.colors.semanticColors.danger, {
  main: '#ffd200',
  dark: '#e5ae17',
  darker: '#a67e11',
  lighter: '#fff1bf',
  borderColor: '#ffd200',
})

const mildTheme = Object.assign({}, theme)
mildTheme.colors = Object.assign({}, mildTheme.colors)
mildTheme.colors.semanticColors.primary = primary
mildTheme.colors.semanticColors.danger = danger

export const ThemingButton = () => (
  <ComponentsProvider theme={mildTheme}>
    <Box>
      <Button>Mild Button</Button>
      <Box ml="small" display="inline-block">
        <ButtonOutline color="danger">Mild Danger Outline Button</ButtonOutline>
      </Box>
    </Box>
  </ComponentsProvider>
)
