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
import { renderWithTheme } from '@looker/components-test-utils'
import { act, fireEvent, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { TagList } from './TagList'

const options = [
  {
    label: 'label1',
    value: 'value1',
  },
  {
    label: 'label2',
    value: 'value2',
  },
  {
    label: 'label3',
    value: 'value3',
  },
  {
    label: 'label11',
    value: 'value11',
  },
  {
    label: 'label22',
    value: 'value22',
  },
  {
    label: 'label33',
    value: 'value33',
  },
  {
    label: 'label111',
    value: 'value111',
  },
  {
    label: 'label222',
    value: 'value222',
  },
  {
    label: 'label333',
    value: 'value333',
  },
]

describe('TagList tests', () => {
  jest.useFakeTimers()

  describe('on `inputchange`', () => {
    const filterOptions = (optionText: string) => {
      const input = screen.getByPlaceholderText('any value')!
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

    describe('when options are fewer than 999', () => {
      it('should not trigger the input change handler', async () => {
        const value: string[] = []
        const onInputChange = jest.fn()
        const Component = (
          <TagList
            value={value}
            options={options}
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
          expect(onInputChange).not.toHaveBeenCalled()
        })
      })
    })
  })
})
