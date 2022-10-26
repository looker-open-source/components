import _extends from "@babel/runtime/helpers/extends";
import { Space } from '@looker/components';
import React from 'react';
import { useTranslation } from '../../../../../../../utils';
import { GroupInput } from '../../../GroupInput';
import { GroupSelect } from '../../../GroupSelect';
import { MidInputLabel } from '../../../MidInputLabel';
import { useBetweenOptions } from '../../../../utils';
export const Between = ({
  item,
  onChange,
  validationMessage
}) => {
  const {
    t
  } = useTranslation('Between');
  const betweenOptions = useBetweenOptions();
  const {
    high = '',
    low = '',
    id
  } = item;

  const lowChange = event => {
    onChange === null || onChange === void 0 ? void 0 : onChange(id, {
      low: event.target.value
    });
  };

  const highChange = event => {
    onChange === null || onChange === void 0 ? void 0 : onChange(id, {
      high: event.target.value
    });
  };

  const selectChange = value => {
    onChange === null || onChange === void 0 ? void 0 : onChange(id, {
      bounds: value
    });
  };

  const validationProps = {
    noErrorIcon: true,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type
  };
  return React.createElement(Space, {
    gap: "none",
    width: "auto"
  }, React.createElement(GroupSelect, _extends({
    placement: "middle",
    value: item.bounds,
    options: betweenOptions,
    onChange: selectChange
  }, validationProps)), React.createElement(GroupInput, _extends({
    value: low,
    type: "number",
    onChange: lowChange,
    minWidth: "4.5em",
    "data-testid": "low"
  }, validationProps)), React.createElement(MidInputLabel, {
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type
  }, t('AND')), React.createElement(GroupInput, _extends({
    value: high,
    type: "number",
    onChange: highChange,
    placement: "right",
    minWidth: "4.5em",
    "data-testid": "high"
  }, validationProps)));
};
//# sourceMappingURL=Between.js.map