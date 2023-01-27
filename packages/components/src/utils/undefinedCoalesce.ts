/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export const undefinedCoalesce = <T>(arr: T[]) => {
  return arr.find(element => element !== undefined)
}
