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
import ReactDOM from 'react-dom'
import { FilterDemo } from './FilterDemo'
import { ExtensionProvider } from '@looker/extension-sdk-react'
import { ComponentsProvider, Spinner, Flex } from '@looker/components'

const getRoot = () => {
  const existingRoot = document.getElementById('extension-root')
  if (existingRoot) return existingRoot
  const root = document.createElement('div')
  root.setAttribute('id', 'extension-root')
  root.style.height = '100%'
  document.body.appendChild(root)
  return root
}

const render = (Component: typeof FilterDemo) => {
  const root = getRoot()
  const loading = (
    <Flex width="100%" height="90%" alignItems="center" justifyContent="center">
      <Spinner color="black" />
    </Flex>
  )

  ReactDOM.render(
    <ComponentsProvider>
      <ExtensionProvider
        loadingComponent={loading}
        requiredLookerVersion=">=21.0"
      >
        <Component />
      </ExtensionProvider>
    </ComponentsProvider>,
    root
  )
}

window.addEventListener('DOMContentLoaded', async () => {
  render(FilterDemo)
})

// Allow hot module reload
if (module.hot) {
  module.hot.accept('./FilterDemo.tsx', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const NextFilterDemo = require('./FilterDemo.tsx').default
    render(NextFilterDemo)
  })
}
