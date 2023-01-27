
import i18next from 'i18next';
import defaultTo from 'lodash/defaultTo';
import { describeIsItem } from '../summary/describe_is_item';
import { describeIsAnyValue } from '../summary/describe_is_any_value';
import { describeNull } from '../summary/describe_null';
import { joinOr } from '../summary/join_or';
import { describeUserAttribute } from '../user_attribute/describe_user_attribute';
import { addQuotes } from './add_quotes';
const describeMultiValue = value => {
  return value && joinOr(value.map(addQuotes));
};
const match = ({
  is,
  value
}) => {
  return value && value.length ? describeIsItem(is, describeMultiValue(value)) : describeIsAnyValue();
};
const contains = ({
  is,
  value
}) => {
  const t = i18next.t.bind(i18next);
  const valueText = describeMultiValue(value);
  const containsText = t('contains value', {
    ns: 'describe_string',
    value: valueText
  });
  const doesntContainText = t('does not contain value', {
    ns: 'describe_string',
    value: valueText
  });
  return is ? containsText : doesntContainText;
};
const startsWith = ({
  is,
  value
}) => {
  const t = i18next.t.bind(i18next);
  const valueText = describeMultiValue(value);
  const startsWithText = t('starts with value', {
    ns: 'describe_string',
    value: valueText
  });
  const doesntStartWithText = t('does not start with value', {
    ns: 'describe_string',
    value: valueText
  });
  return is ? startsWithText : doesntStartWithText;
};
const endsWith = ({
  is,
  value
}) => {
  const t = i18next.t.bind(i18next);
  const valueText = describeMultiValue(value);
  const endsWithText = t('ends with value', {
    ns: 'describe_string',
    value: valueText
  });
  const doesntEndWithText = t('does not end with value', {
    ns: 'describe_string',
    value: valueText
  });
  return is ? endsWithText : doesntEndWithText;
};
const blank = ({
  is
}) => {
  const t = i18next.t.bind(i18next);
  return describeIsItem(is, t('blank', {
    ns: 'describe_string'
  }));
};
const filterToStringMap = {
  blank,
  null: describeNull,
  match,
  contains,
  startsWith,
  endsWith,
  user_attribute: describeUserAttribute,
  anyvalue: describeIsAnyValue
};

export const describeString = item => defaultTo(filterToStringMap[item.type], () => '')(item);
//# sourceMappingURL=describe_string.js.map