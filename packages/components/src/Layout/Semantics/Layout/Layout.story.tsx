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
import { Heading } from '@looker/components/src'
import {
  Constitution,
  ConstitutionShort,
} from '../../../__mocks__/Constitution'
import { ItemsFiller } from '../../../__mocks__/ListHelper'
import { Page, Header, Layout, Aside, Section, Footer } from '../'

export default {
  component: Layout,
  title: 'Layout',
}

const AsideAlt = styled(Aside)``

const Highlighter = styled.div`
  /* stylelint-disable color-named */

  ${Header}, ${Footer} {
    background-color: lightcoral;
  }

  ${Aside} {
    background-color: lightsalmon;
  }

  ${AsideAlt} {
    background-color: lightskyblue;
  }

  ${Section} {
    background-color: lightgoldenrodyellow;
  }
`

export const Basic = () => (
  <Highlighter>
    <Page>
      <Header height="4rem" px="large">
        I'm the header
      </Header>
      <Layout hasAside>
        <Aside p="large" width="200px">
          <ItemsFiller count={20} />
        </Aside>
        <Section main p="xxlarge">
          <Heading>Page title</Heading>
          <Constitution />
        </Section>
      </Layout>
      <Footer height="3rem" px="large">
        I'm a footer
      </Footer>
    </Page>
  </Highlighter>
)

export const FixedWithFooterAndHeaderShadow = () => (
  <Highlighter>
    <Page fixed>
      <Header height="4rem" px="large">
        I'm the header
      </Header>
      <Layout hasAside>
        <Aside p="large" width="200px">
          <ItemsFiller count={20} />
        </Aside>
        <Section main p="xxlarge">
          <Heading>Page title</Heading>
          <Constitution />
        </Section>
      </Layout>
      <Footer height="3rem" px="large">
        I'm a footer
      </Footer>
    </Page>
  </Highlighter>
)

export const ScrollIndependently = () => (
  <Highlighter>
    <Page fixed>
      <Layout hasAside>
        <Aside p="large">
          <Constitution />
        </Aside>
        <Section main p="xxlarge">
          <Heading>Page title</Heading>
          <Constitution />
        </Section>
        <AsideAlt p="xxlarge" width="navigation">
          <ConstitutionShort />
        </AsideAlt>
      </Layout>
    </Page>
  </Highlighter>
)
ScrollIndependently.parameters = {
  loki: { skip: true },
}

export const ScrollSelectedAreas = () => (
  <Highlighter>
    <Page fixed>
      <Layout hasAside>
        <Aside p="large" width="200px">
          <ConstitutionShort />
        </Aside>
        <Layout hasAside>
          <Section main scrollWithin p="xxlarge">
            <Heading>Page title</Heading>
            <Constitution />
          </Section>
          <AsideAlt scrollWithin p="xxlarge">
            <ConstitutionShort />
          </AsideAlt>
        </Layout>
      </Layout>
    </Page>
  </Highlighter>
)
ScrollSelectedAreas.parameters = {
  loki: { skip: true },
}

export const ScrollAllAreasTogetherDefault = () => (
  <Highlighter>
    <Page>
      <Layout hasAside>
        <Aside p="large" width="200px">
          <ConstitutionShort />
        </Aside>
        <Section main p="xxlarge">
          <Heading>Page title</Heading>
          <Constitution />
        </Section>
        <AsideAlt p="xxlarge" width="10rem">
          <ConstitutionShort />
        </AsideAlt>
      </Layout>
    </Page>
  </Highlighter>
)
ScrollAllAreasTogetherDefault.parameters = {
  loki: { skip: true },
}
