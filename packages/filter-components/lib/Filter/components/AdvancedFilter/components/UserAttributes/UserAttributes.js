import { findUserAttribute } from '@looker/filter-expressions';
import React from 'react';
import { GroupSelect } from '../GroupSelect';

const createOptions = (userAttributes = []) => userAttributes.map(({
  name,
  label,
  value
}) => ({
  value: name,
  label: `${label} (${value})`
}));

export const UserAttributes = ({
  item,
  item: {
    attributeName
  },
  userAttributes,
  onChange,
  validationMessage
}) => {
  const userAttributeChange = value => {
    const userAttribute = findUserAttribute(value, userAttributes);
    onChange(item.id, {
      attributeName: value,
      attributeValue: userAttribute && userAttribute.value
    });
  };

  return React.createElement(GroupSelect, {
    value: attributeName,
    placeholder: "Select...",
    options: createOptions(userAttributes),
    onChange: userAttributeChange,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type,
    placement: "right"
  });
};
//# sourceMappingURL=UserAttributes.js.map