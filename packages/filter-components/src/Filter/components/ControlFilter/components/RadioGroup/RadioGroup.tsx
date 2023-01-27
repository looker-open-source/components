/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import {
  ProgressCircular,
  RadioGroup as RadioGroupComponent,
} from '@looker/components'
import compact from 'lodash/compact'
import pick from 'lodash/pick'
import React from 'react'
import styled from 'styled-components'
import { useTranslation } from '../../../../../utils'
import type { StringSingleSelectProps } from '../../../../types/string_select_props'

const InternalRadioGroup = ({
  isLoading,
  value = '',
  options,
  anyOption,
  ...props
}: StringSingleSelectProps) => {
  const { t } = useTranslation('RadioGroup')
  const optionsWithAny = compact([
    anyOption && { label: t('any value'), value: '' },
    ...options,
  ])

  return isLoading ? (
    <ProgressCircular size="medium" />
  ) : (
    <RadioGroupComponent
      options={optionsWithAny}
      value={value}
      {...pick(props, ['inline', 'onChange'])}
    />
  )
}

export const RadioGroup = styled(InternalRadioGroup)``
