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

import type { BlendColors } from './blends'
import type { StatefulColors } from './stateful'
import type { SpecifiableColors, TextColor } from './specifiable'
import type { DerivativeColors } from './derivative'

export type Colors = SpecifiableColors &
  DerivativeColors &
  BlendColors &
  StatefulColors

export type TextColors = TextColor

export { coreColors, intentColors, specifiableColors } from './specifiable'

export type { DerivativeColors } from './derivative'
export type {
  CoreColors,
  IllustrationColors,
  IntentColors,
  SpecifiableColors,
  SpecifiableTextColors,
} from './specifiable'
export type { BlendColors } from './blends'
export type {
  ExtendedStatefulColor,
  StatefulColor,
  StatefulColors,
  StatefulColorChoices,
} from './stateful'
export type { ColorProps } from 'styled-system'

export type { TextColorProps } from './textColor'
export { backgroundColor } from './backgroundColor'
export { uiColors, textColors } from './blends'
export { derivativeColors } from './derivative'
export { textColor } from './textColor'
export { specifiableTextColors } from './specifiable'
