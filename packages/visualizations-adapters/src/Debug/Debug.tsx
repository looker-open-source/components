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
import { Accordion2 } from '@looker/components'
import type { SDKRecord, Fields, CAll } from '@looker/visualizations-adapters'
import type { IError } from '@looker/sdk'
import { StaticTable } from '../StaticTable'
import isEmpty from 'lodash/isEmpty'
import { useTranslation } from 'react-i18next'
import { KeyValueList } from '../KeyValueList'

type DebugProps = {
  ok?: boolean
  data?: SDKRecord[]
  error?: IError
  config?: Partial<CAll>
  fields?: Fields
}

/* eslint-disable @typescript-eslint/no-explicit-any */

export const Debug: FC<DebugProps> = ({
  ok,
  data,
  error,
  config = {},
  fields,
}) => {
  const { t } = useTranslation('Debug')

  return (
    <>
      <KeyValueList value={{ response: ok ? t('ok') : t('error') }} />
      {!isEmpty(error) && (
        <Accordion2 indicatorPosition="left" defaultOpen label={t('Error')}>
          <KeyValueList value={error || {}} />
        </Accordion2>
      )}
      {!isEmpty(config) && (
        <Accordion2 indicatorPosition="left" label={t('Config')}>
          <KeyValueList value={config} />
        </Accordion2>
      )}
      {!isEmpty(fields) && (
        <>
          <Accordion2 indicatorPosition="left" label={t('Dimensions')}>
            <KeyValueList value={fields?.dimensions || {}} />
          </Accordion2>
          <Accordion2 indicatorPosition="left" label={t('Measures')}>
            <KeyValueList value={fields?.measures || {}} />
          </Accordion2>
        </>
      )}
      {data && (
        <Accordion2 indicatorPosition="left" defaultOpen label={t('Result')}>
          <StaticTable data={data} fields={fields} />
        </Accordion2>
      )}
    </>
  )
}
