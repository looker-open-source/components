/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { TreeCollection } from '../../Tree'
import { LkFieldItem, LkFieldTree } from '../'
import type { LkFieldTreeProps } from '../'

export default function Basic(props: LkFieldTreeProps) {
  const { label = <strong>Orders</strong>, defaultOpen = true, ...rest } = props

  return (
    <TreeCollection>
      <LkFieldTree label={label} {...rest}>
        <LkFieldTree label={label} defaultOpen>
          <LkFieldItem>ID</LkFieldItem>
          <LkFieldItem>Status</LkFieldItem>
          <LkFieldTree
            label={<strong>Created</strong>}
            defaultOpen={defaultOpen}
          >
            <LkFieldItem>Created Date</LkFieldItem>
            <LkFieldItem>Created Month</LkFieldItem>
            <LkFieldItem>Created Year</LkFieldItem>
            <LkFieldItem>Created Quarter</LkFieldItem>
          </LkFieldTree>
        </LkFieldTree>
      </LkFieldTree>
    </TreeCollection>
  )
}
