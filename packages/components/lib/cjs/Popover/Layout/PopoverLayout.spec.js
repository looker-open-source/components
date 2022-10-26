"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _testingReact = require("@storybook/testing-react");

var _react2 = require("@testing-library/react");

var stories = _interopRequireWildcard(require("./PopoverLayout.stories"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _composeStories = (0, _testingReact.composeStories)(stories),
    Basic = _composeStories.Basic,
    FooterCloseButton = _composeStories.FooterCloseButton,
    Full = _composeStories.Full,
    Header = _composeStories.Header,
    HeaderHideHeading = _composeStories.HeaderHideHeading;

describe('PopoverLayout', function () {
  test('basic display has footer ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, null));
    expect(_react2.screen.getByText(/We the People of the United States/)).toBeInTheDocument();
    expect(_react2.screen.getByText('Done')).toBeInTheDocument();
  });
  test('hideHeading prop hides Header', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(HeaderHideHeading, null));

    var hiddenHeader = _react2.screen.getByText('Header text');

    expect(hiddenHeader).toBeInTheDocument();
    expect(hiddenHeader).toHaveStyle('clip: rect(1px, 1px, 1px, 1px)');
  });
  test('Header and no Footer ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Header, null));
    expect(_react2.screen.getByText('Close')).toBeInTheDocument();
    expect(_react2.screen.queryByText('Done')).not.toBeInTheDocument();
  });
  test('Footer with CloseButton', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(FooterCloseButton, null));
    expect(_react2.screen.getByText('Close')).toBeInTheDocument();
    expect(_react2.screen.queryByText('Done')).not.toBeInTheDocument();
  });
  test('With header & footer display only "Done" button', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Full, null));
    expect(_react2.screen.queryByText('Close')).not.toBeInTheDocument();
    expect(_react2.screen.getByText('Done')).toBeInTheDocument();
  });
  test('FooterExtraValue ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Full, null));
    expect(_react2.screen.getByText('Cancel')).toBeInTheDocument();
    expect(_react2.screen.getByText('Done')).toBeInTheDocument();
  });
});
//# sourceMappingURL=PopoverLayout.spec.js.map