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

import React, { FC, useState, ReactNode } from 'react'
import { AccordionContext } from './AccordionContext'

export interface AccordionProps {
  children: ReactNode
  /**
   * Use this property if you wish to use the component in a `uncontrolled` manner and have it open when initially rendering.
   * Component will hold internal state and open and close on disclosure click
   * @default true
   **/
  defaultOpen?: boolean

  /**
   * Use these properties if you wish to use the component in a `controlled` manner.
   **/
  isOpen?: boolean
  toggleOpen?: (isOpen: boolean) => void

  /**
   * Callbacks
   **/
  onClose?: () => void // called when the component is closed
  onOpen?: () => void // called when the component is opened
}

export const Accordion: FC<AccordionProps> = ({ children }) => {
  /**
   * 1. Pass appropriate props to AccordionLabel (aka first child)
   *  - Note: If we end up creating AccordionContext, this won't be needed
   *  - Instead, we would need to create a context provider div
   * 2. Conditionally render AccordionContent (aka second child)
   */
  const [isOpen, setIsOpen] = useState(false)

  const context = {
    isOpen,
    toggleOpen: setIsOpen,
  }

  return (
    <AccordionContext.Provider value={context}>
      {children}
    </AccordionContext.Provider>
  )
}
