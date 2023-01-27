/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export const createSafeRel = (
  rel: string | undefined,
  target: string | undefined
) => {
  /**
   * `target="_blank" can be used to reverse tab-nab
   * https://owasp.org/www-community/attacks/Reverse_Tabnabbing
   */
  const noTabNab = 'noopener noreferrer'

  if (target === '_blank') {
    if (rel) {
      return `${rel} ${noTabNab}`
    } else {
      return noTabNab
    }
  } else return rel
}
