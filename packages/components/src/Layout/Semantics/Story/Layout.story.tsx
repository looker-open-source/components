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
import { Story } from '@storybook/react/types-6-0'
import { Heading } from '@looker/components/src'
import {
  Constitution,
  ConstitutionShort,
  MenuItemsFiller,
  TabsFiller,
} from 'packages/components/src/__mocks__/Constitution'
import { Page, Header, Layout, LayoutProps, Aside, Section, Footer } from '..'

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

const Template: Story<LayoutProps> = (args) => (
  <Highlighter>
    <Page {...args}>
      <Header height="4rem" px="large">
        I'm the header
      </Header>
      <Layout hasAside>
        <Aside p="large" width="200px">
          <MenuItemsFiller />
          <MenuItemsFiller />
        </Aside>
        <Section main p="xxlarge">
          <Heading>Page title</Heading>
          <TabsFiller />
        </Section>
      </Layout>
      <Footer height="3rem" px="large">
        I'm a footer
      </Footer>
    </Page>
  </Highlighter>
)

export const BasicLayout = Template.bind({})
BasicLayout.args = {}

export const LayoutFixedWithFooterAndHeaderShadow = Template.bind({})
LayoutFixedWithFooterAndHeaderShadow.args = {
  fixed: true,
}

export const LayoutScrollIndependently = () => (
  <Highlighter>
    <Page fixed>
      <Layout hasAside>
        <Aside p="large">
          <Constitution />
        </Aside>
        <Section main p="xxlarge">
          <Heading>Page title</Heading>
          <TabsFiller />
        </Section>
        <AsideAlt p="xxlarge" width="navigation">
          <ConstitutionShort />
        </AsideAlt>
      </Layout>
    </Page>
  </Highlighter>
)
LayoutScrollIndependently.parameters = {
  storyshots: { disable: true },
}

export const LayoutScrollSelectedAreas = () => (
  <Highlighter>
    <Page fixed>
      <Layout hasAside>
        <Aside p="large" width="200px">
          <ConstitutionShort />
        </Aside>
        <Layout hasAside>
          <Section main scrollWithin p="xxlarge">
            <Heading>Page title</Heading>
            <TabsFiller />
          </Section>
          <AsideAlt scrollWithin p="xxlarge">
            <ConstitutionShort />
          </AsideAlt>
        </Layout>
      </Layout>
    </Page>
  </Highlighter>
)
LayoutScrollSelectedAreas.parameters = {
  storyshots: { disable: true },
}

export const LayoutScrollAllAreasTogetherDefault = () => (
  <Highlighter>
    <Page>
      <Layout hasAside>
        <Aside p="large" width="200px">
          <ConstitutionShort />
        </Aside>
        <Section main p="xxlarge">
          <Heading>Page title</Heading>
          <TabsFiller />
        </Section>
        <AsideAlt p="xxlarge" width="10rem">
          <ConstitutionShort />
        </AsideAlt>
      </Layout>
    </Page>
  </Highlighter>
)
LayoutScrollAllAreasTogetherDefault.parameters = {
  storyshots: { disable: true },
}
