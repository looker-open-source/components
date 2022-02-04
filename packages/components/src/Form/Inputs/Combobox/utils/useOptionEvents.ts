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

import xorWith from 'lodash/xorWith'
import type { Context } from 'react'
import { useContext } from 'react'
import { useWrapEvent } from '../../../../utils'
import type {
  ComboboxContextProps,
  ComboboxMultiContextProps,
} from '../ComboboxContext'
import type {
  ComboboxCallback,
  ComboboxMultiCallback,
  ComboboxOptionProps,
} from '../types'
import type { ComboboxMultiData } from './state'
import { ComboboxActionType } from './state'

export function useOptionEvents<
  CProps extends ComboboxContextProps | ComboboxMultiContextProps
>(props: ComboboxOptionProps, context: Context<CProps>) {
  const { label, value, onClick, onMouseEnter } = props
  const {
    data,
    onChange,
    transition,
    closeOnSelectPropRef,
    isScrollingRef,
  } = useContext(context)
  const { options } = data as ComboboxMultiData

  function handleClick() {
    const option = { label, value }
    if (onChange) {
      if (options) {
        ;(onChange as ComboboxMultiCallback)(
          xorWith(options, [option], (o1, o2) => o1.value === o2.value)
        )
      } else {
        ;(onChange as ComboboxCallback)(option)
      }
    }
    transition && transition(ComboboxActionType.SELECT_WITH_CLICK, { option })
    if (closeOnSelectPropRef && closeOnSelectPropRef.current) {
      // Closing an opened list
      transition && transition(ComboboxActionType.ESCAPE)
    }
  }

  const handleMouseEnter = () => {
    // Wait for isScrollingRef.current to be updated in ComboboxList scrollHandler
    // (mouseenter event is fired before the scroll event)
    requestAnimationFrame(() => {
      if (isScrollingRef?.current) return
      const option = { label, value }
      transition && transition(ComboboxActionType.NAVIGATE, { option })
    })
  }

  return {
    onClick: useWrapEvent(handleClick, onClick),
    onMouseEnter: useWrapEvent(handleMouseEnter, onMouseEnter),
  }
}
