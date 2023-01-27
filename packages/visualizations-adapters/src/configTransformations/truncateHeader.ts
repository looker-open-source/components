/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CTable } from '../adapters'
import type { ConfigHelper } from '../types'

/**
 * Sets default truncate_header value to true
 */
export const truncateHeader: ConfigHelper<CTable> = ({
  config,
  data,
  fields,
}) => {
  const { truncate_header = true, ...restConfig } = config
  return {
    config: {
      truncate_header,
      ...restConfig,
    },
    data,
    fields,
  }
}
