"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _materialOutlined = require("@styled-icons/material-outlined");

var _react2 = require("@testing-library/react");

var _Button = require("../Button");

var _Tree = require("./stories/Tree.stories");

var _ = require(".");

describe('Tree', function () {
  test('Renders string disclosure label and detail', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Tree, {
      label: "Tree Label",
      detail: "Tree Detail"
    }, "Hello World"));

    _react2.screen.getByText('Tree Label');

    _react2.screen.getByText('Tree Detail');
  });
  test('Renders JSX Element disclosure label', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Tree, {
      label: _react["default"].createElement("div", null, "Tree JSX Label"),
      detail: "Tree Detail"
    }, "Hello World"));

    _react2.screen.getByText('Tree JSX Label');
  });
  test('Renders and hides children on disclosure click', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Tree, {
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
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Tree, {
      label: "Tree Label",
      defaultOpen: true
    }, "Hello World"));

    _react2.screen.getByText('Hello World');
  });
  test('Handles controlled open state via isOpen and toggleOpen props', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Tree.Controlled, null));

    var treeLabel = _react2.screen.getByText('Controlled Tree');

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
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Tree, {
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
  test('Clicks on detail do not open the Tree or trigger callbacks when accessory === true', function () {
    var onOpen = jest.fn();
    var onClose = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Tree, {
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
  test('Key presses on detail do not open the Tree or trigger callbacks when accessory === true', function () {
    var onOpen = jest.fn();
    var onClose = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Tree, {
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
  test('Clicks on detail open the Tree and trigger callbacks when accessory === false', function () {
    var onOpen = jest.fn();
    var onClose = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Tree, {
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
  test('Shows and hides detail on Tree hover when hoverDisclosure === true', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Tree, {
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
  describe('color', function () {
    test('theme.colors.key', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Tree, {
        color: "key",
        selected: true,
        label: "Whatever",
        icon: _react["default"].createElement(_materialOutlined.Science, {
          "data-testid": "icon"
        })
      }));
      expect(_react2.screen.getByText('Whatever')).toHaveStyle('color: #262d33');
      expect(_react2.screen.getByTestId('icon').parentNode).toHaveStyle('color: #707781');
    });
    test('calculation', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Tree, {
        color: "calculation",
        selected: true,
        label: "Whatever",
        icon: _react["default"].createElement(_materialOutlined.Science, {
          "data-testid": "icon"
        })
      }));
      expect(_react2.screen.getByText('Whatever')).toHaveStyle('color: #319220');
      expect(_react2.screen.getByTestId('icon').parentNode).toHaveStyle('color: #319220');
    });
    test('disabled', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Tree, {
        disabled: true,
        label: "Whatever",
        icon: _react["default"].createElement(_materialOutlined.Science, {
          "data-testid": "icon"
        })
      }));
      expect(_react2.screen.getByText('Whatever')).toHaveStyle('color: #939ba5');
      expect(_react2.screen.getByTestId('icon').parentNode).toHaveStyle('color: #939ba5');
    });
  });
  describe('aria roles', function () {
    test('selected Trees have aria-selected=true', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Tree, {
        color: "calculation",
        selected: true,
        label: "Whatever",
        icon: _react["default"].createElement(_materialOutlined.Science, {
          "data-testid": "icon"
        })
      }));
      expect(_react2.screen.getAllByRole('treeitem')[0]).toHaveAttribute('aria-selected', 'true');
    });
    test('Trees can take aria-current=true', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Tree, {
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
  describe('itemRole', function () {
    test('renders inner <TreeItem> as <div> by default', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Tree, {
        label: "Default Tree"
      }));
      expect(_react2.screen.getByText('Default Tree').closest('button')).toBe(null);
      expect(_react2.screen.getByText('Default Tree').closest('a')).toBe(null);
    });
    test('renders inner <TreeItem> as <a> and receives link-related props when itemRole="link"', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Tree, {
        href: "https://google.com",
        itemRole: "link",
        label: "Link Tree",
        target: "_blank"
      }));

      var treeItemLink = _react2.screen.getByText('Link Tree').closest('a');

      expect(treeItemLink).toHaveAttribute('href', 'https://google.com');
      expect(treeItemLink).toHaveAttribute('target', '_blank');
      expect(treeItemLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
//# sourceMappingURL=Tree.spec.js.map