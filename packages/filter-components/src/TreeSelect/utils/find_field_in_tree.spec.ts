/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { exploreData, mockTreeData } from '../stories/examples';
import { createExploresTree } from './create_explores_tree';
import { findFieldInTree } from './find_field_in_tree';

describe('findFieldInTree', () => {
  test('when payload has field', () => {
    // createExploresTree adds field to node payload
    const exploreTree = createExploresTree([exploreData]);
    expect(findFieldInTree(exploreTree, 'users.age')).toMatchObject({
      id: '.Orders_0.Users_1.Age_0',
      payload: {
        field: 'users.age',
        fieldOptions: {
          label_short: 'Age',
          view_label: 'Users',
        },
      },
    });
  });

  test('by value', () => {
    expect(findFieldInTree(mockTreeData, 'a leaf node2')).toMatchObject({
      value: 'a leaf node2',
      id: '.Root2_1.some section2_0.a leaf node2_0',
      isOpen: false,
      payload: {
        data: 'some data',
      },
    });
  });

  test('no field', () => {
    expect(findFieldInTree(mockTreeData)).toBe(undefined);
  });

  test('no tree', () => {
    expect(findFieldInTree(undefined, 'users.age')).toBe(undefined);
  });
});
