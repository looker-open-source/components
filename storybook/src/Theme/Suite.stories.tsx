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

import {
  Button,
  ButtonOutline,
  ButtonTransparent,
  SpaceVertical,
  Grid,
  FieldText,
  IconButton,
  FieldSlider,
  ButtonGroup,
  ButtonItem,
  Badge,
} from '@looker/components'
import React, { useState } from 'react'

export const Suite = () => {
  const [value, setValue] = useState(['One'])
  return (
    <SpaceVertical gap="xsmall">
      <Button>My neat button</Button>
      <Button color="neutral">My neat button</Button>
      <Button color="critical">My neat button</Button>
      <ButtonOutline>My neat button</ButtonOutline>
      <ButtonOutline color="neutral">My neat button</ButtonOutline>
      <ButtonOutline color="critical">My neat button</ButtonOutline>
      <ButtonTransparent>My neat button</ButtonTransparent>
      <ButtonTransparent color="neutral">My neat button</ButtonTransparent>
      <ButtonTransparent color="critical">My neat button</ButtonTransparent>

      <ButtonGroup value={value} onChange={setValue}>
        <ButtonItem>One</ButtonItem>
        <ButtonItem>Two</ButtonItem>
      </ButtonGroup>

      <FieldText label="Hello" />
      <IconButton icon="Check" label="Check" size="large" />
      <FieldSlider label="slider" />

      <Grid columns={3}>
        <Badge intent="key">Key</Badge>
        <Badge intent="positive">Positive</Badge>
        <Badge intent="inform">Inform</Badge>
        <Badge intent="critical">Crtical</Badge>
        <Badge intent="warn">Warn</Badge>
        <Badge intent="neutral">Neutral</Badge>
      </Grid>
    </SpaceVertical>
  )
}

export default {
  component: Suite,
  title: 'Theme',
}
