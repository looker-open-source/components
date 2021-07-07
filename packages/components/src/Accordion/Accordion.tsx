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

import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import omit from 'lodash/omit'
import {
  textColor,
  TextColorProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'
import { simpleLayoutCSS, SimpleLayoutProps } from '../Layout/utils/simple'
import { useAccordion2 } from '../Accordion2/useAccordion2'
import { accordionDimensions } from '../Accordion2/accordionDimensions'
import { AccordionIndicatorProps } from '../Accordion2/types'
import { ControlledLoosely } from '../Accordion2/controlTypes'
import { GenericClickProps } from '../utils'
import { AccordionLegacy, isLegacyComposition } from './AccordionLegacy'
import { AccordionDisclosure } from './AccordionDisclosure'
import { AccordionContent } from './AccordionContent'

export type AccordionProps = ControlledLoosely &
  AccordionIndicatorProps &
  Omit<GenericClickProps<HTMLElement>, 'content'> &
  SimpleLayoutProps &
  TextColorProps &
  TypographyProps & {
    /**
     * We currently support two different compositions for Accordion:
     *  - `Accordion`'s children will act as the "trigger" element (i.e. children always visible, clicking children toggles whether content is visible or not)
     *  - Legacy: `<Accordion>` wrapped around an `<AccordionDisclosure>` and `<AccordionContent>` (NOTE: This composition will be deprecated in a future MAJOR release)
     */
    children: ReactNode
    /**
     * Determines the content shown or hidden by the Accordion's open state.
     * Note: If using the "Legacy" Accordion composition, provide an `<AccordionContent>` child instead of using the content prop.
     */
    content?: ReactNode
    /**
     * A unique ID primarily used to supply aria-controls and aria-labelledby to child AccordionDisclosure and child AccordionContent
     * Note: This will be auto-generated if undefined
     */
    id?: string
  }

/**
 * @deprecated Use `Accordion2` instead
 */
const AccordionInternal: FC<AccordionProps> = ({
  content: children,
  children: label,
  isOpen: propsIsOpen,
  toggleOpen: propsToggleOpen,
  ...props
}) => {
  if (
    (propsIsOpen && propsToggleOpen === undefined) ||
    (propsIsOpen === undefined && propsToggleOpen)
  ) {
    // eslint-disable-next-line no-console
    console.warn(
      'Please provide both an isOpen prop and a toggleOpen prop if you wish to control a Accordion state. If you would like an uncontrolled Accordion, avoid passing in either prop into your Accordion element.'
    )
  }

  if (!label) {
    // eslint-disable-next-line no-console
    console.warn(
      "<Accordion>'s child is falsy (i.e. undefined, null, false, etc). Please give <Accordion> a valid ReactNode child."
    )
  }

  const controlledProps =
    propsIsOpen && propsToggleOpen
      ? {
          isOpen: propsIsOpen,
          toggleOpen: propsToggleOpen,
        }
      : {}

  const { contentDomProps, domProps, disclosureProps, isOpen } = useAccordion2({
    children,
    label,
    ...controlledProps,
    ...props,
  })

  if (isLegacyComposition(label)) {
    return (
      <AccordionLegacy
        {...domProps}
        contentDomProps={omit(contentDomProps, 'children')}
        disclosureProps={omit(disclosureProps, 'children')}
        isOpen={isOpen}
      >
        {label}
      </AccordionLegacy>
    )
  } else {
    return (
      <div {...domProps}>
        <AccordionDisclosure {...disclosureProps} />
        {isOpen && <AccordionContent {...contentDomProps} />}
      </div>
    )
  }
}

/**
 * @deprecated Use `Accordion2` instead
 */
export const Accordion = styled(AccordionInternal)`
  font-size: ${({ theme, density = 0 }) =>
    theme.fontSizes[accordionDimensions(density).fontSize]};
  width: 100%;

  ${AccordionDisclosure}, ${AccordionContent} {
    ${textColor}
    ${simpleLayoutCSS}
    ${typography}
  }
`
