/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { LayoutProps } from '../..'
import { Page, Header, Layout, Aside, Section, Footer } from '../..'
import { Constitution, ItemsFiller } from '../../../..'
import { Heading } from '../../../../Text'

export default function FixedWithFooterAndHeaderShadow(props: LayoutProps) {
  const { hasAside, ...rest } = props
  return (
    <Page fixed>
      <Header
        height="4rem"
        px="large"
        style={{ backgroundColor: 'lightcoral' }}
      >
        I'm the header
      </Header>
      <Layout hasAside={hasAside} {...rest}>
        <Aside p="u5" width="200px" style={{ backgroundColor: 'lightskyblue' }}>
          <ItemsFiller count={20} />
        </Aside>
        <Section
          main
          p="u10"
          style={{ backgroundColor: 'lightgoldenrodyellow' }}
        >
          <Heading>Page title</Heading>
          <Constitution />
        </Section>
      </Layout>
      <Footer
        height="3rem"
        px="large"
        style={{ backgroundColor: 'lightcoral' }}
      >
        I'm a footer
      </Footer>
    </Page>
  )
}
