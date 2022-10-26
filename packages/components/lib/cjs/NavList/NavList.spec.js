"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _NavList = require("./stories/NavList.stories");

describe('NavList', function () {
  test('display with theme.colors.key', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_NavList.Basic, null));

    var listItem = _react2.screen.getByText('Explore');

    expect(listItem).toHaveStyle('color: #6c43e0;');
    expect(_react2.screen.getByText('Interesting details')).toHaveStyle('color: #6c43e0');
    expect(_react2.screen.getByText('Description')).toHaveStyle('color: #6c43e0;');
  });
  describe('keyboard navigation', function () {
    test('up and down arrow keys traverse from item to item', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", null, "Start Button"), _react["default"].createElement(_NavList.KeyboardNavigation, null)));

      var listItem = _react2.screen.getByText('List Item').closest('[role="listitem"]');

      var items = [listItem].concat((0, _toConsumableArray2["default"])(_react2.screen.getAllByRole('treeitem')));

      _userEvent["default"].click(_react2.screen.getByText('Start Button'));

      _userEvent["default"].tab();

      expect(items[0]).toHaveFocus();

      _userEvent["default"].keyboard('{arrowdown}');

      expect(items[1]).toHaveFocus();

      _userEvent["default"].keyboard('{arrowdown}');

      expect(items[2]).toHaveFocus();
    });
    test('left and right arrow keys traverse within an item from content to focusable detail elements', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", null, "Start Button"), _react["default"].createElement(_NavList.KeyboardNavigation, null)));
      var items = [_react2.screen.getByText('List Item').closest('[role="listitem"]')].concat((0, _toConsumableArray2["default"])(_react2.screen.getAllByRole('treeitem')));

      _userEvent["default"].click(_react2.screen.getByText('Start Button'));

      _userEvent["default"].tab();

      expect(items[0]).toHaveFocus();

      _userEvent["default"].keyboard('{arrowright}');

      expect(_react2.screen.getByText('list-item-detail-button').closest('button')).toHaveFocus();

      _userEvent["default"].keyboard('{arrowleft}');

      expect(items[0]).toHaveFocus();

      _userEvent["default"].keyboard('{arrowdown}');

      expect(items[1]).toHaveFocus();

      _userEvent["default"].keyboard('{arrowright}');

      _react2.screen.getByText('nav-tree-detail-button').closest('button');

      _userEvent["default"].keyboard('{arrowleft}');

      expect(items[1]).toHaveFocus();

      _userEvent["default"].keyboard('{arrowdown}');

      expect(items[2]).toHaveFocus();

      _userEvent["default"].keyboard('{arrowright}');

      _react2.screen.getByText('nav-tree-item-detail-button').closest('button');

      _userEvent["default"].keyboard('{arrowleft}');

      expect(items[2]).toHaveFocus();
    });
    test('indicator icon is focusable via keyboard and controls open/close state', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", null, "Start Button"), _react["default"].createElement(_NavList.KeyboardNavigation, null)));

      _userEvent["default"].click(_react2.screen.getByText('Start Button'));

      _userEvent["default"].tab();

      var navTreeLinkIndex = 3;

      var navTreeLink = _react2.screen.getByText('Nav Tree Link').closest('[role="treeitem"]');

      for (var i = 0; i < navTreeLinkIndex; i++) {
        _userEvent["default"].keyboard('{arrowdown}');
      }

      expect(navTreeLink).toHaveFocus();

      _userEvent["default"].keyboard('{arrowleft}');

      expect(_react2.screen.getByLabelText('Nav Tree Link Indicator Open').closest('[tabindex="-1"]')).toHaveFocus();
      expect(_react2.screen.getByText('Now You See Me')).toBeInTheDocument();

      _userEvent["default"].keyboard('{enter}');

      expect(_react2.screen.queryByText('Now You See Me')).not.toBeInTheDocument();
    });
  });
});
//# sourceMappingURL=NavList.spec.js.map