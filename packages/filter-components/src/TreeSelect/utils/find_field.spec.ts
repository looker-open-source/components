/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ILookmlModelExplore } from '@looker/sdk/src/4.0u/models';
import { findField } from './find_field';

describe('findField', () => {
  it('should return undefined given empty field, explore, or explore fields', () => {
    expect(findField('')).not.toBeDefined();
    expect(findField('explore-a.dim-1')).not.toBeDefined();
    expect(findField('explore-a.dim-1', {})).not.toBeDefined();
    expect(findField('explore-a.dim-1', { fields: {} })).not.toBeDefined();
  });

  it('should return the correct dimension, measure or filter-only field', () => {
    const dimensions = [
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
    ];

    const measures = [
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
    ];

    const filters = [
      {
        can_filter: true,
        filter: true,
        name: 'explore-a.filter-1',
        label_short: 'filter-1',
        view_label: 'view-a',
      },
      {
        can_filter: true,
        filter: true,
        name: 'explore-a.filter-2',
        label_short: 'filter-2',
        view_label: 'view-b',
      },
    ];

    const explore: ILookmlModelExplore = {
      label: 'explore-a',
      model_name: 'model-a',
      name: 'explore-a',
      fields: {
        dimensions,
        filters,
        measures,
      },
    };

    expect(findField('explore-a.dim-1', explore)).toEqual(dimensions[0]);
    expect(findField('explore-a.measure-2', explore)).toEqual(measures[1]);
    expect(findField('explore-a.filter-1', explore)).toEqual(filters[0]);
  });
});
