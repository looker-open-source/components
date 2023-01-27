/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
  const { data, onChange, transition, closeOnSelectPropRef, isScrollingRef } =
    useContext(context)
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
