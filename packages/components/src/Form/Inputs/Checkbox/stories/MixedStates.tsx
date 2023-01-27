/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { UnorderedList } from '../../../../UnorderedList'
import { FieldCheckbox } from '../../../Fields'
import { useMixedStateCheckbox } from '../useMixedStateCheckbox'
import type { MixedBoolean } from '../Checkbox'

export default function MixedStates() {
  // Set up local state and child change handlers
  const [parentState, setParentState] = useState(false as MixedBoolean)
  const [appleState, setAppleState] = useState(false as MixedBoolean)
  const [bananaState, setBananaState] = useState(true as MixedBoolean)
  const handleAppleChange = () => setAppleState(!appleState)
  const handleBananaChange = () => setBananaState(!bananaState)

  // Establish checkbox hierarchy for use in custom hook
  const fruitTree = {
    children: [
      { setState: setAppleState, state: appleState },
      { setState: setBananaState, state: bananaState },
    ],
    parent: {
      setState: setParentState,
      state: parentState,
    },
  }

  // Sync parent/child states and get provided parent change handler
  const handleParentChange = useMixedStateCheckbox(fruitTree)

  return (
    <UnorderedList>
      <li>
        <FieldCheckbox
          label="All Fruit"
          value="all-fruit"
          onChange={handleParentChange}
          checked={parentState}
        />
      </li>
      <li>
        <UnorderedList pl="u5">
          <li>
            <FieldCheckbox
              label="🍏"
              value="apple"
              onChange={handleAppleChange}
              checked={appleState}
            />
          </li>
          <li>
            <FieldCheckbox
              value="apple"
              onChange={handleBananaChange}
              checked={bananaState}
              label="🍌"
            />
          </li>
        </UnorderedList>
      </li>
    </UnorderedList>
  )
}
