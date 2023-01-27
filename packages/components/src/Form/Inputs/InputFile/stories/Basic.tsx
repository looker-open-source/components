/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputFile } from '../'
import type { InputFileProps } from '../'

export default function Basic(props: InputFileProps) {
  const {
    handleFile = () => {
      // file handling logic here
    },
    ...restProps
  } = props
  return <InputFile handleFile={handleFile} {...restProps} />
}
