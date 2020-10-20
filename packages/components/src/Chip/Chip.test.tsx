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
import { assertSnapshot, renderWithTheme } from '@looker/components-test-utils'
import React from 'react'
import { fireEvent } from '@testing-library/react'
import { Chip } from './Chip'

test('Chip renders correctly', () => {
  assertSnapshot(<Chip>chip</Chip>)
})

test('Chip renders disabled', () => {
  assertSnapshot(<Chip disabled>chip</Chip>)
})

test('Chip accepts a prefix and renders it with correct style', () => {
  const { getByText } = renderWithTheme(<Chip prefix="role">admin</Chip>)
  expect(getByText(/\brole\b/)).toHaveStyleRule('font-weight: 400')
})

test('Chip onDelete renders correctly', () => {
  const onDeleteTrigger = jest.fn()

  const { getByTestId, getByRole } = renderWithTheme(
    <Chip onDelete={onDeleteTrigger} data-testid="chip">
      clickable
    </Chip>
  )

  fireEvent.click(getByRole('button'))
  expect(onDeleteTrigger).toHaveBeenCalledTimes(1)

  const chip = getByTestId('chip')

  fireEvent.keyDown(chip, {
    key: 'Backspace',
  })
  expect(onDeleteTrigger).toHaveBeenCalledTimes(2)
})
