/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import 'jest-styled-components'
import React from 'react'
import { fireEvent } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { RadioGroup } from './RadioGroup'

test('RadioGroup render a radio list', () => {
  const handleChange = jest.fn()

  const { getByLabelText } = renderWithTheme(
    <RadioGroup
      id="1"
      name="group1"
      onChange={handleChange}
      options={[
        {
          label: 'Cheddar',
          value: 'cheddar',
        },
        {
          label: 'Gouda',
          value: 'gouda',
        },
        {
          disabled: true,
          label: 'Swiss',
          value: 'swiss',
        },
        {
          label: 'Roquefort',
          value: 'roquefort',
        },
      ]}
    />
  )
  const radio = getByLabelText('Cheddar')

  fireEvent.click(radio)

  expect(handleChange).toHaveBeenCalledWith('cheddar')
})
