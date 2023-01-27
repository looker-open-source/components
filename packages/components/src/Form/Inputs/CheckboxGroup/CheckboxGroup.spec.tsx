/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import { fireEvent, screen } from '@testing-library/react'
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
    renderWithTheme(<CheckboxGroup {...checkboxProps} />)
    return screen.getByTestId('checkbox-list')
  }

  const view = renderListContent()
  expect(extractCheckboxFromDomList(view)).toEqual([
    'Cheddar',
    'Gouda',
    'Swiss',
    'Roquefort',
  ])
})

test('CheckboxGroup can be checked and unchecked when user clicks', () => {
  const handleChange = jest.fn()

  renderWithTheme(
    <CheckboxGroup
      {...checkboxProps}
      defaultValue={[]}
      onChange={handleChange}
    />
  )
  const checkbox = screen.getByLabelText('Roquefort')

  fireEvent.click(checkbox)

  expect(handleChange).toHaveBeenCalledWith(['roquefort'])
  expect(checkbox as HTMLInputElement).toBeChecked()

  fireEvent.click(checkbox)

  expect(handleChange).toHaveBeenCalledWith(['roquefort'])
  expect(checkbox as HTMLInputElement).not.toBeChecked()
})

test('CheckboxGroup render a list of checkbox with defaultValue checked', () => {
  renderWithTheme(
    <CheckboxGroup {...checkboxProps} defaultValue={['cheddar']} />
  )
  expect(screen.getByLabelText('Cheddar') as HTMLInputElement).toBeChecked()
  expect(screen.getByLabelText('Gouda') as HTMLInputElement).not.toBeChecked()
})

test('CheckboxGroup render a list of checkbox all unchecked after user clicked on defaultValue', () => {
  renderWithTheme(<CheckboxGroup {...checkboxProps} />)
  const Cheddar = screen.getByLabelText('Cheddar')
  fireEvent.click(Cheddar)
  expect(screen.getByLabelText('Cheddar') as HTMLInputElement).not.toBeChecked()
})

test('CheckboxGroup disabled all checkbox', () => {
  renderWithTheme(<CheckboxGroup {...checkboxProps} disabled />)

  expect(screen.getByLabelText('Cheddar') as HTMLInputElement).toBeDisabled()
  expect(screen.getByLabelText('Gouda') as HTMLInputElement).toBeDisabled()
  expect(screen.getByLabelText('Swiss') as HTMLInputElement).toBeDisabled()
  expect(screen.getByLabelText('Roquefort') as HTMLInputElement).toBeDisabled()
})

test('CheckboxGroup disabled one specific checkbox', () => {
  const options = checkboxOptions.map(option => {
    return {
      disabled: ['Roquefort'].includes(option.label),
      ...option,
    }
  })

  renderWithTheme(<CheckboxGroup {...checkboxProps} options={options} />)

  expect(screen.getByLabelText('Cheddar') as HTMLInputElement).toBeEnabled()
  expect(screen.getByLabelText('Roquefort') as HTMLInputElement).toBeDisabled()
})
