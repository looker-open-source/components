/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { renderHook } from '@testing-library/react-hooks';
import { useParamFilterOptions } from './get_tier_filter_options';
import { i18nInit } from '../../../../utils/i18n';

describe('useParamFilterOptions', () => {
  i18nInit();

  it('defaults to = for numeric type parameter filters', () => {
    const { result } = renderHook(() => useParamFilterOptions(true));
    expect(result.current).toEqual([
      {
        label: 'is',
        value: '=',
      },
      {
        label: 'matches a user attribute',
        value: 'user_attribute',
      },
    ]);
  });

  it('defaults to match for non-numeric parameter type filters', () => {
    const { result } = renderHook(() => useParamFilterOptions());
    expect(result.current).toEqual([
      {
        label: 'is',
        value: 'match',
      },
      {
        label: 'matches a user attribute',
        value: 'user_attribute',
      },
    ]);
  });
});
