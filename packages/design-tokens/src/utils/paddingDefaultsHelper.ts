/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { PaddingProps } from '../system'

/**
 * This function should repeat values specified in "defaults"  from the least
 * specific (p, px, py) to the most (pr, pr, pl, pb) without overriding any
 * explicit values specified in "props"
 *
 * Test scenarios:
 * ({ p: 'small' }, { p: 'medium' }) => { p: 'small' }
 * ({ pl: 'small' }, { p: 'medium' }) => { pl: 'small', pr: 'medium', py: 'medium'}
 * ({ pl: 'small' }, { px: 'medium' }) => { pl: 'small', pr: 'medium' }
 * ({ py: 'small' }, { p: 'medium' }) => { py: 'small', px: 'medium'}
 */
export const paddingDefaultsHelper = (
  props: PaddingProps,
  defaults: PaddingProps
) => {
  const merged = { ...defaults, ...props }
  let { p, px, py, pt, pr, pb, pl } = merged

  // Fill in gaps in directional sizes
  pt = pt || py || p
  pb = pb || py || p
  py = pb === pt ? pb : undefined

  pr = pr || px || p
  pl = pl || px || p
  px = pr === pl ? pr : undefined

  if (px && px === py) {
    return { p }
  } else {
    p = undefined
  }

  const response = {
    pb: py ? undefined : pb,
    pl: px ? undefined : pl,
    pr: px ? undefined : pr,
    pt: py ? undefined : pt,
    px,
    py,
  } as const

  type ResponseKey = keyof typeof response

  /* Remove undefined values */
  Object.keys(response).forEach(key => {
    if (typeof response[key as ResponseKey] === 'undefined') {
      delete response[key as ResponseKey]
    }
  })

  return response
}
