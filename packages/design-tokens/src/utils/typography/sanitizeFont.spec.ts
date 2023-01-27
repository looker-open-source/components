/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { sanitizeFontFamily } from './sanitizeFont'

describe('sanitizeFontFaces', () => {
  it('Single entry', () => {
    expect(sanitizeFontFamily('sans-serif')).toEqual('sans-serif')
  })

  it('Single, missing quotes', () => {
    expect(sanitizeFontFamily('Helvetica neue')).toEqual("'Helvetica neue'")
  })

  it('Double quoted', () => {
    expect(sanitizeFontFamily('"Helvetica neue')).toEqual("'Helvetica neue'")
  })

  it('Single quoted', () => {
    expect(sanitizeFontFamily("'Helvetica neue'")).toEqual("'Helvetica neue'")
  })

  it('Several, properly quoted', () => {
    expect(sanitizeFontFamily("'Open Sans','Noto Sans'")).toEqual(
      "'Open Sans', 'Noto Sans'"
    )
  })

  it('Several, improperly quoted', () => {
    expect(sanitizeFontFamily("'Open Sans, Noto Sans'")).toEqual(
      "'Open Sans', 'Noto Sans'"
    )
  })

  it('Several, mixed properly & improperly quoted', () => {
    expect(sanitizeFontFamily("Helvetica neue, 'sans-serif'")).toEqual(
      "'Helvetica neue', sans-serif"
    )
  })

  it('Kitchen sink', () => {
    expect(
      sanitizeFontFamily('fixed,Helvetica neue, " Comic Sans " , sans-serif')
    ).toEqual("fixed, 'Helvetica neue', 'Comic Sans', sans-serif")
  })
})
