/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { List } from '../../List'
import { ListItem } from '../../ListItem'
import { Panels, usePanel } from '..'

const HookInner = () => {
  const { panel, setOpen } = usePanel({
    content: 'Panel content',
    title: 'Panel Hook',
  })
  return (
    <>
      <ListItem onClick={() => setOpen(true)}>Option A</ListItem>
      {panel}
    </>
  )
}

export default function Hook() {
  return (
    <Panels>
      <List>
        <HookInner />
        <ListItem>Option B</ListItem>
      </List>
    </Panels>
  )
}
