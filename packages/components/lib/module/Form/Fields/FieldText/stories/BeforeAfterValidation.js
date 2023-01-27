import _extends from "@babel/runtime/helpers/extends";

import * as MaterialIcons from '@styled-icons/material';
import React from 'react';
import { Button } from '../../../../Button';
import { Icon } from '../../../../Icon';
import { Space, SpaceVertical } from '../../../../Layout';
import { Text } from '../../../../Text';
import { Tooltip } from '../../../../Tooltip';
import { useToggle } from '../../../../utils';
import { FieldText } from '../..';
export default function BeforeAfterValidation() {
  const {
    value,
    toggle
  } = useToggle(true);
  const validation = value ? {
    validationMessage: {
      message: 'Oops!',
      type: 'error'
    }
  } : {};
  return React.createElement(SpaceVertical, {
    align: "start"
  }, React.createElement(Button, {
    onClick: toggle
  }, "Toggle error state"), React.createElement(Space, null, React.createElement(FieldText, _extends({
    label: "iconBefore",
    iconBefore: React.createElement(MaterialIcons.Favorite, null)
  }, validation)), React.createElement(FieldText, _extends({
    label: "iconAfter",
    iconAfter: React.createElement(MaterialIcons.AccountCircle, null)
  }, validation)), React.createElement(FieldText, _extends({
    label: "before string",
    before: "$"
  }, validation)), React.createElement(FieldText, _extends({
    label: "after string",
    after: "%"
  }, validation)), React.createElement(FieldText, _extends({
    label: "before & after",
    before: React.createElement(Tooltip, {
      content: "Some very important info"
    }, React.createElement(Icon, {
      icon: React.createElement(MaterialIcons.AddAlert, null),
      size: "small",
      style: {
        cursor: 'default'
      }
    })),
    after: React.createElement(Text, {
      fontSize: "small",
      color: value ? 'critical' : 'info'
    }, "Helper text")
  }, validation))));
}
//# sourceMappingURL=BeforeAfterValidation.js.map