/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import type { FilterParamProps } from '../../../../../../types/filter_param_props'
import { YearMonth } from './YearMonth'

describe('YearMonth', () => {
  const onChangeMock = jest.fn()
  const mockProps = {
    item: {
      id: '1',
      month: '1',
      year: '2017',
    },
    onChange: onChangeMock,
  } as unknown as FilterParamProps

  beforeEach(() => {
    onChangeMock.mockReset()
  })

  it('should render the given year and month', () => {
    renderWithTheme(<YearMonth {...mockProps} />)
    expect(screen.getByText('January')).toBeVisible()
    expect(screen.getByDisplayValue('2017')).toBeVisible()
  })

  it('should invoke the onChange handler when the year changes', () => {
    renderWithTheme(<YearMonth {...mockProps} />)
    const input = screen.getByDisplayValue('2017')
    fireEvent.change(input, { target: { value: '2018' } })
    expect(onChangeMock).toHaveBeenCalledWith('1', { year: '2018' })
  })

  it('should invoke the onChange handler when the month changes', async () => {
    renderWithTheme(<YearMonth {...mockProps} />)
    const input = screen.getByDisplayValue('January')
    fireEvent.focus(input)
    fireEvent.mouseDown(input)
    const march = screen.getByText('March')
    fireEvent.click(march)
    expect(onChangeMock).toHaveBeenCalledWith('1', { month: '03' })
  })
})
