/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  CompatibleHTMLProps,
  FlexboxProps,
  LayoutProps,
  TypographyProps,
  SpaceProps,
} from '@looker/design-tokens'
import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import { Box } from '../../../../Layout'

export interface ComboboxWrapperProps
  extends FlexboxProps,
    Omit<LayoutProps, 'size'>,
    SpaceProps,
    TypographyProps,
    Omit<
      CompatibleHTMLProps<HTMLDivElement>,
      'readOnly' | 'onChange' | 'value' | 'defaultValue'
    > {
  /**
   * The optional a11y aria label for combobox Wrapper element that has popup
   */
  wrapperAriaLabel?: string
}

export const ComboboxWrapper = forwardRef(
  (
    {
      isVisible,
      ...rest
    }: ComboboxWrapperProps & {
      isVisible: boolean
    },
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <Box
        {...rest}
        ref={ref}
        role={rest.role ? rest.role : 'combobox'}
        aria-haspopup="true"
        aria-owns={isVisible ? `listbox-${rest.id}` : undefined}
        aria-label={`${rest.wrapperAriaLabel || ''} combobox`}
        aria-expanded={isVisible}
      />
    )
  }
)
