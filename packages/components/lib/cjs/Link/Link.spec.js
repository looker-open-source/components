"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _designTokens = require("@looker/design-tokens");

var _react2 = require("@testing-library/react");

var _Link = require("./Link");

describe('Link', function () {
  test('UnderlineTrue', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Link.Link, {
      underline: true
    }, "My link"));

    var link = _react2.screen.getByText('My link');

    expect(link).toHaveStyleRule('text-decoration: underline');
  });
  test('UnderlineFalse', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Link.Link, {
      underline: false
    }, "My link"));

    var link = _react2.screen.getByText('My link');

    expect(link).toHaveStyleRule('text-decoration: none');
  });
  test('color', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Link.Link, null, "My link"));

    var link = _react2.screen.getByText('My link');

    expect(link).toHaveStyleRule("color: ".concat(_designTokens.theme.colors.link));
  });
  test('keyColor', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Link.Link, {
      keyColor: true
    }, "My link"));

    var link = _react2.screen.getByText('My link');

    expect(link).toHaveStyleRule("color: ".concat(_designTokens.theme.colors.key));
  });
  test('ID passes through to DOM', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Link.Link, {
      href: "https://looker.com",
      id: "link-id"
    }, "\uD83E\uDD51"));

    var link = _react2.screen.getByText('🥑');

    expect(link).toHaveAttribute('id');
    expect(link).toHaveAttribute('id', 'link-id');
  });
  test('target="_blank"', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Link.Link, {
      href: "https://looker.com",
      rel: "pizza"
    }, "\uD83C\uDF55"), _react["default"].createElement(_Link.Link, {
      href: "https://looker.com",
      target: "_blank"
    }, "\uD83E\uDD51"), _react["default"].createElement(_Link.Link, {
      href: "https://looker.com",
      target: "_blank",
      rel: "pizza"
    }, "\uD83C\uDF55\uD83E\uDD51")));
    expect(_react2.screen.getByText('🍕')).toHaveAttribute('rel', 'pizza');
    expect(_react2.screen.getByText('🥑')).toHaveAttribute('rel', 'noopener noreferrer');
    expect(_react2.screen.getByText('🍕🥑')).toHaveAttribute('rel', 'pizza noopener noreferrer');
  });
  test('dangerouslyDisableRel', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Link.Link, {
      href: "/otherPage",
      dangerouslyDisableRel: true,
      target: "_blank"
    }, "Local Link"));

    var link = _react2.screen.getByText('Local Link');

    expect(link).not.toHaveAttribute('rel');
  });
  test('External', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Link.Link, {
      href: "https://looker.com",
      isExternal: true
    }, "External Link"));

    var link = _react2.screen.getByText('External Link');

    expect(link).toHaveAttribute('rel', 'external noreferrer');
  });
});
//# sourceMappingURL=Link.spec.js.map