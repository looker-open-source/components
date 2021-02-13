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
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { FieldSlider } from './FieldSlider'

test('FieldSlider should accept detail and description attributes', () => {
  renderWithTheme(
    <FieldSlider
      detail="5/50"
      description="this is the description"
      label="Label"
      name="FieldSlider"
      id="field-slider"
    />
  )

  expect(screen.getByText('5/50')).toBeInTheDocument()
  expect(screen.getByLabelText('Label')).toHaveDescription(
    'this is the description'
  )
})

test('FieldSlider should accept a disabled prop', () => {
  const { getByLabelText } = renderWithTheme(
    <FieldSlider disabled id="test" label="Test Label" name="test" />
  )

  const input = getByLabelText('Test Label')
  expect(input).toBeDisabled()
})

test('FieldSlider should accept required attributes', () => {
  const { getByText } = renderWithTheme(
    <FieldSlider label="Label" name="fieldSlider" id="field-slider" required />
  )
  expect(getByText('required')).toBeVisible()
})
