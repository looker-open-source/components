/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Tree, TreeItem } from '..'
import { FieldToggleSwitch } from '../../Form'
import { useToggle } from '../../utils'

export default function Controlled() {
  const { value, change, toggle } = useToggle(true)
  return (
    <>
      <FieldToggleSwitch on={value} onChange={toggle} label="Toggle" />
      <Tree isOpen={value} toggleOpen={change} label="Controlled Tree">
        <TreeItem icon={<MaterialIcons.Tag />}>Cost</TreeItem>
        <TreeItem icon={<MaterialIcons.Place />}>Location</TreeItem>
        <TreeItem icon={<MaterialIcons.Filter />}>Tier</TreeItem>
        <TreeItem icon={<MaterialIcons.Check />}>Oui ou Non</TreeItem>
      </Tree>
    </>
  )
}
