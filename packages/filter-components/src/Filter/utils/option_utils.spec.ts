/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { createOptions, filterOptions } from './option_utils';

const options = [
  { label: 'Foo', value: '0' },
  { label: 'Bar', value: '1' },
  { label: 'Baz', value: '2' },
];

describe('filterOptions', () => {
  describe('when filterTerm is empty', () => {
    it('returns all options with no excludedValues', () => {
      const resultOptions = filterOptions(options, '');
      expect(resultOptions).toEqual(options);
    });

    it('returns all options with no empty excludedValues', () => {
      const resultOptions2 = filterOptions(options, '', []);
      expect(resultOptions2).toEqual(options);
    });

    it('returns all options with no matches in excludedValues', () => {
      const resultOptions3 = filterOptions(options, '', ['18']);
      expect(resultOptions3).toEqual(options);
    });
  });

  it('returns options where the label matches the term anywhere, case-insensitive', () => {
    const resultOptions = filterOptions(options, 'oo');
    expect(resultOptions).toEqual([options[0]]);

    const resultOptions2 = filterOptions(options, 'ba');
    expect(resultOptions2).toEqual([options[1], options[2]]);
  });

  it('returns options where the value is not in excludedValues', () => {
    const resultOptions = filterOptions(options, '', ['0']);
    expect(resultOptions).toEqual([options[1], options[2]]);

    const resultOptions2 = filterOptions(options, 'ba', ['1']);
    expect(resultOptions2).toEqual([options[2]]);
  });
});

describe('createOptions', () => {
  it('returns options when suggestions are a string', () => {
    const expectedOptions = [{ value: 'Foo', label: 'Foo' }];
    const suggestions = 'Foo';

    const options = createOptions(suggestions);

    expect(options).toEqual(expectedOptions);
  });

  it('returns options when suggestions are an array of strings', () => {
    const expectedOptions = [
      { value: 'Foo', label: 'Foo' },
      { value: 'Bar', label: 'Bar' },
      { value: 'Baz', label: 'Baz' },
    ];
    const suggestions = ['Foo', 'Bar', 'Baz'];

    const options = createOptions(suggestions as string | string[]);

    expect(options).toEqual(expectedOptions);
  });

  it('returns an empty array when suggestion are undefined', () => {
    const options = createOptions(/* suggestions= */ undefined);

    expect(options).toEqual([]);
  });

  it('returns an empty array when suggestion are an empty string', () => {
    const options = createOptions(/* suggestions= */ '');

    expect(options).toEqual([]);
  });

  it('returns an empty array when suggestions are an empty array', () => {
    const options = createOptions(/* suggestions= */ []);

    expect(options).toEqual([]);
  });

  it('returns an empty array when suggestions are an object instead of a string OR an array', () => {
    const suggestions = { '': ['Foo', 'Bar', 'Baz'] } as unknown as string[];

    const options = createOptions(suggestions);

    expect(options).toEqual([]);
  });
});
