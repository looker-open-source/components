/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import { LkFieldTreeAccordionContent } from './LkFieldTreeAccordionContent'
import { LkFieldTree } from './LkFieldTree'

/**
 * LkFieldViewTree is used to represent a Looker View and is expected to be
 * at the 0th-depth (i.e. the top-level) of an LkField composition.
 *
 * It comes with padding overrides for additional spacing and a 1px border bottom.
 */
export const LkFieldViewTree = styled(LkFieldTree)`
  > ${LkFieldTreeAccordionContent} {
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }

  border-bottom: 1px solid ${({ theme }) => theme.colors.ui2};
  padding: 0.25rem;
`
