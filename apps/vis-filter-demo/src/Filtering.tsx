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

import React, { useContext, useEffect, useState } from 'react'
import {
  Button,
  ButtonOutline,
  Header,
  Popover,
  Space,
} from '@looker/components'
// eslint-disable-next-line camelcase
import { ExtensionContext } from '@looker/extension-sdk-react'
import {
  Filter,
  i18nInit,
  getExpressionTypeFromField,
} from '@looker/filter-components'
import type { FilterChangeProps } from '@looker/filter-components'
// eslint-disable-next-line camelcase
import { lookml_model_explore } from '@looker/sdk'
import type { ILookmlModelExploreField } from '@looker/sdk'
import { FieldSelector } from './FieldSelector'
import type { FieldGroups } from './FieldSelector'

i18nInit()

export type FilteringProps = {
  model: string
  explore: string
  onSubmit: (name: string, expression: string) => void
  filterField?: ILookmlModelExploreField
  setFilterField: (field: ILookmlModelExploreField) => void
}

const getSelectFilterLabel = (field: ILookmlModelExploreField | undefined) => {
  if (field?.name) {
    return field.name.replace('.', ' > ').replace(/_/g, ' ')
  }
  return 'Select a field'
}

const groupFields = (fields: ILookmlModelExploreField[] | undefined) => {
  if (!fields) return {}
  return fields.reduce((acc: FieldGroups, dimension) => {
    const { view } = dimension
    if (!view) return acc
    if (!acc[view]) {
      acc[view] = []
    }
    acc[view].push(dimension)
    return acc
  }, {})
}

export const Filtering = ({
  filterField,
  setFilterField,
  model,
  explore,
  onSubmit,
}: FilteringProps) => {
  const { core40SDK } = useContext(ExtensionContext)

  const [fieldGroups, setFieldGroups] = useState<FieldGroups>({})

  const [filterExpression, setFilterExpression] = useState('')
  const handleFilterChange = ({ expression }: FilterChangeProps) => {
    setFilterExpression(expression)
  }
  const handleClick = () => {
    filterField?.name && onSubmit(filterField.name, filterExpression)
  }

  useEffect(() => {
    // Get fields from the model
    const getQueryDetails = async () => {
      const result = await core40SDK.ok(
        lookml_model_explore(core40SDK, model, explore)
      )
      setFieldGroups(groupFields(result.fields?.dimensions))
    }
    getQueryDetails()
  }, [core40SDK, model, explore])

  useEffect(() => {
    setFilterExpression('')
  }, [filterField])

  return (
    <div>
      <Header as="h4">Filter the query</Header>
      <Space align="start">
        <Popover
          placement="bottom-start"
          content={
            <FieldSelector
              groups={fieldGroups}
              current={filterField}
              onChange={setFilterField}
            />
          }
        >
          <ButtonOutline color="neutral">
            {getSelectFilterLabel(filterField)}
          </ButtonOutline>
        </Popover>
        {filterField?.name && (
          <>
            <Filter
              name={filterField?.name}
              expressionType={getExpressionTypeFromField(filterField)}
              expression={filterExpression}
              onChange={handleFilterChange}
            />
            <Button onClick={handleClick}>Filter</Button>
          </>
        )}
      </Space>
    </div>
  )
}
