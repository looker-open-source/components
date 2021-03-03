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

import React, {
  FC,
  ReactElement,
  useRef,
  cloneElement,
  useEffect,
  useState,
  RefObject,
} from 'react'
import styled from 'styled-components'
import { ButtonProps, IconButtonProps } from '.'

export interface MultiFunctionButtonProps {
  alternate: ReactElement<
    (ButtonProps | IconButtonProps) & {
      ref: RefObject<HTMLButtonElement>
      ariaHidden: boolean
    }
  >
  children: ReactElement<ButtonProps | IconButtonProps>
  swap?: boolean
}

export const MultiFunctionButton: FC<MultiFunctionButtonProps> = ({
  alternate,
  children,
  swap = false,
}) => {
  const [containerHeight, setContainerHeight] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)

  const aRef = useRef<HTMLButtonElement>(null)
  const bRef = useRef<HTMLButtonElement>(null)

  // calculating height and width button highest values to populate the component's dimensions.
  useEffect(() => {
    const a = aRef.current
    const b = bRef.current
    if (a && b) {
      setContainerHeight(Math.max(a.offsetHeight, b.offsetHeight, 0))
      setContainerWidth(Math.max(a.offsetWidth, b.offsetWidth, 0))
    }
  }, [containerHeight, containerWidth])

  // setting focus on the right button as the component moves between them
  useEffect(() => {
    if (swap === true && aRef.current === document.activeElement) {
      bRef.current?.focus()
    }
    if (swap === false && bRef.current === document.activeElement) {
      aRef.current?.focus()
    }
  }, [swap])

  return (
    <MultiFunctionButtonLayout
      swap={swap}
      height={containerHeight}
      width={containerWidth}
    >
      {cloneElement(children, { 'aria-hidden': !!swap, ref: aRef })}
      {cloneElement(alternate, { 'aria-hidden': !swap, ref: bRef })}
    </MultiFunctionButtonLayout>
  )
}

export interface MultiFunctionButtonLayoutProp {
  swap?: boolean
  height: number
  width: number
}

const MultiFunctionButtonLayout = styled.div<MultiFunctionButtonLayoutProp>`
  align-items: center;
  display: flex;
  height: ${({ height }) => height}px;
  justify-content: center;
  width: ${({ width }) => width}px;

  ${({ swap }) =>
    swap
      ? `> *:first-child {
        position: absolute;
        top: -100000px;
      }`
      : `> *:last-child {
        position: absolute;
        top: -100000px;
      }`}
`
