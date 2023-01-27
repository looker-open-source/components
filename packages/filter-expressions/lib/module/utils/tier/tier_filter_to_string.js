

import flow from 'lodash/fp/flow';
import { quoteFilter } from '../string/quote_filter';
import isItemToString from '../to_string/is_item_to_string';
import { userAttributeToString } from '../user_attribute/user_attribute_to_string';
import { escapeParameterValue } from './escape_parameter_value';
import { treeToList } from '../tree/tree_to_list';
const matchToString = ({
  value,
  is
}, _, field) => {
  return isItemToString(is, '', '-') + value.map(val => field !== null && field !== void 0 && field.has_allowed_values && field !== null && field !== void 0 && field.parameter ? escapeParameterValue(val) : quoteFilter(val)).join(`,${isItemToString(is, '', '-')}`);
};
const anyvalueToString = () => '';
const filterToStringMap = {
  anyvalue: anyvalueToString,
  match: matchToString,
  user_attribute: userAttributeToString
};
const serializeTierItem = (type, field) => item => {
  const toStringFunction = filterToStringMap[item.type];
  return (toStringFunction === null || toStringFunction === void 0 ? void 0 : toStringFunction(item, type, field)) || '';
};

const listToExpression = (type, field) => items => items.map(serializeTierItem(type, field)).join(',');

export const tierFilterToString = (root, type, field) => flow(treeToList, listToExpression(type, field))(root);
//# sourceMappingURL=tier_filter_to_string.js.map