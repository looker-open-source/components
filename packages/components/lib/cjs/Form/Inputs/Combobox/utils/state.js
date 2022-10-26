"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComboboxState = exports.ComboboxActionType = void 0;
exports.getOptionsFromValues = getOptionsFromValues;
exports.stateChart = exports.reducerMulti = exports.reducer = void 0;
exports.useReducerMachine = useReducerMachine;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _xorWith = _interopRequireDefault(require("lodash/xorWith"));

var _react = require("react");

var _getComboboxText = require("./getComboboxText");

var _parseOption = require("./parseOption");

var _on, _on2, _on3, _on4, _states;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var ComboboxState;
exports.ComboboxState = ComboboxState;

(function (ComboboxState) {
  ComboboxState["IDLE"] = "IDLE";
  ComboboxState["SUGGESTING"] = "SUGGESTING";
  ComboboxState["NAVIGATING"] = "NAVIGATING";
  ComboboxState["INTERACTING"] = "INTERACTING";
})(ComboboxState || (exports.ComboboxState = ComboboxState = {}));

var ComboboxActionType;
exports.ComboboxActionType = ComboboxActionType;

(function (ComboboxActionType) {
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
})(ComboboxActionType || (exports.ComboboxActionType = ComboboxActionType = {}));

var stateChart = {
  initial: ComboboxState.IDLE,
  states: (_states = {}, (0, _defineProperty2["default"])(_states, ComboboxState.IDLE, {
    on: (_on = {}, (0, _defineProperty2["default"])(_on, ComboboxActionType.BLUR, ComboboxState.IDLE), (0, _defineProperty2["default"])(_on, ComboboxActionType.CLEAR, ComboboxState.IDLE), (0, _defineProperty2["default"])(_on, ComboboxActionType.CHANGE, ComboboxState.SUGGESTING), (0, _defineProperty2["default"])(_on, ComboboxActionType.CHANGE_SILENT, ComboboxState.IDLE), (0, _defineProperty2["default"])(_on, ComboboxActionType.CHANGE_VALUES, ComboboxState.IDLE), (0, _defineProperty2["default"])(_on, ComboboxActionType.FOCUS, ComboboxState.SUGGESTING), (0, _defineProperty2["default"])(_on, ComboboxActionType.NAVIGATE, ComboboxState.NAVIGATING), (0, _defineProperty2["default"])(_on, ComboboxActionType.SELECT_SILENT, ComboboxState.IDLE), _on)
  }), (0, _defineProperty2["default"])(_states, ComboboxState.SUGGESTING, {
    on: (_on2 = {}, (0, _defineProperty2["default"])(_on2, ComboboxActionType.CHANGE, ComboboxState.SUGGESTING), (0, _defineProperty2["default"])(_on2, ComboboxActionType.CHANGE_SILENT, ComboboxState.SUGGESTING), (0, _defineProperty2["default"])(_on2, ComboboxActionType.CHANGE_VALUES, ComboboxState.SUGGESTING), (0, _defineProperty2["default"])(_on2, ComboboxActionType.FOCUS, ComboboxState.SUGGESTING), (0, _defineProperty2["default"])(_on2, ComboboxActionType.NAVIGATE, ComboboxState.NAVIGATING), (0, _defineProperty2["default"])(_on2, ComboboxActionType.CLEAR, ComboboxState.IDLE), (0, _defineProperty2["default"])(_on2, ComboboxActionType.ESCAPE, ComboboxState.IDLE), (0, _defineProperty2["default"])(_on2, ComboboxActionType.BLUR, ComboboxState.IDLE), (0, _defineProperty2["default"])(_on2, ComboboxActionType.SELECT_WITH_CLICK, ComboboxState.SUGGESTING), (0, _defineProperty2["default"])(_on2, ComboboxActionType.SELECT_SILENT, ComboboxState.SUGGESTING), (0, _defineProperty2["default"])(_on2, ComboboxActionType.INTERACT, ComboboxState.INTERACTING), _on2)
  }), (0, _defineProperty2["default"])(_states, ComboboxState.NAVIGATING, {
    on: (_on3 = {}, (0, _defineProperty2["default"])(_on3, ComboboxActionType.CHANGE, ComboboxState.SUGGESTING), (0, _defineProperty2["default"])(_on3, ComboboxActionType.CHANGE_SILENT, ComboboxState.NAVIGATING), (0, _defineProperty2["default"])(_on3, ComboboxActionType.CHANGE_VALUES, ComboboxState.NAVIGATING), (0, _defineProperty2["default"])(_on3, ComboboxActionType.FOCUS, ComboboxState.SUGGESTING), (0, _defineProperty2["default"])(_on3, ComboboxActionType.CLEAR, ComboboxState.IDLE), (0, _defineProperty2["default"])(_on3, ComboboxActionType.BLUR, ComboboxState.IDLE), (0, _defineProperty2["default"])(_on3, ComboboxActionType.ESCAPE, ComboboxState.IDLE), (0, _defineProperty2["default"])(_on3, ComboboxActionType.NAVIGATE, ComboboxState.NAVIGATING), (0, _defineProperty2["default"])(_on3, ComboboxActionType.SELECT_WITH_CLICK, ComboboxState.NAVIGATING), (0, _defineProperty2["default"])(_on3, ComboboxActionType.SELECT_WITH_KEYBOARD, ComboboxState.NAVIGATING), (0, _defineProperty2["default"])(_on3, ComboboxActionType.SELECT_SILENT, ComboboxState.NAVIGATING), (0, _defineProperty2["default"])(_on3, ComboboxActionType.INTERACT, ComboboxState.INTERACTING), _on3)
  }), (0, _defineProperty2["default"])(_states, ComboboxState.INTERACTING, {
    on: (_on4 = {}, (0, _defineProperty2["default"])(_on4, ComboboxActionType.CHANGE, ComboboxState.SUGGESTING), (0, _defineProperty2["default"])(_on4, ComboboxActionType.CHANGE_SILENT, ComboboxState.SUGGESTING), (0, _defineProperty2["default"])(_on4, ComboboxActionType.CHANGE_VALUES, ComboboxState.INTERACTING), (0, _defineProperty2["default"])(_on4, ComboboxActionType.FOCUS, ComboboxState.SUGGESTING), (0, _defineProperty2["default"])(_on4, ComboboxActionType.BLUR, ComboboxState.IDLE), (0, _defineProperty2["default"])(_on4, ComboboxActionType.ESCAPE, ComboboxState.IDLE), (0, _defineProperty2["default"])(_on4, ComboboxActionType.NAVIGATE, ComboboxState.NAVIGATING), (0, _defineProperty2["default"])(_on4, ComboboxActionType.SELECT_WITH_CLICK, ComboboxState.INTERACTING), (0, _defineProperty2["default"])(_on4, ComboboxActionType.SELECT_SILENT, ComboboxState.INTERACTING), _on4)
  }), _states)
};
exports.stateChart = stateChart;

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
        return [].concat((0, _toConsumableArray2["default"])(acc), [matchingOption]);
      } else {
        return [].concat((0, _toConsumableArray2["default"])(acc), [valueAsOption]);
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

function useReducerMachine(reducerFn, initialData, defaultPayload) {
  var stateRef = (0, _react.useRef)(stateChart.initial);

  var _useReducer = (0, _react.useReducer)(reducerFn, initialData),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
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