"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterContext = exports.FilterCollection = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getFilterMap = function getFilterMap(filterMap, payload) {
  var filter = payload.filter,
      expression = payload.expression;

  if (expression) {
    var newKeyValue = filter.title ? (0, _defineProperty2["default"])({}, filter.title, payload) : {};
    return _objectSpread(_objectSpread({}, filterMap), newKeyValue);
  }

  if (filter.title) {
    var _filter$title = filter.title,
        filterToRemove = filterMap[_filter$title],
        rest = (0, _objectWithoutProperties2["default"])(filterMap, [_filter$title].map(_toPropertyKey));
    return rest;
  }

  return filterMap;
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_EXPRESSION':
    case 'REMOVE_FILTER':
      return _objectSpread(_objectSpread({}, state), {}, {
        filterMap: getFilterMap(state.filterMap, action.payload)
      });

    default:
      throw new Error();
  }
};

var noop = function noop() {};

var initialState = {
  filterMap: {}
};
var initialContext = {
  removeFilter: noop,
  state: initialState,
  updateExpression: noop
};
var FilterContext = (0, _react.createContext)(initialContext);
exports.FilterContext = FilterContext;

var FilterCollection = function FilterCollection(_ref2) {
  var children = _ref2.children;

  var _useReducer = (0, _react.useReducer)(reducer, initialState),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var updateExpression = (0, _react.useCallback)(function (filter, expression) {
    dispatch({
      type: 'UPDATE_EXPRESSION',
      payload: {
        filter: filter,
        expression: expression
      }
    });
  }, []);
  var removeFilter = (0, _react.useCallback)(function (filter) {
    dispatch({
      type: 'REMOVE_FILTER',
      payload: {
        filter: filter
      }
    });
  }, []);
  return _react["default"].createElement(FilterContext.Provider, {
    value: {
      removeFilter: removeFilter,
      state: state,
      updateExpression: updateExpression
    }
  }, children);
};

exports.FilterCollection = FilterCollection;
//# sourceMappingURL=FilterCollection.js.map