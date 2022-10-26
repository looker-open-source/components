"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _testingReact = require("@storybook/testing-react");

var _react2 = require("@testing-library/react");

var _Constitution = require("../../fixtures/Constitution");

var stories = _interopRequireWildcard(require("./DialogLayout.stories"));

var _DialogLayout2 = require("./DialogLayout");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _composeStories = (0, _testingReact.composeStories)(stories),
    Basic = _composeStories.Basic,
    HeaderDetail = _composeStories.HeaderDetail,
    HeaderCloseButton = _composeStories.HeaderCloseButton;

describe('DialogLayout', function () {
  test('Basic ', function () {
    (0, _react2.render)(_react["default"].createElement(Basic, null));
    expect(_react2.screen.getByText(/We the People of the United States/)).toBeInTheDocument();
  });
  test('Replaces the built-in `IconButton` with an arbitrary ReactNode', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(HeaderDetail, null));
    expect(_react2.screen.getByText('Header text')).toBeInTheDocument();
    expect(_react2.screen.getByText('Cancel')).toBeInTheDocument();
  });
  test('HeaderCloseButton ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(HeaderCloseButton, null));
    expect(_react2.screen.getByText('Close')).toBeInTheDocument();
  });
  test('FooterSecondary ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DialogLayout2.DialogLayout, {
      footerSecondary: "Cancel",
      footer: "Footer text"
    }, _react["default"].createElement(_Constitution.ConstitutionShort, null)));
    expect(_react2.screen.getByText('Footer text')).toBeInTheDocument();
    expect(_react2.screen.getByText('Cancel')).toBeInTheDocument();
  });
  test('FooterSecondary without footer causes TS Exception', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DialogLayout2.DialogLayout, {
      footerSecondary: "problem"
    }));
  });
});
//# sourceMappingURL=DialogLayout.spec.js.map