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
  forwardRef,
  ForwardRefExoticComponent,
  MouseEvent,
  ReactNode,
  Ref,
  useCallback,
  useState,
} from 'react'
import styled from 'styled-components'
import { CompatibleHTMLProps } from '@looker/design-tokens'
import { simpleLayoutCSS, SimpleLayoutProps } from '../Layout/utils/simple'
import { useForkedRef } from '../utils'
import { ButtonSetCallback, ButtonSetContext } from './ButtonSetContext'
import { ButtonItem, buttonItemHeight } from './ButtonItem'

export interface ButtonSetOption {
  value: string
  label?: string
  disabled?: boolean
}

interface ButtonSetProps<ValueType extends string | string[] = string[]>
  extends SimpleLayoutProps,
    Omit<CompatibleHTMLProps<HTMLDivElement>, 'value' | 'defaultValue'> {
  /**
   * One or more ButtonItem (do not use if using options)
   */
  children?: ReactNode
  /**
   * Available options (do not use if using ButtonItem children)
   */
  options?: ButtonSetOption[]
  /**
   * Value for controlling the component
   */
  value?: ValueType
  onItemClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export interface ButtonGroupOrToggleBaseProps<
  ValueType extends string | string[] = string[]
> extends Omit<ButtonSetProps<ValueType>, 'onChange' | 'onItemClick'> {
  onChange?: ButtonSetCallback<ValueType>
}

export type ButtonSetType<
  TValue extends string | string[] = string[]
> = ForwardRefExoticComponent<
  ButtonSetProps<TValue> & { ref: Ref<HTMLDivElement> }
>

export const ButtonSetLayout = forwardRef(
  (
    {
      children,
      className,
      disabled,
      onItemClick,
      options,
      value,
      ...props
    }: ButtonSetProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    if (children && options) {
      // eslint-disable-next-line no-console
      console.warn('Use children or options but not both at the same time.')
    }

    const context = {
      disabled,
      onItemClick,
      value,
    }

    const [isWrapping, setIsWrapping] = useState(false)
    const measureRef = useCallback((node: HTMLElement | null) => {
      if (node) {
        const { height } = node.getBoundingClientRect()
        const firstItem = node.childNodes[0] as HTMLElement
        const rowHeight = firstItem
          ? firstItem.getBoundingClientRect().height
          : buttonItemHeight
        if (height > rowHeight * 2) {
          setIsWrapping(true)
        } else {
          setIsWrapping(false)
        }
      }
    }, [])

    const ref = useForkedRef(measureRef, forwardedRef)

    const optionItems =
      options &&
      options.map(({ disabled, label, value }) => {
        return (
          <ButtonItem key={value} disabled={disabled} value={value}>
            {label || value}
          </ButtonItem>
        )
      })

    return (
      <ButtonSetContext.Provider value={context}>
        <div
          role="group"
          className={`${isWrapping ? 'wrapping ' : ''}${className}`}
          ref={ref}
          {...props}
        >
          {children || optionItems}
        </div>
      </ButtonSetContext.Provider>
    )
  }
)

ButtonSetLayout.displayName = 'ButtonSetLayout'

export const ButtonSet = styled(ButtonSetLayout)`
  ${simpleLayoutCSS}
  align-items: center;
  display: inline-flex;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: center;
`
