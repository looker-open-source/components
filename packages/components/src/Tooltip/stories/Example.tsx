/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Tooltip } from '../Tooltip'
import { ButtonOutline } from '../../Button'
import { Link } from '../../Link'

export default function Example() {
  return (
    <Tooltip
      content={
        <>
          This is a tooltip with quite a bit of text. It's probably not ideal to
          have this much text in a Tooltip. Perhaps you should link to
          <Link href="#">another document &rarr;</Link>
        </>
      }
    >
      <ButtonOutline>Tooltip with lots of text</ButtonOutline>
    </Tooltip>
  )
}
