"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _react2 = require("@testing-library/react");

var _materialOutlined = require("@styled-icons/material-outlined");

var _Form = require("../Form");

var _Button = require("../Button");

var _utils = require("../utils");

var _Link = require("../Link");

var _InputText = require("../Form/Inputs/InputText");

var _Tree = require("../Tree");

var _ = require(".");

describe('LkFieldTree', function () {
  test('Renders string disclosure label and detail', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.LkFieldTree, {
      label: "Tree Label",
      detail: "Tree Detail"
    }, "Hello World"));

    _react2.screen.getByText('Tree Label');

    _react2.screen.getByText('Tree Detail');
  });
  test('Renders JSX Element disclosure label', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.LkFieldTree, {
      label: _react["default"].createElement("div", null, "Tree JSX Label"),
      detail: "Tree Detail"
    }, "Hello World"));

    _react2.screen.getByText('Tree JSX Label');
  });
  test('Renders and hides children on disclosure click', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.LkFieldTree, {
      label: "Tree Label"
    }, "Hello World"));

    var treeLabel = _react2.screen.getByText('Tree Label');

    expect(_react2.screen.queryByText('Hello World')).not.toBeInTheDocument();

    _react2.fireEvent.click(treeLabel);

    _react2.screen.getByText('Hello World');

    _react2.fireEvent.click(treeLabel);

    expect(_react2.screen.queryByText('Hello World')).not.toBeInTheDocument();
  });
  test('Shows children by default when defaultOpen is true (and uses uncontrolled open state)', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.LkFieldTree, {
      label: "Tree Label",
      defaultOpen: true
    }, "Hello World"));

    _react2.screen.getByText('Hello World');
  });
  test('Handles controlled open state via isOpen and toggleOpen props', function () {
    var Component = function Component() {
      var _useToggle = (0, _utils.useToggle)(true),
          value = _useToggle.value,
          change = _useToggle.change,
          toggle = _useToggle.toggle;

      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Form.FieldToggleSwitch, {
        on: value,
        onChange: toggle,
        label: "Toggle"
      }), _react["default"].createElement(_.LkFieldTree, {
        label: "Tree Label",
        isOpen: value,
        toggleOpen: change
      }, "Stuff here"));
    };

    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Component, null));

    var treeLabel = _react2.screen.getByText('Tree Label');

    _react2.screen.getByText('Stuff here');

    _react2.fireEvent.click(treeLabel);

    expect(_react2.screen.queryByText('Stuff here')).not.toBeInTheDocument();

    _react2.fireEvent.click(treeLabel);

    _react2.screen.getByText('Stuff here');

    var toggleSwitch = _react2.screen.getByRole('switch');

    _react2.fireEvent.click(toggleSwitch);

    expect(_react2.screen.queryByText('Stuff here')).not.toBeInTheDocument();
  });
  test('Triggers onClose and onOpen callbacks when provided via props', function () {
    var onClose = jest.fn();
    var onOpen = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.LkFieldTree, {
      label: "Tree Label",
      onClose: onClose,
      onOpen: onOpen
    }, "Hello World"));

    var treeLabel = _react2.screen.getByText('Tree Label');

    _react2.fireEvent.click(treeLabel);

    expect(onOpen).toHaveBeenCalledTimes(1);

    _react2.fireEvent.click(treeLabel);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
  test('Clicks on detail do not open the LkFieldTree or trigger callbacks when accessory === true', function () {
    var onOpen = jest.fn();
    var onClose = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.LkFieldTree, {
      label: "Tree Label",
      detail: {
        content: _react["default"].createElement(_Button.Button, null, "Tree Detail"),
        options: {
          accessory: true
        }
      },
      onClose: onClose,
      onOpen: onOpen
    }, "Hello World"));

    var detail = _react2.screen.getByText('Tree Detail');

    expect(_react2.screen.queryByText('Hello World')).not.toBeInTheDocument();

    _react2.fireEvent.click(detail);

    expect(_react2.screen.queryByText('Hello World')).not.toBeInTheDocument();
    expect(onOpen).toHaveBeenCalledTimes(0);
  });
  test('Key presses on detail do not open the LkFieldTree or trigger callbacks when accessory === true', function () {
    var onOpen = jest.fn();
    var onClose = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.LkFieldTree, {
      label: "Tree Label",
      detail: {
        content: _react["default"].createElement(_Button.Button, null, "Tree Detail"),
        options: {
          accessory: true
        }
      },
      onClose: onClose,
      onOpen: onOpen
    }, "Hello World"));

    var detail = _react2.screen.getByText('Tree Detail');

    expect(_react2.screen.queryByText('Hello World')).not.toBeInTheDocument();

    _react2.fireEvent.keyDown(detail, {
      key: 'Enter'
    });

    expect(_react2.screen.queryByText('Hello World')).not.toBeInTheDocument();
    expect(onOpen).toHaveBeenCalledTimes(0);
  });
  test('Clicks on detail open the LkFieldTree and trigger callbacks when accessory === false', function () {
    var onOpen = jest.fn();
    var onClose = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.LkFieldTree, {
      label: "Tree Label",
      detail: {
        content: 'Tree Detail',
        options: {
          accessory: false
        }
      },
      onClose: onClose,
      onOpen: onOpen
    }, "Hello World"));

    var detail = _react2.screen.getByText('Tree Detail');

    expect(_react2.screen.queryByText('Hello World')).not.toBeInTheDocument();

    _react2.fireEvent.click(detail);

    _react2.screen.getByText('Hello World');

    expect(onOpen).toHaveBeenCalledTimes(1);

    _react2.fireEvent.click(detail);

    expect(_react2.screen.queryByText('Hello World')).not.toBeInTheDocument();
    expect(onClose).toHaveBeenCalledTimes(1);
  });
  test('Shows and hides detail on LkFieldTree hover when hoverDisclosure === true', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.LkFieldTree, {
      label: "Tree Label",
      detail: {
        content: 'Tree Detail',
        options: {
          hoverDisclosure: true
        }
      }
    }, "Hello World"));
    expect(_react2.screen.queryByText('Tree Detail')).not.toBeInTheDocument();

    _react2.fireEvent.mouseEnter(_react2.screen.getByText('Tree Label'), {
      bubbles: true
    });

    expect(_react2.screen.getByText('Tree Detail')).toBeInTheDocument();
  });
  describe('aria roles', function () {
    test('selected LkFieldTrees have aria-selected=true', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.LkFieldTree, {
        color: "calculation",
        selected: true,
        label: "Whatever",
        icon: _react["default"].createElement(_materialOutlined.Science, {
          "data-testid": "icon"
        })
      }));
      expect(_react2.screen.getAllByRole('treeitem')[0]).toHaveAttribute('aria-selected', 'true');
    });
    test('LkFieldTrees can take aria-current=true', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.LkFieldTree, {
        "aria-current": true,
        color: "calculation",
        label: "Whatever",
        icon: _react["default"].createElement(_materialOutlined.Science, {
          "data-testid": "icon"
        })
      }));
      expect(_react2.screen.getAllByRole('treeitem')[0]).toHaveAttribute('aria-current', 'true');
    });
  });
  describe('keyboard navigation', function () {
    var detail = {
      content: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Button.Button, null, "Nested Button"), _react["default"].createElement(_Link.Link, {
        href: "https://google.com"
      }, "Nested Link"), _react["default"].createElement(_InputText.InputText, null, "Nested InputText")),
      options: {
        accessory: true
      }
    };

    var treeCollection = _react["default"].createElement(_Tree.TreeCollection, null, _react["default"].createElement(_.LkFieldTree, {
      defaultOpen: true,
      label: "Cheeses"
    }, _react["default"].createElement(_.LkFieldItem, {
      detail: detail
    }, "Cheddar"), _react["default"].createElement(_.LkFieldItem, null, "Gouda"), _react["default"].createElement(_.LkFieldItem, null, "Swiss")));

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
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", null, "My Button"), _react["default"].createElement(_Tree.TreeCollection, null, _react["default"].createElement(_.LkFieldTree, {
        defaultOpen: true,
        label: "Cheeses",
        detail: detail
      }, _react["default"].createElement(_.LkFieldItem, null, "Cheddar")))));

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
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", null, "My Button"), _react["default"].createElement(_Tree.TreeCollection, null, _react["default"].createElement(_.LkFieldTree, {
        defaultOpen: true,
        label: "Cheeses",
        detail: {
          content: _react["default"].createElement("button", null, "Accessory Button"),
          options: {
            accessory: true
          }
        }
      }, _react["default"].createElement(_.LkFieldItem, null, "Cheddar")))));

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
//# sourceMappingURL=LkFieldTree.spec.js.map