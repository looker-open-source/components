/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { DensityRamp } from '@looker/design-tokens';
import {
  Box,
  Code,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  List,
  ListItem,
  listItemDimensions,
} from '../../../src';
import { DocTable } from './DocTable';

const densities: DensityRamp[] = [1, 0, -1, -2, -3];

const DensityRow = ({ density }: { density: DensityRamp }) => (
  <TableRow>
    <TableDataCell>
      <Box bg="ui2" p="u3" mr="large" borderRadius="medium">
        <Box bg="background">
          <List density={density}>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
          </List>
        </Box>
      </Box>
    </TableDataCell>
    <TableDataCell>{density}</TableDataCell>
    <TableDataCell>
      <Code fontSize="xsmall">{`<List density="${density}" />`}</Code>
    </TableDataCell>
    <TableDataCell>{listItemDimensions(density).height}px</TableDataCell>
  </TableRow>
);

export const DensityTable = () => (
  <DocTable maxWidth="1200px">
    <TableHead>
      <TableRow>
        <TableHeaderCell>Example</TableHeaderCell>
        <TableHeaderCell>Usage</TableHeaderCell>
        <TableHeaderCell>Density</TableHeaderCell>
        <TableHeaderCell>Height</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {densities.map(d => (
        <DensityRow key={d} density={d} />
      ))}
    </TableBody>
  </DocTable>
);
