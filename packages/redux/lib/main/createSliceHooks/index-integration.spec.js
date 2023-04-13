"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toolkit = require("@reduxjs/toolkit");
var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _effects = require("redux-saga/effects");
var _createStore = require("../createStore");
var _ = require(".");

test('reducers and sagas', (0, _asyncToGenerator2["default"])(regeneratorRuntime.mark(function _callee2() {
  var _marked, slice, sagas, hooks, store, Component, r;
  return regeneratorRuntime.wrap(function _callee2$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        sagas = function _sagas() {
          return regeneratorRuntime.wrap(function sagas$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _effects.takeEvery)(slice.actions.getText, regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return (0, _effects.call)(function () {
                          return Promise.resolve();
                        });
                      case 2:
                        _context.next = 4;
                        return (0, _effects.put)(slice.actions.setText());
                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
              case 2:
              case "end":
                return _context2.stop();
            }
          }, _marked);
        };
        _marked = regeneratorRuntime.mark(sagas);
        slice = (0, _toolkit.createSlice)({
          name: 'test',
          initialState: {
            text: 'click'
          },
          reducers: {
            getText: function getText(state) {
              state.text = 'loading';
            },
            setText: function setText(state) {
              state.text = 'done';
            }
          }
        });
        hooks = (0, _.createSliceHooks)(slice, sagas);
        store = (0, _createStore.createStore)();
        Component = function Component() {
          var actions = hooks.useActions();
          var state = hooks.useStoreState();
          return _react2["default"].createElement("button", {
            onClick: actions.getText
          }, state.text);
        };
        r = (0, _react.render)(_react2["default"].createElement(_reactRedux.Provider, {
          store: store
        }, _react2["default"].createElement(Component, null)));
        _context3.t0 = _react.fireEvent;
        _context3.next = 10;
        return r.findByText('click');
      case 10:
        _context3.t1 = _context3.sent;
        _context3.t0.click.call(_context3.t0, _context3.t1);
        expect(r.getByText('loading')).toBeInTheDocument();
        _context3.t2 = expect;
        _context3.next = 16;
        return r.findByText('done');
      case 16:
        _context3.t3 = _context3.sent;
        (0, _context3.t2)(_context3.t3).toBeInTheDocument();
      case 18:
      case "end":
        return _context3.stop();
    }
  }, _callee2);
})));
//# sourceMappingURL=index-integration.spec.js.map