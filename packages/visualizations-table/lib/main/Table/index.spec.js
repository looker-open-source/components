"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _componentsTestUtils = require("@looker/components-test-utils");
var _react2 = require("@testing-library/react");
var _ = require("./");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var getTextContent = function getTextContent(cells) {
  return cells.map(function (c) {
    return c.textContent;
  });
};
it('organizes table columns as specified by config.column_order', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Table, {
    config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockTableConfig), {}, {
      show_row_numbers: false,
      column_order: ['orders.count', 'orders.created_date', 'orders.average_total_amount_of_order_usd', 'users.state']
    }),
    fields: _visualizationsAdapters.mockFields,
    data: _visualizationsAdapters.mockData
  }));
  var headers = _react2.screen.getAllByTestId('columnheader-label');
  expect(getTextContent(headers)).toEqual(['Orders Count', 'Orders Created Date', 'Orders Average Total Amount of Order USD', 'Users State']);
});
it('renders row numbers when config.show_row_numbers is true', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Table, {
    config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockTableConfig), {}, {
      show_row_numbers: true
    }),
    fields: _visualizationsAdapters.mockFields,
    data: _visualizationsAdapters.mockData
  }));

  expect(_react2.screen.getAllByRole('cell')[1]).toHaveTextContent('1');
});
it('hides row numbers when config.show_row_numbers is false', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Table, {
    config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockTableConfig), {}, {
      show_row_numbers: false
    }),
    fields: _visualizationsAdapters.mockFields,
    data: _visualizationsAdapters.mockData
  }));

  expect(_react2.screen.getAllByRole('cell')[1]).toHaveTextContent('2019-12-22');
});
it('sorts table columns', function () {
  var highestOrderCount = {
    'orders.count': Infinity,
    'orders.average_total_amount_of_order_usd': Infinity,
    'orders.created_date': '2012-12-12',
    'users.state': 'Oregon'
  };
  var lowestOrderCount = {
    'orders.count': -Infinity,
    'orders.average_total_amount_of_order_usd': -Infinity,
    'orders.created_date': '2022-09-01',
    'users.state': 'Oregon'
  };
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Table, {
    config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockTableConfig), {}, {
      show_row_numbers: false
    }),
    fields: _visualizationsAdapters.mockFields,
    data: [].concat((0, _toConsumableArray2["default"])(_visualizationsAdapters.mockData), [lowestOrderCount, highestOrderCount])
  }));

  var topRow = _react2.screen.getAllByRole('row')[1];
  expect(getTextContent((0, _react2.within)(topRow).getAllByRole('cell'))).toEqual(['', '2012-12-12', 'Oregon', 'Infinity', 'Infinity']);

  var sortButton = _react2.screen.getByText('Sort ascending').closest('button');
  _react2.fireEvent.click(sortButton);
  var newTopRow = _react2.screen.getAllByRole('row')[1];
  expect(getTextContent((0, _react2.within)(newTopRow).getAllByRole('cell'))).toEqual(['', '2022-09-01', 'Oregon', '-Infinity', '-Infinity']);
});
it('sorts multiple table columns when shift key is held down', function () {
  var ariaSortValue = function ariaSortValue(el) {
    var _el$attributes$getNam;
    return (_el$attributes$getNam = el.attributes.getNamedItem('aria-sort')) === null || _el$attributes$getNam === void 0 ? void 0 : _el$attributes$getNam.value;
  };
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Table, {
    config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockTableConfig), {}, {
      show_row_numbers: false
    }),
    fields: _visualizationsAdapters.mockFields,
    data: _visualizationsAdapters.mockData
  }));

  var headers = _react2.screen.getAllByRole('columnheader').slice(1, -1);
  var sortButtons = headers.map(function (h) {
    return (0, _react2.within)(h).getByRole('button', {
      hidden: true
    });
  });

  expect(ariaSortValue(headers[0])).toEqual('none');
  expect(ariaSortValue(headers[1])).toEqual('none');

  _react2.fireEvent.click(sortButtons[0]);
  expect(ariaSortValue(headers[0])).toEqual('descending');
  expect(ariaSortValue(headers[1])).toEqual('none');

  _react2.fireEvent.click(sortButtons[1], {
    shiftKey: true
  });
  expect(ariaSortValue(headers[0])).toEqual('descending');
  expect(ariaSortValue(headers[1])).toEqual('descending');

  _react2.fireEvent.click(sortButtons[0], {
    shiftKey: true
  });
  expect(ariaSortValue(headers[0])).toEqual('ascending');
  expect(ariaSortValue(headers[1])).toEqual('descending');
});
it('renders totals when config.show_totals is true', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Table, {
    config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockTableConfig), {}, {
      show_totals: true
    }),
    fields: _visualizationsAdapters.mockFields,
    data: _visualizationsAdapters.mockData,
    totals: _visualizationsAdapters.mockTotals
  }));
  var footerRow = _react2.screen.getAllByRole('row')[_react2.screen.getAllByRole('row').length - 1];
  expect(getTextContent((0, _react2.within)(footerRow).getAllByRole('columnheader'))).toEqual(['Totals', '', '5689', '2245']);
});
it('renders value format on body', function () {
  var configCopy = _objectSpread({}, _visualizationsAdapters.mockTableConfig);
  configCopy.series = [{
    value_format: '$#,##0.00'
  }, {
    value_format: '0,0.[00]'
  }];
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Table, {
    config: _objectSpread(_objectSpread({}, configCopy), {}, {
      show_totals: true
    }),
    fields: _visualizationsAdapters.mockFields,
    data: _visualizationsAdapters.mockData,
    totals: _visualizationsAdapters.mockTotals
  }));
  var bodyRow = _react2.screen.getAllByRole('row')[_react2.screen.getAllByRole('row').length - 2];
  expect(getTextContent((0, _react2.within)(bodyRow).getAllByRole('cell'))).toEqual(['', '2019-12-19', 'Oregon', '$87.00', '88']);
});
it('renders value format on totals', function () {
  var configCopy = _objectSpread({}, _visualizationsAdapters.mockTableConfig);
  configCopy.series = [{
    value_format: '$#,##0.00'
  }, {
    value_format: '0,0.[00]'
  }];
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Table, {
    config: _objectSpread(_objectSpread({}, configCopy), {}, {
      show_totals: true
    }),
    fields: _visualizationsAdapters.mockFields,
    data: _visualizationsAdapters.mockData,
    totals: _visualizationsAdapters.mockTotals
  }));
  var footerRow = _react2.screen.getAllByRole('row')[_react2.screen.getAllByRole('row').length - 1];
  expect(getTextContent((0, _react2.within)(footerRow).getAllByRole('columnheader'))).toEqual(['Totals', '', '$5,689.00', '2,245']);
});
it('renders multiple table head rows for pivoted queries', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_.Table, {
    config: _visualizationsAdapters.mockTableConfig,
    fields: _visualizationsAdapters.mockPivotedFields,
    data: _visualizationsAdapters.mockPivotedData,
    pivots: _visualizationsAdapters.mockPivotGender
  }));
  var tHead = _react2.screen.getAllByRole('rowgroup')[0];
  var headerRows = (0, _react2.within)(tHead).getAllByRole('row');

  expect(headerRows.length).toEqual(2);

  expect(getTextContent((0, _react2.within)(headerRows[0]).getAllByRole('columnheader'))).toEqual(['', 'Users Gender', 'f', 'm', 'male', '']);

  expect(getTextContent((0, _react2.within)(headerRows[1]).getAllByTestId('columnheader-label'))).toEqual(['Users City', 'Orders Count', 'Orders Count', 'Orders Count']);
});
//# sourceMappingURL=index.spec.js.map