
import i18next from 'i18next';
import defaultTo from 'lodash/defaultTo';
import { describeIsItem } from '../summary/describe_is_item';
import { describeIsAnyValue } from '../summary/describe_is_any_value';
import { describeNull } from '../summary/describe_null';
import { joinOr } from '../summary/join_or';
import { describeUserAttribute } from '../user_attribute/describe_user_attribute';
const describeEquals = ({
  is,
  value
}) => {
  return value && value.length ? describeIsItem(is, joinOr(value)) : describeIsAnyValue();
};
const describeSingleValue = ({
  is,
  type,
  value
}) => describeIsItem(is, `${type} ${value && value.length ? value[0] : ''}`);

const describeBetween = ({
  bounds,
  low,
  high,
  is
}) => {
  if (bounds) {
    const t = i18next.t.bind(i18next);
    const range = `${bounds[0]}${low}, ${high}${bounds[1]}`;
    const isInRangeText = t('is in range range', {
      ns: 'describe_number',
      range
    });
    const isNotInRangeText = t('is not in range range', {
      ns: 'describe_number',
      range
    });
    return is ? isInRangeText : isNotInRangeText;
  }
  return '';
};
const filterToStringMap = {
  null: describeNull,
  between: describeBetween,
  '=': describeEquals,
  '>': describeSingleValue,
  '>=': describeSingleValue,
  '<': describeSingleValue,
  '<=': describeSingleValue,
  user_attribute: describeUserAttribute
};

export const describeNumber = item => defaultTo(filterToStringMap[item.type], () => '')(item);
//# sourceMappingURL=describe_number.js.map