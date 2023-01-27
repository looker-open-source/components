/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
