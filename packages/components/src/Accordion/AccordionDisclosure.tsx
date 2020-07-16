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
import { TypographyProps, typography } from '@looker/design-tokens'
import { AccordionContext } from './AccordionContext'
import { AccordionDisclosureGrid } from './AccordionDisclosureGrid'

export interface AccordionDisclosureProps extends TypographyProps {
  className?: string
  focusVisible?: boolean
  ref?: Ref<HTMLButtonElement>
}

export const AccordionDisclosureLayout: FC<AccordionDisclosureProps> = forwardRef(
  ({ children, className }, ref) => {
    const [isFocusVisible, setFocusVisible] = useState(false)
    const { isOpen, toggleOpen, onClose, onOpen, ...props } = useContext(
      AccordionContext
    )
    const handleOpen = () => onOpen && onOpen()
    const handleClose = () => onClose && onClose()
    const handleToggle = () => {
      isOpen ? handleClose() : handleOpen()
      toggleOpen(!isOpen)
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
      if (event.keyCode === 13) {
        handleToggle()
      }
    }

    const handleKeyUp = (event: KeyboardEvent<HTMLButtonElement>) => {
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
        focusVisible={isFocusVisible}
        onBlur={handleBlur}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        ref={ref}
        tabIndex={0}
      >
        <AccordionDisclosureGrid {...props} isOpen={isOpen}>
          {children}
        </AccordionDisclosureGrid>
      </AccordionDisclosureStyle>
    )
  }
)

AccordionDisclosureLayout.displayName = 'AccordionDisclosureLayout'

interface AccordionDisclosureStyleProps {
  focusVisible: boolean
}

export const AccordionDisclosureStyle = styled.button<
  AccordionDisclosureStyleProps
>`
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-color: ${({ focusVisible, theme }) =>
    focusVisible && theme.colors.keyFocus};
  cursor: pointer;
  display: flex;
  outline: none;
  padding: ${({ theme: { space } }) => `${space.xsmall} ${space.none}`};
  text-align: left;
  width: 100%;
`

export const AccordionDisclosure = styled(AccordionDisclosureLayout)`
  ${typography}
`

AccordionDisclosure.defaultProps = {
  fontSize: 'small',
  fontWeight: 'semiBold',
}
