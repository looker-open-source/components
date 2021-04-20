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

import React, {
  Children,
  FC,
  useState,
  ReactElement,
  ReactNode,
  isValidElement,
} from 'react'
import styled from 'styled-components'
import {
  color,
  shouldForwardProp,
  TextColorProps,
  TypographyProps,
  typography,
  CompatibleHTMLProps,
} from '@looker/design-tokens'
import { simpleLayoutCSS, SimpleLayoutProps } from '../Layout/utils/simple'
import { useID } from '../utils'
import { accordionContextDefaults } from './AccordionContext'
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
    Omit<CompatibleHTMLProps<HTMLElement>, 'content'>,
    SimpleLayoutProps,
    TextColorProps,
    TypographyProps {
  /**
   * We currently support two different compositions for Accordion:
   * 1. Legacy: An <Accordion> wrapped around an <AccordionDisclosure> and <AccordionContent>
   * 2. Modern: An <Accordion> with children that are NOT <AccordionDisclosure> or <AccordionContent> elements and a content prop
   * @TODO Deprecate old format in 2.x
   * @deprecated
   */
  children: ReactNode
  className?: string
  /**
   * Determines the content shown or hidden by the <Accordion>'s open state.
   * Note: If using the "Legacy" <Accordion> composition, provide an <AccordionContent> child instead of using the content prop.
   * @TODO Going to be required in 2.x
   */
  content?: ReactNode
  /**
   * A unique ID primarily used to supply aria-controls and aria-labelledby to child AccordionDisclosure and child AccordionContent
   * Note: This will be auto-generated if left undefined
   */
  id?: string
}

const AccordionLayout: FC<AccordionProps> = ({
  children,
  className,
  content,
  id,
  indicatorGap: propsIndicatorGap,
  indicatorSize: propsIndicatorSize,
  indicatorIcons: propsIndicatorIcons,
  indicatorPosition: propsIndicatorPosition,
  defaultOpen,
  isOpen: propsIsOpen,
  onClose: propsOnClose,
  onOpen: propsOnOpen,
  toggleOpen: propsToggleOpen,
  ...props
}) => {
  const uncontrolledState = useState(!!defaultOpen)
  const uncontrolled = {
    isOpen: uncontrolledState[0],
    setIsOpen: uncontrolledState[1],
  }

  if (
    (propsIsOpen && propsToggleOpen === undefined) ||
    (propsIsOpen === undefined && propsToggleOpen)
  )
    // eslint-disable-next-line no-console
    console.warn(
      'Please provide both an isOpen prop and a toggleOpen prop if you wish to control a Accordion state. If you would like an uncontrolled Accordion, avoid passing in either prop into your Accordion element.'
    )

  const accordionId = useID(id)
  const accordionContentId = `${accordionId}-content`
  const accordionDisclosureId = `${accordionId}-disclosure`

  const indicatorGap =
    propsIndicatorGap || accordionContextDefaults.indicatorGap
  const indicatorIcons =
    propsIndicatorIcons || accordionContextDefaults.indicatorIcons
  const indicatorPosition =
    propsIndicatorPosition || accordionContextDefaults.indicatorPosition
  const indicatorSize =
    propsIndicatorSize || accordionContextDefaults.indicatorSize
  const isOpen = propsIsOpen === undefined ? uncontrolled.isOpen : propsIsOpen
  const onClose = propsOnClose
  const onOpen = propsOnOpen
  const toggleOpen =
    propsToggleOpen === undefined ? uncontrolled.setIsOpen : propsToggleOpen

  const accordionStateAndStyle = {
    indicatorGap,
    indicatorIcons,
    indicatorPosition,
    indicatorSize,
    isOpen,
    onClose,
    onOpen,
    toggleOpen,
  }

  const accordionIds = {
    accordionContentId,
    accordionDisclosureId,
  }

  const accordionDisclosureProps = {
    ...accordionStateAndStyle,
    ...accordionIds,
    ...props,
  }

  const accordionContentProps = { ...accordionIds, isOpen }

  // TODO: Remove support for legacy composition in 2.x
  if (Children.count(children) === 2) {
    const accordionChildren = [] as ReactNode[]

    Children.forEach(children, (child) => {
      if (isValidElement(child)) {
        const isAccordionDisclosure =
          (child as ReactElement<unknown>).type === AccordionDisclosure
        const isAccordionContent =
          (child as ReactElement<unknown>).type === AccordionContent

        if (isAccordionDisclosure) {
          accordionChildren.push(
            React.cloneElement(child, accordionDisclosureProps)
          )
        } else if (isAccordionContent) {
          accordionChildren.push(
            React.cloneElement(child, accordionContentProps)
          )
        }
      }
    })

    const isLegacyComposition = accordionChildren.length === 2

    if (isLegacyComposition) {
      return (
        <div className={className} id={accordionId}>
          {accordionChildren}
        </div>
      )
    }
  }

  if (children) {
    return (
      <div className={className} id={accordionId}>
        <AccordionDisclosure {...accordionDisclosureProps}>
          {children}
        </AccordionDisclosure>
        <AccordionContent {...accordionContentProps}>
          {content}
        </AccordionContent>
      </div>
    )
  } else {
    // eslint-disable-next-line no-console
    console.warn(
      "<Accordion>'s child is falsy (i.e. undefined, null, false, etc). Please give <Accordion> a valid ReactNode child."
    )
    return <>{children}</>
  }
}

export const Accordion = styled(AccordionLayout)
  .withConfig({
    shouldForwardProp: (prop) =>
      [...AccordionIndicatorPropKeys, ...AccordionControlPropKeys].includes(
        prop
      )
        ? true
        : shouldForwardProp(prop),
  })
  .attrs<AccordionProps>(
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
    ${color}
    ${simpleLayoutCSS}
    ${typography}
  }
`
