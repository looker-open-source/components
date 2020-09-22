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
import {
  Layout,
  Header,
  Aside,
  Main,
  Footer,
  Grid,
  Section,
} from '@looker/components'
import styled from 'styled-components'

export default {
  title: 'Layout/Semantics',
}

export const All = () => (
  <CustomGrid columns={3}>
    <HeaderLayoutAsideMain />
    <AsideMainFooter />
    <HeaderLayoutAsideMainFooter />
    <AsideLayoutHeaderMainFooter />
    <AsideLayoutHeaderLayoutLayoutMainAsideFooter />
  </CustomGrid>
)

export const HeaderLayoutAsideMain = () => (
  <Highlighter>
    <Layout>
      <Header>Header</Header>
      <Layout hasAside>
        <Aside width="20%">Aside</Aside>
        <Main>Main</Main>
      </Layout>
    </Layout>
  </Highlighter>
)

export const HeaderLayoutAsideMainFooter = () => (
  <Highlighter>
    <Layout>
      <Header>Header</Header>
      <Layout hasAside>
        <Aside width="20%">Aside</Aside>
        <Main>Main</Main>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </Highlighter>
)

export const AsideMainFooter = () => (
  <Highlighter>
    <Layout>
      <Layout hasAside>
        <Aside width="20%">Aside</Aside>
        <Main>Main</Main>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </Highlighter>
)

export const AsideLayoutHeaderMainFooter = () => (
  <Highlighter>
    <Layout>
      <Layout hasAside>
        <Aside width="20%">Aside</Aside>
        <Layout>
          <Header>Header</Header>
          <Main>Main</Main>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  </Highlighter>
)

export const AsideLayoutHeaderLayoutLayoutMainAsideFooter = () => (
  <Highlighter>
    <Layout>
      <Layout hasAside>
        <Aside width="20%">Aside</Aside>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Layout hasAside>
              <Main>Main</Main>
              <Aside width="40%">Aside</Aside>
            </Layout>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  </Highlighter>
)

const CustomGrid = styled(Grid)`
  grid-auto-rows: 12rem;
`

const Highlighter = styled.div`
  /* stylelint-disable color-named */
  ${Header}, ${Footer} {
    background-color: lightskyblue;
  }

  ${Aside} {
    background-color: lightsalmon;
  }

  ${Main}, ${Section} {
    background-color: lightseagreen;
  }
`
