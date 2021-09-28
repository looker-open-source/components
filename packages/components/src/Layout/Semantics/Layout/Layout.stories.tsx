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

import { Info } from 'styled-icons/material'
import React from 'react'
import styled from 'styled-components'
import { defaultArgTypes as argTypes } from '../../../../../../apps/storybook/src/defaultArgTypes'
import {
  Constitution,
  ConstitutionShort,
} from '../../../__mocks__/Constitution'
import { ItemsFiller } from '../../../__mocks__/ListHelper'
import { IconButton } from '../../../Button'
import { Heading } from '../../../Text'
import { Page, Header, Layout, Aside, Section, Footer } from '../'

export default {
  argTypes,
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
        <Aside p="u5" width="200px">
          <ItemsFiller count={20} />
        </Aside>
        <Section main p="u10">
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
        <Aside p="u5" width="200px">
          <ItemsFiller count={20} />
        </Aside>
        <Section main p="u10">
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
        <Aside p="u5">
          <Constitution />
        </Aside>
        <Section main p="u10">
          <Heading>Page title</Heading>
          <Constitution />
        </Section>
        <AsideAlt p="u10" width="navigation">
          <ConstitutionShort />
        </AsideAlt>
      </Layout>
    </Page>
  </Highlighter>
)
ScrollIndependently.parameters = {
  storyshots: { disable: true },
}

export const ScrollSelectedAreas = () => (
  <Highlighter>
    <Page fixed>
      <Layout hasAside>
        <Aside p="u5" width="200px">
          <ConstitutionShort />
        </Aside>
        <Layout hasAside>
          <Section main scrollWithin p="u10">
            <Heading>Page title</Heading>
            <Constitution />
          </Section>
          <AsideAlt scrollWithin p="u10">
            <ConstitutionShort />
          </AsideAlt>
        </Layout>
      </Layout>
    </Page>
  </Highlighter>
)
ScrollSelectedAreas.parameters = {
  storyshots: { disable: true },
}

export const ScrollAllAreasTogetherDefault = () => (
  <Highlighter>
    <Page>
      <Layout hasAside>
        <Aside p="u5" width="200px">
          <ConstitutionShort />
        </Aside>
        <Section main p="u10">
          <Heading>Page title</Heading>
          <Constitution />
        </Section>
        <AsideAlt p="u10" width="10rem">
          <ConstitutionShort />
        </AsideAlt>
      </Layout>
    </Page>
  </Highlighter>
)
ScrollAllAreasTogetherDefault.parameters = {
  storyshots: { disable: true },
}

export const WhitespaceRepro = () => (
  <Highlighter>
    <Page fixed>
      <Header height="4rem" px="large">
        I'm the header
      </Header>
      <Layout hasAside>
        <Aside p="u5" width="200px">
          <ItemsFiller count={20} />
        </Aside>
        <Section main p="u10">
          <Heading>Page title</Heading>
          <Constitution />
          <IconButton icon={<Info />} label="Info" />
        </Section>
      </Layout>
    </Page>
  </Highlighter>
)
WhitespaceRepro.parameters = {
  storyshots: { disable: true },
}
