"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _ = require(".");

describe('TreeItem', function () {
  test('Renders children', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.TreeItem, null, "Dimension"));

    _react2.screen.getByText('Dimension');
  });
  test('Accepts onCLick and onKeyDown props', function () {
    var handleClick = jest.fn();
    var handleKeyDown = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.TreeItem, {
      onClick: handleClick,
      onKeyDown: handleKeyDown
    }, "Dimension"));

    _react2.screen.getByText('Dimension');
  });
  test('Does not trigger onClick on detail click when accessory === true', function () {
    var onClick = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.TreeItem, {
      detail: {
        content: 'Detail',
        options: {
          accessory: true
        }
      },
      onClick: onClick
    }, "Dimension"));

    _react2.fireEvent.click(_react2.screen.getByText('Dimension'));

    expect(onClick).toHaveBeenCalledTimes(1);

    _react2.fireEvent.click(_react2.screen.getByText('Detail'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
  test('Triggers onClick on detail click when accessory === false', function () {
    var onClick = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.TreeItem, {
      detail: {
        content: 'Detail',
        options: {
          accessory: false
        }
      },
      onClick: onClick
    }, "Dimension"));

    _react2.fireEvent.click(_react2.screen.getByText('Dimension'));

    expect(onClick).toHaveBeenCalledTimes(1);

    _react2.fireEvent.click(_react2.screen.getByText('Detail'));

    expect(onClick).toHaveBeenCalledTimes(2);
  });
  test('Hides and shows detail when detailHoverDisclosure is true', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.TreeItem, {
      detail: {
        content: 'Detail',
        options: {
          hoverDisclosure: true
        }
      }
    }, "Label"));
    expect(_react2.screen.queryByText('Detail')).not.toBeInTheDocument();

    _react2.fireEvent.mouseEnter(_react2.screen.getByText('Label'), {
      bubbles: true
    });

    expect(_react2.screen.getByText('Detail')).toBeInTheDocument();
  });
  test('theme.colors.key', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.TreeItem, {
      selected: true,
      color: "key"
    }, "Whatever"));
    expect(_react2.screen.getByText('Whatever')).toHaveStyle('color: #262d33');
    expect(_react2.screen.getByRole('treeitem')).toHaveStyle('background: #f3f2ff');
  });
  describe('link behavior', function () {
    test('renders as a link when itemRole="link" and disperses link-related props onto nested <a>', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.TreeItem, {
        itemRole: "link",
        href: "https://google.com",
        target: "_blank",
        rel: "hello"
      }, "Link"));

      var nestedLink = _react2.screen.getByRole('treeitem');

      expect(nestedLink.nodeName).toBe('A');
      expect(nestedLink).toHaveAttribute('href', 'https://google.com');
      expect(nestedLink).toHaveAttribute('target', '_blank');
      expect(nestedLink).toHaveAttribute('rel', 'hello noopener noreferrer');
    });
    test('has rel="noopener noreferrer" when it has target="_blank" and no passed-in rel prop value', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.TreeItem, {
        itemRole: "link",
        href: "https://google.com",
        target: "_blank"
      }, "Link"));

      var nestedLink = _react2.screen.getByRole('treeitem');

      expect(nestedLink).toHaveAttribute('target', '_blank');
      expect(nestedLink).toHaveAttribute('href', 'https://google.com');
      expect(nestedLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
    test('does not auto append "noopener noreferrer" to link without target="_blank"', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.TreeItem, {
        itemRole: "link",
        rel: "nogouda",
        href: "https://google.com"
      }, "Link"));

      var nestedLink = _react2.screen.getByRole('treeitem');

      expect(nestedLink).toHaveAttribute('href', 'https://google.com');
      expect(nestedLink).toHaveAttribute('rel', 'nogouda');
    });
  });
});
//# sourceMappingURL=TreeItem.spec.js.map