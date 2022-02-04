/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

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
