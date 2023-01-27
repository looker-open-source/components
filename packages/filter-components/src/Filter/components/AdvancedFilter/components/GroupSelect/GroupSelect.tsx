/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { SelectProps } from '@looker/components'
import { InputText, Select } from '@looker/components'
import React from 'react'
import styled from 'styled-components'
import type { PlacementProps } from '../../../../utils/filter_styles'
import { inputPlacementStyle } from '../../../../utils/filter_styles'

export type GroupSelectProps = SelectProps & PlacementProps

export const GroupSelect = styled((props: GroupSelectProps) => {
  const { placement: _placement, ...rest } = props
  return <Select autoResize {...rest} noErrorIcon />
})`
  ${InputText} {
    ${inputPlacementStyle}
  }
`
