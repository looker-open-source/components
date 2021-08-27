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

import type { FC } from 'react'
import React, { useEffect, useState } from 'react'
import {
  ComponentsProvider,
  Page,
  Section,
  Header,
  Layout as ComponentsLayout,
} from '@looker/components'
import type { ThemeCustomizations } from '@looker/design-tokens'
import { createGlobalStyle } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from '../MDX'
import { HeaderContent } from '../components/HeaderContent'
import { Navigation } from '../components/Navigation'

const storage =
  typeof window !== 'undefined'
    ? sessionStorage
    : { getItem: () => '{}', setItem: () => undefined }

const GatsbyOverrides = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
  }

  #___gatsby,
  #gatsby-focus-wrapper{
    height: 100%;
  }
`

export const Layout: FC = ({ children }) => {
  const [showNavigation, setNavigation] = useState(true)
  const toggleNavigation = () => setNavigation(!showNavigation)

  return (
    <ComponentsProvider loadGoogleFonts>
      <GatsbyOverrides />
      <MDXProvider components={MDXComponents}>
        <Page fixed>
          <Header height="4rem">
            <HeaderContent toggleNavigation={toggleNavigation} />
          </Header>
          <ComponentsLayout hasAside>
            {showNavigation && <Navigation width="18rem" />}
            <Section py="xlarge" px="xxxlarge" main>
              {children}
            </Section>
          </ComponentsLayout>
        </Page>
      </MDXProvider>
    </ComponentsProvider>
  )
}
