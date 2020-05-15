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
import {
  layout,
  margin,
  padding,
  reset,
  SpacingSizes,
} from '@looker/design-tokens'
import { SimpleLayoutProps } from '../Layout/utils/simple'
import { IconNames } from '../Icon'
import { AccordionContext, accordionContextDefaults } from './AccordionContext'
import { AccordionDisclosure } from './AccordionDisclosure'
import { AccordionContent } from './AccordionContent'

export type IndicatorIcons = {
  closed: IconNames
  open: IconNames
}

export interface AccordionProps extends SimpleLayoutProps {
  children: ReactNode
  className?: string
  /**
   * Determines where the disclosure indicator will sit on
   * @default 'right'
   */
  indicatorPosition?: 'left' | 'right'
  /**
   * Replaces default caret icons for disclosure
   */
  indicatorIcons?: IndicatorIcons

  indicatorSize?: SpacingSizes

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

const AccordionLayout: FC<AccordionProps> = ({
  children,
  className,
  defaultOpen,
  indicatorSize,
  indicatorIcons,
  indicatorPosition,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(!!defaultOpen)

  if (
    (props.isOpen && props.toggleOpen === undefined) ||
    (props.isOpen === undefined && props.toggleOpen)
  )
    // eslint-disable-next-line no-console
    console.warn(
      'Please provide both an isOpen prop and a toggleOpen prop if you wish to control a Accordion state. If you would like an uncontrolled Accordion, avoid passing in either prop into your Accordion element.'
    )

  const context = {
    ...accordionContextDefaults,
    indicatorIcons: indicatorIcons || accordionContextDefaults.indicatorIcons,
    indicatorPosition:
      indicatorPosition || accordionContextDefaults.indicatorPosition,
    indicatorSize: indicatorSize || accordionContextDefaults.indicatorSize,
    isOpen,
    onClose: props.onClose,
    onOpen: props.onOpen,
    toggleOpen: props.toggleOpen === undefined ? setIsOpen : props.toggleOpen,
  }

  return (
    <AccordionContext.Provider value={context}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  )
}

export const Accordion = styled(AccordionLayout)`
  ${reset}
  ${layout}
  ${margin}

  ${AccordionContent} {
    ${padding}

    ${({ indicatorPosition, indicatorSize, theme }) =>
      indicatorPosition === 'left' &&
      `padding-left: calc(${theme.space[indicatorSize as SpacingSizes]} + ${
        theme.space.xsmall
      } );`}

    ${({ indicatorPosition, indicatorSize, theme }) =>
      indicatorPosition === 'right' &&
      `padding-right: calc(${theme.space[indicatorSize as SpacingSizes]} + ${
        theme.space.xsmall
      } );`}
  }

  ${AccordionDisclosure} {
    ${padding}
  }
`

Accordion.defaultProps = {
  indicatorPosition: accordionContextDefaults.indicatorPosition,
  indicatorSize: accordionContextDefaults.indicatorSize,
  width: '100%',
}
