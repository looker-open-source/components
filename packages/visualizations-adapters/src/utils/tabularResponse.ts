/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import has from 'lodash/has'
import type { SDKRecord } from '../types'

export type TabularResponseHelper = (data: SDKRecord[]) => SDKRecord[]

/**
 * Transform query response to to a cleaner key/value collection
 */
export const tabularResponse: TabularResponseHelper = (data = []) =>
  data.map((d) => {
    const dataEntries = Object.entries(d)
    return Object.fromEntries(
      dataEntries.map(([key, val]: [string, { value: unknown }]) => [
        key,
        has(val, 'value') ? val.value : val,
      ])
    )
  })
