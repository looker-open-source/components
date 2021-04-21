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
import { Home } from '@styled-icons/material/Home'
import { PieChart } from '@styled-icons/material/PieChart'
import { VerifiedUser } from '@styled-icons/material/VerifiedUser'
import {
  Aside,
  AsideProps,
  Footer,
  Header,
  Layout,
  LayoutProps,
  Page,
  Section,
} from '..'
import { SpaceVertical } from '../../Space'
import { Heading, Paragraph } from '../../../Text'
import { MenuItem } from '../../../Menu/MenuItem'
import { Tab, Tabs, TabList, TabPanel, TabPanels } from '../../../Tabs'
import { layoutSizes } from '../LayoutWidth'

const fillterParagraph = (
  <Paragraph fontSize="small">
    Neutra franzen cardigan, semiotics tousled gochujang green juice activated
    charcoal succulents flannel ramps palo santo. Kale chips williamsburg
    hexagon, etsy cray 8-bit cornhole tilde neutra DIY snackwave whatever food
    truck marfa fashion axe. Polaroid master cleanse twee DIY tbh pop-up
    biodiesel austin hell of scenester woke man bun 3 wolf moon. Venmo coloring
    book beard adaptogen four loko locavore wolf street art +1 kombucha marfa
    90's unicorn everyday carry.
  </Paragraph>
)

const longContent = (
  <SpaceVertical>
    <Paragraph fontSize="small">
      I'm baby man braid cold-pressed seitan sartorial, tumblr ennui selfies
      chia twee subway tile af 90's celiac. Gochujang distillery tumeric flannel
      lumbersexual gastropub fashion axe viral neutra. Pickled narwhal everyday
      carry activated charcoal succulents occupy YOLO yuccie forage seitan
      kitsch. Celiac bespoke cloud bread asymmetrical bicycle rights XOXO
      cold-pressed hashtag listicle hell of migas. Chillwave brooklyn fam occupy
      microdosing leggings. Poke af cornhole hot chicken. Portland tattooed +1
      chia ennui.
    </Paragraph>
    {fillterParagraph}
    {fillterParagraph}
    {fillterParagraph}
  </SpaceVertical>
)

const Template: Story<LayoutProps> = (args) => (
  <Highlighter>
    <Page {...args}>
      <Header height="4rem" px="large">
        I'm the header
      </Header>
      <Layout hasAside>
        <Aside p="large" width="200px">
          Aside
        </Aside>
        <Section p="xxlarge" as="main">
          <Heading>Page title</Heading>
          <Tabs>
            <TabList distribute>
              <Tab>Blue</Tab>
              <Tab>Green</Tab>
              <Tab>Purple</Tab>
              <Tab>Yellow</Tab>
              <Tab>Orange</Tab>
              <Tab>Red</Tab>
              <Tab>White</Tab>
              <Tab>Black</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>{longContent}</TabPanel>
            </TabPanels>
          </Tabs>
        </Section>
        <AsideAlt p="xxlarge" width="10rem">
          Alternate Aside
        </AsideAlt>
      </Layout>
      <Footer height="3rem" px="large">
        I'm a footer
      </Footer>
    </Page>
  </Highlighter>
)

const menuItems = (
  <>
    <MenuItem
      detail="detail"
      description="this is the description"
      icon={<Home />}
    >
      Looker
    </MenuItem>
    <MenuItem description="this is the description" icon={<VerifiedUser />}>
      Validate
    </MenuItem>
    <MenuItem detail="detail" icon={<PieChart />}>
      Pizza
    </MenuItem>
  </>
)

const Template2: Story<LayoutProps> = (args) => (
  <Highlighter>
    <Page {...args}>
      <Header height="4rem" px="large">
        Page Header
      </Header>
      <Layout fixed hasAside>
        <Aside width="200px">
          <Header height="4rem" px="large">
            Aside Header
          </Header>
          {menuItems}
          {menuItems}
        </Aside>
        <Layout>
          <Section p="xxlarge" as="main">
            <Heading>Section title</Heading>
            {longContent}
          </Section>
          <Footer height="3rem" px="large">
            Section Footer
          </Footer>
        </Layout>
        <AsideAlt width="20rem">
          <Header height="4rem" px="large">
            Alternate Aside Header
          </Header>
          {menuItems}
          {menuItems}
          <Footer height="3rem" px="large">
            Alternate Aside Footer
          </Footer>
        </AsideAlt>
      </Layout>
      <Footer height="3rem" px="large">
        Page Footer
      </Footer>
    </Page>
  </Highlighter>
)

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

export const Basic = Template.bind({})
Basic.args = {}

export const Fixed = Template.bind({})
Fixed.args = {
  fixed: true,
}

export const MultipleLayouts = Template2.bind({})
MultipleLayouts.args = {
  fixed: true,
}

export const ScrollIndependentlyDefault = () => (
  <Highlighter>
    <Page fixed>
      <Layout hasAside>
        <Aside p="large" width="200px">
          I'm baby man braid cold-pressed seitan sartorial, tumblr ennui selfies
          chia twee subway tile af 90's celiac. Gochujang distillery tumeric
          flannel lumbersexual gastropub fashion axe viral neutra. Pickled
          narwhal everyday carry activated charcoal succulents occupy YOLO
          yuccie forage seitan kitsch. Celiac bespoke cloud bread asymmetrical
          bicycle rights XOXO cold-pressed hashtag listicle hell of migas.
          Chillwave brooklyn fam occupy microdosing leggings. Poke af cornhole
          hot chicken. Portland tattooed +1 chia ennui.
        </Aside>
        <Section p="xxlarge" as="main">
          <Heading>Page title</Heading>
          <Tabs>
            <TabList distribute>
              <Tab>Blue</Tab>
              <Tab>Green</Tab>
              <Tab>Purple</Tab>
              <Tab>Yellow</Tab>
              <Tab>Orange</Tab>
              <Tab>Red</Tab>
              <Tab>White</Tab>
              <Tab>Black</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>{longContent}</TabPanel>
            </TabPanels>
          </Tabs>
        </Section>
        <AsideAlt p="xxlarge" width="10rem">
          I'm baby man braid cold-pressed seitan sartorial, tumblr ennui selfies
          chia twee subway tile af 90's celiac. Gochujang distillery tumeric
          flannel lumbersexual gastropub fashion axe viral neutra. Pickled
          narwhal everyday carry activated charcoal succulents occupy YOLO
          yuccie forage seitan kitsch. Celiac bespoke cloud bread asymmetrical
          bicycle rights XOXO cold-pressed hashtag listicle hell of migas.
          Chillwave brooklyn fam occupy microdosing leggings. Poke af cornhole
          hot chicken. Portland tattooed +1 chia ennui.
        </AsideAlt>
      </Layout>
    </Page>
  </Highlighter>
)

export const ScrollSelectedAreas = () => (
  <Highlighter>
    <Page fixed>
      <Layout hasAside>
        <Aside p="large" width="200px">
          I'm baby man braid cold-pressed seitan sartorial, tumblr ennui selfies
          chia twee subway tile af 90's celiac. Gochujang distillery tumeric
          flannel lumbersexual gastropub fashion axe viral neutra. Pickled
          narwhal everyday carry activated charcoal succulents occupy YOLO
          yuccie forage seitan kitsch. Celiac bespoke cloud bread asymmetrical
          bicycle rights XOXO cold-pressed hashtag listicle hell of migas.
          Chillwave brooklyn fam occupy microdosing leggings. Poke af cornhole
          hot chicken. Portland tattooed +1 chia ennui.
        </Aside>
        <Layout hasAside>
          <Section scrollWithin p="xxlarge" as="main">
            <Heading>Page title</Heading>
            <Tabs>
              <TabList distribute>
                <Tab>Blue</Tab>
                <Tab>Green</Tab>
                <Tab>Purple</Tab>
                <Tab>Yellow</Tab>
                <Tab>Orange</Tab>
                <Tab>Red</Tab>
                <Tab>White</Tab>
                <Tab>Black</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>{longContent}</TabPanel>
              </TabPanels>
            </Tabs>
          </Section>
          <AsideAlt scrollWithin p="xxlarge" width="10rem">
            I'm baby man braid cold-pressed seitan sartorial, tumblr ennui
            selfies chia twee subway tile af 90's celiac. Gochujang distillery
            tumeric flannel lumbersexual gastropub fashion axe viral neutra.
            Pickled narwhal everyday carry activated charcoal succulents occupy
            YOLO yuccie forage seitan kitsch. Celiac bespoke cloud bread
            asymmetrical bicycle rights XOXO cold-pressed hashtag listicle hell
            of migas. Chillwave brooklyn fam occupy microdosing leggings. Poke
            af cornhole hot chicken. Portland tattooed +1 chia ennui.
          </AsideAlt>
        </Layout>
      </Layout>
    </Page>
  </Highlighter>
)

export const ScrollAllAreas = () => (
  <Highlighter>
    <Page fixed>
      <Layout hasAside>
        <Aside scrollWithin p="large" width="200px">
          I'm baby man braid cold-pressed seitan sartorial, tumblr ennui selfies
          chia twee subway tile af 90's celiac. Gochujang distillery tumeric
          flannel lumbersexual gastropub fashion axe viral neutra. Pickled
          narwhal everyday carry activated charcoal succulents occupy YOLO
          yuccie forage seitan kitsch. Celiac bespoke cloud bread asymmetrical
          bicycle rights XOXO cold-pressed hashtag listicle hell of migas.
          Chillwave brooklyn fam occupy microdosing leggings. Poke af cornhole
          hot chicken. Portland tattooed +1 chia ennui.
        </Aside>
        <Section scrollWithin p="xxlarge" as="main">
          <Heading>Page title</Heading>
          <Tabs>
            <TabList distribute>
              <Tab>Blue</Tab>
              <Tab>Green</Tab>
              <Tab>Purple</Tab>
              <Tab>Yellow</Tab>
              <Tab>Orange</Tab>
              <Tab>Red</Tab>
              <Tab>White</Tab>
              <Tab>Black</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>{longContent}</TabPanel>
            </TabPanels>
          </Tabs>
        </Section>
        <AsideAlt scrollWithin p="xxlarge" width="10rem">
          I'm baby man braid cold-pressed seitan sartorial, tumblr ennui selfies
          chia twee subway tile af 90's celiac. Gochujang distillery tumeric
          flannel lumbersexual gastropub fashion axe viral neutra. Pickled
          narwhal everyday carry activated charcoal succulents occupy YOLO
          yuccie forage seitan kitsch. Celiac bespoke cloud bread asymmetrical
          bicycle rights XOXO cold-pressed hashtag listicle hell of migas.
          Chillwave brooklyn fam occupy microdosing leggings. Poke af cornhole
          hot chicken. Portland tattooed +1 chia ennui.
        </AsideAlt>
      </Layout>
    </Page>
  </Highlighter>
)

const WidthTemplate: Story<AsideProps> = (args) => (
  <AsideStyle {...args}>Aside content</AsideStyle>
)

const AsideStyle = styled(Aside)`
  background-color: lightsalmon;
  height: 40rem;
  padding: 40px;
`
export const AsideWidthSizeXsmall = WidthTemplate.bind({})
AsideWidthSizeXsmall.args = {
  width: 'xsmall',
}

export default {
  argTypes: {
    width: {
      control: {
        options: Object.keys(layoutSizes),
        type: 'radio',
      },
    },
  },
  component: Layout,
  title: 'Layout',
}
