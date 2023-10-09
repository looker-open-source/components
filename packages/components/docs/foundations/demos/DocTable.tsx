/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import styled from 'styled-components';
import { Code, Table } from '../../../src';

export const DocTable = styled(Table)`
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-bottom: ${({ theme }) => theme.space.u8};

  ${Code} {
    color: ${({ theme }) => theme.colors.key};
  }
`;
