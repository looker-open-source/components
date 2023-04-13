/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import styled from 'styled-components'
import { Box } from '@looker/components'
import { Field } from './Field'
import type { TreeModel } from './types'
import type { TreeProps } from './Tree'

export type ShortcutTreeProps = Pick<TreeProps, 'onFieldClick'> & {
  tree: Array<Omit<TreeModel, 'children'>>
}

export const ShortcutTree = styled(
  ({ tree, onFieldClick, ...props }: ShortcutTreeProps) => (
    <Box {...props}>
      {tree.map(({ id, label, value, ...field }) => {
        return (
          <Field
            {...field}
            key={id}
            displayLabel={label}
            label={value}
            alignItems="center"
            pl="medium"
            onClick={onFieldClick}
          />
        )
      })}
    </Box>
  )
)`
  ${Field} {
    border-left: none;
  }

  border-bottom: solid 1px ${({ theme }) => theme.colors.ui2};
`
