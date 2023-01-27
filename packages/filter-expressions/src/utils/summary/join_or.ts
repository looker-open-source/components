/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import i18next from 'i18next'

export const joinOr = (values: string[]) => {
  const t = i18next.t.bind(i18next)
  return values.reduce((acc: string, value: string) => {
    if (acc === '') return value
    return t('a or b', { ns: 'join_or', a: acc, b: value })
  }, '')
}
