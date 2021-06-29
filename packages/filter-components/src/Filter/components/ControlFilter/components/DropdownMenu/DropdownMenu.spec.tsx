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
import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { DropdownMenu } from './DropdownMenu'
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
]

describe('DropdownMenu tests', () => {
  describe('anyOption', () => {
    it('true – able to clear the filter value', () => {
      const onChange = jest.fn()
      renderWithTheme(
        <DropdownMenu
          value={'value1'}
          options={options}
          onChange={onChange}
          anyOption
        />
      )

      const clearButton = screen.getByText('Clear Field')
      fireEvent.click(clearButton)

      expect(onChange).toHaveBeenCalledWith('')
    })

    it('undefined – unable to clear the filter value', () => {
      const onChange = jest.fn()
      renderWithTheme(
        <DropdownMenu value={'value1'} options={options} onChange={onChange} />
      )

      expect(screen.queryByText('Clear Field')).not.toBeInTheDocument()
    })
  })
})
