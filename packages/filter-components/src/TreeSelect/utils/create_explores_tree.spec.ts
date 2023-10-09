/*

 MIT License

 Copyright (c) 2023 Google LLC

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import { createExploresTree } from './create_explores_tree';
import {
  expected,
  explores,
  more_robust_expected,
  more_robust_explores,
  explore_with_groups_expected,
  explore_with_groups,
  explore_unsorted,
  explore_unsorted_expected,
} from './create_explores_tree.mock';

describe('createExploresTree tests', () => {
  it('should return empty array given empty explores', () => {
    expect(createExploresTree([])).toEqual([]);
  });

  it('should mark explore-level entries as not highlightable', () => {
    const trees = createExploresTree(explores);
    expect(trees[0].isNotHighlightable).toBe(true);
    expect(
      trees[0].children?.[0].children?.[0].isNotHighlightable
    ).toBeUndefined();
  });

  it('returns a basic tree without groups or hidden/non-filterable fields', () => {
    const result = createExploresTree(explores);
    expect(result).toStrictEqual(expected);
  });
  it('returns a tree with groups', () => {
    const result = createExploresTree(explore_with_groups);
    expect(result).toStrictEqual(explore_with_groups_expected);
  });
  it('returns a tree handling groups and hidden/non-filterable fields', () => {
    const result = createExploresTree(more_robust_explores);
    expect(result).toStrictEqual(more_robust_expected);
  });
  it('returns a tree that doesnt munge the sorting', () => {
    const result = createExploresTree(explore_unsorted);
    expect(result).toStrictEqual(explore_unsorted_expected);
  });
  it('does not return a tree with duplicate ids', () => {
    const result = createExploresTree(more_robust_explores);
    const { list_ids, unique_ids } = result.reduce(
      (
        acc: { list_ids: string[]; unique_ids: { [key: string]: string } },
        curr
      ) => {
        if (curr.id) {
          acc.list_ids.push(curr.id);
          acc.unique_ids[curr.id] = curr.id;
        }
        if (curr.children) {
          curr.children.forEach(child => {
            if (child.id) {
              acc.list_ids.push(child.id);
              acc.unique_ids[child.id] = child.id;
            }
            if (child.children) {
              child.children.forEach(youngin => {
                if (youngin.id) {
                  acc.list_ids.push(youngin.id);
                  acc.unique_ids[youngin.id] = youngin.id;
                }
              });
            }
          });
        }
        return acc;
      },
      { list_ids: [], unique_ids: {} }
    );
    expect(list_ids).toHaveLength(Object.keys(unique_ids).length);

    // there is only 1 explore inside the list so grab it directly
    const fieldSet = more_robust_explores[0].fields;

    const concated_fields = [
      ...(fieldSet?.dimensions ?? []),
      ...(fieldSet?.measures ?? []),
      ...(fieldSet?.filters ?? []).concat(fieldSet?.parameters ?? []),
    ].filter(f => f.can_filter && !f.hidden);

    // explictly add explore container
    const concated_fields_with_explore_container = [
      'explore_id',
      ...concated_fields,
    ];

    expect(list_ids).toHaveLength(
      concated_fields_with_explore_container.length
    );
  });
});
