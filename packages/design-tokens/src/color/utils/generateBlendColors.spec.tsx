/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { SpecifiableColors } from '../types'
import { defaultCoreColors, defaultIntentColors } from '../defaults'
import { generateBlendColors } from './generateBlendColors'

const specifiableColors: SpecifiableColors = {
  ...defaultCoreColors,
  ...defaultIntentColors,
}

describe('generateBlendColors', () => {
  test('default', () => {
    expect(generateBlendColors(specifiableColors)).toMatchInlineSnapshot(
      {},
      `
      Object {
        "text1": "#9da0a3",
        "text2": "#71767a",
        "text3": "#555b5f",
        "text4": "#40464b",
        "text5": "#262D33",
        "ui1": "#f4f4f4",
        "ui2": "#e0e0e0",
        "ui3": "#c4c4c4",
        "ui4": "#a8a8a8",
        "ui5": "#262626",
      }
    `
    )
  })

  test('dark mode', () => {
    expect(
      generateBlendColors({
        ...specifiableColors,
        background: specifiableColors.text,
        text: specifiableColors.background,
      })
    ).toMatchInlineSnapshot(
      {},
      `
      Object {
        "text1": "#878b8e",
        "text2": "#b3b5b7",
        "text3": "#cfd0d2",
        "text4": "#e4e5e6",
        "text5": "#FFFFFF",
        "ui1": "#33393f",
        "ui2": "#4d5257",
        "ui3": "#707579",
        "ui4": "#94989b",
        "ui5": "#fff",
      }
    `
    )
  })
})
