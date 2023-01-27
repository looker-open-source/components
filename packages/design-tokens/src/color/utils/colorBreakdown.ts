/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import chunk from 'lodash/chunk'
import type { Colors } from '../'
import {
  coreColors,
  derivativeColors,
  intentColors,
  specifiableTextColors,
  textColors,
  uiColors,
} from '../'

export type ColorKey = { [key: string]: string }

export type StatefulColorGroups = ColorKey[]

type DividedColors = {
  core: ColorKey
  derivative: ColorKey
  intent: ColorKey
  specializedText: ColorKey
  stateful: ColorKey
  text: ColorKey
  ui: ColorKey
}

type ColorBreakdown = {
  divided: DividedColors
  statefulColorGroups: StatefulColorGroups
}

export const colorBreakdown = (colors: Colors): ColorBreakdown => {
  const divided: DividedColors = {
    core: {},
    derivative: {},
    intent: {},
    specializedText: {},
    stateful: {},
    text: {},
    ui: {},
  }

  for (const [key, value] of Object.entries(colors)) {
    if ((coreColors as string[]).includes(key)) {
      if (key !== 'pageBackground') {
        divided.core[key] = value
      }
    } else if ((intentColors as string[]).includes(key)) {
      divided.intent[key] = value
    } else if ((derivativeColors as string[]).includes(key)) {
      divided.derivative[key] = value
    } else if ((textColors as string[]).includes(key)) {
      divided.text[key] = value
    } else if ((uiColors as string[]).includes(key)) {
      divided.ui[key] = value
    } else if ((specifiableTextColors as string[]).includes(key)) {
      divided.specializedText[key] = value
    } else {
      divided.stateful[key] = value
    }
  }

  const statefulColorGroups: StatefulColorGroups = chunk(
    Object.entries(divided.stateful),
    7
  ).map(chunk => {
    const obj: { [key: string]: string } = {}
    chunk.forEach(([name, color]) => (obj[name] = color))
    return obj
  })

  return { divided, statefulColorGroups }
}
