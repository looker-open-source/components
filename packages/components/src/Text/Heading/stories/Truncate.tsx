/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Heading } from '../Heading'

export default function Truncate() {
  return (
    <Heading truncate={true}>
      This is a really long title that will need to truncate. It's gotta get
      real long so it hits the edge of the jest-dom virtual window size so I'm
      going to just keep typing and typing to make sure it triggers overflow as
      needed to prove that this is work properly. Are we there yet? Maybe? I
      sure hope so!
    </Heading>
  )
}
