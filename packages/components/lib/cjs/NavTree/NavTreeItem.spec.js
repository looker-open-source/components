"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _ = require(".");

describe('NavTreeItem', function () {
  test('renders as a link when an href is passed in and disperses link-related props onto nested <a>', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.NavTreeItem, {
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
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.NavTreeItem, {
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
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.NavTreeItem, {
      itemRole: "link",
      rel: "nogouda",
      href: "https://google.com"
    }, "Link"));

    var nestedLink = _react2.screen.getByRole('treeitem');

    expect(nestedLink).toHaveAttribute('href', 'https://google.com');
    expect(nestedLink).toHaveAttribute('rel', 'nogouda');
  });
});
//# sourceMappingURL=NavTreeItem.spec.js.map