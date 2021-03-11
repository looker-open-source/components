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
import { Aside, Footer, Header, Layout, Page, Section } from '..'
import { SpaceVertical } from '../../Space'
import { Heading, Paragraph } from '../../../Text'
import { Tab, Tabs, TabList, TabPanel, TabPanels } from '../../../Tabs'

export default {
  title: 'Layout',
}

export const ExamplePage = () => (
  <Highlighter>
    <Page fixed>
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
              <TabPanel>
                <SpaceVertical>
                  <Paragraph fontSize="small">
                    I'm baby man braid cold-pressed seitan sartorial, tumblr
                    ennui selfies chia twee subway tile af 90's celiac.
                    Gochujang distillery tumeric flannel lumbersexual gastropub
                    fashion axe viral neutra. Pickled narwhal everyday carry
                    activated charcoal succulents occupy YOLO yuccie forage
                    seitan kitsch. Celiac bespoke cloud bread asymmetrical
                    bicycle rights XOXO cold-pressed hashtag listicle hell of
                    migas. Chillwave brooklyn fam occupy microdosing leggings.
                    Poke af cornhole hot chicken. Portland tattooed +1 chia
                    ennui.
                  </Paragraph>
                  <Paragraph fontSize="small">
                    Neutra franzen cardigan, semiotics tousled gochujang green
                    juice activated charcoal succulents flannel ramps palo
                    santo. Kale chips williamsburg hexagon, etsy cray 8-bit
                    cornhole tilde neutra DIY snackwave whatever food truck
                    marfa fashion axe. Polaroid master cleanse twee DIY tbh
                    pop-up biodiesel austin hell of scenester woke man bun 3
                    wolf moon. Venmo coloring book beard adaptogen four loko
                    locavore wolf street art +1 kombucha marfa 90's unicorn
                    everyday carry.
                  </Paragraph>
                  <Paragraph fontSize="small">
                    Neutra franzen cardigan, semiotics tousled gochujang green
                    juice activated charcoal succulents flannel ramps palo
                    santo. Kale chips williamsburg hexagon, etsy cray 8-bit
                    cornhole tilde neutra DIY snackwave whatever food truck
                    marfa fashion axe. Polaroid master cleanse twee DIY tbh
                    pop-up biodiesel austin hell of scenester woke man bun 3
                    wolf moon. Venmo coloring book beard adaptogen four loko
                    locavore wolf street art +1 kombucha marfa 90's unicorn
                    everyday carry.
                  </Paragraph>
                  <Paragraph fontSize="small">
                    Neutra franzen cardigan, semiotics tousled gochujang green
                    juice activated charcoal succulents flannel ramps palo
                    santo. Kale chips williamsburg hexagon, etsy cray 8-bit
                    cornhole tilde neutra DIY snackwave whatever food truck
                    marfa fashion axe. Polaroid master cleanse twee DIY tbh
                    pop-up biodiesel austin hell of scenester woke man bun 3
                    wolf moon. Venmo coloring book beard adaptogen four loko
                    locavore wolf street art +1 kombucha marfa 90's unicorn
                    everyday carry.
                  </Paragraph>
                </SpaceVertical>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Section>
        <AsideAlt p="xxlarge" width="25rem">
          Alternate Aside
        </AsideAlt>
      </Layout>
      <Footer height="3rem" px="large">
        I'm a footer
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
