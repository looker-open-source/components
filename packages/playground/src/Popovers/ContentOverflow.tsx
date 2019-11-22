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

import React, { FC } from 'react'
import {
  Box,
  ButtonOutline,
  Popover,
  PopoverContent,
  Paragraph,
} from '@looker/components'

export const ContentOverflow: FC = ({ children }) => (
  <Box position="absolute" top="40%" left="40%">
    <Popover
      pin
      placement="bottom"
      content={
        <PopoverContent width="18rem">
          <Paragraph>Stuff above spacer</Paragraph>
          <Box height="60vh" bg="palette.blue100">
            Spacer
          </Box>
          <Paragraph>Content below spacer</Paragraph>
        </PopoverContent>
      }
    >
      {(onClick, ref, className) => (
        <ButtonOutline
          iconAfter="ArrowDropDown"
          m="xxlarge"
          className={className}
          onClick={onClick}
          ref={ref}
        >
          {children}
        </ButtonOutline>
      )}
    </Popover>
  </Box>
)
