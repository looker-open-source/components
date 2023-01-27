
import React, { useContext } from 'react';
import { Box, DialogContext } from '@looker/components';
import { TreeSelect } from '@looker/filter-components';
export const FieldSelector = ({
  tree,
  current,
  onChange
}) => {
  const {
    closeModal
  } = useContext(DialogContext);
  const getFieldClickHandler = field => {
    onChange(field.fieldOptions);
    closeModal();
  };
  return React.createElement(Box, {
    p: "u2"
  }, React.createElement(TreeSelect, {
    searchInputValue: (current === null || current === void 0 ? void 0 : current.label_short) || '',
    tree: tree,
    onSelectedFieldChange: getFieldClickHandler,
    withDropdown: false
  }));
};
//# sourceMappingURL=FieldSelector.js.map