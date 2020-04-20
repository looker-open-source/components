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

import {
  ComponentsProvider,
  CustomizableTooltipAttributes,
} from '@looker/components'
import React, { FC } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Props } from '../Shared'
import MDXComponents from '../MDX'

CustomizableTooltipAttributes.zIndex = 1

const all = { ...MDXComponents, Props }

const Page: FC = ({ children }) => {
  return (
    <ComponentsProvider>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap"
        rel="stylesheet"
      />
      <MDXProvider components={all}>{children}</MDXProvider>
    </ComponentsProvider>
  )
}

export default Page
