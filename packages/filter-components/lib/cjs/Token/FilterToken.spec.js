"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _react = _interopRequireDefault(require("react"));

var _testingReact = require("@storybook/testing-react");

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _utils = require("../utils");

var stories = _interopRequireWildcard(require("./FilterToken.stories"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _composeStories = (0, _testingReact.composeStories)(stories),
    Basic = _composeStories.Basic,
    Expression = _composeStories.Expression,
    Error = _composeStories.Error,
    Inline = _composeStories.Inline;

describe('FilterToken', function () {
  (0, _utils.i18nInit)();
  it('shows the filter summary', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Expression, null));

    var token = _react2.screen.getByRole('button');

    expect(token).toHaveTextContent('is foo or bar');
  });
  it('opens a popover with filter UI', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, null));

    var token = _react2.screen.getByRole('button', {
      name: 'is any time'
    });

    _react2.fireEvent.click(token);

    expect(_react2.screen.getByRole('dialog')).toBeVisible();
    expect(_react2.screen.getByDisplayValue('is any time')).toBeVisible();

    _react2.fireEvent.click(document);
  });
  it('shows error validation', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Error, null));

    var token = _react2.screen.getByRole('button', {
      name: 'Value required'
    });

    _react2.fireEvent.click(token);

    expect(_react2.screen.getByDisplayValue('is any time')).toBeInvalid();
    expect(_react2.screen.getByText('Selection required')).toBeVisible();

    _react2.fireEvent.click(document);
  });
  it('renders filter UI inline', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Inline, null));
    expect(_react2.screen.getByDisplayValue('is any time')).toBeVisible();
  });
});
//# sourceMappingURL=FilterToken.spec.js.map