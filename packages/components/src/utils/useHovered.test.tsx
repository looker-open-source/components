/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
  let rafSpy: jest.SpyInstance<number, [FrameRequestCallback]>
  beforeEach(() => {
    rafSpy = jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((cb: any) => cb())
  })
  afterEach(() => {
    rafSpy.mockRestore()
  })

  it('toggles on hover', () => {
    render(<HoveredComponent />)
    expect(screen.queryByText('button')).not.toBeInTheDocument()

    const hoverMe = screen.getByText('hover me')
    userEvent.hover(hoverMe)
    expect(screen.getByText('button')).toBeVisible()
    userEvent.unhover(hoverMe)
    expect(screen.queryByText('button')).not.toBeInTheDocument()
  })

  it('toggles on focus', () => {
    render(<HoveredComponent />)
    expect(screen.queryByText('button')).not.toBeInTheDocument()
    userEvent.tab()

    const button = screen.getByText('button')
    expect(button).toBeVisible()
    userEvent.tab()

    // With the button focused, hovering in & out should have no effect
    const hoverMe = screen.getByText('hover me')
    userEvent.hover(hoverMe)
    expect(button).toBeVisible()
    userEvent.unhover(hoverMe)
    expect(button).toBeVisible()

    userEvent.tab()
    expect(screen.queryByText('button')).not.toBeInTheDocument()
  })
})
