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

import 'jest-styled-components'
import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { Aside } from './Aside'
import { Header, Layout, Page, Section } from './'

describe('Semantics', () => {
  test('has Header and Footer scrolling with the page', () => {
    renderWithTheme(
      <Page>
        <Header height="4rem" px="large">
          I'm the header
        </Header>
        <Layout hasAside>
          <Section p="xxlarge" as="main">
            <p>
              I'm baby man braid cold-pressed seitan sartorial, tumblr ennui
              selfies chia twee subway tile af 90's celiac. Gochujang distillery
              tumeric flannel lumbersexual gastropub fashion axe viral neutra.
              Pickled narwhal everyday carry activated charcoal succulents
              occupy YOLO yuccie forage seitan kitsch. Celiac bespoke cloud
              bread asymmetrical bicycle rights XOXO cold-pressed hashtag
              listicle hell of migas. Chillwave brooklyn fam occupy microdosing
              leggings. Poke af cornhole hot chicken. Portland tattooed +1 chia
              ennui.
            </p>
            <p>
              Neutra franzen cardigan, semiotics tousled gochujang green juice
              activated charcoal succulents flannel ramps palo santo. Kale chips
              williamsburg hexagon, etsy cray 8-bit cornhole tilde neutra DIY
              snackwave whatever food truck marfa fashion axe. Polaroid master
              cleanse twee DIY tbh pop-up biodiesel austin hell of scenester
              woke man bun 3 wolf moon. Venmo coloring book beard adaptogen four
              loko locavore wolf street art +1 kombucha marfa 90's unicorn
              everyday carry.
            </p>
          </Section>
        </Layout>
      </Page>
    )
    expect(screen.getByText("I'm the header")).toBeInTheDocument()
    expect(screen.getByText("I'm the header").closest('div')).toHaveStyle(
      'overflow: auto;'
    )
  })

  test('has Header and Footer positions fixed when passing prop fixed', () => {
    renderWithTheme(
      <Page fixed>
        <Header height="4rem" px="large">
          I'm the header
        </Header>
        <Layout hasAside>
          <Section p="xxlarge" as="main">
            <p>
              I'm baby man braid cold-pressed seitan sartorial, tumblr ennui
              selfies chia twee subway tile af 90's celiac. Gochujang distillery
              tumeric flannel lumbersexual gastropub fashion axe viral neutra.
              Pickled narwhal everyday carry activated charcoal succulents
              occupy YOLO yuccie forage seitan kitsch. Celiac bespoke cloud
              bread asymmetrical bicycle rights XOXO cold-pressed hashtag
              listicle hell of migas. Chillwave brooklyn fam occupy microdosing
              leggings. Poke af cornhole hot chicken. Portland tattooed +1 chia
              ennui.
            </p>
            <p>
              Neutra franzen cardigan, semiotics tousled gochujang green juice
              activated charcoal succulents flannel ramps palo santo. Kale chips
              williamsburg hexagon, etsy cray 8-bit cornhole tilde neutra DIY
              snackwave whatever food truck marfa fashion axe. Polaroid master
              cleanse twee DIY tbh pop-up biodiesel austin hell of scenester
              woke man bun 3 wolf moon. Venmo coloring book beard adaptogen four
              loko locavore wolf street art +1 kombucha marfa 90's unicorn
              everyday carry.
            </p>
          </Section>
        </Layout>
      </Page>
    )
    expect(screen.getByText("I'm the header")).toBeInTheDocument()
    expect(screen.getByText("I'm the header").closest('div')).toHaveStyle(
      'overflow: hidden;'
    )
  })
  test('using prop scrollWithin will have areas scrolling together.', () => {
    renderWithTheme(
      <Page fixed>
        <Layout hasAside>
          <Aside scrollWithin>I'm the Aside before</Aside>
          <Section scrollWithin>I'm the main area</Section>
          <Aside scrollWithin>I'm the Aside after</Aside>
        </Layout>
      </Page>
    )
    expect(screen.getByText("I'm the Aside before")).toHaveStyle(
      'height: fit-content;'
    )
    expect(screen.getByText("I'm the main area")).toHaveStyle(
      'height: fit-content;'
    )
    expect(screen.getByText("I'm the Aside after")).toHaveStyle(
      'height: fit-content;'
    )
  })

  test('using prop scrollWithin will have only selected areas scrolling together.', () => {
    renderWithTheme(
      <Page fixed>
        <Layout hasAside>
          <Aside>I'm the Aside before</Aside>
          <Layout hasAside>
            <Section scrollWithin>I'm the main area</Section>
            <Aside scrollWithin>I'm the Aside after</Aside>
          </Layout>
        </Layout>
      </Page>
    )
    expect(screen.getByText("I'm the Aside before")).not.toHaveStyleRule(
      'height'
    )
    expect(screen.getByText("I'm the main area")).toHaveStyle({
      height: 'fit-content',
    })
    expect(screen.getByText("I'm the Aside after")).toHaveStyle({
      height: 'fit-content',
    })
  })

  test('Aside can use t-shirt sized for its width.', () => {
    renderWithTheme(<Aside width="medium">Aside content</Aside>)
    expect(screen.getByText('Aside content')).not.toHaveStyleRule(
      'width: 40rem;'
    )
  })
})
