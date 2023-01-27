/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

/**
 * Adds quotes around filter string and escapes quotes in filter string
 */
export const quoteFilter = <T>(filter?: T | string | null) => {
  if (typeof filter === 'undefined' || filter === null) {
    filter = ''
  }
  if (
    typeof filter === 'string' &&
    (/^-|['",%_^]/.test(filter) ||
      filter.toLowerCase() === 'null' ||
      filter.toLowerCase() === 'empty')
  ) {
    return `"${filter.replace(/"/g, '\\"')}"`
  } else {
    return filter
  }
}
