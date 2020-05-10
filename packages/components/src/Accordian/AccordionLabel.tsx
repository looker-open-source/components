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
import { IconNames } from '@looker/icons'
import { simpleLayoutCSS, SimpleLayoutProps } from '../Layout/utils/simple'
import { Icon } from '../Icon'
import { AccordionContext } from './AccordionContext'

export interface AccordionLabelProps extends SimpleLayoutProps {
  children: string | ReactNode
  className?: string
  /**
   * If true, the arrow will sit left of the label rather than right of it
   * In addition, Arrow icons will be used in place of caret
   * @default false
   */
  arrowLeft?: boolean
  /**
   * Optional Icon that sits directly left of the label
   */
  icon?: IconNames
}

const AccordianLabelChildrenContainer = styled.div``

const AccordionLabelLayout: FC<AccordionLabelProps> = ({
  arrowLeft,
  children,
  className,
  icon,
}) => {
  const { isOpen, toggleOpen } = useContext(AccordionContext)
  const handleClick = () => toggleOpen && toggleOpen(!isOpen)

  const defaultIconSize = 20
  const arrowIconLeft = arrowLeft && (
    <Icon
      name={isOpen ? 'ArrowDown' : 'ArrowRight'}
      mr="xsmall"
      size={defaultIconSize}
    />
  )
  const propIcon = icon && (
    <Icon name={icon} mr="xsmall" size={defaultIconSize} />
  )
  const arrowIconRight = !arrowLeft && (
    <Icon
      ml="xsmall"
      name={isOpen ? 'CaretUp' : 'CaretDown'}
      size={defaultIconSize}
    />
  )

  return (
    <div className={className} onClick={handleClick}>
      {arrowIconLeft}
      {propIcon}
      <AccordianLabelChildrenContainer>
        {children}
      </AccordianLabelChildrenContainer>
      {arrowIconRight}
    </div>
  )
}

export const AccordionLabel = styled(AccordionLabelLayout)`
  ${AccordianLabelChildrenContainer} {
    flex-grow: 1;
  }

  ${simpleLayoutCSS}

  display: flex;
  align-items: center;
`

AccordionLabel.defaultProps = {
  px: 'large',
  py: 'xsmall',
}
