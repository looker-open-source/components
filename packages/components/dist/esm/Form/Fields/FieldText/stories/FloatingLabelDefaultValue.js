const _excluded = ["name", "label", "description", "detail", "defaultValue"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import React from 'react';
import { FieldText } from '../..';
export default function FloatingLabelDefaultValue(props) {
  const {
      name = 'firstName',
      label = 'First Name',
      description = 'Some important information about this field',
      detail = '0/50',
      defaultValue = 'My Name'
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, React.createElement(FieldText, _extends({
    detail: detail,
    description: description,
    name: name,
    label: label,
    defaultValue: defaultValue
  }, restProps)));
}
//# sourceMappingURL=FloatingLabelDefaultValue.js.map