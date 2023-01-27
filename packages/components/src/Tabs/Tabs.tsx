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

import React, { Children, cloneElement, useRef, useState } from 'react'

export interface UseTabsProps {
  controlledIndex?: number
  defaultIndex?: number
  index?: number
  isControlled?: boolean
  onChange?: (index: number) => void
}

export interface TabsProps extends UseTabsProps {
  children: JSX.Element[]
}

/**
 * @deprecated Use `Tabs2` and `Tab2` instead
 */
export function useTabs(props?: UseTabsProps) {
  const defaultIndex = (props && props.defaultIndex) || 0
  const onChange = props && props.onChange
  const isControlled = (props && props.isControlled) || false

  const [selectedIndex, setSelectedIndex] = useState(defaultIndex)

  return {
    onSelectTab: (index: number) => {
      onChange && onChange(index)
      if (!isControlled) {
        setSelectedIndex(index)
      }
    },
    selectedIndex:
      isControlled && props ? props.controlledIndex : selectedIndex,
  }
}

/**
 * @deprecated Use `Tabs2` and `Tab2` instead
 */
export const Tabs = ({
  children,
  index: controlledIndex,
  defaultIndex,
  onChange,
}: TabsProps) => {
  const { current: isControlled } = useRef(controlledIndex !== undefined)

  /* eslint-disable no-console */
  if (!isControlled && controlledIndex !== undefined) {
    console.warn(
      'Tabs is changing from uncontrolled to controlled. Tabs should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled Tabs for the lifetime of the component. Check the `index` prop being passed in.'
    )
  }

  if (isControlled && controlledIndex === undefined) {
    console.warn(
      'Tabs is changing from uncontrolled to controlled. Tabs should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled Tabs for the lifetime of the component. Check the `index` prop being passed in.'
    )
  }
  /* eslint-enable no-console */

  const tabs = useTabs({
    controlledIndex,
    defaultIndex,
    isControlled,
    onChange,
  })

  const clonedChildren = Children.map(children, (child: JSX.Element) => {
    return cloneElement(child, tabs)
  })

  return <>{clonedChildren}</>
}
