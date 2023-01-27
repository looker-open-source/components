/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CompatibleHTMLProps } from '@looker/design-tokens'
import type { KeyboardEvent, MouseEvent as ReactMouseEvent } from 'react'
import { useMemo } from 'react'
import type { FocusVisibleProps } from './useFocusVisible'
import { useFocusVisible } from './useFocusVisible'

// Helper interfaces for components using this hook
export type GenericOnClick<E extends HTMLElement> = (
  e: ReactMouseEvent<E, MouseEvent> | KeyboardEvent<E>
) => void

export interface GenericClickProps<E extends HTMLElement>
  extends Omit<CompatibleHTMLProps<E>, 'onClick'> {
  onClick?: GenericOnClick<E>
}

type Attributes = 'disabled' | 'onBlur' | 'onKeyUp' | 'role'

export interface UseClickableProps<E extends HTMLElement>
  extends Pick<CompatibleHTMLProps<E>, Attributes>,
    Pick<GenericClickProps<E>, 'onClick'> {}

export interface UseClickableResult<E extends HTMLElement>
  extends Pick<CompatibleHTMLProps<E>, Attributes | 'onClick' | 'tabIndex'>,
    FocusVisibleProps {}
/**
 * This hook provides keyboard accessibility for any component that renders a non-button element
 * that is both focus-able and clickable. The component should handle styling for focusVisible.
 */
export function useClickable<E extends HTMLElement>({
  onClick,
  disabled,
  role,
  ...rest
}: UseClickableProps<E>): UseClickableResult<E> {
  const { onKeyUp, ...focusVisibleProps } = useFocusVisible(rest)

  return useMemo(
    () => ({
      disabled,
      ...focusVisibleProps,
      onClick: (e: ReactMouseEvent<E, MouseEvent>) => {
        if (!disabled) {
          // use onClick from useFocusVisible – it's the true click handler
          onClick?.(e)
        }
      },
      onKeyUp: (e: KeyboardEvent<E>) => {
        const shouldHandle = !disabled && e.currentTarget === e.target
        if (shouldHandle) {
          switch (e.key) {
            case 'Enter':
            case ' ':
              onClick?.(e)
              break
          }
        }
        onKeyUp(e)
      },
      // if onClick is used, role should be 'button' unless otherwise specified
      // otherwise undefined b/c depending on usage, 'button' could be misleading
      role: role || (onClick ? 'button' : undefined),
      tabIndex: disabled ? undefined : 0,
    }),
    [disabled, role, onClick, onKeyUp, focusVisibleProps]
  )
}
