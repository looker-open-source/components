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

import { Swatch, Theme, Heading, Card, SpaceVertical } from '@looker/components'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import omit from 'lodash/omit'

export const Swatches = () => {
  const theme = useContext<Theme>(ThemeContext)

  const colors = omit(theme.colors, 'palette')

  const swatches = Object.entries(colors).map(([name, color]) => (
    <Card key={name} width="100%">
      <Swatch color={color} width="100%" />
      <Heading fontSize="xsmall" py="xxsmall" px="small" as="h5">
        {name}
      </Heading>
    </Card>
  ))

  return <SpaceVertical gap="xxsmall">{swatches}</SpaceVertical>
}

export default {
  component: Swatches,
  title: 'Theme',
}
