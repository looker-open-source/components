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
import { renderWithTheme } from '@looker/components-test-utils'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { Button } from '../Button/Button'
import { FieldText } from './Fields/FieldText/FieldText'
import { Form } from './Form'

describe('Form', () => {
  test('two invalid children', () => {
    renderWithTheme(
      <Form
        validationMessages={{
          name1: { message: 'e1', type: 'error' },
          name2: { message: 'e2', type: 'error' },
        }}
      >
        <FieldText label="label1" id="text-field" name="name1" />
        <FieldText label="label2" id="text-field" name="name2" />
      </Form>
    )

    expect(screen.getByText('e1')).toBeInTheDocument()
    expect(screen.getByText('e2')).toBeInTheDocument()
  })

  test('with one invalid child and a submit button', () => {
    renderWithTheme(
      <Form validationMessages={{ name2: { message: 'e2', type: 'error' } }}>
        <FieldText label="label1" id="text-field" name="name1" />
        <FieldText label="label2" id="text-field" name="name2" />
        <Button>Submit</Button>
      </Form>
    )
    expect(screen.getByText('e2')).toBeInTheDocument()
  })

  test('Should trigger onInput handler', () => {
    const onInput = jest.fn()
    renderWithTheme(
      <Form onInput={onInput}>
        <FieldText label="label" id="text-field" name="name" />
      </Form>
    )
    userEvent.type(screen.getByRole('textbox'), 'hi')
    expect(onInput).toHaveBeenCalledTimes(2)
  })

  test('Should trigger onChange handler', () => {
    const onChange = jest.fn()

    renderWithTheme(
      <Form onChange={onChange}>
        <FieldText label="label" id="text-field" name="name" />
      </Form>
    )
    userEvent.type(screen.getByRole('textbox'), 'hi')
    expect(onChange).toHaveBeenCalledTimes(2)
  })

  /**
   * JSDom Doesn't support `onSubmit` handler
   * https://github.com/jsdom/jsdom/issues/1937
   * https://github.com/jsdom/jsdom#unimplemented-parts-of-the-web-platform
   */
  test.skip('Should trigger onSubmit handler', () => {
    const onSubmit = jest.fn()
    renderWithTheme(
      <Form onSubmit={onSubmit}>
        <FieldText label="label" id="text-field" name="name" />
        <Button type="submit">Submit</Button>
      </Form>
    )
    userEvent.click(screen.getByRole('button'))
    expect(onSubmit).toHaveBeenCalled()
  })
})
