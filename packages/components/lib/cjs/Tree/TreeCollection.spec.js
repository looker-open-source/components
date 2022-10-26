"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _Button = require("../Button");

var _Link = require("../Link");

var _InputText = require("../Form/Inputs/InputText");

var _Tree = require("./Tree");

var _TreeCollection = require("./TreeCollection");

var _TreeItem = require("./TreeItem");

describe('TreeCollection', function () {
  var detail = {
    content: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Button.Button, null, "Nested Button"), _react["default"].createElement(_Link.Link, {
      href: "https://google.com"
    }, "Nested Link"), _react["default"].createElement(_InputText.InputText, null, "Nested InputText")),
    options: {
      accessory: true
    }
  };

  var treeCollection = _react["default"].createElement(_TreeCollection.TreeCollection, null, _react["default"].createElement(_Tree.Tree, {
    defaultOpen: true,
    label: "Cheeses"
  }, _react["default"].createElement(_TreeItem.TreeItem, {
    detail: detail
  }, "Cheddar"), _react["default"].createElement(_TreeItem.TreeItem, null, "Gouda"), _react["default"].createElement(_TreeItem.TreeItem, null, "Swiss")));

  test('renders children', function () {
    (0, _componentsTestUtils.renderWithTheme)(treeCollection);

    _react2.screen.getByText('Cheeses');

    _react2.screen.getByText('Cheddar');

    _react2.screen.getByText('Gouda');

    _react2.screen.getByText('Swiss');
  });
  describe('keyboard navigation', function () {
    test('starts focus at first item', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", null, "My Button"), treeCollection));

      var treeItems = _react2.screen.getAllByRole('treeitem');

      _userEvent["default"].click(_react2.screen.getByText('My Button'));

      expect(_react2.screen.getByText('My Button')).toHaveFocus();

      _userEvent["default"].tab();

      expect(treeItems[0]).toHaveFocus();
    });
    test('arrow up and down key presses move user from item to item', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", null, "My Button"), treeCollection));

      var treeItems = _react2.screen.getAllByRole('treeitem');

      var cheeses = treeItems[0];
      var cheddar = treeItems[1];
      var gouda = treeItems[2];
      var swiss = treeItems[3];

      _userEvent["default"].click(_react2.screen.getByText('My Button'));

      expect(_react2.screen.getByText('My Button')).toHaveFocus();

      _userEvent["default"].tab();

      expect(cheeses).toHaveFocus();

      _userEvent["default"].keyboard('{arrowdown}');

      expect(cheddar).toHaveFocus();

      _userEvent["default"].keyboard('{arrowdown}');

      expect(gouda).toHaveFocus();

      _userEvent["default"].keyboard('{arrowdown}');

      expect(swiss).toHaveFocus();

      _userEvent["default"].keyboard('{arrowup}');

      expect(gouda).toHaveFocus();

      _userEvent["default"].keyboard('{arrowup}');

      expect(cheddar).toHaveFocus();

      _userEvent["default"].keyboard('{arrowup}');

      expect(cheeses).toHaveFocus();
    });
    test('left and right arrow keys move user from accordion to buttons/links/inputs within accordion', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", null, "My Button"), _react["default"].createElement(_TreeCollection.TreeCollection, null, _react["default"].createElement(_Tree.Tree, {
        defaultOpen: true,
        label: "Cheeses",
        detail: detail
      }, _react["default"].createElement(_TreeItem.TreeItem, null, "Cheddar")))));

      var treeItems = _react2.screen.getAllByRole('treeitem');

      var cheeses = treeItems[0];

      var nestedButton = _react2.screen.getByText('Nested Button');

      var nestedLink = _react2.screen.getByText('Nested Link');

      _userEvent["default"].click(_react2.screen.getByText('My Button'));

      expect(_react2.screen.getByText('My Button')).toHaveFocus();

      _userEvent["default"].tab();

      expect(cheeses).toHaveFocus();

      _userEvent["default"].keyboard('{arrowright}');

      expect(nestedButton).toHaveFocus();

      _userEvent["default"].keyboard('{arrowright}');

      expect(nestedLink).toHaveFocus();

      _userEvent["default"].keyboard('{arrowright}');

      expect(_react2.screen.getByRole('textbox')).toHaveFocus();

      _userEvent["default"].keyboard('{arrowright}');

      expect(cheeses).toHaveFocus();
    });
    test('left and right arrow keys move user from item to buttons/links/inputs within item', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", null, "My Button"), treeCollection));

      var treeItems = _react2.screen.getAllByRole('treeitem');

      var cheeses = treeItems[0];
      var cheddar = treeItems[1];

      var nestedButton = _react2.screen.getByText('Nested Button');

      var nestedLink = _react2.screen.getByText('Nested Link');

      _userEvent["default"].click(_react2.screen.getByText('My Button'));

      expect(_react2.screen.getByText('My Button')).toHaveFocus();

      _userEvent["default"].tab();

      expect(cheeses).toHaveFocus();

      _userEvent["default"].keyboard('{arrowdown}');

      expect(cheddar).toHaveFocus();

      _userEvent["default"].keyboard('{arrowright}');

      expect(nestedButton).toHaveFocus();

      _userEvent["default"].keyboard('{arrowright}');

      expect(nestedLink).toHaveFocus();

      _userEvent["default"].keyboard('{arrowright}');

      expect(_react2.screen.getByRole('textbox')).toHaveFocus();

      _userEvent["default"].keyboard('{arrowright}');

      expect(cheddar).toHaveFocus();
    });
    test('pressing arrow down from a detail element moves user to next item', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", null, "My Button"), treeCollection));

      var treeItems = _react2.screen.getAllByRole('treeitem');

      var cheeses = treeItems[0];
      var cheddar = treeItems[1];
      var gouda = treeItems[2];

      var nestedButton = _react2.screen.getByText('Nested Button');

      _userEvent["default"].click(_react2.screen.getByText('My Button'));

      expect(_react2.screen.getByText('My Button')).toHaveFocus();

      _userEvent["default"].tab();

      expect(cheeses).toHaveFocus();

      _userEvent["default"].keyboard('{arrowdown}');

      expect(cheddar).toHaveFocus();

      _userEvent["default"].keyboard('{arrowright}');

      expect(nestedButton).toHaveFocus();

      _userEvent["default"].keyboard('{arrowdown}');

      expect(gouda).toHaveFocus();
    });
    test('pressing arrow down from a detail element with accessory enabled moves user to next item', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", null, "My Button"), _react["default"].createElement(_TreeCollection.TreeCollection, null, _react["default"].createElement(_Tree.Tree, {
        defaultOpen: true,
        label: "Cheeses",
        detail: {
          content: _react["default"].createElement("button", null, "Accessory Button"),
          options: {
            accessory: true
          }
        }
      }, _react["default"].createElement(_TreeItem.TreeItem, null, "Cheddar")))));

      var treeItems = _react2.screen.getAllByRole('treeitem');

      var cheeses = treeItems[0];
      var cheddar = treeItems[1];

      var accessoryButton = _react2.screen.getByText('Accessory Button');

      _userEvent["default"].click(_react2.screen.getByText('My Button'));

      expect(_react2.screen.getByText('My Button')).toHaveFocus();

      _userEvent["default"].tab();

      expect(cheeses).toHaveFocus();

      _userEvent["default"].keyboard('{arrowright}');

      expect(accessoryButton).toHaveFocus();

      _userEvent["default"].keyboard('{arrowdown}');

      expect(cheddar).toHaveFocus();
    });
    test('home button moves user to first treeitem element', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", null, "My Button"), treeCollection));

      var treeItems = _react2.screen.getAllByRole('treeitem');

      var cheeses = treeItems[0];
      var cheddar = treeItems[1];
      var swiss = treeItems[3];

      _userEvent["default"].click(_react2.screen.getByText('My Button'));

      expect(_react2.screen.getByText('My Button')).toHaveFocus();

      _userEvent["default"].tab();

      expect(cheeses).toHaveFocus();

      _userEvent["default"].keyboard('{arrowdown}');

      expect(cheddar).toHaveFocus();

      _userEvent["default"].keyboard('{arrowdown}');

      _userEvent["default"].keyboard('{arrowdown}');

      expect(swiss).toHaveFocus();

      _userEvent["default"].keyboard('{Home}');

      expect(cheeses).toHaveFocus();
    });
    test('end button moves user to last treeitem element', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", null, "My Button"), treeCollection));

      var treeItems = _react2.screen.getAllByRole('treeitem');

      var cheeses = treeItems[0];
      var swiss = treeItems[3];

      _userEvent["default"].click(_react2.screen.getByText('My Button'));

      expect(_react2.screen.getByText('My Button')).toHaveFocus();

      _userEvent["default"].tab();

      expect(cheeses).toHaveFocus();

      _userEvent["default"].keyboard('{End}');

      expect(swiss).toHaveFocus();
    });
  });
});
//# sourceMappingURL=TreeCollection.spec.js.map