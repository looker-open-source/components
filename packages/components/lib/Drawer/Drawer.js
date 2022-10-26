import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children"];
import React from 'react';
import { DialogRender } from '../Dialog/DialogRender';
import { useDrawer } from './useDrawer';
export const Drawer = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return React.createElement(DialogRender, useDrawer(props), children);
};
//# sourceMappingURL=Drawer.js.map