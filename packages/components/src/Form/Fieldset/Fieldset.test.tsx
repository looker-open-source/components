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

import 'jest-styled-components'
import React, { useState } from 'react'
import { assertSnapshot, renderWithTheme } from '@looker/components-test-utils'
import { fireEvent } from '@testing-library/react'
import { FieldText } from '../Fields/FieldText'
import { Fieldset } from './Fieldset'

const fieldTexts = (
  <>
    <FieldText label="one" name="name1" id="text-1" />
    <FieldText label="two" name="name2" id="text-2" />
    <FieldText label="three" name="nam3" id="text-3" />
  </>
)

test('Fieldset', () => {
  assertSnapshot(<Fieldset legend="Legend">{fieldTexts}</Fieldset>)
})

describe('Fieldset - Accordion mode', () => {
  test('Renders legend and children (on legend click)', () => {
    const { getByText, queryByText } = renderWithTheme(
      <Fieldset legend="Legend" accordion>
        {fieldTexts}
      </Fieldset>
    )

    expect(queryByText('one')).not.toBeInTheDocument()
    expect(queryByText('two')).not.toBeInTheDocument()
    expect(queryByText('three')).not.toBeInTheDocument()
    fireEvent.click(getByText('Legend'))
    getByText('one')
    getByText('two')
    getByText('three')
  })

  test('Renders children by default when defaultOpen === true', () => {
    const { getByText } = renderWithTheme(
      <Fieldset legend="Legend" accordion defaultOpen>
        {fieldTexts}
      </Fieldset>
    )

    getByText('one')
    getByText('two')
    getByText('three')
  })

  test('Triggers onClose and onOpen callbacks on legend click', () => {
    const onClose = jest.fn()
    const onOpen = jest.fn()

    const { getByText } = renderWithTheme(
      <Fieldset legend="Legend" accordion onClose={onClose} onOpen={onOpen}>
        {fieldTexts}
      </Fieldset>
    )

    const disclosure = getByText('Legend')
    fireEvent.click(disclosure)
    expect(onOpen).toHaveBeenCalled()
    fireEvent.click(disclosure)
    expect(onClose).toHaveBeenCalled()
  })

  test('Shows and hides children on legend click with provided isOpen and toggleOpen props', () => {
    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(false)
      return (
        <Fieldset
          legend="Legend"
          accordion
          isOpen={isOpen}
          toggleOpen={setIsOpen}
        >
          {fieldTexts}
        </Fieldset>
      )
    }

    const { getByText, queryByText } = renderWithTheme(<Wrapper />)

    expect(queryByText('one')).not.toBeInTheDocument()
    expect(queryByText('two')).not.toBeInTheDocument()
    expect(queryByText('three')).not.toBeInTheDocument()
    fireEvent.click(getByText('Legend'))
    getByText('one')
    getByText('two')
    getByText('three')
  })
})
