/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import { SpacingSizes } from '@looker/design-tokens'
import { IconNames } from '@looker/icons'
import { IconSize } from '../Icon'

export type IndicatorIcons = {
  close: IconNames
  open: IconNames
}

export type AccordionIndicatorPosition = undefined | 'left' | 'right'

export interface AccordionIndicatorProps {
  /**
   * Determines where the disclosure indicator will sit on
   * @default 'right'
   */
  indicatorPosition?: AccordionIndicatorPosition

  /**
   * Size of icon on disclosure
   * @default 'small'
   */
  indicatorSize?: IconSize

  /**
   * Space between label and indicator within disclosure
   * @default 'xsmall'
   */
  indicatorGap?: SpacingSizes

  /**
   * Icons for disclosure indicator
   */
  indicatorIcons?: IndicatorIcons
}
