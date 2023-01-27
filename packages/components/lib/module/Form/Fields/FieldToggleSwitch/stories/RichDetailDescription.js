import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["label", "name", "id", "description", "detail"];

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { IconButton } from '../../../../Button';
import { FieldToggleSwitch } from '..';
export default function RichDetailDescription(props) {
  const {
      label = 'Toggle Switch',
      name = 'thumbsUp',
      id = 'id',
      description = React.createElement(React.Fragment, null, "describe something here. ", React.createElement("a", {
        href: "somewhere"
      }, "Link")),
      detail = React.createElement(IconButton, {
        icon: React.createElement(MaterialIcons.Delete, null),
        label: "Hello world"
      })
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(FieldToggleSwitch, _extends({
    id: id,
    label: label,
    name: name,
    detail: detail,
    description: description
  }, restProps));
}
//# sourceMappingURL=RichDetailDescription.js.map