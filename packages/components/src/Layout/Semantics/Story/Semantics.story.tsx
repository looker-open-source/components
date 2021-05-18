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
import { Story } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import { Layout, Header, Aside, AsideProps, Footer, Section } from '..'
import { Grid } from '../../Grid'

export default {
  title: 'Layout',
}

const Template: Story<AsideProps> = (args) => (
  <Aside p="large" text-align="center" {...args} />
)

export const DefaultBorderColor = Template.bind({})
DefaultBorderColor.args = {
  border: true,
  children: 'Aside',
}

export const Border = Template.bind({})
Border.args = {
  border: 'key',
  children: 'border',
}

export const BorderBottom = Template.bind({})
BorderBottom.args = {
  borderBottom: 'key',
  children: 'border-bottom',
}

export const BorderLeft = Template.bind({})
BorderLeft.args = {
  borderLeft: 'key',
  children: 'border-left',
}

export const BorderRight = Template.bind({})
BorderRight.args = {
  borderRight: 'key',
  children: 'border-right',
}

export const BorderTop = Template.bind({})
BorderTop.args = {
  borderTop: 'key',
  children: 'border-top',
}

export const BorderX = Template.bind({})
BorderX.args = {
  borderX: 'key',
  children: 'border-left and border-right',
}

export const BorderY = Template.bind({})
BorderY.args = {
  borderY: 'key',
  children: 'border-bottom and border-top',
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
    <Layout height="100%">
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
    <Layout height="100%">
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
    <Layout height="100%">
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
    <Layout height="100%">
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
    <Layout height="100%">
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

const CustomGrid = styled(Grid)`
  grid-auto-rows: 12rem;
`

const Highlighter = styled.div`
  /* Emulate Page behavior for demos */
  height: 100%;

  /* stylelint-disable color-named */

  ${Header}, ${Footer} {
    background-color: lightskyblue;
  }

  aside {
    background-color: lightsalmon;
  }

  main {
    background-color: lightseagreen;
  }
`
