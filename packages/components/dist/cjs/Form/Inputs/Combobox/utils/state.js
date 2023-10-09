"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComboboxState = exports.ComboboxActionType = void 0;
exports.getOptionsFromValues = getOptionsFromValues;
exports.reducerMulti = exports.reducer = exports.getStateChart = void 0;
exports.useReducerMachine = useReducerMachine;
var _xorWith = _interopRequireDefault(require("lodash/xorWith"));
var _react = require("react");
var _getComboboxText = require("./getComboboxText");
var _parseOption = require("./parseOption");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ComboboxState = function (ComboboxState) {
  ComboboxState["IDLE"] = "IDLE";
  ComboboxState["SUGGESTING"] = "SUGGESTING";
  ComboboxState["NAVIGATING"] = "NAVIGATING";
  ComboboxState["INTERACTING"] = "INTERACTING";
  return ComboboxState;
}(ComboboxState || {});
exports.ComboboxState = ComboboxState;
var ComboboxActionType = function (ComboboxActionType) {
  ComboboxActionType["CLEAR"] = "CLEAR";
  ComboboxActionType["CHANGE"] = "CHANGE";
  ComboboxActionType["CHANGE_SILENT"] = "CHANGE_SILENT";
  ComboboxActionType["CHANGE_VALUES"] = "CHANGE_VALUES";
  ComboboxActionType["NAVIGATE"] = "NAVIGATE";
  ComboboxActionType["SELECT_WITH_KEYBOARD"] = "SELECT_WITH_KEYBOARD";
  ComboboxActionType["SELECT_WITH_CLICK"] = "SELECT_WITH_CLICK";
  ComboboxActionType["SELECT_SILENT"] = "SELECT_SILENT";
  ComboboxActionType["ESCAPE"] = "ESCAPE";
  ComboboxActionType["BLUR"] = "BLUR";
  ComboboxActionType["INTERACT"] = "INTERACT";
  ComboboxActionType["FOCUS"] = "FOCUS";
  return ComboboxActionType;
}(ComboboxActionType || {});
exports.ComboboxActionType = ComboboxActionType;
var getStateChart = function getStateChart(shouldRenderListInline) {
  var _on, _on2, _on3, _on4, _states;
  var restState = shouldRenderListInline ? ComboboxState.SUGGESTING : ComboboxState.IDLE;
  return {
    initial: restState,
    states: (_states = {}, _defineProperty(_states, ComboboxState.IDLE, {
      on: (_on = {}, _defineProperty(_on, ComboboxActionType.BLUR, ComboboxState.IDLE), _defineProperty(_on, ComboboxActionType.CLEAR, ComboboxState.IDLE), _defineProperty(_on, ComboboxActionType.CHANGE, ComboboxState.SUGGESTING), _defineProperty(_on, ComboboxActionType.CHANGE_SILENT, ComboboxState.IDLE), _defineProperty(_on, ComboboxActionType.CHANGE_VALUES, ComboboxState.IDLE), _defineProperty(_on, ComboboxActionType.FOCUS, ComboboxState.SUGGESTING), _defineProperty(_on, ComboboxActionType.NAVIGATE, ComboboxState.NAVIGATING), _defineProperty(_on, ComboboxActionType.SELECT_SILENT, ComboboxState.IDLE), _on)
    }), _defineProperty(_states, ComboboxState.SUGGESTING, {
      on: (_on2 = {}, _defineProperty(_on2, ComboboxActionType.CHANGE, ComboboxState.SUGGESTING), _defineProperty(_on2, ComboboxActionType.CHANGE_SILENT, ComboboxState.SUGGESTING), _defineProperty(_on2, ComboboxActionType.CHANGE_VALUES, ComboboxState.SUGGESTING), _defineProperty(_on2, ComboboxActionType.FOCUS, ComboboxState.SUGGESTING), _defineProperty(_on2, ComboboxActionType.NAVIGATE, ComboboxState.NAVIGATING), _defineProperty(_on2, ComboboxActionType.CLEAR, restState), _defineProperty(_on2, ComboboxActionType.ESCAPE, restState), _defineProperty(_on2, ComboboxActionType.BLUR, restState), _defineProperty(_on2, ComboboxActionType.SELECT_WITH_CLICK, ComboboxState.SUGGESTING), _defineProperty(_on2, ComboboxActionType.SELECT_SILENT, ComboboxState.SUGGESTING), _defineProperty(_on2, ComboboxActionType.INTERACT, ComboboxState.INTERACTING), _on2)
    }), _defineProperty(_states, ComboboxState.NAVIGATING, {
      on: (_on3 = {}, _defineProperty(_on3, ComboboxActionType.CHANGE, ComboboxState.SUGGESTING), _defineProperty(_on3, ComboboxActionType.CHANGE_SILENT, ComboboxState.NAVIGATING), _defineProperty(_on3, ComboboxActionType.CHANGE_VALUES, ComboboxState.NAVIGATING), _defineProperty(_on3, ComboboxActionType.FOCUS, ComboboxState.SUGGESTING), _defineProperty(_on3, ComboboxActionType.CLEAR, restState), _defineProperty(_on3, ComboboxActionType.BLUR, restState), _defineProperty(_on3, ComboboxActionType.ESCAPE, restState), _defineProperty(_on3, ComboboxActionType.NAVIGATE, ComboboxState.NAVIGATING), _defineProperty(_on3, ComboboxActionType.SELECT_WITH_CLICK, ComboboxState.NAVIGATING), _defineProperty(_on3, ComboboxActionType.SELECT_WITH_KEYBOARD, ComboboxState.NAVIGATING), _defineProperty(_on3, ComboboxActionType.SELECT_SILENT, ComboboxState.NAVIGATING), _defineProperty(_on3, ComboboxActionType.INTERACT, ComboboxState.INTERACTING), _on3)
    }), _defineProperty(_states, ComboboxState.INTERACTING, {
      on: (_on4 = {}, _defineProperty(_on4, ComboboxActionType.CHANGE, ComboboxState.SUGGESTING), _defineProperty(_on4, ComboboxActionType.CHANGE_SILENT, ComboboxState.SUGGESTING), _defineProperty(_on4, ComboboxActionType.CHANGE_VALUES, ComboboxState.INTERACTING), _defineProperty(_on4, ComboboxActionType.FOCUS, ComboboxState.SUGGESTING), _defineProperty(_on4, ComboboxActionType.BLUR, restState), _defineProperty(_on4, ComboboxActionType.ESCAPE, restState), _defineProperty(_on4, ComboboxActionType.NAVIGATE, ComboboxState.NAVIGATING), _defineProperty(_on4, ComboboxActionType.SELECT_WITH_CLICK, ComboboxState.INTERACTING), _defineProperty(_on4, ComboboxActionType.SELECT_SILENT, ComboboxState.INTERACTING), _on4)
    }), _states)
  };
};
exports.getStateChart = getStateChart;
var findNavigationValue = function findNavigationValue(state, action) {
  if (action.option) {
    return action.option;
  } else if (action.persistSelection) {
    var singularState = state;
    var multiState = state;
    if (singularState.option) {
      return singularState.option;
    } else if (multiState.options) {
      return multiState.navigationOption || multiState.options[multiState.options.length - 1];
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
};
var reducer = function reducer(data, action) {
  var nextState = _objectSpread({}, data);
  if (action.type.indexOf('_SILENT') === -1) {
    nextState.lastActionType = action.type;
  }
  switch (action.type) {
    case ComboboxActionType.CHANGE:
    case ComboboxActionType.CHANGE_SILENT:
      return _objectSpread(_objectSpread({}, nextState), {}, {
        inputValue: action.inputValue
      });
    case ComboboxActionType.NAVIGATE:
      return _objectSpread(_objectSpread({}, nextState), {}, {
        navigationOption: findNavigationValue(nextState, action)
      });
    case ComboboxActionType.CLEAR:
      return _objectSpread(_objectSpread({}, nextState), {}, {
        inputValue: '',
        navigationOption: undefined,
        option: undefined
      });
    case ComboboxActionType.BLUR:
    case ComboboxActionType.ESCAPE:
      return _objectSpread(_objectSpread({}, nextState), {}, {
        inputValue: action.inputValue || (0, _getComboboxText.getComboboxText)(data.option),
        navigationOption: undefined
      });
    case ComboboxActionType.SELECT_WITH_CLICK:
    case ComboboxActionType.SELECT_SILENT:
      return _objectSpread(_objectSpread({}, nextState), {}, {
        inputValue: (0, _getComboboxText.getComboboxText)(action.option),
        navigationOption: undefined,
        option: action.option
      });
    case ComboboxActionType.SELECT_WITH_KEYBOARD:
      return _objectSpread(_objectSpread({}, nextState), {}, {
        inputValue: (0, _getComboboxText.getComboboxText)(data.navigationOption),
        navigationOption: undefined,
        option: data.navigationOption
      });
    case ComboboxActionType.INTERACT:
      return nextState;
    case ComboboxActionType.FOCUS:
      return _objectSpread(_objectSpread({}, nextState), {}, {
        navigationOption: findNavigationValue(nextState, action)
      });
    default:
      throw new Error("Unknown action ".concat(action.type));
  }
};
exports.reducer = reducer;
function getOptionsFromValues(currentOptions, newValues) {
  if (!newValues) return [];
  return newValues.reduce(function (acc, value) {
    var valueAsOption = (0, _parseOption.parseOption)(value);
    var matchingOption = currentOptions.find(function (option) {
      return option.value === valueAsOption.value;
    });
    var duplicateOption = acc.find(function (option) {
      return option.value === valueAsOption.value;
    });
    if (!duplicateOption) {
      if (matchingOption) {
        return [].concat(_toConsumableArray(acc), [matchingOption]);
      } else {
        return [].concat(_toConsumableArray(acc), [valueAsOption]);
      }
    }
    return acc;
  }, []);
}
var reducerMulti = function reducerMulti(data, action) {
  var nextState = _objectSpread({}, data);
  if (action.type.indexOf('_SILENT') === -1) {
    nextState.lastActionType = action.type;
  }
  switch (action.type) {
    case ComboboxActionType.CHANGE:
    case ComboboxActionType.CHANGE_SILENT:
      return _objectSpread(_objectSpread({}, nextState), {}, {
        inputValue: action.inputValue
      });
    case ComboboxActionType.CHANGE_VALUES:
      return _objectSpread(_objectSpread({}, nextState), {}, {
        navigationOption: undefined,
        options: getOptionsFromValues(nextState.options, action.inputValues)
      });
    case ComboboxActionType.NAVIGATE:
      return _objectSpread(_objectSpread({}, nextState), {}, {
        navigationOption: findNavigationValue(nextState, action)
      });
    case ComboboxActionType.CLEAR:
      return _objectSpread(_objectSpread({}, nextState), {}, {
        inputValue: '',
        navigationOption: undefined,
        options: []
      });
    case ComboboxActionType.BLUR:
    case ComboboxActionType.ESCAPE:
      return _objectSpread(_objectSpread({}, nextState), {}, {
        inputValue: action.inputValue || '',
        navigationOption: undefined
      });
    case ComboboxActionType.SELECT_WITH_CLICK:
      return _objectSpread(_objectSpread({}, nextState), {}, {
        inputValue: '',
        navigationOption: findNavigationValue(nextState, action),
        options: (0, _xorWith["default"])(nextState.options, action.option ? [action.option] : [], function (o1, o2) {
          return o1.value === o2.value;
        })
      });
    case ComboboxActionType.SELECT_SILENT:
      return _objectSpread(_objectSpread({}, nextState), {}, {
        navigationOption: undefined,
        options: action.options || []
      });
    case ComboboxActionType.SELECT_WITH_KEYBOARD:
      return _objectSpread(_objectSpread({}, nextState), {}, {
        inputValue: '',
        navigationOption: findNavigationValue(nextState, action),
        options: (0, _xorWith["default"])(nextState.options, data.navigationOption ? [data.navigationOption] : [], function (o1, o2) {
          return o1.value === o2.value;
        })
      });
    case ComboboxActionType.INTERACT:
      return nextState;
    case ComboboxActionType.FOCUS:
      return _objectSpread(_objectSpread({}, nextState), {}, {
        navigationOption: findNavigationValue(nextState, action)
      });
    default:
      throw new Error("Unknown action ".concat(action.type));
  }
};
exports.reducerMulti = reducerMulti;
function useReducerMachine(reducerFn, initialData, defaultPayload, shouldRenderListInline) {
  var stateChart = getStateChart(shouldRenderListInline);
  var stateRef = (0, _react.useRef)(stateChart.initial);
  var _useReducer = (0, _react.useReducer)(reducerFn, initialData),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    data = _useReducer2[0],
    dispatch = _useReducer2[1];
  function transition(action) {
    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPayload;
    var currentState = stateChart.states[stateRef.current];
    var nextState = currentState.on[action];
    if (!nextState) {
      console.warn("Unknown action \"".concat(action, "\" for state \"").concat(stateRef.current, "\""));
      return;
    }
    stateRef.current = nextState;
    dispatch(_objectSpread({
      state: stateRef.current,
      type: action
    }, payload));
  }
  return [stateRef.current, data, transition];
}
//# sourceMappingURL=state.js.map