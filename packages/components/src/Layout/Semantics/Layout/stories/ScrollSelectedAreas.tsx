/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { LayoutProps } from '../..'
import { Page, Layout, Aside, Section } from '../..'
import { Constitution, ConstitutionShort } from '../../../..'
import { Heading } from '../../../../Text'

export default function ScrollSelectedAreas(props: LayoutProps) {
  const { hasAside, ...rest } = props
  return (
    <Page fixed>
      <Layout hasAside={hasAside} {...rest}>
        <Aside p="u5" width="200px" style={{ backgroundColor: 'lightsalmon' }}>
          <ConstitutionShort />
        </Aside>
        <Layout hasAside={hasAside} {...rest}>
          <Section
            main
            scrollWithin
            p="u10"
            style={{ backgroundColor: 'lightgoldenrodyellow' }}
          >
            <Heading>Page title</Heading>
            <Constitution />
          </Section>
          <Aside
            scrollWithin
            p="u10"
            style={{ backgroundColor: 'lightskyblue' }}
          >
            <ConstitutionShort />
          </Aside>
        </Layout>
      </Layout>
    </Page>
  )
}
