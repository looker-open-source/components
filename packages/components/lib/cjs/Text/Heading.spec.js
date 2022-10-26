"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Heading = require("./Heading");

describe('Heading', function () {
  test('default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Heading.Heading, null, "\uD83E\uDD51"));
    expect(_react2.screen.getByText('🥑')).toBeInTheDocument();
    expect(_react2.screen.getByText('🥑').tagName).toEqual('H2');
  });
  test('<h1>', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Heading.Heading, {
      as: "h1"
    }, "\uD83E\uDD51"));
    expect(_react2.screen.getByText('🥑').tagName).toEqual('H1');
    expect(_react2.screen.getByText('🥑')).toHaveStyle('font-size: 1.5rem;');
  });
  test('<h1> sized to <h2>', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Heading.Heading, {
      as: "h1",
      fontSize: "xlarge"
    }, "\uD83E\uDD51"));
    expect(_react2.screen.getByText('🥑').tagName).toEqual('H1');
    expect(_react2.screen.getByText('🥑')).toHaveStyle('font-size: 1.375rem;');
  });
  test('bold', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Heading.Heading, {
      fontWeight: "bold"
    }, "\uD83E\uDD51"));
    expect(_react2.screen.getByText('🥑')).toHaveStyle('font-weight: 700');
  });
  test('transform', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Heading.Heading, {
      textTransform: "capitalize"
    }, "\uD83E\uDD51"));
    expect(_react2.screen.getByText('🥑')).toHaveStyle('text-transform: capitalize');
  });
  test('variant color', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Heading.Heading, {
      color: "text1"
    }, "\uD83E\uDD51"));
    expect(_react2.screen.getByText('🥑')).toHaveStyle('color: rgb(147, 155, 165)');
  });
  test('truncated', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Heading.Heading, {
      truncate: true
    }, "\uD83E\uDD51"));
    expect(_react2.screen.getByText('🥑')).toHaveStyle('text-overflow: ellipsis;');
  });
  test('multiline truncate', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Heading.Heading, {
      truncateLines: 2
    }, "\uD83E\uDD51"));
    expect(_react2.screen.getByText('🥑')).toHaveStyle('display: -webkit-box;');
  });
});
//# sourceMappingURL=Heading.spec.js.map