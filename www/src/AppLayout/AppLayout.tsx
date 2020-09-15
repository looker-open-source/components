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

import React, { FC, useState } from 'react'
import {
  Aside,
  ComponentsProvider,
  Page,
  Section,
  Header,
  Layout,
} from '@looker/components'
import { MDXProvider } from '@mdx-js/react'
import sitemap from '../documentation/sitemap'
import { Props } from '../Shared'
import MDXComponents from '../MDX'
import { HeaderContent } from './HeaderContent'
import { Navigation } from './Navigation'

export const AppLayout: FC = ({ children }) => {
  const [showNavigation, setNavigation] = useState(true)
  const toggleNavigation = () => setNavigation(!showNavigation)

  return (
    <ComponentsProvider loadGoogleFonts>
      <MDXProvider components={{ ...MDXComponents, Props }}>
        <Page>
          <Header height="4rem">
            <HeaderContent toggleNavigation={toggleNavigation} />
          </Header>
          <Layout hasAside>
            {showNavigation && (
              <Aside width="18rem">
                <Navigation sitemap={sitemap} />
              </Aside>
            )}
            <Section>{children}</Section>
          </Layout>
        </Page>
      </MDXProvider>
    </ComponentsProvider>
  )
}
