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

import { act, fireEvent, render, screen } from '@testing-library/react'
import React, { useRef } from 'react'
import { useHovered } from './useHovered'

const HoveredComponent = () => {
  const hoverRef = useRef<HTMLDivElement>(null)
  const [isHovered] = useHovered(hoverRef)
  return (
    <div ref={hoverRef} tabIndex={0}>
      hover me
      {isHovered && <button>button</button>}
    </div>
  )
}

describe('useHovered', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  const runTimers = () =>
    act(() => {
      jest.runOnlyPendingTimers()
    })

  it('toggles on hover', () => {
    render(<HoveredComponent />)
    expect(screen.queryByText('button')).not.toBeInTheDocument()

    const hoverMe = screen.getByText('hover me')
    fireEvent.mouseEnter(hoverMe)
    expect(screen.getByText('button')).toBeVisible()
    fireEvent.mouseLeave(hoverMe)
    runTimers()
    expect(screen.queryByText('button')).not.toBeInTheDocument()
  })

  it('toggles on focus', () => {
    render(<HoveredComponent />)
    expect(screen.queryByText('button')).not.toBeInTheDocument()

    const hoverMe = screen.getByText('hover me')
    fireEvent.focus(hoverMe)

    const button = screen.getByText('button')
    expect(button).toBeVisible()
    fireEvent.focus(button)

    // With the button focused, hovering in & out should have no effect
    fireEvent.mouseEnter(hoverMe)
    expect(button).toBeVisible()
    fireEvent.mouseLeave(hoverMe)
    expect(button).toBeVisible()

    fireEvent.blur(button)
    runTimers()
    expect(screen.queryByText('button')).not.toBeInTheDocument()
  })
})
