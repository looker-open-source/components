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

import type { ValidationMessageProps } from '@looker/components'
import { Space } from '@looker/components'
import type { FilterModel } from '@looker/filter-expressions'
import type { ChangeEvent } from 'react'
import React from 'react'
import { useTranslation } from '../../../../../../../utils'
import { GroupInput } from '../../../GroupInput'
import { GroupSelect } from '../../../GroupSelect'
import { MidInputLabel } from '../../../MidInputLabel'
import { useBetweenOptions } from '../../../../utils'

interface BetweenItemProps extends FilterModel {
  bounds: string
  high?: string
  low?: string
}

interface BetweenFilterProps {
  item: BetweenItemProps
  onChange?: (id: string, value: any) => void

  width?: string | number
  borderRadiusLeft?: string | number
  borderLeftColor?: string
  validationMessage?: ValidationMessageProps
}

export const Between = ({
  item,
  onChange,
  validationMessage,
}: BetweenFilterProps) => {
  const { t } = useTranslation('Between')

  const betweenOptions = useBetweenOptions()

  const { high = '', low = '', id } = item

  const lowChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(id, { low: event.target.value })
  }

  const highChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(id, { high: event.target.value })
  }
  const selectChange = (value: string) => {
    onChange?.(id, { bounds: value })
  }

  const validationProps = {
    noErrorIcon: true,
    validationType: validationMessage?.type,
  }

  return (
    <Space gap="none" width="auto">
      <GroupSelect
        placement="middle"
        value={item.bounds}
        options={betweenOptions}
        onChange={selectChange}
        {...validationProps}
      />
      <GroupInput
        value={low}
        type="number"
        onChange={lowChange}
        minWidth="4.5em"
        data-testid="low"
        {...validationProps}
      />
      <MidInputLabel validationType={validationMessage?.type}>
        {t('AND')}
      </MidInputLabel>
      <GroupInput
        value={high}
        type="number"
        onChange={highChange}
        placement="right"
        minWidth="4.5em"
        data-testid="high"
        {...validationProps}
      />
    </Space>
  )
}
