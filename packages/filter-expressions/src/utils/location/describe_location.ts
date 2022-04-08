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
import i18next from 'i18next'
import defaultTo from 'lodash/defaultTo'
import type { FilterItemToStringMapType, FilterModel } from '../../types'
import { describeUserAttribute } from '../user_attribute/describe_user_attribute'
import { getDistanceUnitLabels } from './get_distance_unit_labels'

const describeLat = (lat: number) => {
  const t = i18next.t.bind(i18next)
  const latAbs = Math.abs(lat).toFixed(1)
  const textNorth = t('lat degrees north', {
    ns: 'describe_location',
    lat: latAbs,
  })
  const textSouth = t('lat degrees south', {
    ns: 'describe_location',
    lat: latAbs,
  })
  return lat > 0 ? textNorth : textSouth
}

const describeLon = (lon: number) => {
  const t = i18next.t.bind(i18next)
  const lonAbs = Math.abs(lon).toFixed(1)
  const textEast = t('lon degrees east', {
    ns: 'describe_location',
    lon: lonAbs,
  })
  const textWest = t('lon degrees west', {
    ns: 'describe_location',
    lon: lonAbs,
  })
  return lon > 0 ? textEast : textWest
}

const box = ({ lon, lat, lon1, lat1 }: FilterModel): string => {
  const t = i18next.t.bind(i18next)
  return lon && lat && lon1 && lat1
    ? t('coords1 to coords2', {
        coords1: `${describeLat(lat)}, ${describeLon(lon)}`,
        coords2: `${describeLat(lat1)}, ${describeLon(lon1)}`,
        ns: 'describe_location',
      })
    : ''
}

const circle = ({ distance, unit, lat, lon }: FilterModel): string => {
  const t = i18next.t.bind(i18next)
  return distance && unit && lat && lon
    ? t('distance unit from lat, lon', {
        ns: 'describe_location',
        distance,
        unit: getDistanceUnitLabels(unit),
        lat,
        lon,
      })
    : ''
}

const location = ({ lat, lon }: FilterModel): string =>
  lat && lon ? `${lat}, ${lon}` : ''

const anyvalue = () => {
  const t = i18next.t.bind(i18next)
  return t('is anywhere', { ns: 'describe_location' })
}

const describeNull = () => {
  const t = i18next.t.bind(i18next)
  return t('is null', { ns: 'describe_location' })
}

const describeNotNull = () => {
  const t = i18next.t.bind(i18next)
  return t('is not null', { ns: 'describe_location' })
}

const filterToStringMap: FilterItemToStringMapType = {
  box,
  circle,
  location,
  anyvalue,
  null: describeNull,
  notnull: describeNotNull,
  user_attribute: describeUserAttribute,
}

/**
 * Maps a FilterItem to a function for converting it to a filter summary
 */
export const describeLocation = (item: FilterModel): string =>
  defaultTo(filterToStringMap[item.type], () => '')(item)
