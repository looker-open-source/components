/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

/**
 * Converts malformed font-family specifications to well-formed structure per
 * CSSWG specifications. Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
 */
export const sanitizeFontFamily = (faces: string) =>
  sanitizeFontFamilyArray(faces).join(', ')

export const sanitizeFontFamilyArray = (faces: string) =>
  faces.split(',').map(face => sanitizeFontFace(face))

export const sanitizeFontFace = (face: string) => {
  const sanitized = face.replace(/["']/g, '').trim()
  return /\s/.test(sanitized) ? `'${sanitized}'` : sanitized
}
