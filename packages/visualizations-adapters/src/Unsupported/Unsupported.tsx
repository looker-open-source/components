/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { IError } from '@looker/sdk'
import { Debug } from '../Debug'
import type { VisWrapperProps } from '../VisWrapper'
import type { SDKRecord, CAll, Fields } from '../types'

export interface UnsupportedProps extends VisWrapperProps {
  data: SDKRecord[]
  config: Partial<CAll>
  fields: Fields
}
// Render error message indicating that the desired chart type
// is not yet supported in our visualization library.

export const Unsupported = ({
  data = [{ '': [] }],
  fields,
  config,
}: UnsupportedProps) => {
  return (
    <Debug
      ok={true}
      data={data}
      error={
        { message: `Unsupported visualization type: ${config.type}` } as IError
      }
      fields={fields}
      config={config}
    />
  )
}
