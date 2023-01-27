
import isEmpty from 'lodash/isEmpty';
import isItemToString from '../to_string/is_item_to_string';
import { treeToString } from '../tree/tree_to_string';
import { userAttributeToString } from '../user_attribute/user_attribute_to_string';
import { escapeLeadingAndTrailingWhitespaces } from './escape_leading_and_trailing_whitespaces';
import { escapeWithCaret } from './escape_with_caret';
import { quoteFilter } from './quote_filter';

const escapeWithDoubleLastEscape = v => escapeLeadingAndTrailingWhitespaces(v);
const escapeWithoutDoubleLastEscape = v => escapeLeadingAndTrailingWhitespaces(v, false);
const matchToString = ({
  value,
  is
}) => isItemToString(is, '', '-') + value.map(quoteFilter).map(escapeWithDoubleLastEscape).join(`,${isItemToString(is, '', '-')}`);
const multiValueToString = (values, toString) => values.map(toString).join(',');
const startWithToString = ({
  value,
  is
}) => multiValueToString(value.map(escapeWithCaret).map(escapeWithoutDoubleLastEscape), token => `${isItemToString(is, '', '-') + String(token)}%`);
const endsWithToString = ({
  value,
  is
}) => multiValueToString(value.map(escapeWithCaret).map(escapeWithDoubleLastEscape), token => `${isItemToString(is, '', '-')}%${String(token)}`);
const containsToString = ({
  value,
  is
}) => multiValueToString(value.map(escapeWithCaret).map(escapeWithoutDoubleLastEscape), token => `${isItemToString(is, '', '-')}%${String(token)}%`);
const otherToString = ({
  value,
  is
}) => multiValueToString(value, token => `${isItemToString(is, '', '-')}${String(token)}`);
const blankToString = ({
  is
}) => `${isItemToString(is, '', '-')}EMPTY`;
const nullToString = ({
  is
}) => `${isItemToString(is, '', '-')}NULL`;
const anyvalueToString = () => '';
const filterToStringMap = {
  startsWith: startWithToString,
  endsWith: endsWithToString,
  contains: containsToString,
  match: matchToString,
  blank: blankToString,
  null: nullToString,
  user_attribute: userAttributeToString,
  anyvalue: anyvalueToString,
  other: otherToString
};

const stringToExpression = item => {
  const toStringFunction = filterToStringMap[item.type];
  return (toStringFunction === null || toStringFunction === void 0 ? void 0 : toStringFunction(item)) || '';
};

const itemIsNotEmpty = ({
  type,
  value
}) => !(['match', 'contains', 'startsWith', 'endsWith', 'other'].indexOf(type) > -1 && isEmpty(value));
export const stringFilterToString = root => treeToString(root, stringToExpression, itemIsNotEmpty);
//# sourceMappingURL=string_filter_to_string.js.map