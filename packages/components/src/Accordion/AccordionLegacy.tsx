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

import type { CompatibleHTMLProps } from '@looker/design-tokens'
import type { FC, ReactElement, ReactNode } from 'react'
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

export const AccordionLegacy: FC<AccordionLegacyProps> = ({
  children,
  contentDomProps,
  disclosureProps,
  isOpen,
  ...props
}) => {
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
