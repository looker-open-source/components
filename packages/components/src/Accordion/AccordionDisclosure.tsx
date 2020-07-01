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

import React, { FC, useContext, useState } from 'react'
import styled from 'styled-components'
import { TypographyProps, typography } from '@looker/design-tokens'
import { AccordionContext } from './AccordionContext'
import { AccordionDisclosureGrid } from './AccordionDisclosureGrid'

export interface AccordionDisclosureProps extends TypographyProps {
  className?: string
  focusVisible?: boolean
}

export const AccordionDisclosureLayout: FC<AccordionDisclosureProps> = ({
  children,
  className,
}) => {
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

  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.keyCode === 9 && event.currentTarget === event.target)
      setFocusVisible(true)

    if (event.keyCode === 13) {
      handleToggle()
    }
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
      onBlur={handleBlur}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      tabIndex={0}
      focusVisible={isFocusVisible}
    >
      <AccordionDisclosureGrid {...props} isOpen={isOpen}>
        {children}
      </AccordionDisclosureGrid>
    </AccordionDisclosureStyle>
  )
}

export const AccordionDisclosureStyle = styled.div<{ focusVisible: boolean }>`
  align-items: center;
  border: 1px solid transparent;
  border-color: ${({ focusVisible, theme }) =>
    focusVisible && theme.colors.keyFocus};
  cursor: pointer;
  display: flex;
  height: 100%;
  outline: none;
  padding: ${({ theme: { space } }) => `${space.xsmall} ${space.none}`};
  width: 100%;
`

export const AccordionDisclosure = styled(AccordionDisclosureLayout)`
  ${typography}
`

AccordionDisclosure.defaultProps = {
  fontSize: 'small',
  fontWeight: 'semiBold',
}
