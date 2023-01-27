/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { InputTimeSelect, InputText } from '@looker/components'
import React from 'react'
import styled from 'styled-components'
import type { PlacementProps } from '../../../../../../utils/filter_styles'
import { inputPlacementStyle } from '../../../../../../utils/filter_styles'

interface TimeProps extends PlacementProps {
  className?: string
  date: Date
  onChange: (item: Date) => void
}

const TimeInputInternal = ({ className, date, onChange }: TimeProps) => {
  const value = `${date.getHours()}:${date.getMinutes()}`
  const handleChange = (newTimeString = '0:00') => {
    const [newHour, newMinute] = newTimeString.split(':')
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      Number(newHour),
      Number(newMinute)
    )
    onChange(newDate)
  }

  return (
    <InputTimeSelect
      className={className}
      interval={30}
      value={value}
      onChange={handleChange}
    />
  )
}

export const TimeInput = styled(TimeInputInternal)`
  width: 120px;
  ${InputText} {
    ${inputPlacementStyle}
  }
`
