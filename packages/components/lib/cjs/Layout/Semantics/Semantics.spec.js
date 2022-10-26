"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _Aside = require("./Aside/Aside");

var _ = require("./");

describe('Semantics', function () {
  test('whole page scrolls together by default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Page, null, _react["default"].createElement(_.Header, {
      height: "4rem",
      px: "large"
    }, "I'm the header"), _react["default"].createElement(_.Layout, {
      hasAside: true
    }, _react["default"].createElement(_Aside.Aside, null, "I'm the Aside before"), _react["default"].createElement(_.Section, null, "I'm the main area")), _react["default"].createElement(_.Footer, {
      height: "4rem",
      px: "large"
    }, "I'm the Footer")));
    expect(_react2.screen.getByText("I'm the Aside before")).toBeInTheDocument();
    expect(_react2.screen.getByText("I'm the header").closest('div')).toHaveStyle('overflow: auto;');
  });
  test('using prop fixed on page will have Header and Footer fixed while the rest of the page scrolls', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Page, {
      fixed: true
    }, _react["default"].createElement(_.Header, {
      height: "4rem",
      px: "large"
    }, "I'm the header"), _react["default"].createElement(_.Layout, {
      hasAside: true
    }, _react["default"].createElement(_Aside.Aside, null, "I'm the Aside before"), _react["default"].createElement(_.Section, null, "I'm the main area")), _react["default"].createElement(_.Footer, {
      height: "4rem",
      px: "large"
    }, "I'm the Footer")));
    expect(_react2.screen.getByText("I'm the Aside before")).toBeInTheDocument();
    expect(_react2.screen.getByText("I'm the header").closest('div')).toHaveStyle('overflow: hidden;');
  });
  test('using prop scrollWithin will have areas scrolling together.', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Page, {
      fixed: true
    }, _react["default"].createElement(_.Layout, {
      hasAside: true
    }, _react["default"].createElement(_Aside.Aside, {
      scrollWithin: true
    }, "I'm the Aside before"), _react["default"].createElement(_.Section, {
      scrollWithin: true
    }, "I'm the main area"), _react["default"].createElement(_Aside.Aside, {
      scrollWithin: true
    }, "I'm the Aside after"))));
    expect(_react2.screen.getByText("I'm the Aside before")).toHaveStyle('height: fit-content;');
    expect(_react2.screen.getByText("I'm the main area")).toHaveStyle('height: fit-content;');
    expect(_react2.screen.getByText("I'm the Aside after")).toHaveStyle('height: fit-content;');
  });
  test('using prop scrollWithin will have only selected areas scrolling together.', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Page, {
      fixed: true
    }, _react["default"].createElement(_.Layout, {
      hasAside: true
    }, _react["default"].createElement(_Aside.Aside, null, "I'm the Aside before"), _react["default"].createElement(_.Layout, {
      hasAside: true
    }, _react["default"].createElement(_.Section, {
      scrollWithin: true
    }, "I'm the main area"), _react["default"].createElement(_Aside.Aside, {
      scrollWithin: true
    }, "I'm the Aside after")))));
    expect(_react2.screen.getByText("I'm the Aside before")).not.toHaveStyleRule('height');
    expect(_react2.screen.getByText("I'm the main area")).toHaveStyle({
      height: 'fit-content'
    });
    expect(_react2.screen.getByText("I'm the Aside after")).toHaveStyle({
      height: 'fit-content'
    });
  });
});
//# sourceMappingURL=Semantics.spec.js.map