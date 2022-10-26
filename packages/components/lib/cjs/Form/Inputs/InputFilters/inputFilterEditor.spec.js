"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _inputFilterEditor = require("./inputFilterEditor");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

describe('inputFilterEditor', function () {
  var closeEditor = jest.fn();
  var filterOptions1 = {
    field: 'persistance-type',
    label: 'Persistance Type',
    multiple: true,
    options: ['datagroup_trigger', 'datagroup_trigger1', 'datagroup_trigger2']
  };
  var filterOptions2 = {
    field: 'group',
    label: 'Group',
    options: ['Cheddar', 'Gouda']
  };
  var value = 'user';
  var onChange = jest.fn();
  test('renders', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, (0, _inputFilterEditor.inputFilterEditor)({
      closeEditor: closeEditor,
      filterOptions: filterOptions1,
      onChange: onChange,
      value: value
    })));
    expect(_react2.screen.getByText('datagroup_trigger')).toBeInTheDocument();
  });
  test('onChange is called', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, (0, _inputFilterEditor.inputFilterEditor)({
      closeEditor: closeEditor,
      filterOptions: filterOptions1,
      onChange: onChange,
      value: value
    })));

    var selectingFilter = _react2.screen.queryByText('datagroup_trigger');

    selectingFilter && _react2.fireEvent.click(selectingFilter);
    expect(onChange).toBeCalled();
  });
  test('closeEditor is called', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, (0, _inputFilterEditor.inputFilterEditor)({
      closeEditor: closeEditor,
      filterOptions: filterOptions2,
      onChange: onChange,
      value: value
    })));

    var selectingFilter = _react2.screen.queryByText('Cheddar');

    selectingFilter && _react2.fireEvent.click(selectingFilter);
    expect(closeEditor).toBeCalled();
  });
  test('displays CheckboxGroup when multiple = true', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, (0, _inputFilterEditor.inputFilterEditor)({
      closeEditor: closeEditor,
      filterOptions: _objectSpread(_objectSpread({}, filterOptions2), {}, {
        multiple: true
      }),
      onChange: onChange,
      value: value
    })));

    var checkbox = _react2.screen.getByLabelText('Gouda');

    expect(checkbox).toHaveAttribute('type', 'checkbox');
  });
  test('displays RadioGroup when multiple = false', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_react["default"].Fragment, null, (0, _inputFilterEditor.inputFilterEditor)({
      closeEditor: closeEditor,
      filterOptions: filterOptions2,
      onChange: onChange,
      value: value
    })));

    var radio = _react2.screen.getByLabelText('Gouda');

    expect(radio).toHaveAttribute('type', 'radio');
  });
});
//# sourceMappingURL=inputFilterEditor.spec.js.map