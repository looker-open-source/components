/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import i18next from 'i18next'

const getPlural = (unit: string) => {
  const t = i18next.t.bind(i18next)
  // prettier-ignore
  const pluralUnits: { [key: string]: string } = {
    'fiscal year'            : t('fiscal years'            , { ns: 'get_unit_label' }),
    year                     : t('years'                   , { ns: 'get_unit_label' }),
    'fiscal quarter'         : t('fiscal quarters'         , { ns: 'get_unit_label' }),
    quarter                  : t('quarters'                , { ns: 'get_unit_label' }),
    month                    : t('months'                  , { ns: 'get_unit_label' }),
    week                     : t('weeks'                   , { ns: 'get_unit_label' }),
    day                      : t('days'                    , { ns: 'get_unit_label' }),
    hour                     : t('hours'                   , { ns: 'get_unit_label' }),
    minute                   : t('minutes'                 , { ns: 'get_unit_label' }),
    second                   : t('seconds'                 , { ns: 'get_unit_label' }),
    'complete fiscal year'   : t('complete fiscal years'   , { ns: 'get_unit_label' }),
    'complete year'          : t('complete years'          , { ns: 'get_unit_label' }),
    'complete fiscal quarter': t('complete fiscal quarters', { ns: 'get_unit_label' }),
    'complete quarter'       : t('complete quarters'       , { ns: 'get_unit_label' }),
    'complete month'         : t('complete months'         , { ns: 'get_unit_label' }),
    'complete week'          : t('complete weeks'          , { ns: 'get_unit_label' }),
    'complete day'           : t('complete days'           , { ns: 'get_unit_label' }),
    'complete hour'          : t('complete hours'          , { ns: 'get_unit_label' }),
    'complete minute'        : t('complete minutes'        , { ns: 'get_unit_label' }),
    'complete second'        : t('complete seconds'        , { ns: 'get_unit_label' }),
  }
  return pluralUnits[unit] || unit
}

const getSingular = (unit: string) => {
  const t = i18next.t.bind(i18next)
  // prettier-ignore
  const pluralUnits: { [key: string]: string } = {
    'fiscal year'            : t('fiscal year'            , { ns: 'get_unit_label' }),
    year                     : t('year'                   , { ns: 'get_unit_label' }),
    'fiscal quarter'         : t('fiscal quarter'         , { ns: 'get_unit_label' }),
    quarter                  : t('quarter'                , { ns: 'get_unit_label' }),
    month                    : t('month'                  , { ns: 'get_unit_label' }),
    week                     : t('week'                   , { ns: 'get_unit_label' }),
    day                      : t('day'                    , { ns: 'get_unit_label' }),
    hour                     : t('hour'                   , { ns: 'get_unit_label' }),
    minute                   : t('minute'                 , { ns: 'get_unit_label' }),
    second                   : t('second'                 , { ns: 'get_unit_label' }),
    'complete fiscal year'   : t('complete fiscal year'   , { ns: 'get_unit_label' }),
    'complete year'          : t('complete year'          , { ns: 'get_unit_label' }),
    'complete fiscal quarter': t('complete fiscal quarter', { ns: 'get_unit_label' }),
    'complete quarter'       : t('complete quarter'       , { ns: 'get_unit_label' }),
    'complete month'         : t('complete month'         , { ns: 'get_unit_label' }),
    'complete week'          : t('complete week'          , { ns: 'get_unit_label' }),
    'complete day'           : t('complete day'           , { ns: 'get_unit_label' }),
    'complete hour'          : t('complete hour'          , { ns: 'get_unit_label' }),
    'complete minute'        : t('complete minute'        , { ns: 'get_unit_label' }),
    'complete second'        : t('complete second'        , { ns: 'get_unit_label' }),
  }
  return pluralUnits[unit] || unit
}

export const getUnitLabel = (unit: string, value = 1) =>
  value !== 1 ? getPlural(unit) : getSingular(unit)
