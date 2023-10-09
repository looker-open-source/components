/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { expected } from './create_explores_tree.mock';
import { disableFieldsInTree } from './disableFieldsInTree';
import { findFieldInTree } from './find_field_in_tree';

describe('disableFieldsInTree', () => {
  it('does nothing when there are no fields', () => {
    expect(disableFieldsInTree(expected, [], 'some reason')).toEqual(expected);
  });

  it('should mark explore-level entries as not highlightable', () => {
    const result = disableFieldsInTree(
      expected,
      ['explore-a.measure-a', 'explore-a.dim-b'],
      'some reason'
    );
    // the disabled ones
    expect(findFieldInTree(result, 'explore-a.measure-a')?.disabled).toEqual(
      'some reason'
    );
    expect(findFieldInTree(result, 'explore-a.dim-b')?.disabled).toEqual(
      'some reason'
    );
    // the not disabled ones
    expect(
      findFieldInTree(result, 'explore-a.dim-a')?.disabled
    ).toBeUndefined();
    expect(
      findFieldInTree(result, 'explore-a.measure-b')?.disabled
    ).toBeUndefined();
  });
});
