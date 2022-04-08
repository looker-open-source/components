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

import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { InputFile } from '.'

test('displays input text and button', () => {
  renderWithTheme(<InputFile handleFile={jest.fn()} />)
  expect(screen.getByText('Upload File')).toBeVisible()
})

test('button text prop changes button text', () => {
  renderWithTheme(<InputFile handleFile={jest.fn()} buttonText="ButtonTest" />)
  expect(screen.getByText('ButtonTest')).toBeVisible()
})

test('should allow user to choose a file and calls handleFile on selection', async () => {
  const handleFileMock = jest.fn()
  renderWithTheme(<InputFile handleFile={handleFileMock} />)

  const file = new File(['testing'], 'testing.json', {
    type: 'application/JSON',
  })
  const input = screen.getByTestId('input-file')

  fireEvent.change(input, { target: { files: [file] } })

  expect(handleFileMock).toBeCalledTimes(1)
  expect(handleFileMock).toHaveBeenCalledWith(file)
})

test('should show file name in textbox once file uploads', async () => {
  renderWithTheme(<InputFile handleFile={jest.fn()} />)

  const file = new File(['testing'], 'testing.json', {
    type: 'application/JSON',
  })
  const input = screen.getByTestId('input-file')
  const text = screen.getByRole('textbox') as HTMLInputElement

  fireEvent.change(input, { target: { files: [file] } })

  expect(text).toHaveValue('testing.json')
})
