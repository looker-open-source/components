/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import i18next from 'i18next';
import { describeIsItem } from './describe_is_item';

export const describeIsAnyValue = () => {
  const t = i18next.t.bind(i18next);
  return describeIsItem(true, t('any value', { ns: 'describe_is_any_value' }));
};
