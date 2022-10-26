"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Paragraph = require("./Paragraph");

describe('Paragraph', function () {
  test('default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Paragraph.Paragraph, null, "Hello"));
    expect(_react2.screen.getByText('Hello')).toBeInTheDocument();
    expect(_react2.screen.getByText('Hello').tagName).toEqual('P');
  });
  test('fontSize = default', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Paragraph.Paragraph, null, "Hello"));
    expect(_react2.screen.getByText('Hello')).toHaveStyle('font-size: inherit;');
  });
  test('fontSize = design token', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Paragraph.Paragraph, {
      fontSize: "xxxxlarge"
    }, "Hello"));
    expect(_react2.screen.getByText('Hello')).toHaveStyle('font-size: 2.25rem;');
  });
  test('textAlign', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Paragraph.Paragraph, {
      textAlign: "right"
    }, "Hello"));
    expect(_react2.screen.getByText('Hello')).toHaveStyle('text-align: right');
  });
  test('fontWeight', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Paragraph.Paragraph, {
      fontWeight: "bold"
    }, "Hello"));
    expect(_react2.screen.getByText('Hello')).toHaveStyle('font-weight: 700;');
  });
  test('color', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Paragraph.Paragraph, {
      color: "critical"
    }, "Hello"));
    expect(_react2.screen.getByText('Hello')).toHaveStyle('color:  rgb(204, 31, 54)');
  });
  test('textTransform', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Paragraph.Paragraph, {
      textTransform: "uppercase"
    }, "Hello"));
    expect(_react2.screen.getByText('Hello')).toHaveStyle('text-transform: uppercase;');
  });
  test('breakword', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Paragraph.Paragraph, {
      breakword: true
    }, "Hello"));
    expect(_react2.screen.getByText('Hello')).toHaveStyle('overflow-wrap: break-word;');
  });
  test('textDecoration', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Paragraph.Paragraph, {
      textDecoration: "line-through"
    }, "Hello"));
    expect(_react2.screen.getByText('Hello')).toHaveStyle('text-decoration: line-through;');
  });
  test('truncate', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Paragraph.Paragraph, {
      truncate: true
    }, "Hello"));
    expect(_react2.screen.getByText('Hello')).toHaveStyle('text-overflow: ellipsis;');
  });
  test('multiline truncate', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Paragraph.Paragraph, {
      truncateLines: 2
    }, "Hello"));
    expect(_react2.screen.getByText('Hello')).toHaveStyle('display: -webkit-box;');
  });
});
//# sourceMappingURL=Paragraph.spec.js.map