"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _ = require(".");

describe('LkFieldItem', function () {
  test('Renders children', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.LkFieldItem, null, "Dimension"));

    _react2.screen.getByText('Dimension');
  });
  test('Accepts onClick and onKeyDown props', function () {
    var handleClick = jest.fn();
    var handleKeyDown = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.LkFieldItem, {
      onClick: handleClick,
      onKeyDown: handleKeyDown
    }, "Dimension"));

    _react2.screen.getByText('Dimension');
  });
  test('Does not trigger onClick on detail click when accessory === true', function () {
    var onClick = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.LkFieldItem, {
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
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.LkFieldItem, {
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
  test('Hides and shows detail when hoverDisclosure === true', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.LkFieldItem, {
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
});
//# sourceMappingURL=LkFieldItem.spec.js.map