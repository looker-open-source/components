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
import type { TreeModel } from '../types'
import type { ILookmlModelExplore, ILookmlModelExploreField } from '@looker/sdk'

// --[ local types ]-----------------------------------------------------------
type ParentInfo = Omit<TreeModel, 'children'>
type ExploreFieldCollection = {
  parentInfo: ParentInfo
  filters: ILookmlModelExploreField[]
  dimensions: ILookmlModelExploreField[]
  measures: ILookmlModelExploreField[]
}
type TreeModelCollection = {
  parentInfo: ParentInfo
  filters: TreeModel[]
  dimensions: TreeModel[]
  measures: TreeModel[]
}

// --[ local utils ]-----------------------------------------------------------
const getID = (parentId: string, value: string, index: number) =>
  `${parentId}.${value}_${index}`

const sort = (a: any, b: any) => {
  const left: string = a.value
  const right: string = b.value
  return left && right ? left.localeCompare(right) : 0
}

const groupByFieldGroupLabel = (data: ILookmlModelExploreField[]) =>
  data.reduce(
    (
      acc: { [key: string]: ILookmlModelExploreField[] },
      item: ILookmlModelExploreField
    ) => {
      if (item.field_group_label) {
        if (acc[item.field_group_label]) {
          // if item has a label and exists on reducer, push
          acc[item.field_group_label].push(item)
        } else {
          // else, instantiate item in array
          acc[item.field_group_label] = [item]
        }
      }
      return acc
    },
    {}
  )

const createCollection = ({
  list,
  explore,
  viewId,
}: {
  list: ILookmlModelExploreField[]
  explore: ILookmlModelExplore
  viewId: string
}): TreeModel[] => {
  // split fields into groupables and non-groupables by field_group_label
  const { groups, normal } = list.reduce(
    (
      acc: {
        groups: ILookmlModelExploreField[]
        normal: ILookmlModelExploreField[]
      },
      field: ILookmlModelExploreField
    ) => {
      if (field.field_group_label) {
        acc.groups.push(field)
      } else {
        acc.normal.push(field)
      }
      return acc
    },
    { groups: [], normal: [] }
  )

  // gather fields with the same field_group_label
  const groupedFields = groupByFieldGroupLabel(groups)

  // convert groupBy output into array of groups with fields
  // not tested yet
  const groupCollections = Object.keys(groupedFields).reduce(
    (
      acc: Array<ILookmlModelExploreField | any>,
      curr: string,
      groupIndex: number
    ) => {
      // group object with subsequent fields for each group
      const children = groupedFields[curr]
      const value = children[0]?.field_group_label || ''
      const groupId = getID(viewId, value, groupIndex)

      acc.push({
        id: groupId,
        isOpen: false,
        value,
        children: children.map((child, fieldIndex) =>
          fieldData({ explore, field: child, parentId: groupId, fieldIndex })
        ),
      })
      return acc
    },
    []
  )
  return [
    ...normal.map((field, fieldIndex) =>
      fieldData({
        explore,
        field,
        parentId: viewId,
        fieldIndex,
      })
    ),
    ...groupCollections,
  ]
}

export const buildExploreFieldTree = (
  explore: ILookmlModelExplore,
  exploreIndex: number
): TreeModel => {
  // --[ explore related variables ]-------------------------------------------
  const fieldSet = explore.fields

  const allFields = [
    ...(fieldSet?.filters ?? []).concat(fieldSet?.parameters ?? []),
    ...(fieldSet?.dimensions ?? []),
    ...(fieldSet?.measures ?? []),
  ]

  const detail = explore.group_label || explore.model_name || undefined
  const val = explore.label || explore.title || ''
  const exploreId = getID('', val, exploreIndex)

  let counter = 0
  // --[ generate children ]---------------------------------------------------
  const view_labels = allFields.reduce(
    (
      acc: { [key: string]: ExploreFieldCollection },
      field: ILookmlModelExploreField
    ) => {
      // Check if field is valid, if not, return the accumulator
      if (!field) return acc
      if (!field.view_label) return acc // filters turtles which are empty strings

      if (field.hidden) return acc
      if (!field.can_filter) return acc // only filterables

      // initialize the TreeModelCollection when view_label is missing
      if (!acc[field.view_label]) {
        acc[field.view_label] = {
          parentInfo: {
            isOpen: false,
            value: field.view_label,
            id: getID(exploreId, field.view_label, counter++),
          },
          filters: [],
          dimensions: [],
          measures: [],
        }
      }

      // Add the field to the appropriate branch (dimensions, measures, or
      // filters) based on its category
      if (field.category === 'dimension') {
        acc[field.view_label].dimensions.push(field)
        return acc
      } else if (field.category === 'measure') {
        acc[field.view_label].measures.push(field)
        return acc
      } else {
        acc[field.view_label].filters.push(field)
      }
      return acc
    },
    {}
  )

  const groupLabels = Object.keys(view_labels).reduce(
    (acc: { [key: string]: TreeModelCollection }, view_label: string) => {
      const parentData = view_labels[view_label]
      acc[view_label] = {
        ...parentData,
        filters: createCollection({
          explore,
          list: parentData.filters,
          viewId: parentData.parentInfo.id || '',
        }),
        measures: createCollection({
          explore,
          list: parentData.measures,
          viewId: parentData.parentInfo.id || '',
        }),
        dimensions: createCollection({
          explore,
          list: parentData.dimensions,
          viewId: parentData.parentInfo.id || '',
        }),
      }
      return acc
    },
    {}
  )

  // convert from object to list and sort
  const topLayerChildren = Object.keys(groupLabels)
    .reduce((acc: TreeModel[], name: string) => {
      const indexed = groupLabels[name]
      const sorted_fields = {
        filters: indexed.filters.sort(sort),
        dimensions: indexed.dimensions.sort(sort),
        measures: indexed.measures.sort(sort),
      }
      const treeModel: TreeModel = {
        ...indexed.parentInfo,
        children: [
          ...sorted_fields.filters,
          ...sorted_fields.dimensions,
          ...sorted_fields.measures,
        ],
      }
      // push the parent object with sorted children into the tree
      acc.push(treeModel)
      return acc
    }, [])
    // sort the array of parents
    .sort(sort)

  return {
    children: topLayerChildren,
    detail,
    id: exploreId,
    isNotHighlightable: true,
    isOpen: false,
    payload: { explore: explore.name, model: explore.model_name },
    value: val,
  }
}

/**
 * Defines the data stored in each clickable field of the Tree data structure.
 */
const fieldData = ({
  field,
  explore,
  parentId,
  fieldIndex,
}: {
  field: ILookmlModelExploreField
  explore: ILookmlModelExplore
  parentId: string
  fieldIndex: number
}): TreeModel => ({
  id: getID(parentId, field.label_short || '', fieldIndex),
  isOpen: false,
  value: field.label_short || '',
  isSecondary: field.measure,
  payload: {
    field: field.name,
    suggestDimension: field.suggest_dimension,
    model: explore.model_name,
    explore: explore.name,
    view: field.view,
    suggestExplore: field.suggest_explore || explore.name,
    enumerations: field.enumerations,
    type: getExpressionTypeFromField(field),
    fieldOptions: field,
  },
})

export const createExploresTree = (
  explores: ILookmlModelExplore[]
): TreeModel[] => {
  return explores.map((explore, index: number) => {
    return buildExploreFieldTree(explore, index)
  })
}
