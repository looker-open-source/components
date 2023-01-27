/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import {
  ButtonGroup as ButtonGroupComponent,
  ButtonItem,
  ProgressCircular,
} from '@looker/components'
import React from 'react'
import styled, { css } from 'styled-components'
import type { StringMultiSelectProps } from '../../../../types/string_select_props'
import { ERROR_TYPE } from '../../../../../constants'

/*
 * Filter ButtonGroup adds red-outline around the buttons when the ButtonGroup has an error
 */
export const ButtonGroup = styled(
  ({
    className,
    isLoading,
    onChange,
    options,
    value,
  }: StringMultiSelectProps & { className?: string }) =>
    isLoading ? (
      <ProgressCircular size="medium" />
    ) : (
      <ButtonGroupComponent
        className={className}
        onChange={onChange}
        options={options}
        value={value}
      />
    )
)`
  ${({ validationMessage }) =>
    validationMessage?.type === ERROR_TYPE &&
    css`
      ${ButtonItem} {
        border-color: ${({ theme }) => theme.colors.criticalBorder};
      }
    `}
`
