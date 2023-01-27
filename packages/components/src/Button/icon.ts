/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { css } from 'styled-components'
import { StyledIconBase } from '@styled-icons/styled-icon'
import type { ButtonProps } from './types'

export const iconMargins = (props: ButtonProps) => {
  const spacing = { inner: '0', outer: '0' }
  switch (props.size) {
    case 'xxsmall':
    case 'xsmall':
    case 'small':
      spacing.outer = '0.25rem'
      spacing.inner = '0.25rem'
      break
    case 'large':
    default:
      spacing.outer = '0.25rem'
      spacing.inner = '0.5rem'
  }

  if (props.iconBefore) {
    return css`
      margin-left: -${spacing.outer};
      margin-right: ${spacing.inner};
    `
  } else if (props.iconAfter) {
    return css`
      margin-left: ${spacing.inner};
      margin-right: -${spacing.outer};
    `
  } else {
    return false
  }
}

export const buttonIcon = (props: ButtonProps) => css`
  ${StyledIconBase} {
    ${iconMargins(props)}
    flex-shrink: 0;
  }
`
