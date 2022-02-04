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
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { render, screen } from '@testing-library/react'
import { VisWrapper } from './VisWrapper'

describe('VisWrapper', () => {
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

    render(
      <VisWrapper>
        <CustomVis />
      </VisWrapper>
    )

    expect(screen.getByText('Rendered Without Error!')).toBeInTheDocument()
  })
})
