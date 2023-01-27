import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["value", "options"];

import React, { useState } from 'react';
import { CheckboxGroup } from '../';
import { Paragraph, Space, Heading } from '../../../../';
const mockOptions = [{
  label: 'Cheddar',
  value: 'cheddar'
}, {
  label: 'Gouda',
  value: 'gouda'
}];
export default function Controlled(props) {
  const {
      value: valueProp = ['cheddar'],
      options = mockOptions
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const [value, setValue] = useState(valueProp);
  return React.createElement(Space, {
    align: "start"
  }, React.createElement(CheckboxGroup, _extends({
    name: "cheeses",
    value: value,
    onChange: setValue,
    options: options
  }, restProps)), React.createElement("div", null, React.createElement(Heading, null, "Current Selection:"), React.createElement(Paragraph, null, value.join(', '))));
}
//# sourceMappingURL=Controlled.js.map