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
  textColor,
  shouldForwardProp,
  TextColorProps,
  TypographyProps,
  typography,
} from '@looker/design-tokens'
import { simpleLayoutCSS, SimpleLayoutProps } from '../Layout/utils/simple'
import { GenericClickProps, useID } from '../utils'
import { accordionDefaults, accordionLeftDefaults } from './accordionDefaults'
import { AccordionContent } from './AccordionContent'
import { AccordionDisclosure } from './AccordionDisclosure'
import { AccordionControlProps, AccordionIndicatorProps } from './types'

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
    Omit<GenericClickProps<HTMLElement>, 'content'>,
    SimpleLayoutProps,
    TextColorProps,
    TypographyProps {
  /**
   * We currently support two different compositions for Accordion:
   *  - `Accordion`'s children will act as the "trigger" element (i.e. children always visible, clicking children toggles whether content is visible or not)
   *  - Legacy: <Accordion> wrapped around an <AccordionDisclosure> and <AccordionContent> (NOTE: This composition will be deprecated in a future MAJOR release)
   * @TODO Deprecate legacy format in 2.x
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
  indicatorGap = accordionDefaults.indicatorGap,
  indicatorSize = accordionDefaults.indicatorSize,
  indicatorPosition = accordionDefaults.indicatorPosition,
  indicatorIcons = indicatorPosition === 'left'
    ? accordionLeftDefaults.indicatorIcons
    : accordionDefaults.indicatorIcons,
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
            React.cloneElement(child, {
              ...accordionDisclosureProps,
              key: 'accordion-disclosure',
            })
          )
        } else if (isAccordionContent) {
          accordionChildren.push(
            React.cloneElement(child, {
              ...accordionContentProps,
              key: 'accordion-content',
            })
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
      indicatorGap = accordionDefaults.indicatorGap,
      indicatorPosition = accordionDefaults.indicatorPosition,
      indicatorSize = accordionDefaults.indicatorSize,
      width = '100%',
    }) => ({
      indicatorGap,
      indicatorPosition,
      indicatorSize,
      width,
    })
  )<AccordionProps>`
  ${AccordionDisclosure}, ${AccordionContent} {
    ${textColor}
    ${simpleLayoutCSS}
    ${typography}
  }
`
