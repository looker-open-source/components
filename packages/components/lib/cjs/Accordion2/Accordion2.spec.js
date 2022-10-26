"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _accordion = require("../fixtures/accordion");

var _Accordion = require("./Accordion2");

var _index = require("./stories/index.stories");

var defaultProps = {
  children: _accordion.children,
  label: _accordion.label,
  lorem: _accordion.lorem
};
describe('Accordion2', function () {
  test('Basic', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Accordion.Accordion2, defaultProps));

    var accordionLabel = _react2.screen.getByText(_accordion.label);

    expect(_react2.screen.queryByText(_accordion.children)).not.toBeInTheDocument();

    _react2.fireEvent.click(accordionLabel);

    _react2.screen.getByText(_accordion.children);

    _react2.fireEvent.click(accordionLabel);

    expect(_react2.screen.queryByText(_accordion.children)).not.toBeInTheDocument();
  });
  test('defaultOpen - renders children by default when defaultOpen === true', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Accordion.Accordion2, (0, _extends2["default"])({
      defaultOpen: true
    }, defaultProps)));

    _react2.screen.getByText(_accordion.children);
  });
  test('Triggers onClose and onOpen callbacks label click', function () {
    var onOpen = jest.fn();
    var onClose = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Accordion.Accordion2, (0, _extends2["default"])({
      onOpen: onOpen,
      onClose: onClose
    }, defaultProps)));

    var accordionLabel = _react2.screen.getByText(_accordion.label);

    _react2.fireEvent.click(accordionLabel);

    expect(onOpen).toHaveBeenCalledTimes(1);

    _react2.fireEvent.click(accordionLabel);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
  test('Controlled - shows and hides children with provided isOpen and toggleOpen props', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_index.Controlled, null));

    var accordionLabel = _react2.screen.getByText('See more');

    _react2.screen.getByText(_accordion.lorem);

    _react2.fireEvent.click(accordionLabel);

    expect(_react2.screen.queryByText(_accordion.lorem)).not.toBeInTheDocument();

    _react2.fireEvent.click(accordionLabel);

    _react2.screen.getByText(_accordion.lorem);
  });
  test('Wraps handlers passed in', function () {
    var handleKeyDown = jest.fn();
    var handleKeyUp = jest.fn();
    var handleClick = jest.fn();
    var handleBlur = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Accordion.Accordion2, (0, _extends2["default"])({
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onClick: handleClick,
      onBlur: handleBlur
    }, defaultProps)));

    var accordionLabel = _react2.screen.getByText(_accordion.label);

    _react2.fireEvent.click(accordionLabel);

    expect(handleClick).toHaveBeenCalled();

    _react2.fireEvent.blur(accordionLabel);

    expect(handleBlur).toHaveBeenCalled();

    _react2.fireEvent.keyDown(accordionLabel, {
      key: 'Enter'
    });

    expect(handleKeyDown).toHaveBeenCalled();

    _react2.fireEvent.keyUp(accordionLabel, {
      key: 'Enter'
    });

    expect(handleKeyUp).toHaveBeenCalled();
  });
  test('Validate both controlled props are required', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Accordion.Accordion2, (0, _extends2["default"])({
      isOpen: true
    }, defaultProps)));
  });
  test('defaultOpen mutation should be ignored', function () {
    var Example = function Example() {
      var _React$useState = _react["default"].useState(true),
          _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
          defaultOpen = _React$useState2[0],
          setDefaultOpen = _React$useState2[1];

      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
        onClick: function onClick() {
          return setDefaultOpen(!defaultOpen);
        }
      }, "Toggle"), _react["default"].createElement(_Accordion.Accordion2, {
        defaultOpen: defaultOpen,
        label: "Hello"
      }, "World"), ")");
    };

    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Example, null));
    expect(_react2.screen.getByText('World')).toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('Toggle'));

    expect(_react2.screen.getByText('World')).toBeInTheDocument();
  });
});
//# sourceMappingURL=Accordion2.spec.js.map