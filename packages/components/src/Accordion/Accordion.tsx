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
import styled from 'styled-components'
import { simpleLayoutCSS, SimpleLayoutProps } from '../Layout/utils/simple'
import { useID } from '../utils'
import { AccordionContext, accordionContextDefaults } from './AccordionContext'
import { AccordionContent } from './AccordionContent'
import { AccordionDisclosure } from './AccordionDisclosure'
import { AccordionIndicatorProps } from './indicator'
export interface AccordionControlProps {
  /**
   * Use this property if you wish to use the component in a `uncontrolled` manner and have it open when initially rendering.
   * Component will hold internal state and open and close on disclosure click
   **/
  defaultOpen?: boolean
  /**
   * Use this property (alongside toggleOpen) if you wish to use the component in a `controlled` manner.
   * isOpen determines whether the Accordion is currently open or closed
   * @default false
   **/
  isOpen?: boolean
  /**
   * Use this property (alongside isOpen) if you wish to use the component in a `controlled` manner.
   * toggleOpen is a function that should control the value / state of isOpen
   */
  toggleOpen?: (isOpen: boolean) => void
  /**
   * Callback that is triggered when closing the Accordion (i.e. when clicking on an open Accordion)
   */
  onClose?: () => void // called when the component is closed
  /**
   * Callback that is triggered when opening the Accordion (i.e. when clicking on a closed Accordion)
   */
  onOpen?: () => void // called when the component is opened
}

/**
 * Keys below are used by Fieldset to omit Accordion related props so they can be spread onto the internal Accordion component
 */
export const AccordionIndicatorPropKeys = [
  'indicatorPosition',
  'indicatorSize',
  'indicatorGap',
  'indicatorIcons',
]
export const AccordionControlPropKeys = [
  'defaultOpen',
  'isOpen',
  'toggleOpen',
  'onClose',
  'onOpen',
]

export interface AccordionProps
  extends AccordionControlProps,
    AccordionIndicatorProps,
    SimpleLayoutProps {
  children: ReactNode
  className?: string
  /**
   * A unique ID primarily used to supply aria-controls and aria-labelledby to child AccordionDisclosure and child AccordionContent
   * Note: This will be auto-generated if left undefined
   */
  id?: string
}

const AccordionLayout: FC<AccordionProps> = ({
  children,
  className,
  id,
  indicatorGap,
  indicatorSize,
  indicatorIcons,
  indicatorPosition,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(!!props.defaultOpen)

  if (
    (props.isOpen && props.toggleOpen === undefined) ||
    (props.isOpen === undefined && props.toggleOpen)
  )
    // eslint-disable-next-line no-console
    console.warn(
      'Please provide both an isOpen prop and a toggleOpen prop if you wish to control a Accordion state. If you would like an uncontrolled Accordion, avoid passing in either prop into your Accordion element.'
    )

  const accordionId = useID(id)

  const context = {
    ...accordionContextDefaults,
    accordionContentId: `${accordionId}-content`,
    accordionDisclosureId: `${accordionId}-disclosure`,
    indicatorGap: indicatorGap || accordionContextDefaults.indicatorGap,
    indicatorIcons: indicatorIcons || accordionContextDefaults.indicatorIcons,
    indicatorPosition:
      indicatorPosition || accordionContextDefaults.indicatorPosition,
    indicatorSize: indicatorSize || accordionContextDefaults.indicatorSize,
    isOpen: props.isOpen === undefined ? isOpen : props.isOpen,
    onClose: props.onClose,
    onOpen: props.onOpen,
    toggleOpen: props.toggleOpen === undefined ? setIsOpen : props.toggleOpen,
  }

  return (
    <AccordionContext.Provider value={context}>
      <div className={className} id={accordionId}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

export const Accordion = styled(AccordionLayout).attrs<AccordionProps>(
  ({
    indicatorGap = accordionContextDefaults.indicatorGap,
    indicatorPosition = accordionContextDefaults.indicatorPosition,
    indicatorSize = accordionContextDefaults.indicatorSize,
    width = '100%',
  }) => ({
    indicatorGap,
    indicatorPosition,
    indicatorSize,
    width,
  })
)<AccordionProps>`
  ${AccordionDisclosure}, ${AccordionContent} {
    ${simpleLayoutCSS}
  }
`
