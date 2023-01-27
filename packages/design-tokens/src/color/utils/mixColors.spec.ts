/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { textBlends } from '../blendPoints'
import { colors } from '../colors'
import { mixColors } from './mixColors'

const { background, text } = colors

describe('mixColors', () => {
  describe('light (stock theme)', () => {
    test('text1', () =>
      expect(mixColors(textBlends[0], text, background)).toEqual('#9da0a3'))
    test('text5', () =>
      expect(mixColors(textBlends[4], text, background)).toEqual(colors.text))
  })

  describe('dark-mode', () => {
    test('text1', () =>
      expect(mixColors(textBlends[0], background, text)).toEqual('#878b8e'))
    test('text5', () =>
      expect(mixColors(textBlends[4], background, text)).toEqual(
        colors.background
      ))
  })
})
