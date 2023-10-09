/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import styled from 'styled-components';
import { Box2, Heading, Code } from '../../../src';

export interface BorderType {
  color: string;
  label: string;
  textColor: string;
  examples: string[];
}

const borderData: BorderType[] = [
  {
    color: 'ui3',
    examples: ['background', 'ui1', 'ui2'],
    label: 'Default Border',
    textColor: 'text3',
  },
  {
    color: 'ui4',
    examples: ['background', 'ui1', 'ui2', 'ui3'],
    label: 'Dark Border',
    textColor: 'text3',
  },
  {
    color: 'ui2',
    examples: ['background', 'ui1', 'ui3'],
    label: 'Light Border',
    textColor: 'text3',
  },
  {
    color: 'text2',
    examples: ['inverse'],
    label: 'Border on Dark',
    textColor: 'inverseOn',
  },
];

export const BorderRender = () =>
  borderData.map(border => <Example border={border} key={border.color} />);

const Example = ({
  border: { color, examples, label, textColor },
}: {
  border: BorderType;
}) => (
  <Box2 mb="xlarge">
    <Heading as="h3" fontWeight="semiBold" mb="small">
      {label} <Code fontSize="medium">{color}</Code>
    </Heading>
    {examples.map(example => (
      <BorderExample bg={example} key={example} color={textColor} border="ui3">
        <Code>{example}</Code>
        <BorderDividerExample bg={color} />
      </BorderExample>
    ))}
  </Box2>
);

const BorderExample = styled(Box2)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space.u5};

  &:not(:last-child) {
    border-bottom: none;
  }
`;

const BorderDividerExample = styled(Box2)`
  height: 1px;
  width: 70%;
`;
