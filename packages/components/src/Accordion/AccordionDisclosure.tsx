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

import React, {
  FC,
  KeyboardEvent,
  useContext,
  Ref,
  forwardRef,
  useState,
} from 'react'
import styled from 'styled-components'
import {
  TypographyProps,
  typography,
  CompatibleHTMLProps,
  padding,
  PaddingProps,
  pickStyledProps,
  shouldForwardProp,
  TextColorProps,
  color as colorStyleFn,
} from '@looker/design-tokens'
import { simpleLayoutCSS, SimpleLayoutProps } from '../Layout/utils/simple'
import { AccordionContext } from './AccordionContext'
import { AccordionDisclosureLayout } from './AccordionDisclosureLayout'

export interface AccordionDisclosureProps
  extends TypographyProps,
    Omit<AccordionDisclosureStyleProps, 'focusVisible'>,
    CompatibleHTMLProps<HTMLElement>,
    SimpleLayoutProps {
  className?: string
  focusVisible?: boolean
  ref?: Ref<HTMLDivElement>
}

const AccordionDisclosureInternal: FC<AccordionDisclosureProps> = forwardRef(
  ({ children, className, ...props }, ref) => {
    const [isFocusVisible, setFocusVisible] = useState(false)
    const {
      accordionContentId,
      accordionDisclosureId,
      isOpen,
      toggleOpen,
      onClose,
      onOpen,
      ...accordionProps
    } = useContext(AccordionContext)

    const handleOpen = () => onOpen && onOpen()
    const handleClose = () => onClose && onClose()
    const handleToggle = () => {
      isOpen ? handleClose() : handleOpen()
      toggleOpen(!isOpen)
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
      if (event.keyCode === 13) {
        handleToggle()
      }
    }

    const handleKeyUp = (event: KeyboardEvent<HTMLElement>) => {
      if (event.keyCode === 9 && event.currentTarget === event.target)
        setFocusVisible(true)
    }

    const handleClick = () => {
      setFocusVisible(false)
      handleToggle()
    }

    const handleBlur = () => {
      setFocusVisible(false)
    }

    return (
      <AccordionDisclosureStyle
        className={className}
        role="button"
        aria-controls={accordionContentId}
        aria-expanded={isOpen}
        focusVisible={isFocusVisible}
        id={accordionDisclosureId}
        onBlur={handleBlur}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        ref={ref}
        tabIndex={0}
        {...pickStyledProps(props)}
      >
        <AccordionDisclosureLayout {...accordionProps} isOpen={isOpen}>
          {children}
        </AccordionDisclosureLayout>
      </AccordionDisclosureStyle>
    )
  }
)

AccordionDisclosureInternal.displayName = 'AccordionDisclosureInternal'

interface AccordionDisclosureStyleProps extends TextColorProps, PaddingProps {
  focusVisible: boolean
}

export const AccordionDisclosureStyle = styled.div.withConfig({
  shouldForwardProp,
})<AccordionDisclosureStyleProps>`
  align-items: center;
  background-color: transparent;
  ${({ color }) => (color ? colorStyleFn : 'color: currentColor;')}
  cursor: pointer;
  display: flex;
  outline: 1px solid transparent;
  outline-color: ${({ focusVisible, theme }) =>
    focusVisible && theme.colors.keyFocus};
  ${padding}
  text-align: left;
  width: 100%;
`

AccordionDisclosureStyle.defaultProps = {
  px: 'none',
  py: 'xsmall',
}

export const AccordionDisclosure = styled(AccordionDisclosureInternal)`
  ${typography}
  ${simpleLayoutCSS}
`

AccordionDisclosure.defaultProps = {
  fontSize: 'small',
  fontWeight: 'semiBold',
}
