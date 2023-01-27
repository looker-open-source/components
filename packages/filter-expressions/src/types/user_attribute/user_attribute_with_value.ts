/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { IUserAttributeWithValue } from '@looker/sdk'

export type UserAttributeWithValue = {
  [K in keyof IUserAttributeWithValue]: IUserAttributeWithValue[K] extends
    | string
    | undefined
    ? string | null
    : IUserAttributeWithValue[K] extends number | undefined
    ? number | null
    : IUserAttributeWithValue[K]
}
