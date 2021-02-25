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

import React, { FC, ReactElement, useRef, cloneElement, useEffect } from 'react'
import styled from 'styled-components'
import { ButtonProps, IconButtonProps } from '.'

export interface MultiFunctionButtonProps {
  alternate: ReactElement<ButtonProps | IconButtonProps>
  children: ReactElement<ButtonProps | IconButtonProps>
  isAlternate?: boolean
}

const MultiFunctionButtonLayout: FC<MultiFunctionButtonProps> = ({
  alternate,
  children,
  isAlternate = false,
}) => {
  const alternateRef = useRef<HTMLButtonElement>(null)
  const childrenRef = useRef<HTMLButtonElement>(null)

  const alternateButton = cloneElement(alternate, {
    ref: alternateRef,
  })
  const childrenButton = cloneElement(children, {
    ref: childrenRef,
  })

  // const finalHeight =
  //   alternateButton.offsetHeight > childrenButton.getBoundingClientRect
  //     ? alternateButton.offsetHeight
  //     : childrenButton.getBoundingClientRect
  // const finalWidth =
  //   alternateButton.offsetWidth > childrenButton.offsetWidth
  //     ? alternateButton.offsetHeight
  //     : childrenButton.offsetHeight

  console.log('finalHeight: ', alternateRef) // ?.current?.offsetWidth)
  console.log('finalWidth: ', childrenRef) // ?.current?.offsetHeight)

  useEffect(() => {
    // IF, isAlternate = true && children button has focus put focus on alternate button
    if (
      isAlternate === true &&
      childrenRef.current === document.activeElement
    ) {
      alternateRef?.current?.focus()
    }
    // IF, isAlternate = false && alternate button has focus put focus on children button
    if (
      isAlternate === false &&
      alternateRef.current === document.activeElement
    ) {
      childrenRef?.current?.focus()
    }
    // IF isAlternate changes and focus is not on one of the two buttons do nothing
  })

  return (
    <div aria-live="polite">
      {isAlternate ? alternateButton : childrenButton}
    </div>
  )
}

export const MultiFunctionButton = styled(MultiFunctionButtonLayout)`
  align-items: center;
  border: 1px solid blue;
  display: flex;
  height: 2.5rem;
  justify-content: center;
  width: 8rem;

  *:nth-child(2) {
    position: absolute;
    top: -100000px;
  }

  /* .alt {
    height: 2.5rem;
  } */
`
