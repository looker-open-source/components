"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = require("@testing-library/react");

require("jest-styled-components");

var _react2 = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _MenuItem = require("./MenuItem");

var _MenuList = require("./MenuList");

var _MenuHeading = require("./MenuHeading");

var _MenuDivider = require("./MenuDivider");

var globalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
describe('MenuList', function () {
  describe('windowing', function () {
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
      jest.resetAllMocks();
      Element.prototype.getBoundingClientRect = globalGetBoundingClientRect;
    });
    test('windows a long list', function () {
      var arr3000 = Array.from(Array(3000), function (_, i) {
        return i;
      });
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_MenuList.MenuList, null, arr3000.map(function (num) {
        return _react2["default"].createElement(_MenuItem.MenuItem, {
          key: num
        }, num);
      })));
      expect(_react.screen.getByText('0')).toBeVisible();
      expect(_react.screen.getByText('15')).toBeVisible();
      expect(_react.screen.queryByText('16')).not.toBeInTheDocument();
      var totalItems = arr3000.length;
      var windowedItems = 16;
      var defaultItemHeight = 36;
      var height = (totalItems - windowedItems) * defaultItemHeight;
      expect(_react.screen.queryByTestId('before')).not.toBeInTheDocument();
      expect(_react.screen.getByTestId('after')).toHaveStyle("height: ".concat(height, "px;"));
      expect(_react.screen.getByRole('menu')).toHaveStyle('overflow: auto');
    });
  });
  describe('composition', function () {
    test('renders a MenuHeading, MenuDivider and MenuItems together', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_MenuList.MenuList, null, _react2["default"].createElement(_MenuHeading.MenuHeading, null, "My Menu List"), _react2["default"].createElement(_MenuItem.MenuItem, null, "First"), _react2["default"].createElement(_MenuDivider.MenuDivider, {
        "data-testid": "divider"
      }), _react2["default"].createElement(_MenuItem.MenuItem, null, "Last")));
      expect(_react.screen.getByTestId('divider')).toBeVisible();

      _react.screen.getByText('My Menu List');
    });
  });
});
//# sourceMappingURL=MenuList.spec.js.map