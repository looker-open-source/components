import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["content"];
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Menu, MenuItem, Button } from '../..';
export default function Basic(props) {
  const {
      content = React.createElement(React.Fragment, null, React.createElement(MenuItem, {
        icon: React.createElement(MaterialIcons.Favorite, null)
      }, "Gouda"), React.createElement(MenuItem, {
        icon: React.createElement(MaterialIcons.Favorite, null)
      }, "Swiss"))
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  return React.createElement(Menu, _extends({
    content: content
  }, rest), React.createElement(Button, null, "Cheese"));
}
//# sourceMappingURL=Basic.js.map