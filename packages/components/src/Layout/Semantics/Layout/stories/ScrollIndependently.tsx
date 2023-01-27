/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { LayoutProps } from '../..'
import { Page, Layout, Aside, Section } from '../..'
import { Constitution, ConstitutionShort } from '../../../..'
import { Heading } from '../../../../Text'

export default function ScrollIndependently(props: LayoutProps) {
  const { hasAside, ...rest } = props
  return (
    <Page fixed>
      <Layout hasAside={hasAside} {...rest}>
        <Aside p="u5" style={{ backgroundColor: 'lightsalmon' }}>
          <Constitution />
        </Aside>
        <Section
          main
          p="u10"
          style={{ backgroundColor: 'lightgoldenrodyellow' }}
        >
          <Heading>Page title</Heading>
          <Constitution />
        </Section>
        <Aside
          p="u10"
          width="navigation"
          style={{ backgroundColor: 'lightskyblue' }}
        >
          <ConstitutionShort />
        </Aside>
      </Layout>
    </Page>
  )
}
