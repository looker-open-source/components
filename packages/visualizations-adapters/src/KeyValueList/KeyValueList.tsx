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

import type { FC } from 'react'
import React from 'react'
import styled from 'styled-components'
import { Truncate } from '@looker/components'
import type { Namespace } from 'react-i18next'
import { useTranslation } from 'react-i18next'
import type { SDKRecord } from '../types'

interface KeyValueListProps {
  value: SDKRecord
}

const renderKeyValueList = (
  o: SDKRecord,
  i18n: ReturnType<typeof useTranslation>
) => {
  const { t } = i18n
  const collection = Object.entries(o)

  const renderValueByType = (v: string | boolean | number | SDKRecord) => {
    switch (typeof v) {
      case 'object':
        return v === null ? t('null') : renderKeyValueList(v, i18n)
      case 'boolean':
        return v ? t('true') : t('false')
      case 'undefined':
        return t('undefined')
      default:
        return v
    }
  }

  return (
    <DL>
      {collection.map((pair: [string, string]) => {
        const [key, value] = pair
        return (
          <ListRow key={key}>
            <DT>
              <Truncate>{key}</Truncate>
            </DT>
            <DD>{renderValueByType(value)}</DD>
          </ListRow>
        )
      })}
    </DL>
  )
}

const ListRow = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.ui2};
  padding: ${({ theme }) => theme.space.xsmall} 0;
`

const DD = styled.dd`
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: ${({ theme }) => theme.lineHeights.large};
  margin: 0;
  margin-left: ${({ theme }) => theme.space.xlarge};
`

const DL = styled.dl`
  margin: 0;
  ${DD} & {
    margin-top: ${({ theme }) => theme.space.xsmall};
  }
`

const DT = styled.dt`
  border-bottom: 1px;
  color: ${({ theme }) => theme.colors.ui4};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: ${({ theme }) => theme.lineHeights.small};
  margin: 0;
`

export const KeyValueList: FC<KeyValueListProps> = ({ value }) => {
  const i18n = useTranslation('KeyValueList' as Namespace<string>)

  return renderKeyValueList(value, i18n)
}
