/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { InputTextProps } from '@looker/components'
import { InputText } from '@looker/components'
import type { FormEvent } from 'react'
import React from 'react'
import styled from 'styled-components'
import type { PlacementProps } from '../../../../utils/filter_styles'
import { inputPlacementStyle } from '../../../../utils/filter_styles'

export type GroupInputProps = InputTextProps & PlacementProps

const InputLayout = ({
  type = 'number',
  width = '80px',
  ...props
}: GroupInputProps) => {
  const inputValidator = (evt: FormEvent<HTMLInputElement>) => {
    if (evt.target && evt.currentTarget.value) {
      evt.currentTarget.value = evt.currentTarget.value
        .toString()
        .replace(/\D/g, '')
    }
  }

  const { placement: _placement, ...rest } = props

  return <InputText autoResize onInput={inputValidator} type={type} {...rest} />
}

export const GroupInput = styled(InputLayout).attrs(
  ({ placement = 'middle' }) => ({ placement })
)`
  ${inputPlacementStyle}
  input {
    text-align: right;
  }
`
