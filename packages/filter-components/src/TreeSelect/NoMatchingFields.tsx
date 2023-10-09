/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { SpaceVertical, Heading, Paragraph } from '@looker/components';
import React, { useContext } from 'react';
import { useTranslation } from '../utils';
import { TreeSelectContext } from './TreeSelectContext';

export const NoMatchingFields = () => {
  // Rendering inside the dropdown determines horizontal & vertical padding
  const { withDropdown } = useContext(TreeSelectContext);
  const { t } = useTranslation('NoMatchingFields');
  return (
    <SpaceVertical
      px={withDropdown ? 'u2' : 'none'}
      py={withDropdown ? 'none' : 'u2'}
      gap="u1"
    >
      <Heading as="h5" color="text1" fontWeight="bold">
        {t('No Matching Fields')}
      </Heading>
      <Paragraph color="text1" fontSize="small">
        {t('Try Something Else')}
      </Paragraph>
    </SpaceVertical>
  );
};
