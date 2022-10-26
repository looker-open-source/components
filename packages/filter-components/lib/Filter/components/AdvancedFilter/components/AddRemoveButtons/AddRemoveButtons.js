import { IconButton } from '@looker/components';
import { Add } from '@styled-icons/material/Add';
import { Close } from '@styled-icons/material/Close';
import { useTranslation } from '../../../../../utils';
import React from 'react';
export const AddRemoveButtons = ({
  onAdd,
  onRemove,
  showAdd,
  showRemove
}) => {
  const {
    t
  } = useTranslation('AddRemoveButtons');
  return React.createElement(React.Fragment, null, showRemove && React.createElement(IconButton, {
    icon: React.createElement(Close, null),
    size: "small",
    ml: "xsmall",
    label: t('Remove'),
    outline: false,
    onClick: onRemove,
    style: {
      marginTop: '2px'
    }
  }), showAdd && React.createElement(IconButton, {
    icon: React.createElement(Add, null),
    size: "small",
    ml: "xsmall",
    label: t('Add'),
    outline: false,
    onClick: onAdd,
    style: {
      marginTop: '2px'
    }
  }));
};
//# sourceMappingURL=AddRemoveButtons.js.map