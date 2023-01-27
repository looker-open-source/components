

import defaultTo from 'lodash/defaultTo';
import keyBy from 'lodash/keyBy';
import { addQuotes } from '../string/add_quotes';
import { describeIsItem } from '../summary/describe_is_item';
import { describeIsAnyValue } from '../summary/describe_is_any_value';
import { joinOr } from '../summary/join_or';
import { describeUserAttribute } from '../user_attribute/describe_user_attribute';
import { escapeParameterValue } from './escape_parameter_value';
const describeMultiValue = (values, field) => {
  if (values) {
    if (field !== null && field !== void 0 && field.parameter && field !== null && field !== void 0 && field.has_allowed_values) {
      const valueMap = keyBy(field.enumerations, 'value');
      return joinOr(values.map(value => {
        var _valueMap$escapedValu;
        const escapedValue = escapeParameterValue(value);
        return ((_valueMap$escapedValu = valueMap[escapedValue]) === null || _valueMap$escapedValu === void 0 ? void 0 : _valueMap$escapedValu.label) || value;
      }));
    }
    return joinOr(values.map(addQuotes));
  }
  return '';
};
const match = ({
  is,
  value
}, _, field) => {
  return value && value.length ? describeIsItem(is, describeMultiValue(value, field)) : describeIsAnyValue();
};
const filterToStringMap = {
  match,
  user_attribute: describeUserAttribute,
  anyvalue: describeIsAnyValue
};

export const describeTier = (item, filterType, field) => defaultTo(filterToStringMap[item.type], () => '')(item, filterType, field);
//# sourceMappingURL=describe_tier.js.map