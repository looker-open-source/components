/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export const isNumeric = (str?: string | number): str is string =>
  typeof str === 'number' ||
  (typeof str === 'string' &&
    str !== '' &&
    !isNaN(Number(str.replace(/\.|,/g, ''))))
