/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { checkUserAttributes } from './check_user_attributes';

describe('checkUserAttributes', () => {
  it('returns true if user attributes are ready', () => {
    const ast = {
      type: 'user_attribute',
    };
    const userAttributes = [
      {
        name: 'first_name',
        label: 'First Name',
        value: 'Testfirstname',
      },
      {
        name: 'last_name',
        label: 'Last Name',
        value: 'Testlastname',
      },
    ];
    expect(checkUserAttributes(userAttributes, ast)).toBe(true);
  });

  it('returns true if ast is not user_attribute type', () => {
    const ast = {
      type: 'match',
    };
    expect(checkUserAttributes([], ast)).toBe(true);
  });

  it('returns false if user attributes are not ready', () => {
    const ast = {
      type: 'user_attribute',
    };
    expect(checkUserAttributes([], ast)).toBe(false);
  });
});
