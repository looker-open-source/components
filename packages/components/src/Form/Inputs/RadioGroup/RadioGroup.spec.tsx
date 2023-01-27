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
import React, { useState } from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import map from 'lodash/map'
import { RadioGroup } from './RadioGroup'

const radioOptions = [
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

const radioProps = {
  defaultValue: 'swiss',
  id: '1',
  name: 'group1',
  options: radioOptions,
}

test('RadioGroup render a list of radio', () => {
  const extractRadioFromDomList = (list: HTMLElement) => {
    const options = list.getElementsByTagName('label')
    return map(options, (el: HTMLElement) => {
      return el.textContent
    })
  }

  const renderListContent = () => {
    renderWithTheme(<RadioGroup {...radioProps} />)
    return screen.getByTestId('radio-list')
  }

  const view = renderListContent()
  expect(extractRadioFromDomList(view)).toEqual([
    'Cheddar',
    'Gouda',
    'Swiss',
    'Roquefort',
  ])
})

test('RadioGroup selects a radio on click', () => {
  const handleChange = jest.fn()

  renderWithTheme(<RadioGroup {...radioProps} onChange={handleChange} />)
  const radio = screen.getByLabelText('Cheddar')

  fireEvent.click(radio)

  expect(handleChange).toHaveBeenCalledWith('cheddar')
  expect(radio).toBeChecked()
})

test('RadioGroup works with defaultValue', () => {
  renderWithTheme(<RadioGroup {...radioProps} defaultValue={'cheddar'} />)
  expect(screen.getByLabelText('Cheddar')).toBeChecked()
})

test('RadioGroup works with value', () => {
  function ControlledTest() {
    const [value, setValue] = useState('cheddar')
    return (
      <RadioGroup
        options={radioOptions}
        name="controlled"
        value={value}
        onChange={setValue}
      />
    )
  }
  renderWithTheme(<ControlledTest />)

  const cheddar = screen.getByLabelText('Cheddar')
  const swiss = screen.getByLabelText('Swiss')
  expect(cheddar).toBeChecked()
  expect(swiss).not.toBeChecked()

  fireEvent.click(swiss)
  expect(cheddar).not.toBeChecked()
  expect(swiss).toBeChecked()
})

test('RadioGroup disabled all Radios', () => {
  renderWithTheme(<RadioGroup {...radioProps} disabled />)

  expect(screen.getByLabelText('Cheddar') as HTMLInputElement).toBeDisabled()
  expect(screen.getByLabelText('Gouda') as HTMLInputElement).toBeDisabled()
  expect(screen.getByLabelText('Swiss') as HTMLInputElement).toBeDisabled()
  expect(screen.getByLabelText('Roquefort') as HTMLInputElement).toBeDisabled()
})

test('RadioGroup disabled one specific Radio', () => {
  const options = radioOptions.map(option => {
    return {
      disabled: ['Swiss'].includes(option.label),
      ...option,
    }
  })

  renderWithTheme(<RadioGroup {...radioProps} options={options} />)

  expect(screen.getByLabelText('Cheddar') as HTMLInputElement).toBeEnabled()
  expect(screen.getByLabelText('Swiss') as HTMLInputElement).toBeDisabled()
})
