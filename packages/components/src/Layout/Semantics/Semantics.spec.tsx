/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import { Aside } from './Aside/Aside'
import { Footer, Header, Layout, Page, Section } from './'

describe('Semantics', () => {
  test('whole page scrolls together by default', () => {
    renderWithTheme(
      <Page>
        <Header height="4rem" px="large">
          I'm the header
        </Header>
        <Layout hasAside>
          <Aside>I'm the Aside before</Aside>
          <Section>I'm the main area</Section>
        </Layout>
        <Footer height="4rem" px="large">
          I'm the Footer
        </Footer>
      </Page>
    )
    expect(screen.getByText("I'm the Aside before")).toBeInTheDocument()
    expect(screen.getByText("I'm the header").closest('div')).toHaveStyle(
      'overflow: auto;'
    )
  })

  test('using prop fixed on page will have Header and Footer fixed while the rest of the page scrolls', () => {
    renderWithTheme(
      <Page fixed>
        <Header height="4rem" px="large">
          I'm the header
        </Header>
        <Layout hasAside>
          <Aside>I'm the Aside before</Aside>
          <Section>I'm the main area</Section>
        </Layout>
        <Footer height="4rem" px="large">
          I'm the Footer
        </Footer>
      </Page>
    )
    expect(screen.getByText("I'm the Aside before")).toBeInTheDocument()
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
})
