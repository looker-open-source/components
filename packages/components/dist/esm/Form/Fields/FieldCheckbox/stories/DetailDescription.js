function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { FieldCheckbox } from '../../FieldCheckbox';
export default function DetailDescription(props) {
  return React.createElement(FieldCheckbox, _extends({
    description: "describe something here.",
    detail: "4/20",
    id: "id",
    label: "Example Field",
    name: "thumbsUp"
  }, props));
}
//# sourceMappingURL=DetailDescription.js.map