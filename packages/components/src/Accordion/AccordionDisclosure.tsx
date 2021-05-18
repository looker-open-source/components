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

import React, { FC, Ref, forwardRef } from 'react'
import styled, { css } from 'styled-components'
import {
  TypographyProps,
  typography,
  padding,
  PaddingProps,
  shouldForwardProp,
  TextColorProps,
  color as colorStyleFn,
} from '@looker/design-tokens'
import {
  FocusVisibleProps,
  GenericClickProps,
  useClickable,
  useWrapEvent,
  focusVisibleCSSWrapper,
} from '../utils'
import { simpleLayoutCSS, SimpleLayoutProps } from '../Layout/utils/simple'
import { AccordionDisclosureLayout } from './AccordionDisclosureLayout'
import { AccordionControlProps, AccordionIndicatorProps } from './types'
import { accordionDefaults } from './accordionDefaults'

export interface AccordionDisclosureProps
  extends TypographyProps,
    Omit<AccordionDisclosureStyleProps, 'focusVisible'>,
    GenericClickProps<HTMLElement>,
    SimpleLayoutProps,
    AccordionControlProps,
    AccordionIndicatorProps {
  renderAsLi?: boolean
  className?: string
  ref?: Ref<HTMLDivElement>
  /**
   * ID of the corresponding AccordionContent container
   */
  accordionContentId?: string
  /**
   * ID of the AccordionDisclosure
   */
  accordionDisclosureId?: string
}

/**
 * @todo: Remove fallback values in <AccordionDisclosureLayout/> element in 2.x
 */
const AccordionDisclosureInternal: FC<AccordionDisclosureProps> = forwardRef(
  (
    {
      accordionContentId,
      accordionDisclosureId,
      children,
      className,
      disabled,
      onBlur,
      onClick: propsOnClick,
      onKeyUp,
      role,
      defaultOpen,
      isOpen,
      toggleOpen,
      onClose,
      onOpen,
      indicatorPosition,
      indicatorSize,
      indicatorGap,
      indicatorIcons,
      renderAsLi,
      ...props
    },
    ref
  ) => {
    const handleOpen = () => onOpen && onOpen()
    const handleClose = () => onClose && onClose()
    const handleToggle = () => {
      isOpen ? handleClose() : handleOpen()
      toggleOpen && toggleOpen(!isOpen)
    }
    const onClick = useWrapEvent(handleToggle, propsOnClick)

    const clickableProps = useClickable({
      disabled,
      onBlur,
      onClick,
      onKeyUp,
      role,
    })

    return (
      <AccordionDisclosureStyle
        as={renderAsLi ? 'li' : 'div'}
        className={`${
          clickableProps.focusVisible ? 'focusVisible ' : ''
        }${className}`}
        aria-controls={accordionContentId}
        aria-expanded={isOpen}
        id={accordionDisclosureId}
        ref={ref}
        tabIndex={0}
        {...clickableProps}
        {...props}
      >
        <AccordionDisclosureLayout
          indicatorPosition={
            indicatorPosition || accordionDefaults.indicatorPosition
          }
          indicatorSize={indicatorSize || accordionDefaults.indicatorSize}
          indicatorGap={indicatorGap || accordionDefaults.indicatorGap}
          indicatorIcons={indicatorIcons || accordionDefaults.indicatorIcons}
          isOpen={isOpen}
        >
          {children}
        </AccordionDisclosureLayout>
      </AccordionDisclosureStyle>
    )
  }
)

AccordionDisclosureInternal.displayName = 'AccordionDisclosureInternal'

interface AccordionDisclosureStyleProps
  extends TextColorProps,
    PaddingProps,
    FocusVisibleProps {}

export const AccordionDisclosureStyle = styled.div
  .withConfig({ shouldForwardProp })
  .attrs<AccordionDisclosureProps>(({ px = 'none', py = 'xsmall' }) => ({
    px,
    py,
  }))<AccordionDisclosureStyleProps>`
  align-items: center;
  background-color: transparent;
  ${({ color, theme }) =>
    color ? colorStyleFn : `color: ${theme.colors.ui5};`}
  cursor: pointer;
  display: flex;
  ${padding}
  outline: none;
  position: relative;
  text-align: left;
  width: 100%;

  ${focusVisibleCSSWrapper(
    ({ theme }) => css`
      box-shadow: inset 0 0 0 2px ${theme.colors.keyFocus};
    `
  )}
  `

export const AccordionDisclosure = styled(AccordionDisclosureInternal).attrs(
  (props) => ({
    fontSize: 'small',
    fontWeight: 'semiBold',
    ...props,
  })
)`
  ${typography}
  ${simpleLayoutCSS}
`
