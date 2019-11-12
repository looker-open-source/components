/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
  ColorWheel,
  LuminositySlider,
  GlobalStyle,
  Heading,
  Card,
  CardContent,
  Flex,
  List,
  ListItem,
} from '@looker/components'
import { theme } from '@looker/design-tokens'
import { ThemeProvider } from 'styled-components'

const ColorWheelDemo = () => {
  const [color, setColor] = useState({
    h: 140,
    s: 0.5,
    v: 0.5,
  })

  const handleColorStateChange = (hs: any) => {
    setColor({
      ...hs,
      v: color.v,
    })
  }

  const handleSliderChange = (event: any) => {
    const value = Number(event.currentTarget.value)
    setColor({ ...color, v: value / 100 })
  }

  return (
    <Flex>
      <Card raised>
        <CardContent>
          <Heading as="h2">Color wheel</Heading>
          <ColorWheel
            size={400}
            hue={color.h}
            saturation={color.s}
            value={color.v}
            onColorChange={handleColorStateChange}
          />

          <LuminositySlider
            id="typeinp"
            min={0}
            max={100}
            value={color.v * 100}
            onChange={handleSliderChange}
            step={1}
          />
        </CardContent>
      </Card>
      <Card raised>
        <CardContent>
          <Heading as="h2">HSV values</Heading>
          <List>
            <ListItem>Hue: {color.h.toFixed(0)}</ListItem>
            <ListItem>Saturation: {color.s.toFixed(1)}</ListItem>
            <ListItem>Value: {color.v}</ListItem>
          </List>
        </CardContent>
      </Card>
    </Flex>
  )
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <ColorWheelDemo />
      </>
    </ThemeProvider>
  )
}

/**
 * This is the binding site for the playground. If you want to edit the
 * primary application, do your work in App.tsx instead.
 */
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('container'))
})
