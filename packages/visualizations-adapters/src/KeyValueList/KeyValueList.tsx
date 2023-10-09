/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import styled from 'styled-components';
import { Truncate } from '@looker/components';
import { useTranslation } from '../utils';
import type { SDKRecord } from '../types';

interface KeyValueListProps {
  value: SDKRecord;
}

export const KeyValueList = ({ value }: KeyValueListProps) => {
  const { t } = useTranslation('KeyValueList');
  const collection = Object.entries(value);

  const renderValueByType = (v: string | boolean | number | SDKRecord) => {
    switch (typeof v) {
      case 'object':
        return v === null ? t('null') : <KeyValueList value={v} />;
      case 'boolean':
        return v ? t('true') : t('false');
      case 'undefined':
        return t('undefined');
      default:
        return v;
    }
  };

  return (
    <DL>
      {collection.map((pair: [string, string]) => {
        const [key, val] = pair;
        return (
          <ListRow key={key}>
            <DT>
              <Truncate>{key}</Truncate>
            </DT>
            <DD>{renderValueByType(val)}</DD>
          </ListRow>
        );
      })}
    </DL>
  );
};

const ListRow = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.ui2};
  padding: ${({ theme }) => theme.space.xsmall} 0;
`;

const DD = styled.dd`
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: ${({ theme }) => theme.lineHeights.large};
  margin: 0;
  margin-left: ${({ theme }) => theme.space.xlarge};
`;

const DL = styled.dl`
  margin: 0;
  ${DD} & {
    margin-top: ${({ theme }) => theme.space.xsmall};
  }
`;

const DT = styled.dt`
  border-bottom: 1px;
  color: ${({ theme }) => theme.colors.ui4};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: ${({ theme }) => theme.lineHeights.small};
  margin: 0;
`;
