/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Accordion2 } from '@looker/components'
import type { SDKRecord, Fields, CAll } from '../types'
import type { IError } from '@looker/sdk'
import { StaticTable } from '../StaticTable'
import isEmpty from 'lodash/isEmpty'
import { useTranslation } from '../utils'
import { KeyValueList } from '../KeyValueList'

type DebugProps = {
  ok?: boolean
  data?: SDKRecord[]
  error?: IError
  config?: Partial<CAll>
  fields?: Fields
}

/* eslint-disable @typescript-eslint/no-explicit-any */

export const Debug = ({ ok, data, error, config = {}, fields }: DebugProps) => {
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
