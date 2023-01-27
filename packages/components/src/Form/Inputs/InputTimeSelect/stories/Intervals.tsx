/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputTimeSelect } from '../'
import type { InputTimeSelectProps } from '../'
import { Fieldset, SpaceVertical, Heading } from '../../../../'

export default function Intervals(props: InputTimeSelectProps) {
  const { interval: _intervals, ...restProps } = props
  return (
    <Fieldset>
      <SpaceVertical gap="u1">
        <Heading as="h4">5-minute</Heading>
        <InputTimeSelect interval={5} {...restProps} />
      </SpaceVertical>
      <SpaceVertical gap="u1">
        <Heading as="h4">10-minute</Heading>
        <InputTimeSelect interval={10} {...restProps} />
      </SpaceVertical>
      <SpaceVertical gap="u1">
        <Heading as="h4">15-minute</Heading>
        <InputTimeSelect interval={15} {...restProps} />
      </SpaceVertical>
      <SpaceVertical gap="u1">
        <Heading as="h4">60-minute</Heading>
        <InputTimeSelect interval={20} {...restProps} />
      </SpaceVertical>
      <SpaceVertical gap="u1">
        <Heading as="h4">30-minute</Heading>
        <InputTimeSelect interval={30} {...restProps} />
      </SpaceVertical>
      <SpaceVertical gap="u1">
        <Heading as="h4">60-minute</Heading>
        <InputTimeSelect interval={60} {...restProps} />
      </SpaceVertical>
    </Fieldset>
  )
}
