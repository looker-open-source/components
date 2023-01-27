/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { theme } from '@looker/design-tokens'
import styled from 'styled-components'
import {
  Box2,
  Code,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '../../../src'

export const DocTable = styled(Table)`
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-bottom: ${({ theme }) => theme.space.u8};

  ${Code} {
    color: ${({ theme }) => theme.colors.key};
  }
`

const ExampleBox = styled(Box2)`
  height: 40px;
  width: 60px;
`

export const RadiusList = () => {
  const radii = Object.entries(theme.radii)
  return (
    <DocTable>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Example</TableHeaderCell>
          <TableHeaderCell>Rem Value</TableHeaderCell>
          <TableHeaderCell>Reference</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {radii.map(r => {
          return (
            <TableRow key={r[0]}>
              <TableDataCell>
                <ExampleBox bg="ui1" border="ui3" borderRadius={r[0]} />
              </TableDataCell>
              <TableDataCell>{r[1]}</TableDataCell>
              <TableDataCell>
                <Code fontSize="xsmall">theme.radii.{r[0]}</Code>
              </TableDataCell>
            </TableRow>
          )
        })}
      </TableBody>
    </DocTable>
  )
}
