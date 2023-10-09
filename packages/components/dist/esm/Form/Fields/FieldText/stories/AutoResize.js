const _excluded = ["autoResize", "name", "label", "placeholder", "inline"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { Space } from '../../../../';
import { FieldText } from '../..';
export default function AutoResize(props) {
  const {
      autoResize = true,
      name = 'firstName',
      label = 'First Name',
      placeholder = 'Start typing and watch me scale to fit content',
      inline: _inline
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(Space, null, React.createElement(FieldText, _extends({
    autoResize: autoResize,
    name: name,
    label: label,
    placeholder: placeholder
  }, restProps)), React.createElement(FieldText, _extends({
    autoResize: autoResize,
    name: name,
    label: label,
    placeholder: placeholder,
    inline: true
  }, restProps)));
}
//# sourceMappingURL=AutoResize.js.map