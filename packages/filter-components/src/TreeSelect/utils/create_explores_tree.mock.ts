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
import type { ILookmlModelExplore } from '@looker/sdk/src/4.0u/models';

export const explores: ILookmlModelExplore[] = [
  {
    label: 'explore-a',
    model_name: 'model-a',
    name: 'explore-a',
    fields: {
      dimensions: [
        {
          can_filter: true,
          name: 'explore-a.dim-a',
          label_short: 'dim-a',
          view_label: 'view-a',
        },
        {
          can_filter: true,
          name: 'explore-a.dim-b',
          label_short: 'dim-b',
          view_label: 'view-b',
        },
      ],
      measures: [
        {
          can_filter: true,
          measure: true,
          name: 'explore-a.measure-a',
          label_short: 'measure-a',
          view_label: 'view-a',
        },
        {
          can_filter: true,
          measure: true,
          name: 'explore-a.measure-b',
          label_short: 'measure-b',
          view_label: 'view-b',
        },
      ],
    },
  },
];

export const expected = [
  {
    detail: 'model-a',
    id: '.explore-a_0',
    isNotHighlightable: true,
    isOpen: false,
    payload: { explore: 'explore-a', model: 'model-a' },
    value: 'explore-a',
    children: [
      {
        id: '.explore-a_0.view-a_0',
        isOpen: false,
        value: 'view-a',
        children: [
          {
            id: '.explore-a_0.view-a_0.dim-a_0',
            isOpen: false,
            isSecondary: undefined,
            payload: {
              enumerations: undefined,
              explore: 'explore-a',
              field: 'explore-a.dim-a',
              fieldOptions: {
                can_filter: true,
                label_short: 'dim-a',
                name: 'explore-a.dim-a',
                view_label: 'view-a',
              },
              model: 'model-a',
              suggestDimension: undefined,
              suggestExplore: 'explore-a',
              type: 'string',
              view: undefined,
            },
            value: 'dim-a',
          },
          {
            id: '.explore-a_0.view-a_0.measure-a_1',
            isOpen: false,
            isSecondary: true,
            payload: {
              enumerations: undefined,
              explore: 'explore-a',
              field: 'explore-a.measure-a',
              fieldOptions: {
                can_filter: true,
                label_short: 'measure-a',
                measure: true,
                name: 'explore-a.measure-a',
                view_label: 'view-a',
              },
              model: 'model-a',
              suggestDimension: undefined,
              suggestExplore: 'explore-a',
              type: 'string',
              view: undefined,
            },
            value: 'measure-a',
          },
        ],
      },
      {
        id: '.explore-a_0.view-b_1',
        isOpen: false,
        value: 'view-b',
        children: [
          {
            id: '.explore-a_0.view-b_1.dim-b_0',
            isOpen: false,
            isSecondary: undefined,
            payload: {
              enumerations: undefined,
              explore: 'explore-a',
              field: 'explore-a.dim-b',
              fieldOptions: {
                can_filter: true,
                label_short: 'dim-b',
                name: 'explore-a.dim-b',
                view_label: 'view-b',
              },
              model: 'model-a',
              suggestDimension: undefined,
              suggestExplore: 'explore-a',
              type: 'string',
              view: undefined,
            },
            value: 'dim-b',
          },
          {
            id: '.explore-a_0.view-b_1.measure-b_1',
            isOpen: false,
            isSecondary: true,
            payload: {
              enumerations: undefined,
              explore: 'explore-a',
              field: 'explore-a.measure-b',
              fieldOptions: {
                can_filter: true,
                label_short: 'measure-b',
                measure: true,
                name: 'explore-a.measure-b',
                view_label: 'view-b',
              },
              model: 'model-a',
              suggestDimension: undefined,
              suggestExplore: 'explore-a',
              type: 'string',
              view: undefined,
            },
            value: 'measure-b',
          },
        ],
      },
    ],
  },
];

export const explore_with_groups: ILookmlModelExplore[] = [
  {
    label: 'explore-a',
    model_name: 'model-a',
    name: 'explore-a',
    fields: {
      dimensions: [
        // view-a
        {
          can_filter: true,
          name: 'view-a.dim-a',
          label_short: 'dim-a',
          view_label: 'view-a',
        },
        {
          can_filter: true,
          name: 'view-a.dim-b',
          label_short: 'dim-b',
          view_label: 'view-a',
          field_group_label: 'dimension-group',
        },
        {
          can_filter: true,
          name: 'view-a.dim-c',
          label_short: 'dim-c',
          view_label: 'view-a',
          field_group_label: 'dimension-group',
        },
        // view-b
        {
          can_filter: true,
          name: 'view-b.dim-a',
          label_short: 'dim-a',
          view_label: 'view-b',
        },
      ],
      measures: [
        // view-a
        {
          can_filter: true,
          measure: true,
          name: 'view-a.measure-a',
          label_short: 'measure-a',
          view_label: 'view-a',
        },
        // view-b
        {
          can_filter: true,
          measure: true,
          name: 'view-a.measure-a',
          label_short: 'measure-a',
          view_label: 'view-b',
        },
      ],
    },
  },
];

export const explore_with_groups_expected = [
  {
    children: [
      {
        children: [
          {
            id: '.explore-a_0.view-a_0.dim-a_0',
            isOpen: false,
            isSecondary: undefined,
            payload: {
              enumerations: undefined,
              explore: 'explore-a',
              field: 'view-a.dim-a',
              fieldOptions: {
                can_filter: true,
                label_short: 'dim-a',
                name: 'view-a.dim-a',
                view_label: 'view-a',
              },
              model: 'model-a',
              suggestDimension: undefined,
              suggestExplore: 'explore-a',
              type: 'string',
              view: undefined,
            },
            value: 'dim-a',
          },
          {
            children: [
              {
                id: '.explore-a_0.view-a_0.dimension-group_0.dim-b_0',
                isOpen: false,
                isSecondary: undefined,
                payload: {
                  enumerations: undefined,
                  explore: 'explore-a',
                  field: 'view-a.dim-b',
                  fieldOptions: {
                    can_filter: true,
                    field_group_label: 'dimension-group',
                    label_short: 'dim-b',
                    name: 'view-a.dim-b',
                    view_label: 'view-a',
                  },
                  model: 'model-a',
                  suggestDimension: undefined,
                  suggestExplore: 'explore-a',
                  type: 'string',
                  view: undefined,
                },
                value: 'dim-b',
              },
              {
                id: '.explore-a_0.view-a_0.dimension-group_0.dim-c_1',
                isOpen: false,
                isSecondary: undefined,
                payload: {
                  enumerations: undefined,
                  explore: 'explore-a',
                  field: 'view-a.dim-c',
                  fieldOptions: {
                    can_filter: true,
                    field_group_label: 'dimension-group',
                    label_short: 'dim-c',
                    name: 'view-a.dim-c',
                    view_label: 'view-a',
                  },
                  model: 'model-a',
                  suggestDimension: undefined,
                  suggestExplore: 'explore-a',
                  type: 'string',
                  view: undefined,
                },
                value: 'dim-c',
              },
            ],
            id: '.explore-a_0.view-a_0.dimension-group_0',
            isOpen: false,
            value: 'dimension-group',
          },
          {
            id: '.explore-a_0.view-a_0.measure-a_1',
            isOpen: false,
            isSecondary: true,
            payload: {
              enumerations: undefined,
              explore: 'explore-a',
              field: 'view-a.measure-a',
              fieldOptions: {
                can_filter: true,
                label_short: 'measure-a',
                measure: true,
                name: 'view-a.measure-a',
                view_label: 'view-a',
              },
              model: 'model-a',
              suggestDimension: undefined,
              suggestExplore: 'explore-a',
              type: 'string',
              view: undefined,
            },
            value: 'measure-a',
          },
        ],
        id: '.explore-a_0.view-a_0',
        isOpen: false,
        value: 'view-a',
      },
      {
        children: [
          {
            id: '.explore-a_0.view-b_1.dim-a_0',
            isOpen: false,
            isSecondary: undefined,
            payload: {
              enumerations: undefined,
              explore: 'explore-a',
              field: 'view-b.dim-a',
              fieldOptions: {
                can_filter: true,
                label_short: 'dim-a',
                name: 'view-b.dim-a',
                view_label: 'view-b',
              },
              model: 'model-a',
              suggestDimension: undefined,
              suggestExplore: 'explore-a',
              type: 'string',
              view: undefined,
            },
            value: 'dim-a',
          },
          {
            id: '.explore-a_0.view-b_1.measure-a_1',
            isOpen: false,
            isSecondary: true,
            payload: {
              enumerations: undefined,
              explore: 'explore-a',
              field: 'view-a.measure-a',
              fieldOptions: {
                can_filter: true,
                label_short: 'measure-a',
                measure: true,
                name: 'view-a.measure-a',
                view_label: 'view-b',
              },
              model: 'model-a',
              suggestDimension: undefined,
              suggestExplore: 'explore-a',
              type: 'string',
              view: undefined,
            },
            value: 'measure-a',
          },
        ],
        id: '.explore-a_0.view-b_1',
        isOpen: false,
        value: 'view-b',
      },
    ],
    detail: 'model-a',
    id: '.explore-a_0',
    isNotHighlightable: true,
    isOpen: false,
    payload: { explore: 'explore-a', model: 'model-a' },
    value: 'explore-a',
  },
];

export const more_robust_explores: ILookmlModelExplore[] = [
  {
    label: 'explore-a',
    model_name: 'model-a',
    name: 'explore-a',
    fields: {
      dimensions: [
        // view-a
        {
          can_filter: true,
          name: 'view-a.dim-a',
          label_short: 'dim-a',
          view_label: 'view-a',
        },
        {
          can_filter: true,
          name: 'view-a.dim-b',
          label_short: 'dim-b',
          view_label: 'view-a',
          field_group_label: 'dimension-group',
        },
        {
          can_filter: true,
          name: 'view-a.dim-c',
          label_short: 'dim-c',
          view_label: 'view-a',
          field_group_label: 'dimension-group',
        },
        // view-b
        {
          can_filter: true,
          name: 'view-b.dim-a',
          label_short: 'dim-a',
          view_label: 'view-b',
        },
        {
          can_filter: false,
          name: 'view-b.dim-x',
          label_short: 'dim-x',
          view_label: 'view-b',
        },
        // view-x -- try and break indexing
        {
          can_filter: false,
          name: 'view-a.dim-x',
          label_short: 'dim-x',
          view_label: 'view-x',
        },
      ],
      measures: [
        // view-a
        {
          can_filter: true,
          measure: true,
          name: 'view-a.measure-a',
          label_short: 'measure-a',
          view_label: 'view-a',
        },
        {
          can_filter: true,
          measure: true,
          name: 'view-a.measure-b',
          label_short: 'measure-b',
          view_label: 'view-a',
          field_group_label: 'measure-group',
        },
        {
          can_filter: true,
          measure: true,
          name: 'view-a.measure-c',
          label_short: 'measure-c',
          view_label: 'view-a',
          field_group_label: 'measure-group',
        },
        // view-b
        {
          can_filter: true,
          measure: true,
          name: 'view-a.measure-a',
          label_short: 'measure-a',
          view_label: 'view-b',
        },
        {
          can_filter: false,
          measure: true,
          name: 'view-a.measure-x',
          label_short: 'measure-x',
          view_label: 'view-b',
        },
        // view-y -- try and break indexing
        {
          can_filter: false,
          name: 'view-a.measure-y',
          label_short: 'filter-y',
          view_label: 'view-y',
        },
      ],
      filters: [
        // view-a
        {
          can_filter: true,
          name: 'view-a.filter-a',
          label_short: 'filter-a',
          view_label: 'view-a',
        },
        {
          can_filter: true,
          name: 'view-a.filter-b',
          label_short: 'filter-b',
          view_label: 'view-b',
        },
        {
          can_filter: true,
          name: 'view-a.filter-c',
          label_short: 'filter-c',
          view_label: 'view-a',
          field_group_label: 'filter-group',
        },
        {
          can_filter: true,
          hidden: true,
          name: 'view-a.filter-x',
          label_short: 'filter-x',
          view_label: 'view-a',
        },
        // view-b
        {
          can_filter: true,
          name: 'view-b.filter-d',
          label_short: 'filter-d',
          view_label: 'view-b',
          field_group_label: 'filter-group',
        },
        // view-z -- try and break indexing
        {
          can_filter: false,
          name: 'view-a.filter-z',
          label_short: 'filter-z',
          view_label: 'view-z',
        },
      ],
    },
  },
];

export const more_robust_expected = [
  {
    children: [
      {
        children: [
          {
            id: '.explore-a_0.view-a_0.dim-a_1',
            isOpen: false,
            isSecondary: undefined,
            payload: {
              enumerations: undefined,
              explore: 'explore-a',
              field: 'view-a.dim-a',
              fieldOptions: {
                can_filter: true,
                label_short: 'dim-a',
                name: 'view-a.dim-a',
                view_label: 'view-a',
              },
              model: 'model-a',
              suggestDimension: undefined,
              suggestExplore: 'explore-a',
              type: 'string',
              view: undefined,
            },
            value: 'dim-a',
          },
          {
            children: [
              {
                id: '.explore-a_0.view-a_0.dimension-group_1.dim-b_0',
                isOpen: false,
                isSecondary: undefined,
                payload: {
                  enumerations: undefined,
                  explore: 'explore-a',
                  field: 'view-a.dim-b',
                  fieldOptions: {
                    can_filter: true,
                    field_group_label: 'dimension-group',
                    label_short: 'dim-b',
                    name: 'view-a.dim-b',
                    view_label: 'view-a',
                  },
                  model: 'model-a',
                  suggestDimension: undefined,
                  suggestExplore: 'explore-a',
                  type: 'string',
                  view: undefined,
                },
                value: 'dim-b',
              },
              {
                id: '.explore-a_0.view-a_0.dimension-group_1.dim-c_1',
                isOpen: false,
                isSecondary: undefined,
                payload: {
                  enumerations: undefined,
                  explore: 'explore-a',
                  field: 'view-a.dim-c',
                  fieldOptions: {
                    can_filter: true,
                    field_group_label: 'dimension-group',
                    label_short: 'dim-c',
                    name: 'view-a.dim-c',
                    view_label: 'view-a',
                  },
                  model: 'model-a',
                  suggestDimension: undefined,
                  suggestExplore: 'explore-a',
                  type: 'string',
                  view: undefined,
                },
                value: 'dim-c',
              },
            ],
            id: '.explore-a_0.view-a_0.dimension-group_1',
            isOpen: false,
            value: 'dimension-group',
          },
          {
            id: '.explore-a_0.view-a_0.filter-a_0',
            isOpen: false,
            isSecondary: undefined,
            payload: {
              enumerations: undefined,
              explore: 'explore-a',
              field: 'view-a.filter-a',
              fieldOptions: {
                can_filter: true,
                label_short: 'filter-a',
                name: 'view-a.filter-a',
                view_label: 'view-a',
              },
              model: 'model-a',
              suggestDimension: undefined,
              suggestExplore: 'explore-a',
              type: 'string',
              view: undefined,
            },
            value: 'filter-a',
          },
          {
            children: [
              {
                id: '.explore-a_0.view-a_0.filter-group_0.filter-c_0',
                isOpen: false,
                isSecondary: undefined,
                payload: {
                  enumerations: undefined,
                  explore: 'explore-a',
                  field: 'view-a.filter-c',
                  fieldOptions: {
                    can_filter: true,
                    field_group_label: 'filter-group',
                    label_short: 'filter-c',
                    name: 'view-a.filter-c',
                    view_label: 'view-a',
                  },
                  model: 'model-a',
                  suggestDimension: undefined,
                  suggestExplore: 'explore-a',
                  type: 'string',
                  view: undefined,
                },
                value: 'filter-c',
              },
            ],
            id: '.explore-a_0.view-a_0.filter-group_0',
            isOpen: false,
            value: 'filter-group',
          },
          {
            id: '.explore-a_0.view-a_0.measure-a_2',
            isOpen: false,
            isSecondary: true,
            payload: {
              enumerations: undefined,
              explore: 'explore-a',
              field: 'view-a.measure-a',
              fieldOptions: {
                can_filter: true,
                label_short: 'measure-a',
                measure: true,
                name: 'view-a.measure-a',
                view_label: 'view-a',
              },
              model: 'model-a',
              suggestDimension: undefined,
              suggestExplore: 'explore-a',
              type: 'string',
              view: undefined,
            },
            value: 'measure-a',
          },
          {
            children: [
              {
                id: '.explore-a_0.view-a_0.measure-group_2.measure-b_0',
                isOpen: false,
                isSecondary: true,
                payload: {
                  enumerations: undefined,
                  explore: 'explore-a',
                  field: 'view-a.measure-b',
                  fieldOptions: {
                    can_filter: true,
                    field_group_label: 'measure-group',
                    label_short: 'measure-b',
                    measure: true,
                    name: 'view-a.measure-b',
                    view_label: 'view-a',
                  },
                  model: 'model-a',
                  suggestDimension: undefined,
                  suggestExplore: 'explore-a',
                  type: 'string',
                  view: undefined,
                },
                value: 'measure-b',
              },
              {
                id: '.explore-a_0.view-a_0.measure-group_2.measure-c_1',
                isOpen: false,
                isSecondary: true,
                payload: {
                  enumerations: undefined,
                  explore: 'explore-a',
                  field: 'view-a.measure-c',
                  fieldOptions: {
                    can_filter: true,
                    field_group_label: 'measure-group',
                    label_short: 'measure-c',
                    measure: true,
                    name: 'view-a.measure-c',
                    view_label: 'view-a',
                  },
                  model: 'model-a',
                  suggestDimension: undefined,
                  suggestExplore: 'explore-a',
                  type: 'string',
                  view: undefined,
                },
                value: 'measure-c',
              },
            ],
            id: '.explore-a_0.view-a_0.measure-group_2',
            isOpen: false,
            value: 'measure-group',
          },
        ],
        id: '.explore-a_0.view-a_0',
        isOpen: false,
        value: 'view-a',
      },
      {
        children: [
          {
            id: '.explore-a_0.view-b_1.dim-a_1',
            isOpen: false,
            isSecondary: undefined,
            payload: {
              enumerations: undefined,
              explore: 'explore-a',
              field: 'view-b.dim-a',
              fieldOptions: {
                can_filter: true,
                label_short: 'dim-a',
                name: 'view-b.dim-a',
                view_label: 'view-b',
              },
              model: 'model-a',
              suggestDimension: undefined,
              suggestExplore: 'explore-a',
              type: 'string',
              view: undefined,
            },
            value: 'dim-a',
          },
          {
            id: '.explore-a_0.view-b_1.filter-b_0',
            isOpen: false,
            isSecondary: undefined,
            payload: {
              enumerations: undefined,
              explore: 'explore-a',
              field: 'view-a.filter-b',
              fieldOptions: {
                can_filter: true,
                label_short: 'filter-b',
                name: 'view-a.filter-b',
                view_label: 'view-b',
              },
              model: 'model-a',
              suggestDimension: undefined,
              suggestExplore: 'explore-a',
              type: 'string',
              view: undefined,
            },
            value: 'filter-b',
          },
          {
            children: [
              {
                id: '.explore-a_0.view-b_1.filter-group_0.filter-d_0',
                isOpen: false,
                isSecondary: undefined,
                payload: {
                  enumerations: undefined,
                  explore: 'explore-a',
                  field: 'view-b.filter-d',
                  fieldOptions: {
                    can_filter: true,
                    field_group_label: 'filter-group',
                    label_short: 'filter-d',
                    name: 'view-b.filter-d',
                    view_label: 'view-b',
                  },
                  model: 'model-a',
                  suggestDimension: undefined,
                  suggestExplore: 'explore-a',
                  type: 'string',
                  view: undefined,
                },
                value: 'filter-d',
              },
            ],
            id: '.explore-a_0.view-b_1.filter-group_0',
            isOpen: false,
            value: 'filter-group',
          },
          {
            id: '.explore-a_0.view-b_1.measure-a_2',
            isOpen: false,
            isSecondary: true,
            payload: {
              enumerations: undefined,
              explore: 'explore-a',
              field: 'view-a.measure-a',
              fieldOptions: {
                can_filter: true,
                label_short: 'measure-a',
                measure: true,
                name: 'view-a.measure-a',
                view_label: 'view-b',
              },
              model: 'model-a',
              suggestDimension: undefined,
              suggestExplore: 'explore-a',
              type: 'string',
              view: undefined,
            },
            value: 'measure-a',
          },
        ],
        id: '.explore-a_0.view-b_1',
        isOpen: false,
        value: 'view-b',
      },
    ],
    detail: 'model-a',
    id: '.explore-a_0',
    isNotHighlightable: true,
    isOpen: false,
    payload: { explore: 'explore-a', model: 'model-a' },
    value: 'explore-a',
  },
];

// kevins_spectacular_test_data
export const explore_unsorted: ILookmlModelExplore[] = [
  {
    label: 'explore-a',
    model_name: 'model-a',
    name: 'explore-a',
    fields: {
      dimensions: [
        {
          can_filter: true,
          name: 'explore-a.c-dim',
          label_short: 'c-dim',
          view_label: 'view-b',
        },
        {
          can_filter: true,
          name: 'explore-a.a-dim',
          label_short: 'a-dim',
          view_label: 'view-a',
        },
        {
          can_filter: true,
          name: 'explore-a.b-dim',
          label_short: 'b-dim',
          view_label: 'view-b',
        },
      ],
      measures: [
        {
          can_filter: true,
          measure: true,
          name: 'explore-a.a-measure',
          label_short: 'a-measure',
          view_label: 'view-a',
        },
        {
          can_filter: true,
          measure: true,
          name: 'explore-a.b-measure',
          label_short: 'b-measure',
          view_label: 'view-b',
        },
      ],
    },
  },
];

export const explore_unsorted_expected = [
  {
    children: [
      {
        children: [
          {
            id: '.explore-a_0.view-a_1.a-dim_0',
            isOpen: false,
            isSecondary: undefined,
            payload: {
              enumerations: undefined,
              explore: 'explore-a',
              field: 'explore-a.a-dim',
              fieldOptions: {
                can_filter: true,
                label_short: 'a-dim',
                name: 'explore-a.a-dim',
                view_label: 'view-a',
              },
              model: 'model-a',
              suggestDimension: undefined,
              suggestExplore: 'explore-a',
              type: 'string',
              view: undefined,
            },
            value: 'a-dim',
          },
          {
            id: '.explore-a_0.view-a_1.a-measure_1',
            isOpen: false,
            isSecondary: true,
            payload: {
              enumerations: undefined,
              explore: 'explore-a',
              field: 'explore-a.a-measure',
              fieldOptions: {
                can_filter: true,
                label_short: 'a-measure',
                measure: true,
                name: 'explore-a.a-measure',
                view_label: 'view-a',
              },
              model: 'model-a',
              suggestDimension: undefined,
              suggestExplore: 'explore-a',
              type: 'string',
              view: undefined,
            },
            value: 'a-measure',
          },
        ],
        id: '.explore-a_0.view-a_1',
        isOpen: false,
        value: 'view-a',
      },
      {
        children: [
          {
            id: '.explore-a_0.view-b_0.b-dim_1',
            isOpen: false,
            isSecondary: undefined,
            payload: {
              enumerations: undefined,
              explore: 'explore-a',
              field: 'explore-a.b-dim',
              fieldOptions: {
                can_filter: true,
                label_short: 'b-dim',
                name: 'explore-a.b-dim',
                view_label: 'view-b',
              },
              model: 'model-a',
              suggestDimension: undefined,
              suggestExplore: 'explore-a',
              type: 'string',
              view: undefined,
            },
            value: 'b-dim',
          },
          {
            id: '.explore-a_0.view-b_0.b-measure_2',
            isOpen: false,
            isSecondary: true,
            payload: {
              enumerations: undefined,
              explore: 'explore-a',
              field: 'explore-a.b-measure',
              fieldOptions: {
                can_filter: true,
                label_short: 'b-measure',
                measure: true,
                name: 'explore-a.b-measure',
                view_label: 'view-b',
              },
              model: 'model-a',
              suggestDimension: undefined,
              suggestExplore: 'explore-a',
              type: 'string',
              view: undefined,
            },
            value: 'b-measure',
          },
          {
            id: '.explore-a_0.view-b_0.c-dim_0',
            isOpen: false,
            isSecondary: undefined,
            payload: {
              enumerations: undefined,
              explore: 'explore-a',
              field: 'explore-a.c-dim',
              fieldOptions: {
                can_filter: true,
                label_short: 'c-dim',
                name: 'explore-a.c-dim',
                view_label: 'view-b',
              },
              model: 'model-a',
              suggestDimension: undefined,
              suggestExplore: 'explore-a',
              type: 'string',
              view: undefined,
            },
            value: 'c-dim',
          },
        ],
        id: '.explore-a_0.view-b_0',
        isOpen: false,
        value: 'view-b',
      },
    ],
    detail: 'model-a',
    id: '.explore-a_0',
    isNotHighlightable: true,
    isOpen: false,
    payload: { explore: 'explore-a', model: 'model-a' },
    value: 'explore-a',
  },
];
