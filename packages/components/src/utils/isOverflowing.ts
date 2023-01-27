/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

/**
 * Check whether an element's content overflows its width
 */
export const isOverflowing = (node: HTMLElement) =>
  node.offsetWidth < node.scrollWidth
