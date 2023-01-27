/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { AvatarIcon, DividerVertical, SpaceVertical, Span } from '../../..'

export default function Basic() {
  return (
    <>
      <SpaceVertical align="center">
        <AvatarIcon icon={<MaterialIcons.Schedule />} />
        <DividerVertical />
        <Span>2:45PM</Span>
      </SpaceVertical>
      <SpaceVertical align="center">
        <AvatarIcon icon={<MaterialIcons.Schedule />} />
        <DividerVertical height="3rem" />
        <Span>2:45PM</Span>
      </SpaceVertical>
      <SpaceVertical align="center">
        <AvatarIcon icon={<MaterialIcons.Schedule />} size="large" />
        <DividerVertical height="100px" />
        <Span pl="u5" fontSize="xxxxlarge">
          2:45PM
        </Span>
      </SpaceVertical>
    </>
  )
}
