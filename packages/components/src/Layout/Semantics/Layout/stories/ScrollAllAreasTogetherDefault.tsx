/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { LayoutProps } from '../..'
import { Page, Layout, Aside, Section } from '../..'
import { Constitution, ConstitutionShort } from '../../../..'
import { Heading } from '../../../../Text'

export default function ScrollAllAreasTogetherDefault(props: LayoutProps) {
  const { hasAside, ...rest } = props
  return (
    <Page>
      <Layout hasAside={hasAside} {...rest}>
        <Aside p="u5" width="200px" style={{ backgroundColor: 'lightsalmon' }}>
          <ConstitutionShort />
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
          width="10rem"
          style={{ backgroundColor: 'lightskyblue' }}
        >
          <ConstitutionShort />
        </Aside>
      </Layout>
    </Page>
  )
}
