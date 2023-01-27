/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import React from 'react'
import type { UseBoundedRippleProps } from './types'
import { useBoundedRipple } from './useBoundedRipple'

const RippleComponent = (props: UseBoundedRippleProps) => {
  const {
    callbacks: { startBG, endBG, startFG, endFG },
    className,
    ref,
    style,
  } = useBoundedRipple(props)
  return (
    <div ref={ref}>
      <div data-testid="startBG" onClick={startBG} />
      <div data-testid="endBG" onClick={endBG} />
      <div data-testid="startFG" onClick={startFG} />
      <div data-testid="endFG" onClick={endFG} />
      <div data-testid="className">{className}</div>
      <div style={style}>style</div>
    </div>
  )
}

/* eslint-disable-next-line @typescript-eslint/unbound-method */
const globalGetBoundingClientRect = Element.prototype.getBoundingClientRect

beforeEach(() => {
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  Element.prototype.getBoundingClientRect = jest.fn(() => {
    return {
      bottom: 0,
      height: 30,
      left: 0,
      right: 0,
      toJSON: jest.fn(),
      top: 0,
      width: 360,
      x: 0,
      y: 0,
    }
  })
})

afterEach(() => {
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  Element.prototype.getBoundingClientRect = globalGetBoundingClientRect
})

describe('useRipple', () => {
  test('bounded animation values', () => {
    renderWithTheme(<RippleComponent />)
    expect(screen.getByText('style')).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-overflow': 'hidden',
      '--ripple-scale-end': '12.041594578792294',
      '--ripple-scale-start': '1',
      '--ripple-size': '30px',
      '--ripple-translate': '165px, 0',
    })
  })
})
