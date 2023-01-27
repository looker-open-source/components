/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

/**
 * Merges an array of classNames into a single className with properly applied white space rules
 */
export const mergeClassNames = (classNames: Array<string | undefined>) =>
  classNames.join(' ').trim().replace(/\s\s+/g, ' ')
