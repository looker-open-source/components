/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import {
  height,
  HeightProps,
  omitStyledProps,
  width,
  WidthProps,
} from '@looker/design-tokens'
import React from 'react'
import styled from 'styled-components'
import { DensityProps } from '../List/types'
import { useWindowedTree } from './utils/useWindowedTree'
import { WindowedTreeNodeProps } from './types'
import { TreeCollectionContext } from './TreeCollectionContext'
import { TreeCollection, TreeCollectionProps } from './TreeCollection'

export type WindowedTreeCollectionProps = Omit<
  TreeCollectionProps,
  'children'
> &
  DensityProps &
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
  const { value, content, ref } = useWindowedTree({
    density,
    trees,
  })

  return (
    <TreeCollectionContext.Provider value={value}>
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
