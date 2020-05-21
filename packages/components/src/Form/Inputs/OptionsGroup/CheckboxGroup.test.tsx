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
import map from 'lodash/map'
import { CheckboxGroup } from './CheckboxGroup'

const checkboxOptions = [
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
]

const checkboxProps = {
  defaultValue: ['swiss', 'cheddar'],
  id: '1',
  name: 'group1',
  options: checkboxOptions,
}

test('FieldCheckboxGroup render a list of checkbox', () => {
  const extractCheckboxFromDomList = (list: HTMLElement) => {
    const options = list.getElementsByTagName('label')
    return map(options, (el: HTMLElement) => {
      return el.textContent
    })
  }

  const renderListContent = () => {
    const { getByTestId } = renderWithTheme(
      <CheckboxGroup {...checkboxProps} />
    )
    return getByTestId('checkbox-list')
  }

  const domList = renderListContent()
  expect(extractCheckboxFromDomList(domList)).toEqual([
    'Cheddar',
    'Gouda',
    'Swiss',
    'Roquefort',
  ])
})

test('CheckboxGroup can be checked and unchecked when user clicks', () => {
  const handleChange = jest.fn()

  const { getByLabelText } = renderWithTheme(
    <CheckboxGroup
      {...checkboxProps}
      defaultValue={[]}
      onChange={handleChange}
    />
  )
  const checkbox = getByLabelText('Roquefort')

  fireEvent.click(checkbox)

  expect(handleChange).toHaveBeenCalledWith(['roquefort'])
  expect((checkbox as HTMLInputElement).checked).toBe(true)

  fireEvent.click(checkbox)

  expect(handleChange).toHaveBeenCalledWith(['roquefort'])
  expect((checkbox as HTMLInputElement).checked).toBe(false)
})

test('CheckboxGroup render a list of checkbox with defaultValue checked', () => {
  const { getByLabelText } = renderWithTheme(
    <CheckboxGroup {...checkboxProps} defaultValue={['cheddar']} />
  )
  expect((getByLabelText('Cheddar') as HTMLInputElement).checked).toBe(true)
  expect((getByLabelText('Gouda') as HTMLInputElement).checked).toBe(false)
})

test('CheckboxGroup render a list of checkbox all unchecked after user clicked on defaultValue', () => {
  const { getByLabelText } = renderWithTheme(
    <CheckboxGroup {...checkboxProps} />
  )
  const Cheddar = getByLabelText('Cheddar')
  fireEvent.click(Cheddar)
  expect((getByLabelText('Cheddar') as HTMLInputElement).checked).toBe(false)
})

test('CheckboxGroup disabled all checkbox', () => {
  const { getByLabelText } = renderWithTheme(
    <CheckboxGroup {...checkboxProps} disabled />
  )

  expect((getByLabelText('Cheddar') as HTMLInputElement).disabled).toBe(true)
  expect((getByLabelText('Gouda') as HTMLInputElement).disabled).toBe(true)
  expect((getByLabelText('Swiss') as HTMLInputElement).disabled).toBe(true)
  expect((getByLabelText('Roquefort') as HTMLInputElement).disabled).toBe(true)
})

test('CheckboxGroup disabled one specific checkbox', () => {
  const options = checkboxOptions.map((option) => {
    return {
      disabled: ['Roquefort'].includes(option.label),
      ...option,
    }
  })

  const { getByLabelText } = renderWithTheme(
    <CheckboxGroup {...checkboxProps} options={options} />
  )

  expect((getByLabelText('Cheddar') as HTMLInputElement).disabled).toBe(false)
  expect((getByLabelText('Roquefort') as HTMLInputElement).disabled).toBe(true)
})
