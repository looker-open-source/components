/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { renderWithTheme } from '@looker/components-test-utils'
import { act, fireEvent, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { TagList } from './TagList'

describe('TagList tests', () => {
  jest.useFakeTimers()

  describe('on `inputchange`', () => {
    const filterOptions = (optionText: string) => {
      const input = screen.getByPlaceholderText('any value')
      fireEvent.change(input, { target: { value: optionText } })
    }

    describe('when options are more than 999', () => {
      it('should trigger the input change handler', async () => {
        const value: string[] = []
        const onInputChange = jest.fn()
        const options1000 = Array.from(Array(1000), (_, i) => ({
          label: String(i),
          value: String(i),
        }))
        const Component = (
          <TagList
            value={value}
            options={options1000}
            onChange={jest.fn()}
            onInputChange={onInputChange}
          />
        )

        renderWithTheme(Component)

        filterOptions('label1')
        act(() => {
          jest.runAllTimers()
        })
        await waitFor(() => {
          expect(onInputChange).toHaveBeenCalledWith('label1')
        })
      })
    })
  })
})
