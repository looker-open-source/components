"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _DashboardFilter = require("./DashboardFilter");

var _sdk = require("@looker/sdk");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

jest.mock('@looker/sdk', function () {
  return _objectSpread(_objectSpread({}, jest.requireActual('@looker/sdk')), {}, {
    model_fieldname_suggestions: jest.fn(function (sdk) {
      return sdk.get();
    })
  });
});
describe('DashboardFilter', function () {
  it('renders label', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DashboardFilter.DashboardFilter, {
      filter: {
        name: 'Status',
        field: {}
      },
      onChange: onChangeMock
    }));
    expect(_react2.screen.getByText('Status')).toBeVisible();
  });
  it('renders validation message', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DashboardFilter.DashboardFilter, {
      filter: {
        name: 'Status',
        field: {},
        required: true
      },
      onChange: onChangeMock
    }));
    expect(_react2.screen.getByText('Value required')).toBeVisible();
  });
  it('calls onChange', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DashboardFilter.DashboardFilter, {
      filter: {
        name: 'Status',
        field: {
          suggestions: ['complete', 'pending', 'cancelled']
        },
        ui_config: {
          type: 'button_group'
        }
      },
      onChange: onChangeMock
    }));

    var cancelled = _react2.screen.getByText('cancelled');

    _react2.fireEvent.click(cancelled);

    expect(onChangeMock.mock.calls).toMatchInlineSnapshot("\n      Array [\n        Array [\n          \"cancelled\",\n        ],\n      ]\n    ");
  });
  it('handles undefined field (LookML filter)', function () {
    var onChangeMock = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DashboardFilter.DashboardFilter, {
      filter: {
        name: 'date',
        type: 'date_filter',
        default_value: '30 days'
      },
      onChange: onChangeMock
    }));
    expect(_react2.screen.getByText('is in the last')).toBeVisible();
    expect(_react2.screen.getByText('30')).toBeVisible();
    expect(_react2.screen.getByText('days')).toBeVisible();
  });
  describe('value', function () {
    it('uses default_value', function () {
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DashboardFilter.DashboardFilter, {
        filter: {
          name: 'Status',
          field: {},
          default_value: 'complete',
          allow_multiple_values: true
        },
        onChange: onChangeMock
      }));
      expect(_react2.screen.getByRole('option')).toHaveTextContent('complete');
    });
    it('uses expression if available', function () {
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DashboardFilter.DashboardFilter, {
        filter: {
          name: 'Status',
          field: {},
          default_value: 'complete',
          allow_multiple_values: true
        },
        expression: "complete,pending",
        onChange: onChangeMock
      }));

      var values = _react2.screen.getAllByRole('option');

      expect(values[0]).toHaveTextContent('complete');
      expect(values[1]).toHaveTextContent('pending');
    });
  });
  describe('options', function () {
    it('uses field suggestions if available', function () {
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DashboardFilter.DashboardFilter, {
        filter: {
          name: 'Status',
          field: {
            suggestions: ['complete', 'pending', 'cancelled']
          },
          default_value: 'complete',
          ui_config: {
            type: 'button_group'
          }
        },
        expression: "complete,pending",
        onChange: onChangeMock
      }));

      var values = _react2.screen.getAllByRole('button');

      expect(values[0]).toHaveTextContent('complete');
      expect(values[0]).toHaveAttribute('aria-pressed', 'true');
      expect(values[1]).toHaveTextContent('pending');
      expect(values[1]).toHaveAttribute('aria-pressed', 'true');
      expect(values[2]).toHaveTextContent('cancelled');
      expect(values[2]).toHaveAttribute('aria-pressed', 'false');
    });
    it('uses field enumerations if available', function () {
      var onChangeMock = jest.fn();
      (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DashboardFilter.DashboardFilter, {
        filter: {
          name: 'Status',
          field: {
            enumerations: [{
              label: 'complete',
              value: 'complete'
            }, {
              label: 'pending',
              value: 'pending'
            }, {
              label: 'cancelled',
              value: 'cancelled'
            }]
          },
          default_value: 'complete',
          ui_config: {
            type: 'button_group'
          }
        },
        expression: "complete,pending",
        onChange: onChangeMock
      }));

      var values = _react2.screen.getAllByRole('button');

      expect(values[0]).toHaveTextContent('complete');
      expect(values[0]).toHaveAttribute('aria-pressed', 'true');
      expect(values[1]).toHaveTextContent('pending');
      expect(values[1]).toHaveAttribute('aria-pressed', 'true');
      expect(values[2]).toHaveTextContent('cancelled');
      expect(values[2]).toHaveAttribute('aria-pressed', 'false');
    });
    it('fetches suggestions', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
      var onChangeMock, sdkOkMock, sdkGetMock, sdkMock, values;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              onChangeMock = jest.fn();
              sdkOkMock = jest.fn(function (value) {
                return Promise.resolve(value);
              });
              sdkGetMock = jest.fn(function () {
                return {
                  suggestions: ['complete', 'pending', 'cancelled']
                };
              });
              sdkMock = {
                ok: sdkOkMock,
                get: sdkGetMock
              };
              (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DashboardFilter.DashboardFilter, {
                filter: {
                  name: 'Status',
                  field: {
                    name: 'orders.status',
                    suggestable: true,
                    project_name: 'bar',
                    suggest_dimension: 'orders.status',
                    view: 'orders'
                  },
                  default_value: 'complete',
                  model: 'foo',
                  ui_config: {
                    type: 'button_group'
                  }
                },
                sdk: sdkMock,
                expression: "complete,pending",
                onChange: onChangeMock
              }));
              _context.next = 7;
              return _react2.screen.findAllByRole('button');

            case 7:
              values = _context.sent;
              expect(values[0]).toHaveTextContent('complete');
              expect(values[0]).toHaveAttribute('aria-pressed', 'true');
              expect(values[1]).toHaveTextContent('pending');
              expect(values[1]).toHaveAttribute('aria-pressed', 'true');
              expect(values[2]).toHaveTextContent('cancelled');
              expect(values[2]).toHaveAttribute('aria-pressed', 'false');
              expect(_sdk.model_fieldname_suggestions).toHaveBeenCalledWith({
                ok: sdkOkMock,
                get: sdkGetMock
              }, {
                field_name: 'orders.status',
                model_name: 'foo',
                term: '',
                view_name: 'orders'
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    it('shows fetch error message', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
      var onChangeMock, sdkMock;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              onChangeMock = jest.fn();
              sdkMock = {
                ok: jest.fn(function (value) {
                  return value;
                }),
                get: jest.fn(function () {
                  throw new Error();
                })
              };
              (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_DashboardFilter.DashboardFilter, {
                filter: {
                  name: 'Status',
                  field: {
                    suggestable: true
                  },
                  default_value: 'complete',
                  ui_config: {
                    type: 'button_group'
                  }
                },
                sdk: sdkMock,
                expression: "complete,pending",
                onChange: onChangeMock
              }));
              _context2.t0 = expect;
              _context2.next = 6;
              return _react2.screen.findByTestId('error-icon');

            case 6:
              _context2.t1 = _context2.sent;
              (0, _context2.t0)(_context2.t1).toBeVisible();

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
  });
});
//# sourceMappingURL=DashboardFilter.spec.js.map