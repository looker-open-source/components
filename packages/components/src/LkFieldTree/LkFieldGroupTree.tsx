/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import { LkFieldTreeAccordionDisclosure } from './LkFieldTreeAccordionDisclosure'
import { LkFieldTree } from './LkFieldTree'

/**
 * LkFieldGroupTree is typically used to represent a group of Looker fields
 * like a dimension group. If an LkFieldGroupTree's "isOpen" prop is false and its "selected"
 * prop is true, the Tree will have 48px of padding to right align it's selected background
 * with the selected backgrounds of other items.
 */
export const LkFieldGroupTree = styled(LkFieldTree)`
  > ${LkFieldTreeAccordionDisclosure} {
    /* Margin is to set the equivalent of the two icons (info and menu) 48px */
    margin-right: ${({ isOpen, selected }) => {
      const DEFAULT_ICON_BUTTON_SIZE = 24

      return !isOpen && selected
        ? `calc(${DEFAULT_ICON_BUTTON_SIZE}px * 2)`
        : undefined
    }};
  }
`
