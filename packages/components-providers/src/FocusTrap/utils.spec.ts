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

import { waitFor } from '@testing-library/react'
import { activateFocusTrap } from './utils'

// Even though JSDom doesn't natively support :focus-visible, this test still
// works because we mock matches() and it will not throw.
test('activateFocusTrap calls document.activeElement.matches(":focus-visible") to focus the first element', async () => {
  const mockMatches = jest.fn()

  // The activeElement property has only a getter, thus we need to redefine
  // it using Object.defineProperty.
  Object.defineProperty(document, 'activeElement', {
    value: document.createElement('button'),
  })

  // TS does not see the Object.defineProperty.
  if (document.activeElement) {
    document.activeElement.matches = mockMatches
  }

  activateFocusTrap({ element: document.body })
  await waitFor(() => {
    expect(mockMatches).toHaveBeenCalledWith(':focus-visible')
  })
})
