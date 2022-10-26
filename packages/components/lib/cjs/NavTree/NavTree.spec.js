"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _NavList = require("../NavList");

var _NavTree = require("./NavTree.stories");

var _NavTreeItem = require("./NavTreeItem");

var _NavTree2 = require("./NavTree");

var Basic = function Basic() {
  return _react["default"].createElement(_NavList.NavList, null, _react["default"].createElement(_NavTree2.NavTree, {
    defaultOpen: true,
    label: "Cheeses"
  }, _react["default"].createElement(_NavTreeItem.NavTreeItem, {
    parentIcon: true
  }, "Cheddar")));
};

beforeEach(function () {
  jest.useFakeTimers();
});
afterEach(function () {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

var runTimers = function runTimers() {
  return (0, _react2.act)(function () {
    jest.runOnlyPendingTimers();
  });
};

describe('NavTree', function () {
  test('ripple effect', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_NavList.NavList, null, _react["default"].createElement(_NavTree2.NavTree, {
      defaultOpen: true,
      label: "Cheeses"
    }, _react["default"].createElement(_NavTreeItem.NavTreeItem, {
      parentIcon: true
    }, "Cheddar"))));

    var navTree = _react2.screen.getByText('Cheddar').closest('button');

    expect(navTree).not.toHaveClass('bg-on fg-in');
    expect(navTree).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
    navTree && _react2.fireEvent.focus(navTree);
    expect(navTree).toHaveClass('bg-on');
    navTree && _react2.fireEvent.mouseDown(navTree);
    expect(navTree).toHaveClass('bg-on fg-in');
    navTree && _react2.fireEvent.mouseUp(navTree);
    runTimers();
    expect(navTree).toHaveClass('bg-on fg-out');
    runTimers();
    expect(navTree).toHaveClass('bg-on');
    navTree && _react2.fireEvent.blur(navTree);
    expect(navTree).not.toHaveClass('bg-on fg-in');

    _react2.fireEvent.click(document);
  });
  test('Renders string disclosure label and detail', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, null));

    _react2.screen.getByText('Cheeses');

    _react2.screen.getByText('Cheddar');
  });
  test('Triggers onClick on label click', function () {
    var labelClick = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_NavTree2.NavTree, {
      onClick: labelClick,
      label: "Parent"
    }, _react["default"].createElement(_NavTreeItem.NavTreeItem, null, "Child")));

    _react2.fireEvent.click(_react2.screen.getByText('Parent'));

    expect(labelClick).toHaveBeenCalled();
  });
  describe('href provided', function () {
    test('Changes accordion open state on indicator click', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_NavTree.Link, null));

      var indicator = _react2.screen.getByLabelText('Google Link Indicator Open');

      _react2.screen.getByText('Some Item');

      _react2.fireEvent.click(indicator);

      _react2.screen.getByLabelText('Google Link Indicator Close');

      expect(_react2.screen.queryByText('Some Item')).not.toBeInTheDocument();
    });
    test('Does not change accordion open state on label click', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_NavTree.Link, null));

      var treeLabel = _react2.screen.getByText('Click me to go to Google');

      _react2.screen.getByText('Some Item');

      _react2.fireEvent.click(treeLabel);

      _react2.screen.getByText('Some Item');
    });
    test("Uses role 'treeitem' for main content container", function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_NavTree.Link, null));
      expect(_react2.screen.getAllByRole('treeitem').length).toBe(2);
    });
    test('Expects an indicatorLabel when href is provided', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_NavTree2.NavTree, {
        label: "My NavTree",
        href: "https://google.com"
      }, "Hello"));
    });
    test('Expects an href when indicatorLabel is provided', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_NavTree2.NavTree, {
        label: "My NavTree",
        indicatorLabel: "My NavTree Indicator"
      }, "Hello"));
    });
  });
  describe('href not provided', function () {
    test('Changes accordion open state on label click', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, null));

      var treeLabel = _react2.screen.getByText('Cheeses');

      _react2.screen.getByText('Cheddar');

      _react2.fireEvent.click(treeLabel);

      expect(_react2.screen.queryByText('Cheddar')).not.toBeInTheDocument();
    });
    test("Uses role 'treeitem' for main content container", function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Basic, null));
      expect(_react2.screen.getAllByRole('treeitem').length).toBe(2);
    });
  });
});
//# sourceMappingURL=NavTree.spec.js.map