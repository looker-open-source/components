/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import i18next from 'i18next'

export const getDistanceUnitLabels = (unit: string) => {
  const t = i18next.t.bind(i18next)
  switch (unit) {
    case 'feet':
      return t('feet', { ns: 'get_distance_unit_labels' })
    case 'kilometers':
      return t('kilometers', { ns: 'get_distance_unit_labels' })
    case 'meters':
      return t('meters', { ns: 'get_distance_unit_labels' })
    case 'miles':
      return t('miles', { ns: 'get_distance_unit_labels' })
  }
  return ''
}
