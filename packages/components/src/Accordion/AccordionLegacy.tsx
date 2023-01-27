/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CompatibleHTMLProps } from '@looker/design-tokens'
import type { ReactElement, ReactNode } from 'react'
import React, { Children, isValidElement } from 'react'
import { mergeClassNames } from '../utils'
import { AccordionContent } from './AccordionContent'
import { AccordionDisclosure } from './AccordionDisclosure'

export const isLegacyComposition = (children: ReactNode) =>
  Children.count(children) === 2

type DomProps = CompatibleHTMLProps<HTMLElement>

type AccordionLegacyProps = DomProps & {
  children: ReactNode
  contentDomProps: DomProps
  disclosureProps: DomProps
  isOpen: boolean
}

export const AccordionLegacy = ({
  children,
  contentDomProps,
  disclosureProps,
  isOpen,
  ...props
}: AccordionLegacyProps) => {
  const accordionChildren = [] as ReactNode[]

  Children.forEach(children, child => {
    if (isValidElement(child)) {
      const isAccordionDisclosure =
        (child as ReactElement<unknown>).type === AccordionDisclosure
      const isAccordionContent =
        (child as ReactElement<unknown>).type === AccordionContent

      if (isAccordionDisclosure) {
        accordionChildren.push(
          React.cloneElement(child, {
            ...disclosureProps,
            className: mergeClassNames([
              disclosureProps.className,
              child.props.className,
            ]),
            key: 'accordion-disclosure',
          })
        )
      } else if (isAccordionContent && isOpen) {
        accordionChildren.push(
          React.cloneElement(child, {
            ...contentDomProps,
            className: mergeClassNames([
              child.props.className,
              contentDomProps.className,
            ]),
            key: 'accordion-content',
          })
        )
      }
    }
  })

  return <div {...props}>{accordionChildren}</div>
}
