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
import type { UserAttributeWithValue } from '@looker/filter-expressions'
import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { UserAttributes } from './UserAttributes'

describe('User Attribute', () => {
  const testUserAttributes = {
    name: 'testAttributeName',
    label: 'label',
    rank: 1,
    value: 'value',
    user_id: '2',
    user_can_edit: true,
    value_is_hidden: false,
    user_attribute_id: '3',
    source: 'source',
    hidden_value_domain_whitelist: 'hidden value domain whitelist',
    can: { edit: true },
  } as UserAttributeWithValue

  const testItem = {
    id: '4',
    type: 'anywhere',
    is: true,
    attributeName: 'testAttributeName',
  }
  const filterParamProps = () =>
    ({
      item: testItem,
      userAttributes: [
        testUserAttributes,
        { name: 'testAttributeName2', value: 'value2', label: 'label2' },
      ],
      onChange: jest.fn(),
    } as any)

  it('should render a User Attribute', () => {
    renderWithTheme(<UserAttributes {...filterParamProps()} />)
    expect(screen.getByRole('textbox')).toHaveValue('label (value)')
  })

  it('should call userAttributeChange on change', () => {
    const props = filterParamProps()
    renderWithTheme(<UserAttributes {...props} />)

    const selectInput = screen.getByDisplayValue('label (value)')
    fireEvent.click(selectInput)

    const attribute = screen.getByText('label2 (value2)')
    fireEvent.click(attribute)

    expect(props.onChange).toHaveBeenCalledWith('4', {
      attributeName: 'testAttributeName2',
      attributeValue: 'value2',
    })
  })
})
