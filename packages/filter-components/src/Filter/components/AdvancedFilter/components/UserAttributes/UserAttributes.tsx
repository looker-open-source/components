/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { findUserAttribute } from '@looker/filter-expressions';
import React from 'react';
import type { FilterParamProps } from '../../../../types/filter_param_props';
import { useTranslation } from '../../../../../utils';
import { GroupSelect } from '../GroupSelect';

const createOptions = (userAttributes: any[] = []) =>
  userAttributes.map(({ name, label, value }: any) => ({
    value: name,
    label: `${label} (${value})`,
  }));

export const UserAttributes = ({
  item,
  item: { attributeName },
  userAttributes,
  onChange,
  validationMessage,
}: FilterParamProps) => {
  const { t } = useTranslation('UserAttributes');
  const userAttributeChange = (value: string) => {
    const userAttribute = findUserAttribute(value, userAttributes);
    onChange(item.id, {
      attributeName: value,
      attributeValue: userAttribute && userAttribute.value,
    });
  };

  return (
    <GroupSelect
      data-testid="filter-user-attributes"
      value={attributeName}
      placeholder={t('placeholder')}
      options={createOptions(userAttributes)}
      onChange={userAttributeChange}
      validationType={validationMessage?.type}
      placement="right"
    />
  );
};
