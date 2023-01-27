import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["handleFile"];

import React from 'react';
import { InputFile } from '../';
export default function Basic(props) {
  const {
      handleFile = () => {
      }
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(InputFile, _extends({
    handleFile: handleFile
  }, restProps));
}
//# sourceMappingURL=Basic.js.map