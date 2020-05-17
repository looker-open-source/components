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
  cloneElement,
  ChangeEvent,
  Children,
  forwardRef,
  ForwardRefExoticComponent,
  isValidElement,
  MouseEvent,
  ReactNode,
  Ref,
} from 'react'
import styled from 'styled-components'
import { CompatibleHTMLProps } from '@looker/design-tokens'
import { simpleLayoutCSS, SimpleLayoutProps } from '../Layout/utils/simple'
import { ButtonItemProps } from './ButtonItem'

interface ButtonSetProps<ValueType extends string | string[] = string[]>
  extends SimpleLayoutProps,
    Omit<CompatibleHTMLProps<HTMLDivElement>, 'value' | 'onChange'> {
  /**
   * One or more ButtonItem
   */
  children: ReactNode
  /**
   * Value for controlling the component
   */
  value?: ValueType
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void
  isToggle?: boolean
  /**
   * Value can be unset by clicking selected button (ButtonToggle only)
   */
  nullable?: boolean
}

export type ButtonGroupOrToggleBaseProps<
  ValueType extends string | string[] = string[]
> = Omit<ButtonSetProps<ValueType>, 'isToggle' | 'onChange'>

export type ButtonSetType<
  T extends string | string[] = string[]
> = ForwardRefExoticComponent<ButtonSetProps<T> & { ref: Ref<HTMLDivElement> }>

export const ButtonSetLayout = forwardRef(
  (
    {
      children,
      disabled,
      isToggle,
      name,
      nullable,
      onChange: groupOnChange,
      value,
      ...props
    }: ButtonSetProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const clonedChildren = Children.map(children, (child) => {
      if (!isValidElement(child)) return child

      const { props: childProps } = child
      const childValue =
        childProps.value ||
        (typeof childProps.children === 'string' ? childProps.children : null)

      return cloneElement<ButtonItemProps>(child, {
        isControlled: groupOnChange !== undefined,
        name,
        type: isToggle ? 'radio' : 'checkbox',
        value: childValue,
        // pass down these optional props only if they're defined (overriding child props)
        ...(value && value.length !== 0
          ? {
              selected: isToggle
                ? value === childValue
                : value.includes(childValue),
            }
          : typeof value === 'string' && value === ''
          ? { selected: undefined }
          : {}),
        ...(disabled ? { disabled } : {}),
        ...(groupOnChange
          ? {
              onChange: (e: ChangeEvent<HTMLInputElement>) => {
                groupOnChange && groupOnChange(e)
                childProps.onChange && childProps.onChange(e)
              },
            }
          : {}),
        ...(nullable && isToggle && groupOnChange
          ? {
              onClick: (e: MouseEvent<HTMLLabelElement>) => {
                // The onClick is attached to the label but the browser will
                // call it twice (2nd time with the input as target)
                // If we un-check the radio in the 1st event (on label), the browser will immediately
                // re - check it, so we wait for the 2nd event (on input)
                if ((e.target as HTMLElement).tagName === 'INPUT') {
                  groupOnChange()
                }
                childProps.onClick && childProps.onClick(e)
              },
            }
          : {}),
      })
    })

    return (
      <div ref={ref} {...props}>
        {clonedChildren}
      </div>
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
