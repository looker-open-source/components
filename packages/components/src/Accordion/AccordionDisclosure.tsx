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
import { Icon } from '../Icon'
import { AccordionContext } from './AccordionContext'

export interface AccordionDisclosureProps
  extends PaddingProps,
    TypographyProps {
  children: string | ReactNode
  className?: string
}

const Indicator = styled.div`
  grid-area: indicator;
`
const Label = styled.div`
  grid-area: children;
`

export const AccordionDisclosure: FC<AccordionDisclosureProps> = ({
  children,
  className,
}) => {
  const {
    disclosureIcons,
    indicatorPosition,
    isOpen,
    toggleOpen,
    onClose,
    onOpen,
  } = useContext(AccordionContext)
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

  const indicator = (
    <Icon
      name={isOpen ? disclosureIcons.open : disclosureIcons.closed}
      size={defaultIconSize}
    />
  )

  return (
    <AccordionDisclosureStyle
      className={className}
      indicatorPosition={indicatorPosition}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Indicator>{indicator}</Indicator>
      <Label>{children}</Label>
    </AccordionDisclosureStyle>
  )
}

export interface AccordionDisclosureStyleProps extends TypographyProps {
  indicatorPosition: 'left' | 'right'
}

// Note: The typography object doesn't actually do anything in this current setup
// because AccordionDisclosureStyle isn't passed any typography props from AccordionDisclosure atm.
export const AccordionDisclosureStyle = styled.div<
  AccordionDisclosureStyleProps
>`
  ${typography}

  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.palette.transparent};
  display: grid;
  cursor: pointer;
  grid-gap: ${({ theme }) => theme.space.xsmall};
  grid-template-areas: ${({ indicatorPosition }) =>
    indicatorPosition === 'left'
      ? '"indicator children"'
      : '"children indicator"'};
  grid-template-columns: ${({ indicatorPosition, theme }) =>
    indicatorPosition === 'left'
      ? `${theme.space.large} 1fr`
      : `1fr ${theme.space.large}`};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.palette.purple300};
  }
`

AccordionDisclosureStyle.defaultProps = {
  fontSize: 'small',
  fontWeight: 'semiBold',
}
