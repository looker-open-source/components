/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Button } from '../../Button'
import { SpaceVertical } from '../../Layout'
import { useToggle } from '../../utils'
import { Tree, TreeItem, WindowedTreeCollection } from '..'

export default function WindowingExample() {
  const { value, toggle } = useToggle()

  const trees = React.useMemo(
    () =>
      Array.from(Array(200), (_, treeIndex) => ({
        content: <Tree label={`Tree ${treeIndex}`} />,
        isOpen: value,
        items: Array.from(Array(10), (_, itemIndex) => {
          if (itemIndex === 2) {
            return {
              content: <Tree label={`Nested Tree ${treeIndex}-${itemIndex}`} />,
              isOpen: value,
              items: Array.from(Array(4), (_, nestedItemIdex) => ({
                content: (
                  <TreeItem>
                    Nested TreeItem {treeIndex}-{itemIndex}-{nestedItemIdex}
                  </TreeItem>
                ),
              })),
            }
          }
          return {
            content: (
              <TreeItem>
                TreeItem {treeIndex}-{itemIndex}
              </TreeItem>
            ),
          }
        }),
      })),
    [value]
  )
  return (
    <SpaceVertical>
      <Button onClick={toggle}>Toggle all {value ? 'closed' : 'open'}</Button>
      <WindowedTreeCollection height={300} width={500} trees={trees} />
    </SpaceVertical>
  )
}
