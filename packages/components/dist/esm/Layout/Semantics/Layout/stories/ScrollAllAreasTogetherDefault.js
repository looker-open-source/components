const _excluded = ["hasAside"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { Page, Layout, Aside, Section } from '../..';
import { Constitution, ConstitutionShort } from '../../../..';
import { Heading } from '../../../../Text';
export default function ScrollAllAreasTogetherDefault(props) {
  const {
      hasAside
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  return React.createElement(Page, null, React.createElement(Layout, _extends({
    hasAside: hasAside
  }, rest), React.createElement(Aside, {
    p: "u5",
    width: "200px",
    style: {
      backgroundColor: 'lightsalmon'
    }
  }, React.createElement(ConstitutionShort, null)), React.createElement(Section, {
    main: true,
    p: "u10",
    style: {
      backgroundColor: 'lightgoldenrodyellow'
    }
  }, React.createElement(Heading, null, "Page title"), React.createElement(Constitution, null)), React.createElement(Aside, {
    p: "u10",
    width: "10rem",
    style: {
      backgroundColor: 'lightskyblue'
    }
  }, React.createElement(ConstitutionShort, null))));
}
//# sourceMappingURL=ScrollAllAreasTogetherDefault.js.map