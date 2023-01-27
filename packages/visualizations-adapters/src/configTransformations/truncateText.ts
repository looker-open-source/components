/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CTable } from '../adapters'
import type { ConfigHelper } from '../types'

/**
 * Sets default truncate_text value to true
 */
export const truncateText: ConfigHelper<CTable> = ({
  config,
  data,
  fields,
}) => {
  const { truncate_text = true, ...restConfig } = config
  return {
    config: {
      truncate_text,
      ...restConfig,
    },
    data,
    fields,
  }
}
