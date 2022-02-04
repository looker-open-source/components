/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import React, { useState } from 'react'
import { useClickable, useWrapEvent } from '../utils'
import { Accordion2Content } from './Accordion2Content'
import { accordionDefaults, accordionLeftDefaults } from './accordionDefaults'
import { AccordionIndicator } from './AccordionIndicator'
import type { Accordion2Props } from './types'
import { useAriaLabelObjectRelationship } from './useAriaLabelObjectRelationship'

/**
 * `useAccordion2` hook returns the internal pieces of an `Accordion2` component
 * to allow developers to build artisanal accordion compositions.
 */
export const useAccordion2 = ({
  children,
  className,
  density = accordionDefaults.density,
  disabled,
  label,
  id,
  indicatorPosition,
  indicatorIcons = indicatorPosition === 'left'
    ? accordionLeftDefaults.indicatorIcons
    : accordionDefaults.indicatorIcons,
  defaultOpen = false,
  isOpen: propsIsOpen,
  onBlur,
  onClick: propsOnClick,
  onClose,
  onOpen,
  onKeyUp,
  role,
  tabIndex = 0,
  toggleOpen: propsToggleOpen,
  ...props
}: Accordion2Props) => {
  const [value, setValue] = useState(defaultOpen)
  const toggle = () => setValue(!value)

  const isOpen = propsIsOpen !== undefined ? propsIsOpen : value

  const onClick = useWrapEvent(() => {
    isOpen ? onClose && onClose() : onOpen && onOpen()
    propsToggleOpen !== undefined ? propsToggleOpen(!isOpen) : toggle()
  }, propsOnClick)

  const clickableProps = useClickable({
    disabled,
    onBlur,
    onClick,
    onKeyUp,
    role,
  })

  const [labelProps, objectProps] = useAriaLabelObjectRelationship(id)

  const domProps = { ...props, className, id }

  const indicator = (
    <AccordionIndicator density={density} indicatorPosition={indicatorPosition}>
      {isOpen ? indicatorIcons.open : indicatorIcons.close}
    </AccordionIndicator>
  )

  const disclosureProps = {
    ...labelProps,
    'aria-expanded': isOpen,
    children: label,
    className: clickableProps.focusVisible ? 'focusVisible ' : undefined,
    density,
    indicator,
    indicatorPosition,
    tabIndex,
    ...clickableProps,
  }

  const contentDomProps = {
    ...objectProps,
    children,
    role: 'region',
  }

  const content = isOpen && <Accordion2Content {...contentDomProps} />

  return {
    content,
    contentDomProps,
    disclosureProps,
    domProps,
    isOpen,
  }
}
