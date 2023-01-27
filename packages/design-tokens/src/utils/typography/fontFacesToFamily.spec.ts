/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { fontFacesToFamily } from './fontFacesToFamily'

describe('fontFacesToFamily', () => {
  test('basic', () =>
    expect(fontFacesToFamily('verdana', ['arial', 'helvetica'])).toEqual(
      'verdana, arial, helvetica'
    ))

  test('array entry', () =>
    expect(
      fontFacesToFamily(['verdana', 'Papyrus'], ['arial', 'Helvetica'])
    ).toEqual('verdana, Papyrus, arial, Helvetica'))

  test('properly quoted faces', () =>
    expect(
      fontFacesToFamily("'Times New Roman'", ['arial', "'Helvetica Neue'"])
    ).toEqual("'Times New Roman', arial, 'Helvetica Neue'"))

  test('improperly quoted faces', () =>
    expect(
      fontFacesToFamily('Times New Roman', ['arial', 'Helvetica Neue'])
    ).toEqual("'Times New Roman', arial, 'Helvetica Neue'"))
})
