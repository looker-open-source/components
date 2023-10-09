/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { checkAndLoadUserAttributes } from './check_and_load_user_attributes';

describe('checkAndLoadUserAttributes', () => {
  it('returns true if user attributes are ready', () => {
    const loadUserAttributes = jest.fn();
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
    expect(
      checkAndLoadUserAttributes(loadUserAttributes, userAttributes, ast)
    ).toBe(true);
  });

  it('returns true if ast is not user_attribute type', () => {
    const loadUserAttributes = jest.fn();
    const ast = {
      type: 'match',
    };
    expect(checkAndLoadUserAttributes(loadUserAttributes, [], ast)).toBe(true);
  });

  it('returns false and calls loadUserAttributes if user attributes are not ready', () => {
    const loadUserAttributes = jest.fn();
    const ast = {
      type: 'user_attribute',
    };
    expect(checkAndLoadUserAttributes(loadUserAttributes, [], ast)).toBe(false);
    expect(loadUserAttributes).toHaveBeenCalledTimes(1);
  });
});
