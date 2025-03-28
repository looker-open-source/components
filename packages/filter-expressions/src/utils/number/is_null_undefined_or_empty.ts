/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export const isNullUndefinedOrEmpty = (value?: number | string | null) =>
  value === null || value === undefined || value === '';
