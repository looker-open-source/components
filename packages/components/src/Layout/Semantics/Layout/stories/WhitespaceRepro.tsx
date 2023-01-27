/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Info } from '@styled-icons/material'
import type { LayoutProps } from '../..'
import { Page, Header, Layout, Aside, Section } from '../..'
import { Constitution, ItemsFiller } from '../../../..'
import { IconButton } from '../../../../Button'
import { Heading } from '../../../../Text'

export default function WhitespaceRepro(props: LayoutProps) {
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
        <Aside p="u5" width="200px" style={{ backgroundColor: 'lightsalmon' }}>
          <ItemsFiller count={20} />
        </Aside>
        <Section
          main
          p="u10"
          style={{ backgroundColor: 'lightgoldenrodyellow' }}
        >
          <Heading>Page title</Heading>
          <Constitution />
          <IconButton icon={<Info />} label="Info" />
        </Section>
      </Layout>
    </Page>
  )
}
