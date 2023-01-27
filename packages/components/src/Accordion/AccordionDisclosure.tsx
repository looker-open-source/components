/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { ReactNode } from 'react'
import styled from 'styled-components'
import type { TypographyProps } from '@looker/design-tokens'
import { typography } from '@looker/design-tokens'
import type { SimpleLayoutProps } from '../Layout/utils/simple'
import { simpleLayoutCSS } from '../Layout/utils/simple'
import { Accordion2Disclosure } from '../Accordion2/Accordion2Disclosure'

export type AccordionDisclosureProps = SimpleLayoutProps &
  TypographyProps & {
    children?: ReactNode
  }

/**
 * NOTE: `focusVisible` & `indicator` props are overwritten within `AccordionLegacy`
 * & `Accordion` but are supplied here to meet type requirements of
 * `Accordion2Disclosure`
 */
const AccordionDisclosureInternal = (props: AccordionDisclosureProps) => (
  <Accordion2Disclosure focusVisible={false} indicator={null} {...props} />
)

/**
 * @deprecated Use `Accordion2` instead
 */
export const AccordionDisclosure = styled(AccordionDisclosureInternal).attrs(
  ({ px = 'none', py = 'xsmall' }) => ({
    px,
    py,
  })
)`
  ${typography}
  ${simpleLayoutCSS}
`
