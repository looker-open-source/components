/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputFile } from '..'
import type { InputFileProps } from '..'

export default function Accept(props: InputFileProps) {
  const {
    handleFile = () => {
      // file handling logic here
    },
    accept = '.pdf',
    value = 'Accepts only PDF files',
    ...restProps
  } = props

  return (
    <InputFile
      handleFile={handleFile}
      accept={accept}
      value={value}
      {...restProps}
    />
  )
}
