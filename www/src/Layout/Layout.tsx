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
  Aside,
  ComponentsProvider,
  Page,
  Main,
  Header,
  IconButton,
  Icon,
  Heading,
} from '@looker/components'
import { MDXProvider } from '@mdx-js/react'
import React, { FC, useState } from 'react'
import sitemap from '../documentation/sitemap'
import MDXComponents from '../MDX'
import { Props } from '../Shared'
import Navigation from './Navigation'

const all = { ...MDXComponents, Props }

export const Layout: FC = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const toggleFn = () => setSidebarOpen(!sidebarOpen)

  return (
    <ComponentsProvider loadGoogleFonts>
      <Page>
        <Header height="4rem">
          <>
            <IconButton
              onClick={toggleFn}
              icon="Hamburger"
              label="Toggle navigation"
            />

            <Icon name="LookerLogo" alt="Looker" color="text5" />

            <Heading lineHeight="small" fontSize="large" as="h1">
              Components
            </Heading>
          </>
        </Header>
        <Layout>
          {sidebarOpen && (
            <Aside width="17.5rem">
              <Navigation sitemap={sitemap} />
            </Aside>
          )}
          <Main>
            <MDXProvider components={all}>{children}</MDXProvider>
          </Main>
        </Layout>
      </Page>
    </ComponentsProvider>
  )
}
