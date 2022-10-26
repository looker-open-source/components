"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _ = require(".");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var globalConsole = global.console;
describe('Accordion', function () {
  test('Renders AccordionDisclosure and AccordionContent (on label click)', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Accordion, {
      content: "My Accordion Content"
    }, "My Accordion Label"));

    var accordionLabel = _react2.screen.getByText('My Accordion Label');

    expect(_react2.screen.queryByText('My Accordion Content')).not.toBeInTheDocument();

    _react2.fireEvent.click(accordionLabel);

    _react2.screen.getByText('My Accordion Content');

    _react2.fireEvent.click(accordionLabel);

    expect(_react2.screen.queryByText('My Accordion Content')).not.toBeInTheDocument();
  });
  test('Renders AccordionContent by default when defaultOpen === true', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Accordion, {
      defaultOpen: true,
      content: "My Accordion Content"
    }, "My Accordion Label"));

    _react2.screen.getByText('My Accordion Content');
  });
  test('Triggers onClose and onOpen callbacks on AccordionDisclosure click', function () {
    var onOpen = jest.fn();
    var onClose = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Accordion, {
      onOpen: onOpen,
      onClose: onClose,
      content: "My Accordion Content"
    }, "My Accordion Label"));

    var accordionLabel = _react2.screen.getByText('My Accordion Label');

    _react2.fireEvent.click(accordionLabel);

    expect(onOpen).toHaveBeenCalledTimes(1);

    _react2.fireEvent.click(accordionLabel);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
  test('Shows and hides children of AccordionContent on AccordionDisclosure click with provided isOpen and toggleOpen props', function () {
    var Wrapper = function Wrapper() {
      var _useState = (0, _react.useState)(true),
          _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
          isOpen = _useState2[0],
          setIsOpen = _useState2[1];

      return _react["default"].createElement(_.Accordion, {
        isOpen: isOpen,
        toggleOpen: setIsOpen,
        content: "My Accordion Content"
      }, "My Accordion Label");
    };

    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Wrapper, null));

    var accordionLabel = _react2.screen.getByText('My Accordion Label');

    _react2.screen.getByText('My Accordion Content');

    _react2.fireEvent.click(accordionLabel);

    expect(_react2.screen.queryByText('My Accordion Content')).not.toBeInTheDocument();

    _react2.fireEvent.click(accordionLabel);

    _react2.screen.getByText('My Accordion Content');
  });
  test('Wraps handlers passed into AccordionDisclosure', function () {
    var handleKeyDown = jest.fn();
    var handleKeyUp = jest.fn();
    var handleClick = jest.fn();
    var handleBlur = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Accordion, {
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onClick: handleClick,
      onBlur: handleBlur,
      content: "My Accordion Content"
    }, "My Accordion Label"));

    var accordionLabel = _react2.screen.getByText('My Accordion Label');

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
  describe('warnings', function () {
    beforeEach(function () {
      global.console = _objectSpread(_objectSpread({}, globalConsole), {}, {
        warn: jest.fn()
      });
    });
    afterEach(function () {
      global.console = globalConsole;
    });
    test('warns if isOpen is provided without toggleOpen prop', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Accordion, {
        isOpen: true,
        content: "My Accordion Content"
      }, "My Accordion Label"));
      expect(console.warn).toHaveBeenCalled();
    });
    test('warns if children is a falsy value', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Accordion, {
        content: "My Accordion Content"
      }, false));
      expect(console.warn).toHaveBeenCalled();
    });
  });
  describe('legacy composition', function () {
    test('renders Accordion when using AccordionDisclosure and AccordionContent children', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Accordion, {
        defaultOpen: true
      }, _react["default"].createElement(_.AccordionDisclosure, null, "Disclosure"), _react["default"].createElement(_.AccordionContent, null, "Content")));

      _react2.screen.getByText('Disclosure');

      _react2.screen.getByText('Content');
    });
  });
});
//# sourceMappingURL=Accordion.spec.js.map