/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import styled from 'styled-components'
import type { ColorKey } from '@looker/design-tokens'
import { colorBreakdown, theme } from '@looker/design-tokens'
import { Code, Grid } from '../../../src'

const BlendColor = styled(
  ({ name, color, ...props }: { color: string; name: string }) => (
    <Code fontSize="xsmall" {...props}>
      {name}
    </Code>
  )
)`
  align-items: center;
  display: flex;

  &::before {
    background: ${({ color }) => color};
    border: 1px solid ${({ theme }) => theme.colors.ui3};
    border-bottom: none;
    content: ' ';
    display: block;
    flex-shrink: 0;
    height: 2.5rem;
    margin-right: ${({ theme }) => theme.space.u4};
    width: 5rem;
  }
`

type BlendListProps = {
  colors: ColorKey
}

const BlendList = styled(({ colors, ...props }: BlendListProps) => (
  <div {...props}>
    {Object.entries(colors).map(([name, color]) => (
      <BlendColor name={name} color={color} key={name} />
    ))}
  </div>
))`
  display: flex;
  flex-direction: column;

  *:first-child::before {
    border-radius: 4px 4px 0 0;
  }

  *:last-child::before {
    border-bottom: solid 1px ${({ theme }) => theme.colors.ui3};
    border-radius: 0 0 4px 4px;
  }
`

const BlendGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
`

export const ColorBlendsGrid = () => {
  const { statefulColorGroups } = colorBreakdown(theme.colors)
  return (
    <BlendGrid gap="u5" maxWidth={1000}>
      {statefulColorGroups.map((group, index) => (
        <BlendList colors={group} key={index} />
      ))}
    </BlendGrid>
  )
}
