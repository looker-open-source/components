/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import 'jest-styled-components'
import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import map from 'lodash/map'
import { fieldOptions } from '../../../fixtures/CheckboxRadio'
import { FieldRadioGroup } from './FieldRadioGroup'

const fieldRadioProps = {
  defaultValue: 'cheddar',
  id: '1',
  name: 'group1',
  options: fieldOptions,
}
test('FieldRadioGroup render a radio list', () => {
  const extractCheckboxFromDomList = (list: HTMLElement) => {
    const options = list.getElementsByTagName('label')
    return map(options, (el: HTMLElement) => {
      return el.textContent
    })
  }

  const renderListContent = () => {
    renderWithTheme(<FieldRadioGroup {...fieldRadioProps} required />)
    return screen.getByTestId('radio-list')
  }

  const view = renderListContent()
  expect(extractCheckboxFromDomList(view)).toEqual([
    'Cheddar',
    'Gouda',
    'Swiss',
    'Roquefort',
  ])
})
