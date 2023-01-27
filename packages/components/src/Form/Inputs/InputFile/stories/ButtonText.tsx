/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputFile } from '../'
import type { InputFileProps } from '../'

export default function ButtonText(props: InputFileProps) {
  const {
    handleFile = () => {
      // file handling logic here
    },
    buttonText = 'Browse local files',
    ...restProps
  } = props

  return (
    <InputFile handleFile={handleFile} buttonText={buttonText} {...restProps} />
  )
}
