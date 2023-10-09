/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import styled from 'styled-components';
import type { Colors } from '@looker/design-tokens';

export const CircleContainer = styled.svg<{ color?: keyof Colors }>`
  fill: transparent;
  height: 100%;
  position: absolute;
  stroke: ${({ theme, color = 'key' }) => theme.colors[color]};
  width: 100%;
`;
