"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _componentsTestUtils = require("@looker/components-test-utils");
var _react2 = require("@testing-library/react");
var _FilterCollection = require("./FilterCollection");
var _DashboardFilter = require("../DashboardFilter");
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

describe('FilterCollection', function () {
  it('shares state for linked filters', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var onChangeMock, sdkOkMock, sdkGetMock, sdkMock;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          onChangeMock = jest.fn();
          sdkOkMock = jest.fn(function (value) {
            return Promise.resolve(value);
          });
          sdkGetMock = jest.fn(function () {
            return {
              suggestions: ['brand1', 'brand2', 'brand3']
            };
          });
          sdkMock = {
            ok: sdkOkMock,
            get: sdkGetMock
          };
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FilterCollection.FilterCollection, {
            sdk: sdkMock
          }, _react["default"].createElement(_DashboardFilter.DashboardFilter, {
            filter: {
              dimension: 'products.category',
              name: 'Category',
              title: 'Category',
              field: {
                name: 'products.category',
                suggestions: ['Accessories', 'Home + Garden'],
                project_name: 'testmodel_',
                suggest_dimension: 'products.category',
                view: 'products'
              },
              model: 'testmodel',
              ui_config: {
                type: 'button_group'
              }
            },
            onChange: onChangeMock
          }), _react["default"].createElement(_DashboardFilter.DashboardFilter, {
            filter: {
              name: 'Brand',
              title: 'Brand',
              listens_to_filters: ['Category'],
              field: {
                name: 'products.brand',
                suggestable: true,
                project_name: 'testmodel_',
                suggest_dimension: 'products.brand',
                view: 'products'
              },
              model: 'testmodel',
              ui_config: {
                type: 'button_group'
              }
            },
            onChange: onChangeMock
          })));
          _react2.fireEvent.click(_react2.screen.getByText('Home + Garden'));
          _context.next = 8;
          return _react2.screen.findByText('brand1');
        case 8:
          expect(_sdk.model_fieldname_suggestions).toHaveBeenCalledTimes(2);
          expect(_sdk.model_fieldname_suggestions).toHaveBeenLastCalledWith({
            ok: sdkOkMock,
            get: sdkGetMock
          }, {
            field_name: 'products.brand',
            filters: {
              'products.category': 'Home%20%2B%20Garden'
            },
            model_name: 'testmodel',
            term: '',
            view_name: 'products'
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
});
//# sourceMappingURL=FilterCollection.spec.js.map