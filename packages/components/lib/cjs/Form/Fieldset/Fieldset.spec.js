"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("jest-styled-components");

var _react = _interopRequireWildcard(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _FieldText = require("../Fields/FieldText");

var _Fieldset = require("./Fieldset");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var fieldTexts = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_FieldText.FieldText, {
  label: "one",
  name: "name1",
  id: "text-1"
}), _react["default"].createElement(_FieldText.FieldText, {
  label: "two",
  name: "name2",
  id: "text-2"
}), _react["default"].createElement(_FieldText.FieldText, {
  label: "three",
  name: "nam3",
  id: "text-3"
}));

var globalConsole = global.console;
var warnMock = jest.fn();
beforeEach(function () {
  jest.useFakeTimers();
  global.console = {
    warn: warnMock
  };
});
afterEach(function () {
  global.console = globalConsole;
});
describe('Fieldset', function () {
  test('Basic', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Fieldset.Fieldset, null, fieldTexts));
    expect(_react2.screen.getByText('three')).toBeInTheDocument();
  });
  test('Accordion w/o Legend warning', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Fieldset.Fieldset, {
      accordion: true
    }, fieldTexts));
    expect(warnMock.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          \"Please provide a value for the \\\"legend\\\" prop if using accordion mode\",\n        ],\n      ]\n    ");
  });
  test('Inline', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Fieldset.Fieldset, {
      inline: true
    }, fieldTexts));
    expect(_react2.screen.getByText('three')).toBeInTheDocument();
  });
  test('Legend', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Fieldset.Fieldset, {
      legend: "Legend"
    }, fieldTexts));
    expect(_react2.screen.getByText('Legend')).toBeInTheDocument();
  });
  test('Special Legend', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Fieldset.Fieldset, {
      legend: _react["default"].createElement(_react["default"].Fragment, null, "Legend")
    }, fieldTexts));
    expect(_react2.screen.getByText('Legend')).toBeInTheDocument();
  });
  test('Wrap', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Fieldset.Fieldset, {
      wrap: true
    }, fieldTexts));
    expect(_react2.screen.getByText('three')).toBeInTheDocument();
  });
  describe('Accordion mode', function () {
    test('Renders legend and children (on legend click)', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Fieldset.Fieldset, {
        legend: "Legend",
        accordion: true
      }, fieldTexts));
      expect(_react2.screen.queryByText('one')).not.toBeInTheDocument();
      expect(_react2.screen.queryByText('two')).not.toBeInTheDocument();
      expect(_react2.screen.queryByText('three')).not.toBeInTheDocument();

      _react2.fireEvent.click(_react2.screen.getByText('Legend'));

      _react2.screen.getByText('one');

      _react2.screen.getByText('two');

      _react2.screen.getByText('three');
    });
    test('Renders children by default when defaultOpen === true', function () {
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Fieldset.Fieldset, {
        legend: "Legend",
        accordion: true,
        defaultOpen: true
      }, fieldTexts));

      _react2.screen.getByText('one');

      _react2.screen.getByText('two');

      _react2.screen.getByText('three');
    });
    test('Triggers onClose and onOpen callbacks on legend click', function () {
      var onClose = jest.fn();
      var onOpen = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Fieldset.Fieldset, {
        legend: "Legend",
        accordion: true,
        onClose: onClose,
        onOpen: onOpen
      }, fieldTexts));

      var disclosure = _react2.screen.getByText('Legend');

      _react2.fireEvent.click(disclosure);

      expect(onOpen).toHaveBeenCalled();

      _react2.fireEvent.click(disclosure);

      expect(onClose).toHaveBeenCalled();
    });
    test('Shows and hides children on legend click with provided isOpen and toggleOpen props', function () {
      var Wrapper = function Wrapper() {
        var _useState = (0, _react.useState)(false),
            _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
            isOpen = _useState2[0],
            setIsOpen = _useState2[1];

        return _react["default"].createElement(_Fieldset.Fieldset, {
          legend: "Legend",
          accordion: true,
          isOpen: isOpen,
          toggleOpen: setIsOpen
        }, fieldTexts);
      };

      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(Wrapper, null));
      expect(_react2.screen.queryByText('one')).not.toBeInTheDocument();
      expect(_react2.screen.queryByText('two')).not.toBeInTheDocument();
      expect(_react2.screen.queryByText('three')).not.toBeInTheDocument();

      _react2.fireEvent.click(_react2.screen.getByText('Legend'));

      _react2.screen.getByText('one');

      _react2.screen.getByText('two');

      _react2.screen.getByText('three');
    });
  });
});
//# sourceMappingURL=Fieldset.spec.js.map