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

import { ReactNode } from 'react'
import { SpacingSizes } from '@looker/design-tokens'
import { IconSize, IconType } from '../Icon'
import { GenericClickProps } from '../utils'
import { ControlledOrUncontrolled } from './controlTypes'

export type AccordionIndicatorIcons = {
  close: IconType
  open: IconType
}
export type AccordionIndicatorPosition = 'left' | 'right'

export type Accordion2Props = ControlledOrUncontrolled &
  AccordionIndicatorProps &
  GenericClickProps<HTMLElement> & {
    /**
     * label will act as the "trigger" element (i.e. label is always visible, clicking toggles whether children is visible or not)
     */
    label: ReactNode
    /**
     * A unique ID primarily used to supply aria-controls and aria-labelledby to child AccordionDisclosure and child AccordionContent
     * Note: This will be auto-generated if left undefined
     */
    id?: string
  }

/**
 * @TODO: Replace indicatorSize & indicatorGap with density
 */
export interface AccordionIndicatorProps {
  disabled?: boolean
  /**
   * Space between label and indicator within disclosure
   * @default xsmall
   */
  indicatorGap?: SpacingSizes

  /**
   * Icons for disclosure indicator.
   *
   * indicatorPosition === default / 'right' will default to `ExpandMore` / `ExpandLess`
   * indicatorPosition === 'left' will default to `ArrowRight` / `ArrowDropDown`
   */
  indicatorIcons?: AccordionIndicatorIcons

  /**
   * Determines where the disclosure indicator will sit on
   * @default right
   */
  indicatorPosition?: AccordionIndicatorPosition

  /**
   * Size of icon on disclosure
   * @default small
   */
  indicatorSize?: IconSize
}
