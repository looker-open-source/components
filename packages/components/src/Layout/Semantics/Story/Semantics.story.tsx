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
import styled from 'styled-components'
import { Layout, Header, Aside, Footer, Section } from '..'
import { Grid } from '../../Grid'

export default {
  title: 'Layout',
}

export const CommonLayouts = () => (
  <CustomGrid columns={3}>
    <HeaderLayoutAsideMain />
    <AsideMainFooter />
    <HeaderLayoutAsideMainFooter />
    <AsideLayoutHeaderMainFooter />
    <AsideLayoutHeaderLayoutLayoutMainAsideFooter />
  </CustomGrid>
)

const HeaderLayoutAsideMain = () => (
  <Highlighter>
    <Layout>
      <Header>Header</Header>
      <Layout hasAside>
        <Aside width="20%">Aside</Aside>
        <Section>Section</Section>
      </Layout>
    </Layout>
  </Highlighter>
)

const HeaderLayoutAsideMainFooter = () => (
  <Highlighter>
    <Layout>
      <Header>Header</Header>
      <Layout hasAside>
        <Aside width="20%">Aside</Aside>
        <Section>Section</Section>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </Highlighter>
)

const AsideMainFooter = () => (
  <Highlighter>
    <Layout>
      <Layout hasAside>
        <Aside width="20%">Aside</Aside>
        <Section>Section</Section>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </Highlighter>
)

const AsideLayoutHeaderMainFooter = () => (
  <Highlighter>
    <Layout>
      <Layout hasAside>
        <Aside width="20%">Aside</Aside>
        <Layout>
          <Header>Header</Header>
          <Section>Section</Section>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  </Highlighter>
)

const AsideLayoutHeaderLayoutLayoutMainAsideFooter = () => (
  <Highlighter>
    <Layout>
      <Layout hasAside>
        <Aside width="20%">Aside</Aside>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Layout hasAside>
              <Section>Section</Section>
              <Aside width="40%">Aside</Aside>
            </Layout>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  </Highlighter>
)

export const BordersOptions = () => (
  <CustomGrid columns={3}>
    <LayoutBorder />
    <LayoutBorderBottom />
    <LayoutBorderLeft />
    <LayoutBorderRight />
    <LayoutBorderTop />
    <LayoutBorderX />
    <LayoutBorderY />
    <LayoutBorderColor />
  </CustomGrid>
)

const LayoutBorder = () => (
  <Highlighter>
    <Layout>
      <Header border>Header</Header>
      <Layout hasAside>
        <Aside border width="20%">
          Aside
        </Aside>
        <Section>Border</Section>
      </Layout>
      <Footer border>Footer</Footer>
    </Layout>
  </Highlighter>
)

const LayoutBorderBottom = () => (
  <Highlighter>
    <Layout>
      <Header borderBottom>Header</Header>
      <Layout hasAside>
        <Aside borderBottom width="20%">
          Aside
        </Aside>
        <Section>BorderBottom</Section>
      </Layout>
      <Footer borderBottom>Footer</Footer>
    </Layout>
  </Highlighter>
)

const LayoutBorderLeft = () => (
  <Highlighter>
    <Layout>
      <Header borderLeft>Header</Header>
      <Layout hasAside>
        <Aside borderLeft width="20%">
          Aside
        </Aside>
        <Section>BorderLeft</Section>
      </Layout>
      <Footer borderLeft>Footer</Footer>
    </Layout>
  </Highlighter>
)

const LayoutBorderRight = () => (
  <Highlighter>
    <Layout>
      <Header borderRight>Header</Header>
      <Layout hasAside>
        <Aside borderRight width="20%">
          Aside
        </Aside>
        <Section>BorderRight</Section>
      </Layout>
      <Footer borderRight>Footer</Footer>
    </Layout>
  </Highlighter>
)

const LayoutBorderTop = () => (
  <Highlighter>
    <Layout>
      <Header borderTop>Header</Header>
      <Layout hasAside>
        <Aside borderTop width="20%">
          Aside
        </Aside>
        <Section>BorderTop</Section>
      </Layout>
      <Footer borderTop>Footer</Footer>
    </Layout>
  </Highlighter>
)

const LayoutBorderX = () => (
  <Highlighter>
    <Layout>
      <Header borderX>Header</Header>
      <Layout hasAside>
        <Aside borderX width="20%">
          Aside
        </Aside>
        <Section>BorderX</Section>
      </Layout>
      <Footer borderX>Footer</Footer>
    </Layout>
  </Highlighter>
)

const LayoutBorderY = () => (
  <Highlighter>
    <Layout>
      <Header borderY>Header</Header>
      <Layout hasAside>
        <Aside borderY width="20%">
          Aside
        </Aside>
        <Section>BorderY</Section>
      </Layout>
      <Footer borderY>Footer</Footer>
    </Layout>
  </Highlighter>
)

const LayoutBorderColor = () => (
  <Highlighter>
    <Layout>
      <Layout hasAside>
        <Aside borderY="key" width="20%">
          Aside
        </Aside>
        <Layout>
          <Header borderBottom="critical">Header</Header>
          <Layout>
            <Layout hasAside>
              <Section>Section</Section>
              <Aside borderX="key" width="40%">
                Aside
              </Aside>
            </Layout>
          </Layout>
          <Footer borderTop="critical">Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  </Highlighter>
)

const CustomGrid = styled(Grid)`
  grid-auto-rows: 12rem;
`

const Highlighter = styled.div`
  /* Emulate Page behavior for demos */
  height: 100%;
  & > ${Layout} {
    height: 100%;
  }

  /* stylelint-disable color-named */

  ${Header}, ${Footer} {
    background-color: lightskyblue;
  }

  ${Aside} {
    background-color: lightsalmon;
  }

  ${Section} {
    background-color: lightseagreen;
  }
`
