/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components'
import { TextBase } from '../Text'
import { Truncate } from '../Truncate'
import { List } from '../List'
import {
  ListItem,
  ListItemContent,
  ListItemDetail,
  ListItemIcon,
} from '../ListItem'
import { NavTreeDisclosure } from '../NavTree/NavTreeDisclosure'
import { INDICATOR_SPACER } from '../NavTree'

/**
 * `NavList` is a variation of `List` that expects to wrap around a composition of `ListItem`s, `NavTree`s and `NavTreeItem`s
 *   - `ListItem`, `NavTree` and `NavTreeItem`  border-radius circular on the right side
 *   - `ListItem`, `NavTree` and `NavTreeItem` selected or "active"
 *     - text color is `theme.colors.key`
 *     - background color is `keySubtle`
 *   - `ListItem` at the root are indented to align properly with `Tree`(s) at the root as well
 */
export const NavList = styled(List).attrs(({ color = 'key' }) => ({ color }))`
  ${NavTreeDisclosure}, ${ListItemContent} {
    border-bottom-right-radius: 5rem;
    border-top-right-radius: 5rem;

    &[aria-selected='true'] {
      ${ListItemDetail},
      ${TextBase},
      ${Truncate},
      ${ListItemIcon} svg {
        color: ${({ theme }) => theme.colors.key};
      }
    }
  }

  ${ListItemIcon} {
    svg {
      transition: color
        ${({ theme }) => `${theme.transitions.quick}ms ${theme.easings.ease}`};
    }
  }

  & > ${ListItem} {
    ${ListItemContent} {
      padding-left: ${({ theme }) => {
        const iconGutterSize = theme.sizes.medium
        return `calc(${iconGutterSize} + ${INDICATOR_SPACER})`
      }};
    }
  }
`
