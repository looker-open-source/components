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

import React from 'react'
import { Box } from '../../Layout'

import { ContentOverflow } from './ContentOverflow'
import { EdgeOverflow } from './EdgeOverflow'

export default function OverflowExamples() {
  return (
    <Box p="u10" width="100%" position="relative" height="100%">
      <EdgeOverflow top={0} left={0}>
        Top Left
      </EdgeOverflow>
      <EdgeOverflow top={0} right={0}>
        Top Right
      </EdgeOverflow>
      <EdgeOverflow bottom={0} left={0}>
        Bottom Left
      </EdgeOverflow>
      <EdgeOverflow bottom={0} right={0}>
        Bottom Right
      </EdgeOverflow>

      <ContentOverflow>
        Long popover content (placement ignore too)
      </ContentOverflow>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
      <p>....</p>
    </Box>
  )
}
