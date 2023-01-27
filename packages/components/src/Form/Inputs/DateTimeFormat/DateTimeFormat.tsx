/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { Locale } from 'date-fns'
import type { DateFormats, DateTimeOptions } from '../../../Calendar/utils'
import { formatDateString } from '../../../Calendar/utils'

export type DateTimeFormatProps = {
  children?: Date
  format?: DateFormats | string
  /**
   * Locale object from date-fns.
   * @example
   * import ko from 'date-fns/locale/ko'
   */
  locale?: Locale
  timeZone?: string
}

type DateTimeFormatExtensionProps = DateTimeFormatProps & DateTimeOptions

export const DateTimeFormat = ({
  children = new Date(Date.now()),
  date = true,
  format = 'medium',
  locale,
  time = true,
  timeZone,
}: DateTimeFormatExtensionProps) => {
  try {
    return (
      <>
        {formatDateString(children, format, locale, timeZone, { date, time })}
      </>
    )
  } catch (error) {
    return <>{error}</>
  }
}
