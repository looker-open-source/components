/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';
import type {
  CompatibleHTMLProps,
  FontSizeProps,
  FontWeightProps,
} from '@looker/design-tokens';
import type { SpaceHelperProps } from '../../Layout/Space';
import { Space } from '../../Layout/Space';
import { Heading } from '../../Text';

export type ModalHeaderProps = CompatibleHTMLProps<HTMLDivElement> &
  SpaceHelperProps &
  FontSizeProps &
  FontWeightProps & {
    children: ReactNode;
    /**
     * Usually used as a closing button this element is displayed on the right side of the component
     */
    detail?: ReactNode | string;
  };

const ModalHeaderLayout = ({
  children,
  detail,
  fontSize,
  fontWeight = 'semiBold',
  id,
  ...props
}: ModalHeaderProps) => {
  return (
    <Space as="header" between aria-labelledby={id} {...props}>
      <StyledHeading
        as="h3"
        fontSize={fontSize}
        fontWeight={fontWeight}
        id={id}
        mr="xlarge"
        truncate
      >
        {children}
      </StyledHeading>
      {detail && <Detail>{detail}</Detail>}
    </Space>
  );
};

const StyledHeading = styled(Heading)`
  display: grid;
  grid-gap: ${({ theme }) => theme.space.xsmall};
  grid-template-columns: auto auto auto;
  align-items: center;
`;

const Detail = styled.div`
  margin-bottom: -${({ theme }) => theme.space.u2};
  margin-top: -${({ theme }) => theme.space.u2};
`;

export const ModalHeader = styled(ModalHeaderLayout)<ModalHeaderProps>``;
