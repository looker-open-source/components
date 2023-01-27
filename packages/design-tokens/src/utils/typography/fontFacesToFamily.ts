/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { sanitizeFontFamily } from './sanitizeFont'

export const fontFacesToFamily = (
  faces: string[] | string,
  fallbacks: string[]
) => {
  const facesStr = typeof faces === 'string' ? faces : faces.join(',')
  return sanitizeFontFamily(`${facesStr}, ${fallbacks.join(',')}`)
}
