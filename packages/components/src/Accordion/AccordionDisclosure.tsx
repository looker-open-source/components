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
  TypographyProps,
  typography,
} from '@looker/design-tokens'
import { Icon, IconNames } from '../Icon'
import { AccordionContext } from './AccordionContext'

export interface AccordionDisclosureProps
  extends PaddingProps,
    TypographyProps {
  children: string | ReactNode
  className?: string
  /**
   * If true, the arrow will sit left of the label rather than right of it
   * In addition, Arrow icons will be used in place of caret
   * @default false
   */
  arrowLeft?: boolean
}

const Indicator = styled.div`
  grid-area: indicator;
`
const Label = styled.div`
  grid-area: children;
`

const AccordionDisclosureLayout: FC<AccordionDisclosureProps> = ({
  arrowLeft,
  children,
  className,
}) => {
  const { isOpen, toggleOpen, onClose, onOpen } = useContext(AccordionContext)
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

  const defaultIconSize = 20
  type IconSet = {
    closed: IconNames
    open: IconNames
  }
  const disclosureIconSet: IconSet = {
    closed: arrowLeft ? 'ArrowDown' : 'CaretDown',
    open: arrowLeft ? 'ArrowRight' : 'CaretUp',
  }
  const indicator = (
    <Icon
      name={isOpen ? disclosureIconSet.open : disclosureIconSet.closed}
      size={defaultIconSize}
    />
  )

  return (
    <div
      className={className}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Indicator>{indicator}</Indicator>
      <Label>{children}</Label>
    </div>
  )
}

export const AccordionDisclosure = styled(AccordionDisclosureLayout)`
  ${typography}

  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.palette.transparent};
  display: grid;
  cursor: pointer;
  grid-gap: ${({ theme }) => theme.space.xsmall};
  grid-template-areas: ${({ arrowLeft }) =>
    arrowLeft ? '"indicator children"' : '"children indicator"'};
  grid-template-columns: ${({ arrowLeft, theme }) =>
    arrowLeft ? `${theme.space.large} 1fr` : `1fr ${theme.space.large}`};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.palette.purple300};
  }
`

AccordionDisclosure.defaultProps = { fontSize: 'small', fontWeight: 'semiBold' }
