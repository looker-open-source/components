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

import { ReactWrapper } from '@looker/components-test-utils'
import React, { ReactElement } from 'react'

export const SimpleContent = <div>simple content</div>
export const SimpleContentSFC = () => SimpleContent

export const mouseEventSimulator = {
  currentTarget: {},
  relatedTarget: document.body,
}

export const assertOverlayState = (
  overlay: ReactWrapper,
  content: ReactElement<any>,
  open = true
) => {
  expect(overlay.contains(content)).toEqual(open)
}

export const assertOpen = (overlay: ReactWrapper) =>
  assertOverlayState(overlay, SimpleContent)

export const assertClosed = (overlay: ReactWrapper) =>
  assertOverlayState(overlay, SimpleContent, false)
