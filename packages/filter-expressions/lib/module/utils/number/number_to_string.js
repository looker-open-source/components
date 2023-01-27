
import defaultTo from 'lodash/defaultTo';
import flow from 'lodash/fp/flow';
import isEmpty from 'lodash/isEmpty';
import partition from 'lodash/partition';
import { NumberTypes } from '../../types/number_types';
import { treeToList } from '../tree/tree_to_list';
import { userAttributeToString } from '../user_attribute/user_attribute_to_string';
import { isNullUndefinedOrEmpty } from './is_null_undefined_or_empty';

const nullToString = ({
  is
}) => `${isToString(is)}null`;

const betweenToString = ({
  bounds,
  low,
  high,
  is
}) => bounds && (!isNullUndefinedOrEmpty(low) || !isNullUndefinedOrEmpty(high)) ? `${isToString(is)}${bounds[0]}${defaultTo(low, '')},${defaultTo(high, '')}${bounds[1]}` : '';

const valueToString = ({
  is,
  type,
  value
}) => (value === null || value === void 0 ? void 0 : value.map(v => `${isToString(is)}${type === '=' ? '' : type}${v}`).join(',')) || '';

const isToString = (is = true, yes = '', no = 'not ') => `${is ? yes : no}`;
const filterToStringMap = {
  null: nullToString,
  between: betweenToString,
  user_attribute: userAttributeToString
};

export const serializeNumberNode = item => {
  const toStringFunction = filterToStringMap[item.type] || valueToString;
  return (toStringFunction === null || toStringFunction === void 0 ? void 0 : toStringFunction(item)) || '';
};

const listToExpression = items => items.map(serializeNumberNode).filter(String).join(',');

const removeEmptyItems = items => items.filter(({
  type,
  value
}) => !(['=', '>', '<', '>=', '<='].indexOf(type) > -1 && isEmpty(value)));

const addDuplicateNotNodeIfNeeded = list => {
  var _andClauses$0$value;
  const [orClauses, andClauses] = partition(list, item => item.is);
  if (andClauses.length === 1 &&
  !(andClauses[0].type === NumberTypes.EQUAL && ((_andClauses$0$value = andClauses[0].value) === null || _andClauses$0$value === void 0 ? void 0 : _andClauses$0$value.length) > 1) && orClauses.length >= 1 && orClauses.every(item => item.type === '=')) {
    return [...orClauses, ...andClauses, andClauses[0]];
  }
  return list;
};

export const numberToString = flow(treeToList, removeEmptyItems, addDuplicateNotNodeIfNeeded, listToExpression);
//# sourceMappingURL=number_to_string.js.map