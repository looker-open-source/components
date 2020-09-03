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
import { Layout, Header, Aside, Main, Footer, Grid } from '@looker/components'
import styled from 'styled-components'

export default {
  title: 'Layout/Semantics',
}

export const All = () => (
  <Highlighter columns={3}>
    <HeaderLayoutAsideMain />
    <AsideMainFooter />
    <HeaderLayoutAsideMainFooter />
    <AsideLayoutHeaderMainFooter />
    <AsideLayoutHeaderLayoutLayoutMainAsideFooter />
    <HeaderAsideAsideMainAside />
  </Highlighter>
)

export const HeaderLayoutAsideMain = () => (
  <Layout>
    <Header>Header</Header>
    <Layout>
      <Aside width="20%">Aside</Aside>
      <Main>Main</Main>
    </Layout>
  </Layout>
)

export const HeaderLayoutAsideMainFooter = () => (
  <Layout>
    <Header>Header</Header>
    <Layout>
      <Aside width="20%">Aside</Aside>
      <Main>Main</Main>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
)

export const AsideMainFooter = () => (
  <Layout>
    <Layout>
      <Aside width="20%">Aside</Aside>
      <Main>Main</Main>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
)

export const AsideLayoutHeaderMainFooter = () => (
  <Layout>
    <Layout>
      <Aside width="20%">Aside</Aside>
      <Layout>
        <Header>Header</Header>
        <Main>Main</Main>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </Layout>
)

export const AsideLayoutHeaderLayoutLayoutMainAsideFooter = () => (
  <Layout>
    <Layout>
      <Aside width="20%">Aside</Aside>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Layout>
            <Main>Section</Main>
            <Aside width="40%">Aside</Aside>
          </Layout>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </Layout>
)

export const HeaderAsideAsideMainAside = () => (
  <Layout>
    <Header>Header</Header>
    <Layout>
      <AsideAlt width="5%">Aside</AsideAlt>
      <Aside width="20%">Aside</Aside>
      <Main>Main</Main>
      <Aside width="20%">Aside</Aside>
    </Layout>
  </Layout>
)

const AsideAlt = styled(Aside)``

const Highlighter = styled(Grid)`
  grid-auto-rows: 12rem;

  /* stylelint-disable color-named */

  ${Aside}, ${Footer}, ${Header}, ${Main} {
    color: white;
  }

  ${Header}, ${Footer} {
    background-color: darksalmon;
  }

  ${Aside} {
    background-color: lightsalmon;
  }

  ${AsideAlt} {
    background-color: crimson;
  }

  ${Main} {
    background-color: salmon;
  }
`
