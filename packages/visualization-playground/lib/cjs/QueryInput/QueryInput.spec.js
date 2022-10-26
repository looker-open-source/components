"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _extensionSdkReact = require("@looker/extension-sdk-react");

var _componentsData = require("@looker/components-data");

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _AppContext = require("../AppContext");

var _ = require("./");

var handleInputChange = jest.fn();
var handleSetFetchBy = jest.fn();
var mockLocalStorage = {
  visComponentInputType: '"query"',
  visComponentQueryIdentifier: '"abc123"',
  visComponentDashboardId: '123'
};
var localStorageGetItem = jest.fn().mockImplementation(function (key) {
  return Promise.resolve(mockLocalStorage[key]);
});
var localStorageSetItem = jest.fn().mockImplementation(function (key, val) {
  mockLocalStorage[key] = val;
});
afterEach(function () {
  jest.clearAllMocks();
});

var MockContextWrapper = function MockContextWrapper(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(_extensionSdkReact.ExtensionContext.Provider, {
    value: {
      extensionSDK: {
        openBrowserWindow: jest.fn()
      },
      core40SDK: _visualizationsAdapters.mockSDK
    }
  }, _react["default"].createElement(_AppContext.AppContext.Provider, {
    value: {
      localStorageGetItem: localStorageGetItem,
      localStorageSetItem: localStorageSetItem
    }
  }, _react["default"].createElement(_componentsData.DataProvider, {
    sdk: _visualizationsAdapters.mockSDK
  }, children)));
};

describe('QueryInput', function () {
  it('allows dashboard id input', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(MockContextWrapper, null, _react["default"].createElement(_.QueryInput, {
              onChange: handleInputChange,
              setFetchBy: handleSetFetchBy,
              fetchBy: "query",
              dashboardId: 5,
              queryId: "abc123"
            })));

            _react2.fireEvent.click(_react2.screen.getByText('Dashboard (Numeric ID)'));

            _context.next = 4;
            return (0, _react2.waitFor)(function () {
              expect(handleInputChange).toHaveBeenLastCalledWith({
                type: 'dashboard',
                value: 5
              });
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('allows query id input', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(MockContextWrapper, null, _react["default"].createElement(_.QueryInput, {
              onChange: handleInputChange,
              setFetchBy: handleSetFetchBy,
              fetchBy: "dashboard",
              dashboardId: 5,
              queryId: "abc123"
            })));

            _react2.fireEvent.click(_react2.screen.getByText('Query (Numeric ID or Slug)'));

            _context2.next = 4;
            return (0, _react2.waitFor)(function () {
              expect(handleInputChange).toHaveBeenLastCalledWith({
                type: 'query',
                value: 'abc123'
              });
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('restores dashboard and query id from localstorage on load', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(MockContextWrapper, null, _react["default"].createElement(_.QueryInput, {
              onChange: handleInputChange,
              dashboardId: 5,
              queryId: "abc123",
              setFetchBy: handleSetFetchBy,
              fetchBy: "query"
            })));
            _context3.next = 3;
            return (0, _react2.waitFor)(function () {
              expect(_react2.screen.getByDisplayValue(JSON.parse(mockLocalStorage.visComponentQueryIdentifier))).toBeInTheDocument();
            });

          case 3:
            _context3.next = 5;
            return (0, _react2.waitFor)(function () {
              expect(_react2.screen.getByDisplayValue(JSON.parse(mockLocalStorage.visComponentDashboardId))).toBeInTheDocument();
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('updates localstorage when you input dashboard or query id', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee4() {
    var queryIdInput;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(MockContextWrapper, null, _react["default"].createElement(_.QueryInput, {
              onChange: handleInputChange,
              dashboardId: 5,
              queryId: "abc123",
              setFetchBy: handleSetFetchBy,
              fetchBy: "query"
            })));
            queryIdInput = _react2.screen.getByPlaceholderText("CmBbGK2\u2026");

            _react2.fireEvent.change(queryIdInput, {
              target: {
                value: 'new-query-id'
              }
            });

            _context4.next = 5;
            return (0, _react2.waitFor)(function () {
              expect(localStorageSetItem).toHaveBeenLastCalledWith('visComponentQueryIdentifier', '"new-query-id"');
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
});
//# sourceMappingURL=QueryInput.spec.js.map