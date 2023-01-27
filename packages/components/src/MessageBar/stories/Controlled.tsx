/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { MessageBar, ButtonOutline } from '../..'
import { useToggle } from '../../utils'

export default function Controlled() {
  const { value, setOff, setOn } = useToggle(true)

  return (
    <>
      <MessageBar intent="warn" onPrimaryClick={setOff} visible={value}>
        I can be closed and reopened
      </MessageBar>
      {!value && (
        <ButtonOutline m="u4" onClick={setOn}>
          Show MessageBar
        </ButtonOutline>
      )}
    </>
  )
}
