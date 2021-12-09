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
import type { FilterModel } from '@looker/filter-expressions'
import type { ILookmlModelExploreField } from '@looker/sdk'
import type { FC } from 'react'
import React from 'react'
import {
  fiscalThisNextUnits,
  fiscalLastUnits,
  thisNextUnits,
  lastUnits,
} from '../../../../../../constants'
import type { Option } from '../../../../../../types/option'
import { showFiscalUnits } from '../../../../utils/show_fiscal_units'
import { GroupSelect } from '../../../GroupSelect'

interface ThisNextLastProps {
  item: FilterModel
  field: ILookmlModelExploreField
  onChange: (id: string, item: Partial<FilterModel>) => void
}

const getOptions = (
  { type }: FilterModel,
  field: ILookmlModelExploreField
): Option[] => {
  const showFiscal = showFiscalUnits(field)
  if (type === 'last') {
    return showFiscal ? fiscalLastUnits : lastUnits
  }
  return showFiscal ? fiscalThisNextUnits : thisNextUnits
}

export const ThisNextLast: FC<ThisNextLastProps> = ({
  item,
  onChange,
  field,
}: ThisNextLastProps) => {
  const { id, unit } = item

  const unitChange = (value: string) => onChange(id, { unit: value })

  const options = getOptions(item, field)

  return (
    <GroupSelect
      value={unit}
      options={options}
      onChange={unitChange}
      placement="right"
    />
  )
}
