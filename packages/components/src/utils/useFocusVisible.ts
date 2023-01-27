/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CompatibleHTMLProps } from '@looker/design-tokens'
import type { FocusEvent, KeyboardEvent } from 'react'
import { useMemo, useState } from 'react'
import type {
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps,
} from 'styled-components'
import { css } from 'styled-components'

export interface FocusVisibleProps {
  focusVisible: boolean
}

export type UseFocusVisibleProps<E extends HTMLElement> = Pick<
  CompatibleHTMLProps<E>,
  'onBlur' | 'onKeyUp'
>

export const focusVisibleCSSWrapper = <Props extends FocusVisibleProps>(
  styleFn: (
    props: ThemedStyledProps<Props, DefaultTheme>
  ) => FlattenInterpolation<ThemedStyledProps<Props, DefaultTheme>>
) => css<Props>`
  &:focus-visible {
    ${styleFn}
  }
  ${({ focusVisible }) => focusVisible && styleFn}
`

export const useFocusVisible = <E extends HTMLElement = HTMLElement>({
  onBlur,
  onKeyUp,
}: UseFocusVisibleProps<E>) => {
  const [isFocusVisible, setFocusVisible] = useState(false)

  return useMemo(() => {
    return {
      focusVisible: isFocusVisible,
      onBlur: (e: FocusEvent<E>) => {
        setFocusVisible(false)
        onBlur?.(e)
      },
      onKeyUp: (e: KeyboardEvent<E>) => {
        if (e.currentTarget === e.target) {
          setFocusVisible(true)
        }
        onKeyUp?.(e)
      },
    }
  }, [isFocusVisible, onBlur, onKeyUp])
}
