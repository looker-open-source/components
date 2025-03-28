/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { mockTreeData } from '../fixtures';
import type { TreeModel } from '../types';
import { getOption } from './get_option';

describe('getOption', () => {
  test('with children', () => {
    expect(getOption(mockTreeData[0])).toMatchObject({
      label: 'Root1',
      payload: mockTreeData[0],
      value: '.Root1_0',
    });
  });

  test('without children', () => {
    const node = mockTreeData?.[0]?.children?.[0]?.children?.[0];
    expect(getOption(node as TreeModel)).toMatchObject({
      label: 'a leaf node',
      payload: {
        data: 'some data',
      },
      value: '.Root1_0.some section_0.a leaf node_0',
    });
  });
});
