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

import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { useScrollLock } from './useScrollLock'

const ScrollLockComponent = ({ enabled }: { enabled: boolean }) => {
  const { callbackRef, isEnabled, enable, disable } = useScrollLock(enabled)
  return (
    <div ref={callbackRef}>
      <button onClick={() => enable()}>enable</button>
      <button onClick={() => disable()}>disable</button>
      <div>{isEnabled}</div>
    </div>
  )
}

describe('useScrollLock', () => {
  describe('toggle body styles', () => {
    test('with no existing style', () => {
      render(<ScrollLockComponent enabled={false} />)
      expect(document.body).not.toHaveStyle({ overflow: 'hidden' })
      const enable = screen.getByText('enable')
      fireEvent.click(enable)
      // haven't found a way to test scrollbar offset style yet
      expect(document.body).toHaveStyle({ overflow: 'hidden' })
      const disable = screen.getByText('disable')
      fireEvent.click(disable)
      expect(document.body).not.toHaveStyle({ overflow: 'hidden' })
    })

    test('with existing style', () => {
      // create an existing style
      document.body.style.overflow = 'scroll'
      render(<ScrollLockComponent enabled={false} />)
      expect(document.body).toHaveStyle({ overflow: 'scroll' })
      const enable = screen.getByText('enable')
      fireEvent.click(enable)
      // haven't found a way to test scrollbar offset style yet
      expect(document.body).toHaveStyle({ overflow: 'hidden' })
      const disable = screen.getByText('disable')
      fireEvent.click(disable)
      expect(document.body).toHaveStyle({ overflow: 'scroll' })
    })
  })
})
