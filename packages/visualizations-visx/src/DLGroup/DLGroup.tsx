/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import styled from 'styled-components'
import { SpaceVertical } from '@looker/components'

type DLGroupProps = {
  label?: string
  preface?: string
  value: string
}

export const DLGroup = ({ label = '', value, preface }: DLGroupProps) => {
  return (
    <SpaceVertical gap="none">
      {preface && <em>{preface}</em>}
      <dt>{label}</dt>
      <DD>{value}</DD>
    </SpaceVertical>
  )
}

const DD = styled.dd`
  font-weight: bold;
  margin: 0;
`
