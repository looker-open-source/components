"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _ListItem = require("../ListItem");

var _List = require("./List.stories");

var _List2 = require("./List");

var globalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
describe('List', function () {
  describe('windowing', function () {
    beforeEach(function () {
      Element.prototype.getBoundingClientRect = jest.fn(function () {
        return {
          bottom: 0,
          height: 360,
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
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_List.LongList, null));
      expect(_react2.screen.getByRole('list')).toHaveStyle('height: 100%');
      expect(_react2.screen.getByText('0')).toBeVisible();
      expect(_react2.screen.getByText('15')).toBeVisible();
      expect(_react2.screen.queryByText('16')).not.toBeInTheDocument();
      var height = (3000 - 16) * 36;
      expect(_react2.screen.queryByTestId('before')).not.toBeInTheDocument();
      expect(_react2.screen.getByTestId('after')).toHaveStyle("height: ".concat(height, "px;"));
    });
    test('no "overflow: auto" without windowing', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_List.Basic, null));
      expect(_react2.screen.getByRole('list')).not.toHaveStyle('overflow: auto');
    });
  });
  describe('color', function () {
    test('displays the correct background when selected', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_List2.List, {
        color: "key"
      }, _react["default"].createElement(_ListItem.ListItem, {
        selected: true
      }, "Mozzarella")));
      expect(_react2.screen.getByText('Mozzarella')).toBeInTheDocument();
      expect(_react2.screen.getByText('Mozzarella').closest('button')).toHaveStyle('background: #F3F2FF;');
    });
    test('updates ListItem get its text color updated', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_List2.List, {
        color: "calculation"
      }, _react["default"].createElement(_ListItem.ListItem, {
        selected: true
      }, "Mozzarella")));
      expect(_react2.screen.getByText('Mozzarella')).toBeInTheDocument();
      expect(_react2.screen.getByText('Mozzarella')).toHaveStyle('color: #319220;');
    });
  });
  describe('keyboard navigation', function () {
    test('up and down arrow keys traverse from item to item', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", null, "Start Button"), _react["default"].createElement(_List.KeyboardNavigation, null)));

      _userEvent["default"].click(_react2.screen.getByText('Start Button'));

      _userEvent["default"].tab();

      var listItems = _react2.screen.getAllByRole('listitem');

      var cheddar = listItems[0];
      var gouda = listItems[1];
      expect(cheddar).toHaveFocus();

      _userEvent["default"].keyboard('{arrowdown}');

      expect(gouda).toHaveFocus();

      _userEvent["default"].keyboard('{arrowup}');

      expect(cheddar).toHaveFocus();
    });
    test('left and right arrow keys traverse within item from content to focusable detail elements', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", null, "Start Button"), _react["default"].createElement(_List.KeyboardNavigation, null)));

      _userEvent["default"].click(_react2.screen.getByText('Start Button'));

      _userEvent["default"].tab();

      var listItems = _react2.screen.getAllByRole('listitem');

      var cheddar = listItems[0];
      var gouda = listItems[1];
      expect(cheddar).toHaveFocus();

      _userEvent["default"].keyboard('{arrowright}');

      expect(_react2.screen.getByText('cheddar-button').closest('button')).toHaveFocus();

      _userEvent["default"].keyboard('{arrowdown}');

      expect(gouda).toHaveFocus();

      _userEvent["default"].keyboard('{arrowright}');

      expect(_react2.screen.getByText('gouda-button').closest('button')).toHaveFocus();
    });
  });
});
//# sourceMappingURL=List.spec.js.map