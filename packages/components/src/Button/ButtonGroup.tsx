/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import xor from 'lodash/xor'
import type { MouseEvent, Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { ButtonItem } from './ButtonItem'
import type { ButtonGroupOrToggleBaseProps } from './ButtonSet'
import { ButtonSet } from './ButtonSet'

const ButtonGroupLayout = forwardRef(
  (
    { onChange, value = [], ...props }: ButtonGroupOrToggleBaseProps,
    ref: Ref<HTMLDivElement>
  ) => {
    function handleItemClick(e: MouseEvent<HTMLButtonElement>) {
      const newValue = xor(value, [e.currentTarget.value])
      if (onChange) {
        onChange(newValue)
      }
    }

    return (
      <ButtonSet
        {...props}
        ref={ref}
        value={value}
        onItemClick={handleItemClick}
      />
    )
  }
)

export const ButtonGroup = styled(ButtonGroupLayout)`
  ${ButtonItem} {
    border: 1px solid ${({ theme }) => theme.colors.ui3};
    border-radius: ${({ theme }) => theme.radii.medium};
    margin-right: ${({ theme }) => theme.space.u1};
    &:last-child {
      margin-right: 0;
    }

    &[aria-pressed='false']:not(:hover) {
      background: ${({ theme }) => theme.colors.background};
    }
  }
  &.wrapping {
    margin: -${({ theme }) => theme.space.u05};
    ${ButtonItem} {
      margin: ${({ theme }) => theme.space.u05};
    }
  }
`
