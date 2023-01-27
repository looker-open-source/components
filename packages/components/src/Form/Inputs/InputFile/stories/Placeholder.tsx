/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputFile } from '../'
import type { InputFileProps } from '../'

export default function Placeholder(props: InputFileProps) {
  const {
    handleFile = () => {
      // file handling logic here
    },
    placeholder = 'Select a file to upload',
    ...restProps
  } = props

  return (
    <InputFile
      handleFile={handleFile}
      placeholder={placeholder}
      {...restProps}
    />
  )
}
