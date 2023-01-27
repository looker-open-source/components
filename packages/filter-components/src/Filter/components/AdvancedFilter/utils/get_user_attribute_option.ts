/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { TYPE_USER_ATTRIBUTE } from '@looker/filter-expressions'
import { useTranslation } from '../../../../utils'

export const useUserAttributeOption = () => {
  const { t } = useTranslation('get_user_attribute_option')
  return {
    value: TYPE_USER_ATTRIBUTE,
    label: t('matches a user attribute'),
  }
}
