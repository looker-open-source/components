/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { getComboboxText } from './getComboboxText';

describe('getComboboxText', () => {
  it('given an option object, returns the label', () => {
    expect(
      getComboboxText({ label: 'some label', value: 'some value' })
    ).toEqual('some label');
    expect(getComboboxText({ label: '', value: 'some value' })).toEqual('');
  });

  it('returns the value if the label is undefined', () => {
    expect(getComboboxText({ value: 'some value' })).toEqual('some value');
  });

  it('given a string and a list of options, returns the matching option label', () => {
    expect(
      getComboboxText('some value', [
        { label: 'a label', value: 'a value' },
        { label: 'some label', value: 'some value' },
        { label: 'another label', value: 'another value' },
      ])
    ).toEqual('some label');
  });

  it('given a string and a list of options, returns the string if there is no matching value', () => {
    expect(
      getComboboxText('a different value', [
        { label: 'a label', value: 'a value' },
        { label: 'some label', value: 'some value' },
        { label: 'another label', value: 'another value' },
      ])
    ).toEqual('a different value');
  });

  it('given only a string, returns the string', () => {
    expect(getComboboxText('a different value')).toEqual('a different value');
  });
});
