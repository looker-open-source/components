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

import React from 'react'
import {
  Box,
  Heading,
  IconButton,
  Paragraph,
  useTooltip,
} from '@looker/components'

export function TooltipDemo() {
  const tooltip = useTooltip({
    content: 'Placement: top',
    placement: 'top',
  })
  return (
    <Box m="large">
      <Heading mb="xlarge">
        Tooltip behavior inside overflow: auto containers
      </Heading>
      <Box overflow="auto" height={30} border="1px solid" mb="large">
        <IconButton icon="DotsVert" label="Default Placement" />
      </Box>
      <Box overflow="auto" width={40} border="1px solid" mb="large">
        <IconButton
          icon="DotsVert"
          label="Placement: right"
          tooltipPlacement="right"
        />
      </Box>
      <Box overflow="auto" height={400} border="1px solid" p="medium">
        {tooltip.tooltip}
        <Box
          overflow="auto"
          height={100}
          width={40}
          bg="palette.purple500"
          ref={tooltip.ref}
          {...tooltip.eventHandlers}
          mt={-40}
        />
        <Paragraph>
          The purple box above is an edge case. With boundariesElement set to
          'window', a tooltip can render outside of a scrolling element when its
          anchor is partially hidden.
        </Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
        <Paragraph>Text</Paragraph>
      </Box>
    </Box>
  )
}
