"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _material = require("@styled-icons/material");

var _materialOutlined = require("@styled-icons/material-outlined");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _AvatarCombo = require("./AvatarCombo");

var _AvatarIcon = require("./AvatarIcon");

var _AvatarUser = require("./AvatarUser");

describe('Avatar', function () {
  describe('AvatarCombo', function () {
    test('supports role as button & onClick event', function () {
      var fauxOnClick = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_AvatarCombo.AvatarCombo, {
        secondaryIcon: _react2["default"].createElement(_materialOutlined.AccountCircle, null),
        onClick: fauxOnClick,
        role: "button"
      }));

      var button = _react.screen.getByRole('button');

      expect(button).toBeInTheDocument();

      _react.fireEvent.click(button);

      expect(fauxOnClick.mock.calls.length).toBe(1);
    });
    test('user', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_AvatarCombo.AvatarCombo, {
        secondaryIcon: _react2["default"].createElement(_materialOutlined.AccountCircle, null),
        user: {
          avatar_url: 'https://gravatar.lookercdn.com/avatar/e8ebbdf1a64411721503995731?s=156&d=blank',
          first_name: 'John',
          last_name: 'Smith'
        }
      }));
      expect(_react.screen.getByLabelText('John Smith')).toBeInTheDocument();
    });
  });
  describe('AvatarIcon', function () {
    test('supports role as button & onClick event', function () {
      var fauxOnClick = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_AvatarIcon.AvatarIcon, {
        onClick: fauxOnClick,
        role: "button"
      }));

      var button = _react.screen.getByRole('button');

      expect(button).toBeInTheDocument();

      _react.fireEvent.click(button);

      expect(fauxOnClick.mock.calls.length).toBe(1);
    });
    test('renders different icon if specified', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_AvatarIcon.AvatarIcon, {
        "aria-label": "Code",
        icon: _react2["default"].createElement(_material.Code, null)
      }));
      expect(_react.screen.getByLabelText('Code')).toBeInTheDocument();
    });
  });
  describe('AvatarUser', function () {
    test('shows user profile picture if it has good avatar_url ', function () {
      var data = {
        avatar_url: 'https://gravatar.lookercdn.com/avatar/e8ebbdf1a64411721503995731?s=156&d=blank',
        first_name: 'John',
        last_name: 'Smith'
      };
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_AvatarUser.AvatarUser, {
        user: data
      }));

      var image = _react.screen.queryByTestId('avatar-photo');

      expect(image).toBeInTheDocument();
      expect(_react.screen.getByLabelText('John Smith')).toBeInTheDocument();
    });
    test('shows initials if it has null as avatar_url ', function () {
      var data = {
        avatar_url: null,
        first_name: 'John',
        last_name: 'Smith'
      };
      (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_AvatarUser.AvatarUser, {
        user: data
      }));

      var image = _react.screen.queryByTestId('avatar-photo');

      expect(image).not.toBeInTheDocument();
    });
  });
  test('supports role as button & onClick event', function () {
    var fauxOnClick = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_AvatarUser.AvatarUser, {
      onClick: fauxOnClick,
      role: "button"
    }));

    var button = _react.screen.getByRole('button');

    expect(button).toBeInTheDocument();

    _react.fireEvent.click(button);

    expect(fauxOnClick.mock.calls.length).toBe(1);
  });
});
//# sourceMappingURL=Avatar.spec.js.map