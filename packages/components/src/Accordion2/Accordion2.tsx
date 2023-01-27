/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import styled from 'styled-components'
import { Accordion2Disclosure } from './Accordion2Disclosure'
import { accordionDimensions } from './accordionDimensions'
import type { Accordion2Props } from './types'
import { useAccordion2 } from './useAccordion2'

const Accordion2Internal = (props: Accordion2Props) => {
  const { content, domProps, disclosureProps } = useAccordion2(props)

  return (
    <div {...domProps}>
      <Accordion2Disclosure {...disclosureProps} />
      {content}
    </div>
  )
}

/**
 * `Accordion2` manages the relationship between a `label` and the `children` within.
 * Links the the label and children using ARIA features and supports either controlled
 * or uncontrolled usage patterns.
 *
 * See `useAccordion2` hook to meet more complex compositional requirements
 *
 * Accordion2 is a modernized version of the `Accordion` component with an improved
 * interface that removes confusing props and offers a more opinionated approach to
 * styling.
 */
export const Accordion2 = styled(Accordion2Internal)<Accordion2Props>`
  font-size: ${({ theme, density }) =>
    theme.fontSizes[
      accordionDimensions(density || theme.defaults.density).fontSize
    ]};
  width: 100%;
`
