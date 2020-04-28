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
import { map } from 'lodash'
import { RadioGroup } from './RadioGroup'

test('RadioGroup render a list of radio', () => {
  const extractRadioFromDomList = (list: HTMLElement) => {
    const options = list.getElementsByTagName('label')
    return map(options, (el: HTMLElement) => {
      return el.textContent
    })
  }

  const renderListContent = () => {
    const { getByTestId } = renderWithTheme(
      <RadioGroup
        defaultValue={['swiss', 'cheddar']}
        id="1"
        name="group1"
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
    return getByTestId('radio-list')
  }

  const domList = renderListContent()
  expect(extractRadioFromDomList(domList)).toEqual([
    'Cheddar',
    'Gouda',
    'Swiss',
    'Roquefort',
  ])
})
test('RadioGroup selects a radio on click', () => {
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
  expect((radio as HTMLInputElement).checked).toBe(true)
})

test('RadioGroup works with defaultValue', () => {
  const { getByLabelText } = renderWithTheme(
    <RadioGroup
      defaultValue={'cheddar'}
      id="1"
      name="group1"
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
  expect((getByLabelText('Cheddar') as HTMLInputElement).checked).toBe(true)
})

test('RadioGroup disabled all Radio', () => {
  const handleChange = jest.fn()

  const { getByLabelText } = renderWithTheme(
    <RadioGroup
      disabled
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

  expect((getByLabelText('Cheddar') as HTMLInputElement).disabled).toBe(true)
  expect((getByLabelText('Gouda') as HTMLInputElement).disabled).toBe(true)
  expect((getByLabelText('Swiss') as HTMLInputElement).disabled).toBe(true)
  expect((getByLabelText('Roquefort') as HTMLInputElement).disabled).toBe(true)
})

test('RadioGroup disabled one specific Radio', () => {
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

  expect((getByLabelText('Cheddar') as HTMLInputElement).disabled).toBe(false)
  expect((getByLabelText('Swiss') as HTMLInputElement).disabled).toBe(true)
})
