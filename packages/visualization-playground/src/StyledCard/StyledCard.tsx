/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Card, theme } from '@looker/components';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  background: ${theme.colors.text4};
  border-color: ${theme.colors.text};
  border-radius: ${theme.radii.medium};
  display: grid;
  grid-gap: 1rem;
  height: auto;
  margin-bottom: 1rem;
  padding: 1rem;
`;
