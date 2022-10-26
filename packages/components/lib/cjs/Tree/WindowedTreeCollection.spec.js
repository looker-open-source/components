"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _Windowing = require("./stories/Windowing");

var globalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
describe('WindowedTreeCollection', function () {
  beforeEach(function () {
    Element.prototype.getBoundingClientRect = jest.fn(function () {
      return {
        bottom: 0,
        height: 342,
        left: 0,
        right: 0,
        toJSON: jest.fn(),
        top: 0,
        width: 260,
        x: 0,
        y: 0
      };
    });
  });
  afterEach(function () {
    Element.prototype.getBoundingClientRect = globalGetBoundingClientRect;
  });
  test('no windowing for 100 or fewer visible items', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Windowing.Windowing, {
      noText: true
    }));
    expect(_react2.screen.getByText('0')).toBeVisible();
    expect(_react2.screen.getByText('99')).toBeVisible();
  });
  test('windowing for over 100 visible items', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Windowing.Windowing, {
      noText: true
    }));

    var openAllButton = _react2.screen.getByText('Toggle all open');

    _react2.fireEvent.click(openAllButton);

    expect(_react2.screen.getByText('0')).toBeVisible();
    expect(_react2.screen.getByText('0-5-3')).toBeVisible();
    expect(_react2.screen.queryByText('0-5-4')).not.toBeInTheDocument();
    expect(_react2.screen.queryByText('99')).not.toBeInTheDocument();

    var tree02 = _react2.screen.getByText('0-2');

    _react2.fireEvent.click(tree02);

    expect(_react2.screen.getByText('0-5-4')).toBeVisible();
    expect(_react2.screen.getByText('0-8-0')).toBeVisible();
    expect(_react2.screen.queryByText('0-8-1')).not.toBeInTheDocument();
  });
});
//# sourceMappingURL=WindowedTreeCollection.spec.js.map