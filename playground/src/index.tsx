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
import React from 'react'
import styled from 'styled-components'
import { render } from 'react-dom'
import { ComponentsProvider } from '@looker/components'
import { TimeframeFilter } from '@looker/components/src/InputDateRange/InputDateRange.story'

const App = () => {
  return (
    <ComponentsProvider loadGoogleFonts>
      <PageWrapper>
        <TimeframeFilter />
      </PageWrapper>
    </ComponentsProvider>
  )
}

const PageWrapper = styled.div`
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  padding: 30px;
`

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('container'))
})
