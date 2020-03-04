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

import { mount } from 'enzyme'
import React, { RefObject } from 'react'
import { act } from 'react-dom/test-utils'
import { useElementVisibility } from './MenuGroup.hooks'

interface TestProps {
  callback: (...args: any[]) => void
  testRef: RefObject<any>
}

const TestHook = ({ callback, testRef }: TestProps) => {
  callback(testRef)
  return null
}

describe('MenuGroup Hooks', () => {
  let isVisible: boolean

  const testRef = {
    current: <div />,
  }

  /* eslint-disable react-hooks/rules-of-hooks */
  const cb = (ref: RefObject<any>) => {
    isVisible = useElementVisibility(ref)
  }
  /* eslint-enable react-hooks/rules-of-hooks */

  it('it returns true as the default visibility state', () => {
    act(() => {
      mount(<TestHook callback={cb} testRef={testRef} />)
    })
    expect(isVisible).toEqual(true)
  })
})
