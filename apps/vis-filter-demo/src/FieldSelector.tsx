/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import React, { useContext } from 'react'
import {
  DialogContext,
  TreeCollection,
  Tree,
  TreeItem,
} from '@looker/components'
import type { ILookmlModelExploreField } from '@looker/sdk'

export type FieldGroups = {
  [group: string]: ILookmlModelExploreField[]
}

export type FieldSelectorProps = {
  current?: ILookmlModelExploreField
  groups: FieldGroups
  onChange: (field: ILookmlModelExploreField) => void
}

export const FieldSelector = ({
  groups,
  current,
  onChange,
}: FieldSelectorProps) => {
  const { closeModal } = useContext(DialogContext)
  const getFieldClickHandler = (field: ILookmlModelExploreField) => () => {
    onChange(field)
    // Close the popover after selecting a field
    closeModal()
  }
  return (
    <TreeCollection>
      {Object.keys(groups).map(group => (
        <Tree
          selected={current?.name?.split('.')[0] === group}
          key={group}
          label={group.replace(/_/g, ' ')}
        >
          {groups[group].map(field => {
            const { name = '' } = field
            return (
              <TreeItem
                selected={current?.name === name}
                key={name}
                onClick={getFieldClickHandler(field)}
              >
                {name.replace(`${group}.`, '').replace(/_/g, ' ')}
              </TreeItem>
            )
          })}
        </Tree>
      ))}
    </TreeCollection>
  )
}
