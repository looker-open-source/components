/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type { Theme } from '@looker/components'
import { Swatch, Heading, Card, SpaceVertical } from '@looker/components'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import omit from 'lodash/omit'

export const ColorSwatches = () => {
  const theme = useContext<Theme>(ThemeContext)

  const colors = omit(theme.colors, 'palette')

  const swatches = Object.entries(colors).map(([name, color]) => (
    <Card key={name} width="100%">
      <Swatch color={color} size="100%" />
      <Heading fontSize="xsmall" py="u1" px="u3" as="h5">
        {name}
      </Heading>
    </Card>
  ))

  return <SpaceVertical gap="u1">{swatches}</SpaceVertical>
}
