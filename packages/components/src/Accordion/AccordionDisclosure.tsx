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

import React, { FC, ReactNode, useContext } from 'react'
import styled from 'styled-components'
import {
  PaddingProps,
  padding,
  TypographyProps,
  typography,
} from '@looker/design-tokens'
import { AccordionContext } from './AccordionContext'
import { AccordionDisclosureGrid } from './AccordionDisclosureGrid'

export interface AccordionDisclosureProps
  extends PaddingProps,
    TypographyProps {
  children: ReactNode
  className?: string
}

export const AccordionDisclosureLayout: FC<AccordionDisclosureProps> = ({
  children,
  className,
}) => {
  const { isOpen, toggleOpen, onClose, onOpen, ...props } = useContext(
    AccordionContext
  )
  const handleOpen = () => onOpen && onOpen()
  const handleClose = () => onClose && onClose()

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.keyCode === 13) {
      event.currentTarget.click()
    }
  }
  const handleClick = () => {
    isOpen ? handleClose() : handleOpen()
    toggleOpen(!isOpen)
  }

  return (
    <div
      className={className}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <AccordionDisclosureGrid {...props} isOpen={isOpen}>
        {children}
      </AccordionDisclosureGrid>
    </div>
  )
}

export const AccordionDisclosure = styled(AccordionDisclosureLayout)`
  /*
    - Default padding is placed before padding styleFn so that it is overwriteable by padding props
    - defaultProps is not currently an option due to styled-system not accounting for CSS cascading
   */
  padding: ${({ theme: { space } }) => `${space.xsmall} ${space.none}`};
  ${padding}
  ${typography}

  border: 1px solid ${({ theme }) => theme.colors.palette.transparent};
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.palette.purple300};
  }
`

AccordionDisclosure.defaultProps = {
  fontSize: 'small',
  fontWeight: 'semiBold',
}
