/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import type { SyntheticEvent, Dispatch, SetStateAction } from 'react'
import { FieldSlider } from '../../FieldSlider'

const handleEvent = (cb: Dispatch<SetStateAction<number>>) => {
  return (event: SyntheticEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    cb(parseInt(target.value, 10))
  }
}

export default function Controlled() {
  const [value, setValue] = useState(8)
  const onChange = handleEvent(setValue)

  return (
    <FieldSlider
      label="Controlled"
      description="Min: 0, Max: 11"
      min={0}
      max={11}
      value={value}
      onChange={onChange}
    />
  )
}
