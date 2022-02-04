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
