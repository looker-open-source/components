/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { screen, render } from '@testing-library/react'
import type { UseListWidthProps } from './useListWidths'
import { useListWidths } from './useListWidths'

const getBoundingClientRectMock = jest.fn()

const mockWrapper = {
  getBoundingClientRect: getBoundingClientRectMock,
} as unknown as HTMLElement

function TestComponent(props: UseListWidthProps) {
  const { minWidth, width } = useListWidths({
    ...props,
    wrapperElement: mockWrapper,
  })
  return (
    <div>
      <span data-testid="minWidth">{minWidth}</span>
      <span data-testid="width">{width}</span>
    </div>
  )
}

describe('useListWidths', () => {
  beforeEach(() => {
    getBoundingClientRectMock.mockImplementation(() => ({ width: 1234 }))
  })
  afterEach(() => {
    getBoundingClientRectMock.mockClear()
  })

  test('getBoundingClientRect is not called when list is closed', () => {
    render(<TestComponent />)
    expect(screen.getByTestId('width')).toHaveTextContent('auto')
    expect(screen.getByTestId('minWidth')).toHaveTextContent('')
    expect(mockWrapper.getBoundingClientRect).not.toHaveBeenCalled()
  })

  test('getBoundingClientRect is not called when width prop is defined (except auto)', () => {
    render(<TestComponent isVisible width="90vw" />)
    expect(screen.getByTestId('width')).toHaveTextContent('90vw')
    expect(screen.getByTestId('minWidth')).toHaveTextContent('')
    expect(mockWrapper.getBoundingClientRect).not.toHaveBeenCalled()
  })

  test('getBoundingClientRect is not called when width prop is auto and minWidth is defined', () => {
    render(<TestComponent isVisible width="auto" minWidth={101} />)
    expect(screen.getByTestId('width')).toHaveTextContent('auto')
    expect(screen.getByTestId('minWidth')).toHaveTextContent('101')
    expect(mockWrapper.getBoundingClientRect).not.toHaveBeenCalled()
  })

  test('getBoundingClientRect is called when width prop is undefined', () => {
    render(<TestComponent isVisible />)
    expect(screen.getByTestId('width')).toHaveTextContent('1234')
    expect(screen.getByTestId('minWidth')).toHaveTextContent('')
    expect(mockWrapper.getBoundingClientRect).toHaveBeenCalledTimes(1)
  })

  test('getBoundingClientRect is called when width prop is auto', () => {
    render(<TestComponent isVisible width="auto" />)
    expect(screen.getByTestId('width')).toHaveTextContent('auto')
    expect(screen.getByTestId('minWidth')).toHaveTextContent('1234')
    expect(mockWrapper.getBoundingClientRect).toHaveBeenCalledTimes(1)
  })
})
