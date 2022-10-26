import React, { useContext } from 'react';
import { DialogContext, TreeCollection, Tree, TreeItem } from '@looker/components';
export const FieldSelector = ({
  groups,
  current,
  onChange
}) => {
  const {
    closeModal
  } = useContext(DialogContext);

  const getFieldClickHandler = field => () => {
    onChange(field);
    closeModal();
  };

  return React.createElement(TreeCollection, null, Object.keys(groups).map(group => {
    var _current$name;

    return React.createElement(Tree, {
      selected: (current === null || current === void 0 ? void 0 : (_current$name = current.name) === null || _current$name === void 0 ? void 0 : _current$name.split('.')[0]) === group,
      key: group,
      label: group.replace(/_/g, ' ')
    }, groups[group].map(field => {
      const {
        name = ''
      } = field;
      return React.createElement(TreeItem, {
        selected: (current === null || current === void 0 ? void 0 : current.name) === name,
        key: name,
        onClick: getFieldClickHandler(field)
      }, name.replace(`${group}.`, '').replace(/_/g, ' '));
    }));
  }));
};
//# sourceMappingURL=FieldSelector.js.map