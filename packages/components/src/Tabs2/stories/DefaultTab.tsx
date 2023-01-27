/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Tabs2, Tab2 } from '../..'

export default function DefaultTab() {
  return (
    <Tabs2 defaultTabId="dogs">
      <Tab2 id="cats" label="Cats">
        Here's awesome story about cats
      </Tab2>
      <Tab2 id="dogs" label="Dogs">
        Cats are way better than dogs. Go to other tab
      </Tab2>
      <Tab2 label="Fish">Are kinda smelly</Tab2>
    </Tabs2>
  )
}
