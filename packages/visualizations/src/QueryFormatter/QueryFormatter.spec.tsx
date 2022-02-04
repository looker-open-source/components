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
import { render, screen } from '@testing-library/react'
import type { FC } from 'react'
import React, { useContext } from 'react'
import {
  QueryContext,
  mockQueryContextValues,
} from '@looker/visualizations-adapters'
import type { QueryFormatterProps } from './QueryFormatter'
import { QueryFormatter } from './QueryFormatter'
import { ThemeContext } from 'styled-components'

afterEach(() => {
  jest.clearAllMocks()
})

/* eslint-disable @typescript-eslint/no-explicit-any */

describe('QueryFormatter component', () => {
  const QueryFormatterInContext: FC<QueryFormatterProps> = props => (
    <QueryContext.Provider value={mockQueryContextValues}>
      <QueryFormatter {...props} />
    </QueryContext.Provider>
  )

  it('passes config, data, and fields props to child component', () => {
    const propLogger = jest.fn()
    const CustomVis: FC<any> = props => {
      propLogger(props)
      return null
    }
    renderWithTheme(
      <QueryFormatterInContext>
        <CustomVis />
      </QueryFormatterInContext>
    )
    expect(propLogger).toHaveBeenCalledWith(
      expect.objectContaining({
        config: expect.anything(),
        data: expect.anything(),
        fields: expect.anything(),
      })
    )
  })

  it('passes custom user provided props to child component', () => {
    const propsLogger = jest.fn()
    const CustomVis: FC<any> = ({ customProp, customerData }) => {
      propsLogger({ customProp, customerData })
      return null
    }
    renderWithTheme(
      <QueryFormatterInContext>
        <CustomVis customProp={true} customerData="12345" />
      </QueryFormatterInContext>
    )
    expect(propsLogger.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          Object {
            "customProp": true,
            "customerData": "12345",
          },
        ],
      ]
    `)
  })

  it('wraps itself in ComponentsProvider if rendered outside of theme context', () => {
    const CustomVis = () => {
      const theme = useContext(ThemeContext)
      return (
        <>
          <p>Rendered Without Error!</p>
          <dl>
            <dt>Background Color:</dt>
            <dd>{theme.colors.background}</dd>
          </dl>
        </>
      )
    }

    // use default rtl `render` instead of `renderWithTheme`
    render(
      <QueryFormatter>
        <CustomVis />
      </QueryFormatter>
    )

    expect(screen.getByText('Rendered Without Error!')).toBeInTheDocument()
  })
})
