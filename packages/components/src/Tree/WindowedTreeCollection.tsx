/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  DensityProp,
  HeightProps,
  WidthProps,
} from '@looker/design-tokens'
import { height, omitStyledProps, width } from '@looker/design-tokens'
import React from 'react'
import styled from 'styled-components'
import { useWindowedTree } from './utils/useWindowedTree'
import type { WindowedTreeNodeProps } from './types'
import { TreeCollectionContext } from './TreeCollectionContext'
import type { TreeCollectionProps } from './TreeCollection'
import { TreeCollection } from './TreeCollection'

export type WindowedTreeCollectionProps = Omit<
  TreeCollectionProps,
  'children'
> &
  DensityProp &
  HeightProps &
  WidthProps & {
    /**
     * Use this array of objects representing the tree(s) instead of children
     * in order to support windowing of long trees
     */
    trees: WindowedTreeNodeProps[]
  }

const WindowedTreeCollectionInternal = ({
  density,
  trees,
  ...props
}: WindowedTreeCollectionProps) => {
  const { content, contextValue, ref } = useWindowedTree({
    density,
    trees,
  })

  return (
    <TreeCollectionContext.Provider value={contextValue}>
      <TreeCollection {...omitStyledProps(props)} ref={ref}>
        {content}
      </TreeCollection>
    </TreeCollectionContext.Provider>
  )
}

export const WindowedTreeCollection = styled(
  WindowedTreeCollectionInternal
)<TreeCollectionProps>`
  ${height}
  ${width}
  overflow: auto;
`
