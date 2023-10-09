/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { isListColor } from './isListColor';

describe('isListColor', () => {
  test('valid list color', () => {
    expect(isListColor('key')).toBe(true);
    expect(isListColor('calculation')).toBe(true);
    expect(isListColor('dimension')).toBe(true);
    expect(isListColor('measure')).toBe(true);
  });

  test('non-list color', () => {
    expect(isListColor('red')).toBe(false);
    expect(isListColor('#000000')).toBe(false);
  });

  test('no color', () => {
    expect(isListColor()).toBe(false);
  });
});
