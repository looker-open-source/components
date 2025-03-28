/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { useTranslation } from '../../../../utils';
import { useUserAttributeOption } from './get_user_attribute_option';

/**
 * For yesno type fields, "is not" may result in an error in some dialects
 * and is not necessary given that there are only 2 values – Yes & No
 */
export const useTierFilterOptions = (isYesNoField?: boolean) => {
  const { t } = useTranslation('get_tier_filter_options');
  const userAttributeOption = useUserAttributeOption();
  const options = [
    { value: 'anyvalue', label: t('is any value') },
    { value: 'match', label: t('is') },
    userAttributeOption,
  ];
  if (!isYesNoField) {
    options.splice(2, 0, { value: '!match', label: t('is not') });
  }

  return options;
};

export const useParamFilterOptions = (isNumeric = false) => {
  const { t } = useTranslation('get_tier_filter_options');
  const userAttributeOption = useUserAttributeOption();
  return [
    { value: isNumeric ? '=' : 'match', label: t('is') },
    userAttributeOption,
  ];
};
