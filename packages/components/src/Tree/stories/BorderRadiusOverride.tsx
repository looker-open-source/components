/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import styled from 'styled-components'
import { TreeItem, Tree, TreeCollection } from '..'
import { generateBorderRadius } from '../utils/generateBorderRadius'

const BorderRadiusOverrideTree = styled(Tree)`
  ${({ theme }) => generateBorderRadius('medium', theme)}
`

export default function BorderRadiusOverride() {
  return (
    <TreeCollection>
      <BorderRadiusOverrideTree
        selected
        label={<strong>Created</strong>}
        defaultOpen
        dividers
      >
        <TreeItem selected>Created Date</TreeItem>
        <TreeItem selected>Created Month</TreeItem>
        <TreeItem selected>Created Year</TreeItem>
        <TreeItem selected>Created Quarter</TreeItem>
      </BorderRadiusOverrideTree>
    </TreeCollection>
  )
}
