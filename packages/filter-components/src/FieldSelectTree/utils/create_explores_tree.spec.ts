/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ILookmlModelExplore } from '@looker/sdk/src/4.0u/models'
import { createExploresTree } from './create_explores_tree'

// TODO: Finish adding tests here
describe('createExploresTree tests', () => {
  it('should return empty array given empty explores', () => {
    expect(createExploresTree([])).toEqual([])
  })

  it('should mark explore-level entries as not highlightable', () => {
    const explore: ILookmlModelExplore[] = [
      {
        label: 'explore-a',
        model_name: 'model-a',
        name: 'explore-a',
        fields: {
          dimensions: [
            {
              can_filter: true,
              name: 'explore-a.dim-1',
              label_short: 'dim-1',
              view_label: 'view-a',
            },
            {
              can_filter: true,
              name: 'explore-a.dim-2',
              label_short: 'dim-2',
              view_label: 'view-b',
            },
          ],
          measures: [
            {
              can_filter: true,
              measure: true,
              name: 'explore-a.measure-1',
              label_short: 'measure-1',
              view_label: 'view-a',
            },
            {
              can_filter: true,
              measure: true,
              name: 'explore-a.measure-2',
              label_short: 'measure-2',
              view_label: 'view-b',
            },
          ],
        },
      } as ILookmlModelExplore,
    ]

    const trees = createExploresTree(explore)

    expect(trees).toMatchSnapshot()

    expect(trees[0].isNotHighlightable).toBe(true)
    expect(
      trees[0].children?.[0].children?.[0].isNotHighlightable
    ).toBeUndefined()
  })
})
