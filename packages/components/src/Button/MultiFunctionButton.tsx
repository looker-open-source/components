/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type { ReactElement, RefAttributes, Ref } from 'react'
import React, {
  useRef,
  cloneElement,
  useEffect,
  useState,
  forwardRef,
} from 'react'
import styled from 'styled-components'
import { useForkedRef } from '../utils'
import type { IconButtonProps } from './iconButtonTypes'
import type { ButtonProps } from './types'

export type MultiFunctionButtonProps = {
  alternate: ReactElement<
    (ButtonProps | IconButtonProps) & RefAttributes<HTMLButtonElement>
  >
  alternateRef?: Ref<HTMLButtonElement>
  children: ReactElement<
    (ButtonProps | IconButtonProps) & RefAttributes<HTMLButtonElement>
  >
  swap?: boolean
  disabled?: boolean
}

/**
 * MultiFunctionButton "swaps" the button shown generally with the "alternate"
 * button specified. This component is generally intended for showing a button with
 * a cancelable "loading" state or similar.
 *
 * The smaller of the two buttons will automatically be resized to match the width of
 * the larger to prevent layout "jitter" when the component swaps between states.
 */
export const MultiFunctionButton = forwardRef(
  (
    {
      alternate,
      children,
      alternateRef,
      swap = false,
      disabled = undefined,
    }: MultiFunctionButtonProps,
    forwardedRef: Ref<HTMLButtonElement>
  ) => {
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

    const style = containerWidth > 0 ? { width: containerWidth } : undefined

    return (
      <MultiFunctionButtonStyle
        swap={swap}
        height={containerHeight}
        width={containerWidth}
      >
        {cloneElement(children, {
          'aria-hidden': !!swap,
          disabled: swap === true ? true : disabled,
          ref: useForkedRef(aRef, forwardedRef),
          style,
        })}
        {cloneElement(alternate, {
          'aria-hidden': !swap,
          disabled: swap === false ? true : disabled,
          ref: useForkedRef(bRef, alternateRef),
          style,
        })}
      </MultiFunctionButtonStyle>
    )
  }
)
MultiFunctionButton.displayName = 'MultiFunctionButton'

type MultiFunctionButtonStyleProps = {
  swap?: boolean
  height: number
  width: number
}

const MultiFunctionButtonStyle = styled.div<MultiFunctionButtonStyleProps>`
  align-items: center;
  display: flex;
  height: ${({ height }) => height}px;
  justify-content: center;
  width: ${({ width }) => width}px;
  > * {
    flex-shrink: 0;
  }
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
