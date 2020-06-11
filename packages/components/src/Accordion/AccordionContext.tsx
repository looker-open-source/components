/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import { createContext } from 'react'
import noop from 'lodash/noop'
import { IconSize } from '../Icon'
import { IndicatorIcons } from './Accordion'

export interface AccordionContextProps {
  indicatorGap: SpacingSizes
  indicatorIcons: IndicatorIcons
  indicatorSize: IconSize
  indicatorPosition: 'left' | 'right'
  isOpen: boolean
  toggleOpen: (isOpen: boolean) => void
  onClose?: () => void
  onOpen?: () => void
}

export const accordionContextDefaults: AccordionContextProps = {
  indicatorGap: 'xsmall',
  indicatorIcons: {
    close: 'CaretDown',
    open: 'CaretUp',
  },
  indicatorPosition: 'right',
  indicatorSize: 'small',
  isOpen: false,
  toggleOpen: (isOpen: boolean) => noop(isOpen),
}

export const AccordionContext = createContext<AccordionContextProps>({
  ...accordionContextDefaults,
})
