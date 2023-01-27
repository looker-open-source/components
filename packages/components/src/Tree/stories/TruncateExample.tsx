/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { TreeItem, Tree, TreeCollection } from '..'
import { Heading } from '../../Text'

export default function TruncateExample() {
  return (
    <>
      <Heading>Default Text Wrapping Layout</Heading>
      <TreeCollection>
        <Tree
          border
          label="A very long label that wraps to a second line. Both the label and the tree item will wrap to two or more lines because there is just too much text."
          icon={<MaterialIcons.TableChart />}
          defaultOpen
        >
          <TreeItem icon={<MaterialIcons.Tag />}>
            Cheese is a dairy product, derived from milk and produced in wide
            ranges of flavours, textures and forms by coagulation of the milk
            protein casein. It comprises proteins and fat from milk, usually the
            milk of cows, buffalo, goats, or sheep.
          </TreeItem>
        </Tree>
      </TreeCollection>

      <Heading>Truncated Text</Heading>
      <TreeCollection>
        <Tree
          border
          label="A very label that wraps to a second line. Sometimes you don't want to take up extra vertical space, and instead it will cut off the text."
          truncate
          icon={<MaterialIcons.TableChart />}
          defaultOpen
        >
          <TreeItem icon={<MaterialIcons.Tag />} truncate>
            Hover over me for a tooltip of the full content. Cheese is a dairy
            product, derived from milk and produced in wide ranges of flavours,
            textures and forms by coagulation of the milk protein casein. It
            comprises proteins and fat from milk, usually the milk of cows,
            buffalo, goats, or sheep.
          </TreeItem>
        </Tree>
      </TreeCollection>
    </>
  )
}
