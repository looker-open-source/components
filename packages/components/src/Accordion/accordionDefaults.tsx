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
import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown'
import { ArrowRight } from '@styled-icons/material/ArrowRight'
import { ExpandLess } from '@styled-icons/material-rounded/ExpandLess'
import { ExpandMore } from '@styled-icons/material-rounded/ExpandMore'
import React from 'react'
import { IconSize } from '../Icon'
import { IndicatorIcons } from './types'

export interface AccordionDefaultProps {
  indicatorGap: SpacingSizes
  indicatorIcons: IndicatorIcons
  indicatorSize: IconSize
  indicatorPosition: 'left' | 'right'
}

export const accordionDefaults: AccordionDefaultProps = {
  indicatorGap: 'xsmall',
  indicatorIcons: {
    close: <ExpandMore />,
    open: <ExpandLess />,
  },
  indicatorPosition: 'right',
  indicatorSize: 'small',
}

export const accordionLeftDefaults: AccordionDefaultProps = {
  ...accordionDefaults,
  indicatorIcons: {
    close: <ArrowRight />,
    open: <ArrowDropDown />,
  },
  indicatorPosition: 'left',
}
