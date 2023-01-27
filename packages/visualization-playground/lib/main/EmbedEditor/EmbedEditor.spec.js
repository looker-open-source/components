"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _componentsTestUtils = require("@looker/components-test-utils");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _componentsData = require("@looker/components-data");
var _ = require("./");

describe('EmbedEditor', function () {
  it('modifies chart type', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee() {
    var handleChange, config;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          handleChange = jest.fn();
          config = {
            type: 'bar'
          };
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_componentsData.DataProvider, {
            sdk: _visualizationsAdapters.mockSDK
          }, _react["default"].createElement(_.EmbedEditor, {
            onConfigChange: handleChange,
            config: config,
            setHeight: jest.fn(),
            setWidth: jest.fn()
          })));

          _react2.fireEvent.click(_react2.screen.getByLabelText('Chart Type'));
          _react2.fireEvent.click(_react2.screen.getByText('table').closest('li'));
          _context.next = 7;
          return (0, _react2.waitFor)(function () {
            expect(handleChange).toHaveBeenLastCalledWith(expect.objectContaining({
              type: 'table'
            }));
          });
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  it('modifies stacking property when chart type is area', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
    var handleChange, config;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          handleChange = jest.fn();
          config = {
            type: 'area',
            positioning: 'overlay'
          };
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_componentsData.DataProvider, {
            sdk: _visualizationsAdapters.mockSDK
          }, _react["default"].createElement(_.EmbedEditor, {
            onConfigChange: handleChange,
            config: config,
            setHeight: jest.fn(),
            setWidth: jest.fn()
          })));

          _react2.fireEvent.click(_react2.screen.getByLabelText('Positioning'));
          _react2.fireEvent.click(_react2.screen.getByText('stacked').closest('li'));
          _context2.next = 7;
          return (0, _react2.waitFor)(function () {
            expect(handleChange).toHaveBeenLastCalledWith(expect.objectContaining({
              positioning: 'stacked'
            }));
          });
        case 7:
          _react2.fireEvent.click(document);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  it('toggles render_null_values when type is sparkline', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee3() {
    var handleChange, config;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          handleChange = jest.fn();
          config = {
            type: 'sparkline'
          };
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_componentsData.DataProvider, {
            sdk: _visualizationsAdapters.mockSDK
          }, _react["default"].createElement(_.EmbedEditor, {
            onConfigChange: handleChange,
            config: config,
            setHeight: jest.fn(),
            setWidth: jest.fn()
          })));

          _react2.fireEvent.click(_react2.screen.getByLabelText('Render Null Values'));
          _context3.next = 6;
          return (0, _react2.waitFor)(function () {
            expect(handleChange).toHaveBeenLastCalledWith(expect.objectContaining({
              render_null_values: true
            }));
          });
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
  it('sets value of width field in embed editor', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee4() {
    var handleChange, config, mockSetHeight, mockSetWidth;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          handleChange = jest.fn();
          config = {
            type: 'bar'
          };
          mockSetHeight = jest.fn();
          mockSetWidth = jest.fn();
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_componentsData.DataProvider, {
            sdk: _visualizationsAdapters.mockSDK
          }, _react["default"].createElement(_.EmbedEditor, {
            onConfigChange: handleChange,
            config: config,
            setHeight: mockSetHeight,
            setWidth: mockSetWidth
          })));

          _react2.fireEvent.change(_react2.screen.getByLabelText('Width'), {
            target: {
              value: '100'
            }
          });
          _context4.next = 8;
          return (0, _react2.waitFor)(function () {
            expect(mockSetWidth).toHaveBeenCalledWith('100');
          });
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
  it('sets value of height field in embed editor', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee5() {
    var handleChange, config, mockSetHeight, mockSetWidth;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          handleChange = jest.fn();
          config = {
            type: 'bar'
          };
          mockSetHeight = jest.fn();
          mockSetWidth = jest.fn();
          (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_componentsData.DataProvider, {
            sdk: _visualizationsAdapters.mockSDK
          }, _react["default"].createElement(_.EmbedEditor, {
            onConfigChange: handleChange,
            config: config,
            setHeight: mockSetHeight,
            setWidth: mockSetWidth
          })));

          _react2.fireEvent.change(_react2.screen.getByLabelText('Height'), {
            target: {
              value: '90'
            }
          });
          _context5.next = 8;
          return (0, _react2.waitFor)(function () {
            expect(mockSetHeight).toHaveBeenCalledWith('90');
          });
        case 8:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })));
});
//# sourceMappingURL=EmbedEditor.spec.js.map