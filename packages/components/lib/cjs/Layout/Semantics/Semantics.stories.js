"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CommonLayouts = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Grid = require("../Grid");

var _Aside = require("./Aside");

var _Footer = require("./Footer");

var _Header = require("./Header");

var _Layout = require("./Layout");

var _Section = require("./Section");

var _templateObject, _templateObject2;

var _default = {
  title: 'Semantics Layout'
};
exports["default"] = _default;

var CommonLayouts = function CommonLayouts() {
  return _react["default"].createElement(CustomGrid, {
    columns: 3
  }, _react["default"].createElement(HeaderLayoutAsideMain, null), _react["default"].createElement(AsideMainFooter, null), _react["default"].createElement(HeaderLayoutAsideMainFooter, null), _react["default"].createElement(AsideLayoutHeaderMainFooter, null), _react["default"].createElement(AsideLayoutHeaderLayoutLayoutMainAsideFooter, null));
};

exports.CommonLayouts = CommonLayouts;

var HeaderLayoutAsideMain = function HeaderLayoutAsideMain() {
  return _react["default"].createElement(Highlighter, null, _react["default"].createElement(_Layout.Layout, null, _react["default"].createElement(_Header.Header, null, "Header"), _react["default"].createElement(_Layout.Layout, {
    hasAside: true
  }, _react["default"].createElement(_Aside.Aside, {
    width: "20%"
  }, "Aside"), _react["default"].createElement(_Section.Section, null, "Section"))));
};

var HeaderLayoutAsideMainFooter = function HeaderLayoutAsideMainFooter() {
  return _react["default"].createElement(Highlighter, null, _react["default"].createElement(_Layout.Layout, null, _react["default"].createElement(_Header.Header, null, "Header"), _react["default"].createElement(_Layout.Layout, {
    hasAside: true
  }, _react["default"].createElement(_Aside.Aside, {
    width: "20%"
  }, "Aside"), _react["default"].createElement(_Section.Section, null, "Section")), _react["default"].createElement(_Footer.Footer, null, "Footer")));
};

var AsideMainFooter = function AsideMainFooter() {
  return _react["default"].createElement(Highlighter, null, _react["default"].createElement(_Layout.Layout, null, _react["default"].createElement(_Layout.Layout, {
    hasAside: true
  }, _react["default"].createElement(_Aside.Aside, {
    width: "20%"
  }, "Aside"), _react["default"].createElement(_Section.Section, null, "Section")), _react["default"].createElement(_Footer.Footer, null, "Footer")));
};

var AsideLayoutHeaderMainFooter = function AsideLayoutHeaderMainFooter() {
  return _react["default"].createElement(Highlighter, null, _react["default"].createElement(_Layout.Layout, null, _react["default"].createElement(_Layout.Layout, {
    hasAside: true
  }, _react["default"].createElement(_Aside.Aside, {
    width: "20%"
  }, "Aside"), _react["default"].createElement(_Layout.Layout, null, _react["default"].createElement(_Header.Header, null, "Header"), _react["default"].createElement(_Section.Section, null, "Section"), _react["default"].createElement(_Footer.Footer, null, "Footer")))));
};

var AsideLayoutHeaderLayoutLayoutMainAsideFooter = function AsideLayoutHeaderLayoutLayoutMainAsideFooter() {
  return _react["default"].createElement(Highlighter, null, _react["default"].createElement(_Layout.Layout, null, _react["default"].createElement(_Layout.Layout, {
    hasAside: true
  }, _react["default"].createElement(_Aside.Aside, {
    width: "20%"
  }, "Aside"), _react["default"].createElement(_Layout.Layout, null, _react["default"].createElement(_Header.Header, null, "Header"), _react["default"].createElement(_Layout.Layout, null, _react["default"].createElement(_Layout.Layout, {
    hasAside: true
  }, _react["default"].createElement(_Section.Section, null, "Section"), _react["default"].createElement(_Aside.Aside, {
    width: "40%"
  }, "Aside"))), _react["default"].createElement(_Footer.Footer, null, "Footer")))));
};

var CustomGrid = (0, _styledComponents["default"])(_Grid.Grid).withConfig({
  displayName: "Semanticsstories__CustomGrid",
  componentId: "sc-3avxxi-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  grid-auto-rows: 12rem;\n"])));

var Highlighter = _styledComponents["default"].div.withConfig({
  displayName: "Semanticsstories__Highlighter",
  componentId: "sc-3avxxi-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  /* Emulate Page behavior for demos */\n  height: 100%;\n  & > ", " {\n    height: 100%;\n  }\n\n  /* stylelint-disable color-named */\n\n  ", ", ", " {\n    background-color: lightskyblue;\n  }\n\n  ", " {\n    background-color: lightsalmon;\n  }\n\n  ", " {\n    background-color: lightseagreen;\n  }\n"])), _Layout.Layout, _Header.Header, _Footer.Footer, _Aside.Aside, _Section.Section);
//# sourceMappingURL=Semantics.stories.js.map