import _extends from "@babel/runtime/helpers/extends";

import React from 'react';
import { InputTime } from '..';
import { Label, Space } from '../../../..';
export default function WithLabel(props) {
  return React.createElement(Space, null, React.createElement(Label, {
    htmlFor: "demo-id"
  }, "Label Text"), React.createElement(InputTime, _extends({
    id: "demo-id"
  }, props)));
}
//# sourceMappingURL=WithLabel.js.map