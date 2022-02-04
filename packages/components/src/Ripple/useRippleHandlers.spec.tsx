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

import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import type { RippleCallbacks } from './types'
import type { RippleHandlers } from './useRippleHandlers'
import { useRippleHandlers } from './useRippleHandlers'

const RippleHandlersComponent = ({
  callbacks,
  currentHandlers,
  disabled,
}: {
  callbacks: RippleCallbacks
  currentHandlers: RippleHandlers<HTMLButtonElement>
  disabled?: boolean
}) => {
  const handlers = useRippleHandlers(callbacks, currentHandlers, disabled)
  return <button {...handlers} />
}

const callbackMocks = {
  endBG: jest.fn(),
  endFG: jest.fn(),
  startBG: jest.fn(),
  startFG: jest.fn(),
}
const handlerMocks = {
  onBlur: jest.fn(),
  onFocus: jest.fn(),
  onKeyDown: jest.fn(),
  onKeyUp: jest.fn(),
  onMouseDown: jest.fn(),
  onMouseEnter: jest.fn(),
  onMouseLeave: jest.fn(),
  onMouseUp: jest.fn(),
}

afterEach(() => {
  jest.clearAllMocks()
})

describe('useRippleHandlers', () => {
  test('maps handlers', () => {
    render(
      <RippleHandlersComponent
        callbacks={callbackMocks}
        currentHandlers={handlerMocks}
      />
    )

    const button = screen.getByRole('button')

    fireEvent.mouseEnter(button)
    expect(callbackMocks.startBG).toHaveBeenCalledTimes(1)
    expect(handlerMocks.onMouseEnter).toHaveBeenCalledTimes(1)
    fireEvent.mouseLeave(button)
    expect(callbackMocks.endBG).toHaveBeenCalledTimes(1)
    expect(callbackMocks.endFG).toHaveBeenCalledTimes(1)
    expect(handlerMocks.onMouseLeave).toHaveBeenCalledTimes(1)

    fireEvent.focus(button)
    expect(callbackMocks.startBG).toHaveBeenCalledTimes(2)
    expect(handlerMocks.onFocus).toHaveBeenCalledTimes(1)
    fireEvent.blur(button)
    expect(callbackMocks.endBG).toHaveBeenCalledTimes(2)
    expect(handlerMocks.onBlur).toHaveBeenCalledTimes(1)

    fireEvent.mouseDown(button)
    expect(callbackMocks.startFG).toHaveBeenCalledTimes(1)
    expect(handlerMocks.onMouseDown).toHaveBeenCalledTimes(1)
    fireEvent.mouseUp(button)
    expect(callbackMocks.endFG).toHaveBeenCalledTimes(2)
    expect(handlerMocks.onMouseUp).toHaveBeenCalledTimes(1)

    fireEvent.keyDown(button, { key: 'Enter' })
    expect(callbackMocks.startFG).toHaveBeenCalledTimes(2)

    fireEvent.keyDown(button, { key: ' ' })
    expect(callbackMocks.startFG).toHaveBeenCalledTimes(3)
    expect(handlerMocks.onKeyDown).toHaveBeenCalledTimes(2)

    fireEvent.keyUp(button)
    expect(callbackMocks.endFG).toHaveBeenCalledTimes(3)
    expect(handlerMocks.onKeyUp).toHaveBeenCalledTimes(1)
  })

  test('disabled', () => {
    render(
      <RippleHandlersComponent
        callbacks={callbackMocks}
        currentHandlers={handlerMocks}
        disabled
      />
    )
    const button = screen.getByRole('button')

    fireEvent.mouseEnter(button)
    fireEvent.mouseLeave(button)
    fireEvent.focus(button)
    fireEvent.blur(button)
    fireEvent.mouseDown(button)
    fireEvent.mouseUp(button)
    fireEvent.keyDown(button, { key: 'Enter' })
    fireEvent.keyDown(button, { key: ' ' })
    fireEvent.keyUp(button)

    expect(callbackMocks.startBG).not.toHaveBeenCalled()
    expect(callbackMocks.endBG).not.toHaveBeenCalled()
    expect(callbackMocks.startFG).not.toHaveBeenCalled()
    expect(callbackMocks.endFG).not.toHaveBeenCalled()

    expect(handlerMocks.onMouseEnter).not.toHaveBeenCalled()
    expect(handlerMocks.onMouseLeave).not.toHaveBeenCalled()
    expect(handlerMocks.onFocus).not.toHaveBeenCalled()
    expect(handlerMocks.onBlur).not.toHaveBeenCalled()
    expect(handlerMocks.onMouseDown).not.toHaveBeenCalled()
    expect(handlerMocks.onMouseUp).not.toHaveBeenCalled()
    expect(handlerMocks.onKeyDown).not.toHaveBeenCalled()
    expect(handlerMocks.onKeyUp).not.toHaveBeenCalled()
  })
})
