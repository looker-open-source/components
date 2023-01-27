/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import { getExpressionTypeFromField } from '@looker/filter-expressions'
import type { TreeModel } from '../Tree'
import type {
  ILookmlModelExplore,
  ILookmlModelExploreField,
} from '@looker/sdk/src/4.0u/models'

const getID = (parentId: string, value: string, index: number) =>
  `${parentId}.${value}_${index}`

/**
 * Returns a Tree of explores that can be used by <TreeSelect />.
 */
export const createExploresTree = (
  explores: ILookmlModelExplore[]
): TreeModel[] =>
  explores.map((explore, index) => {
    const fields = Object.values(
      (explore.fields && explore.fields.dimensions) || {}
    )
      .concat(Object.values(explore.fields?.parameters || {}))
      .concat(Object.values(explore.fields?.filters || {}))
      .concat(Object.values((explore.fields && explore.fields.measures) || {}))
      .filter((f) => f.can_filter && !f.hidden)
    const value = explore.label || explore.title || ''
    const id = getID('', value, index)
    return {
      detail: explore.group_label || explore.model_name || undefined,
      payload: {
        explore: explore.name,
        model: explore.model_name,
      },
      isNotHighlightable: true, // [DX-2004] First-level entries (explore) should not be highlighted
      value,
      id,
      isOpen: false,
      children: Object.values(
        fields.reduce(buildFieldHierarchy(explore), {})
      ).map(convertChildrenToArrays(id)),
    }
  })

/**
 * Returns a reducer function that loops through all the fields and builds
 * a tree hierarchy based off field type.
 */
const buildFieldHierarchy =
  (
    explore: ILookmlModelExplore
  ): ((
    acc: { [key: string]: any },
    dim: ILookmlModelExploreField
  ) => { [key: string]: any }) =>
  (acc: { [key: string]: any }, dim: ILookmlModelExploreField) => ({
    ...acc,
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    [dim.view_label!]: {
      ...acc[dim.view_label!],
      value: dim.view_label,
      // eslint-disable-next-line no-nested-ternary
      children: dim.field_group_label
        ? acc[dim.view_label!] && acc[dim.view_label!].children
          ? {
              ...acc[dim.view_label!].children,
              [dim.field_group_label]: {
                ...acc[dim.view_label!].children[dim.field_group_label],
                value: dim.field_group_label,
                children: {
                  ...(acc[dim.view_label!].children[dim.field_group_label] &&
                    acc[dim.view_label!].children[dim.field_group_label]
                      .children),
                  [dim.name!]: fieldData(dim, explore),
                },
              },
            }
          : {
              [dim.field_group_label]: {
                value: dim.field_group_label,
                children: {
                  [dim.name!]: fieldData(dim, explore),
                },
              },
            }
        : {
            ...(acc[dim.view_label!] && acc[dim.view_label!].children),
            [dim.name!]: fieldData(dim, explore),
            /* eslint-enable @typescript-eslint/no-non-null-assertion */
          },
    },
  })

/**
 * Converts the children object to an array to match the Tree data structure.
 */
const convertChildrenToArrays =
  (parentId: string) =>
  ({ children, ...item }: TreeModel, itemIndex: number): TreeModel => {
    const itemID = getID(parentId, item.value, itemIndex)
    return {
      ...item,
      id: itemID,
      isOpen: false,
      ...(children
        ? {
            children: Object.values(children).map(
              convertChildrenToArrays(itemID)
            ),
          }
        : {}),
    }
  }

/**
 * Defines the data stored in each clickable field of the Tree data structure.
 */
const fieldData = (
  field: ILookmlModelExploreField,
  explore: ILookmlModelExplore
) => ({
  value: field.label_short,
  isSecondary: field.measure,
  payload: {
    field: field.name,
    suggestDimension: field.suggest_dimension,
    model: explore.model_name,
    explore: explore.name,
    view: field.view,
    suggestExplore: field.suggest_explore || explore.name,
    enumerations: field.enumerations,
    // Need as ILookmlModelExploreField b/c @looker/filter-components uses @looker/sdk types
    type: getExpressionTypeFromField(
      field as unknown as ILookmlModelExploreField
    ),
    fieldOptions: field,
  },
})
