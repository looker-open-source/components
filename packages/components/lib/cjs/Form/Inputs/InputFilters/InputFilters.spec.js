"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _filters = require("../../../fixtures/filters");

var _ = require("./");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ControlledComponent = function ControlledComponent() {
  var _useState = (0, _react.useState)(_filters.filters),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      controlledFilters = _useState2[0],
      onChange = _useState2[1];

  return _react["default"].createElement(_.InputFilters, {
    filters: controlledFilters,
    onChange: onChange
  });
};

describe('InputFilters', function () {
  test('renders', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(ControlledComponent, null));
    expect(_react2.screen.getByPlaceholderText('Filter List')).toBeInTheDocument();
  });
  test('placeholder', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.InputFilters, {
      onChange: function onChange() {
        return null;
      },
      filters: [],
      placeholder: "Hello world"
    }));
    expect(_react2.screen.getByPlaceholderText('Hello world')).toBeInTheDocument();
  });
  test('Displays list of filters', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(ControlledComponent, null));

    var input = _react2.screen.getByPlaceholderText('Filter List');

    _react2.fireEvent.click(input);

    expect(_react2.screen.getByText('Color')).toBeInTheDocument();
    expect(_react2.screen.getByText('Name')).toBeInTheDocument();
    expect(_react2.screen.getByText('Origin')).toBeInTheDocument();

    _react2.fireEvent.click(document);
  });
  test('Clicking on a filter item will displays list of second layer filters ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(ControlledComponent, null));

    var input = _react2.screen.getByPlaceholderText('Filter List');

    _react2.fireEvent.click(input);

    expect(_react2.screen.getByText('Name')).toBeInTheDocument();
    expect(_react2.screen.getByText('Color')).toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('Name'));

    expect(_react2.screen.getByText('Name:')).toBeInTheDocument();
    expect(_react2.screen.queryByText('Color')).not.toBeInTheDocument();

    _react2.fireEvent.click(document);
  });
  test('Shows editing options ', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(ControlledComponent, null));

    var input = _react2.screen.getByPlaceholderText('Filter List');

    _react2.fireEvent.click(input);

    expect(_react2.screen.getByText('Name')).toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('Name'));

    expect(_react2.screen.getByText('Cheddar')).toBeInTheDocument();
    expect(_react2.screen.getByText('Gouda')).toBeInTheDocument();
    expect(_react2.screen.getByText('Swiss')).toBeInTheDocument();
    expect(_react2.screen.getByText('Mozzarella')).toBeInTheDocument();

    _react2.fireEvent.click(document);
  });
  test('Display full filter selected', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(ControlledComponent, null));

    var input = _react2.screen.getByPlaceholderText('Filter List');

    _react2.fireEvent.click(input);

    expect(_react2.screen.getByText('Name')).toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('Name'));

    _react2.fireEvent.click(_react2.screen.getByText('Swiss'));

    expect(_react2.screen.getByText('name:')).toBeInTheDocument();

    _react2.fireEvent.click(document);
  });
  test("Doesn't show filter displayed as chip", function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(ControlledComponent, null));

    _react2.fireEvent.click(_react2.screen.getByPlaceholderText('Filter List'));

    expect(_react2.screen.getByText('Name')).toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('Name'));

    _react2.fireEvent.click(_react2.screen.getByText('Swiss'));

    expect(_react2.screen.getByText('name:')).toBeInTheDocument();

    _react2.fireEvent.click(document);

    _react2.fireEvent.click(_react2.screen.getByPlaceholderText('Filter List'));

    expect(_react2.screen.queryByText('Name')).not.toBeInTheDocument();

    _react2.fireEvent.click(document);
  });
  test('Display a second filter as chip', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(ControlledComponent, null));

    _react2.fireEvent.click(_react2.screen.getByPlaceholderText('Filter List'));

    expect(_react2.screen.getByText('Name')).toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('Name'));

    _react2.fireEvent.click(_react2.screen.getByText('Swiss'));

    expect(_react2.screen.getByText('name:')).toBeInTheDocument();
    expect(_react2.screen.getByText(/Swiss/)).toBeInTheDocument();

    _react2.fireEvent.click(document);

    _react2.fireEvent.click(_react2.screen.getByPlaceholderText('Filter List'));

    _react2.fireEvent.click(_react2.screen.getByText('Color'));

    _react2.fireEvent.click(_react2.screen.getByText('blue'));

    expect(_react2.screen.getByText('color:')).toBeInTheDocument();
    expect(_react2.screen.getAllByText('blue').length).toEqual(2);

    _react2.fireEvent.click(document);
  });
  test('Change filter values when multiple = false', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(ControlledComponent, null));

    _react2.fireEvent.click(_react2.screen.getByPlaceholderText('Filter List'));

    expect(_react2.screen.getByText('Name')).toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('Name'));

    _react2.fireEvent.click(_react2.screen.getByText('Cheddar'));

    expect(_react2.screen.getByText('name:')).toBeInTheDocument();
    expect(_react2.screen.getByText(/Cheddar/)).toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('name:'));

    _react2.fireEvent.click(_react2.screen.getByText('Swiss'));

    expect(_react2.screen.getByText(/Swiss/)).toBeInTheDocument();

    _react2.fireEvent.click(document);
  });
  test('Change filter values when multiple = true', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(ControlledComponent, null));

    _react2.fireEvent.click(_react2.screen.getByPlaceholderText('Filter List'));

    expect(_react2.screen.getByText('Color')).toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('Color'));

    _react2.fireEvent.click(_react2.screen.getByText('blue'));

    _react2.fireEvent.click(_react2.screen.getByText('white'));

    _react2.fireEvent.click(document);

    expect(_react2.screen.getByText('color:')).toBeInTheDocument();
    expect(_react2.screen.getByText(/blue/)).toBeInTheDocument();
    expect(_react2.screen.getByText(/white/)).toBeInTheDocument();

    _react2.fireEvent.click(document);
  });
  test('Delete filter', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(ControlledComponent, null));

    _react2.fireEvent.click(_react2.screen.getByPlaceholderText('Filter List'));

    expect(_react2.screen.getByText('Name')).toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('Name'));

    _react2.fireEvent.click(_react2.screen.getByText('Gouda'));

    expect(_react2.screen.getByText('name:')).toBeInTheDocument();

    _react2.fireEvent.click(document);

    _react2.fireEvent.click(_react2.screen.getByText('Delete'));

    expect(_react2.screen.queryByText('name:')).not.toBeInTheDocument();

    _react2.fireEvent.click(document);
  });
  test('Delete multiple filter', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(ControlledComponent, null));

    _react2.fireEvent.click(_react2.screen.getByPlaceholderText('Filter List'));

    expect(_react2.screen.getByText('Name')).toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('Name'));

    _react2.fireEvent.click(_react2.screen.getByText('Gouda'));

    expect(_react2.screen.getByText('name:')).toBeInTheDocument();

    _react2.fireEvent.click(document);

    _react2.fireEvent.click(_react2.screen.getByPlaceholderText('Filter List'));

    _react2.fireEvent.click(_react2.screen.getByText('Color'));

    _react2.fireEvent.click(_react2.screen.getByText('yellow'));

    _react2.fireEvent.click(_react2.screen.getByText('orange'));

    _react2.fireEvent.click(document);

    expect(_react2.screen.getByText('color:')).toBeInTheDocument();
    expect(_react2.screen.getByText(/yellow/)).toBeInTheDocument();
    expect(_react2.screen.getByText(/orange/)).toBeInTheDocument();
    expect(_react2.screen.getByText('name:')).toBeInTheDocument();
    expect(_react2.screen.getByText(/Gouda/)).toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('Clear Filters'));

    expect(_react2.screen.queryByText('color:')).not.toBeInTheDocument();
    expect(_react2.screen.queryByText('name:')).not.toBeInTheDocument();

    _react2.fireEvent.click(document);
  });
  test('Editor component is displayed if passed', function () {
    var EditorComponent = function EditorComponent() {
      return _react["default"].createElement(_react["default"].Fragment, null, "hello world");
    };

    var onChange = jest.fn();
    var editorFilter = [{
      editor: EditorComponent,
      field: 'editor',
      label: 'Important',
      options: ['a', 'b', 'c']
    }];
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.InputFilters, {
      filters: editorFilter,
      onChange: onChange
    }));

    _react2.fireEvent.click(_react2.screen.getByPlaceholderText('Filter List'));

    expect(_react2.screen.getByText('Important')).toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('Important'));

    expect(_react2.screen.getByText('hello world')).toBeInTheDocument();

    _react2.fireEvent.click(document);
  });
});
//# sourceMappingURL=InputFilters.spec.js.map