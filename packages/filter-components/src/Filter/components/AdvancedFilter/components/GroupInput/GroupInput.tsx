/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { InputTextProps } from '@looker/components';
import { InputText } from '@looker/components';
import React from 'react';
import styled from 'styled-components';
import type { PlacementProps } from '../../../../utils/filter_styles';
import { inputPlacementStyle } from '../../../../utils/filter_styles';

export type GroupInputProps = InputTextProps & PlacementProps;

const InputLayout = ({
  type = 'number',
  // placement only used in style block below
  placement: _,
  ...props
}: GroupInputProps) => {
  return <InputText autoResize type={type} {...props} />;
};

export const GroupInput = styled(InputLayout).attrs(
  ({ placement = 'middle' }) => ({ placement })
)`
  ${inputPlacementStyle}
  input {
    text-align: right;
  }
`;
