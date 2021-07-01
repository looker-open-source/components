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
import type {
  FilterASTNode,
  FilterItemToStringMapType,
  FilterModel,
} from '../../types'
import { treeToString } from '../tree/tree_to_string'
import { userAttributeToString } from '../user_attribute/user_attribute_to_string'

const locationExactToString = ({ lat, lon }: FilterModel): string =>
  lat && lon ? `${lat}, ${lon}` : ''

const circleToString = ({ distance, unit, lat, lon }: FilterModel): string =>
  distance && unit && lat && lon
    ? `${distance} ${unit} from ${lat}, ${lon}`
    : ''

const boxToString = ({ lon, lat, lon1, lat1 }: FilterModel): string =>
  lon && lat && lon1 && lat1
    ? `inside box from ${lat}, ${lon} to ${lat1}, ${lon1}`
    : ''

const anyvalue = () => ''

const nullToString = () => 'null'

const notNullToString = () => '-null'

const filterToStringMap: FilterItemToStringMapType = {
  location: locationExactToString,
  circle: circleToString,
  box: boxToString,
  anyvalue,
  null: nullToString,
  notnull: notNullToString,
  user_attribute: userAttributeToString,
}

const locationToExpression = (item: FilterModel): string => {
  const toStringFunction = filterToStringMap[item.type]
  return toStringFunction?.(item) || ''
}

export const locationToString = (root: FilterASTNode) =>
  treeToString(root, locationToExpression)
