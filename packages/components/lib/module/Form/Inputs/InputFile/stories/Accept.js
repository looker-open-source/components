import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["handleFile", "accept", "value"];

import React from 'react';
import { InputFile } from '..';
export default function Accept(props) {
  const {
      handleFile = () => {
      },
      accept = '.pdf',
      value = 'Accepts only PDF files'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(InputFile, _extends({
    handleFile: handleFile,
    accept: accept,
    value: value
  }, restProps));
}
//# sourceMappingURL=Accept.js.map