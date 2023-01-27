/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

/**
 * Creates a string used internal usage tracking purposes
 */
export const buildTrackingTag = (type: string) =>
  `visualization-component--${type}`
