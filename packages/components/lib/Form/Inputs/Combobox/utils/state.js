import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import xorWith from 'lodash/xorWith';
import { useReducer, useRef } from 'react';
import { getComboboxText } from './getComboboxText';
import { parseOption } from './parseOption';
var ComboboxState;

(function (ComboboxState) {
  ComboboxState["IDLE"] = "IDLE";
  ComboboxState["SUGGESTING"] = "SUGGESTING";
  ComboboxState["NAVIGATING"] = "NAVIGATING";
  ComboboxState["INTERACTING"] = "INTERACTING";
})(ComboboxState || (ComboboxState = {}));

var ComboboxActionType;

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
})(ComboboxActionType || (ComboboxActionType = {}));

export { ComboboxActionType, ComboboxState };
export const stateChart = {
  initial: ComboboxState.IDLE,
  states: {
    [ComboboxState.IDLE]: {
      on: {
        [ComboboxActionType.BLUR]: ComboboxState.IDLE,
        [ComboboxActionType.CLEAR]: ComboboxState.IDLE,
        [ComboboxActionType.CHANGE]: ComboboxState.SUGGESTING,
        [ComboboxActionType.CHANGE_SILENT]: ComboboxState.IDLE,
        [ComboboxActionType.CHANGE_VALUES]: ComboboxState.IDLE,
        [ComboboxActionType.FOCUS]: ComboboxState.SUGGESTING,
        [ComboboxActionType.NAVIGATE]: ComboboxState.NAVIGATING,
        [ComboboxActionType.SELECT_SILENT]: ComboboxState.IDLE
      }
    },
    [ComboboxState.SUGGESTING]: {
      on: {
        [ComboboxActionType.CHANGE]: ComboboxState.SUGGESTING,
        [ComboboxActionType.CHANGE_SILENT]: ComboboxState.SUGGESTING,
        [ComboboxActionType.CHANGE_VALUES]: ComboboxState.SUGGESTING,
        [ComboboxActionType.FOCUS]: ComboboxState.SUGGESTING,
        [ComboboxActionType.NAVIGATE]: ComboboxState.NAVIGATING,
        [ComboboxActionType.CLEAR]: ComboboxState.IDLE,
        [ComboboxActionType.ESCAPE]: ComboboxState.IDLE,
        [ComboboxActionType.BLUR]: ComboboxState.IDLE,
        [ComboboxActionType.SELECT_WITH_CLICK]: ComboboxState.SUGGESTING,
        [ComboboxActionType.SELECT_SILENT]: ComboboxState.SUGGESTING,
        [ComboboxActionType.INTERACT]: ComboboxState.INTERACTING
      }
    },
    [ComboboxState.NAVIGATING]: {
      on: {
        [ComboboxActionType.CHANGE]: ComboboxState.SUGGESTING,
        [ComboboxActionType.CHANGE_SILENT]: ComboboxState.NAVIGATING,
        [ComboboxActionType.CHANGE_VALUES]: ComboboxState.NAVIGATING,
        [ComboboxActionType.FOCUS]: ComboboxState.SUGGESTING,
        [ComboboxActionType.CLEAR]: ComboboxState.IDLE,
        [ComboboxActionType.BLUR]: ComboboxState.IDLE,
        [ComboboxActionType.ESCAPE]: ComboboxState.IDLE,
        [ComboboxActionType.NAVIGATE]: ComboboxState.NAVIGATING,
        [ComboboxActionType.SELECT_WITH_CLICK]: ComboboxState.NAVIGATING,
        [ComboboxActionType.SELECT_WITH_KEYBOARD]: ComboboxState.NAVIGATING,
        [ComboboxActionType.SELECT_SILENT]: ComboboxState.NAVIGATING,
        [ComboboxActionType.INTERACT]: ComboboxState.INTERACTING
      }
    },
    [ComboboxState.INTERACTING]: {
      on: {
        [ComboboxActionType.CHANGE]: ComboboxState.SUGGESTING,
        [ComboboxActionType.CHANGE_SILENT]: ComboboxState.SUGGESTING,
        [ComboboxActionType.CHANGE_VALUES]: ComboboxState.INTERACTING,
        [ComboboxActionType.FOCUS]: ComboboxState.SUGGESTING,
        [ComboboxActionType.BLUR]: ComboboxState.IDLE,
        [ComboboxActionType.ESCAPE]: ComboboxState.IDLE,
        [ComboboxActionType.NAVIGATE]: ComboboxState.NAVIGATING,
        [ComboboxActionType.SELECT_WITH_CLICK]: ComboboxState.INTERACTING,
        [ComboboxActionType.SELECT_SILENT]: ComboboxState.INTERACTING
      }
    }
  }
};

const findNavigationValue = (state, action) => {
  if (action.option) {
    return action.option;
  } else if (action.persistSelection) {
    const singularState = state;
    const multiState = state;

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

export const reducer = (data, action) => {
  const nextState = _objectSpread({}, data);

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
        inputValue: action.inputValue || getComboboxText(data.option),
        navigationOption: undefined
      });

    case ComboboxActionType.SELECT_WITH_CLICK:
    case ComboboxActionType.SELECT_SILENT:
      return _objectSpread(_objectSpread({}, nextState), {}, {
        inputValue: getComboboxText(action.option),
        navigationOption: undefined,
        option: action.option
      });

    case ComboboxActionType.SELECT_WITH_KEYBOARD:
      return _objectSpread(_objectSpread({}, nextState), {}, {
        inputValue: getComboboxText(data.navigationOption),
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
      throw new Error(`Unknown action ${action.type}`);
  }
};
export function getOptionsFromValues(currentOptions, newValues) {
  if (!newValues) return [];
  return newValues.reduce((acc, value) => {
    const valueAsOption = parseOption(value);
    const matchingOption = currentOptions.find(option => option.value === valueAsOption.value);
    const duplicateOption = acc.find(option => option.value === valueAsOption.value);

    if (!duplicateOption) {
      if (matchingOption) {
        return [...acc, matchingOption];
      } else {
        return [...acc, valueAsOption];
      }
    }

    return acc;
  }, []);
}
export const reducerMulti = (data, action) => {
  const nextState = _objectSpread({}, data);

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
        options: xorWith(nextState.options, action.option ? [action.option] : [], (o1, o2) => o1.value === o2.value)
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
        options: xorWith(nextState.options, data.navigationOption ? [data.navigationOption] : [], (o1, o2) => o1.value === o2.value)
      });

    case ComboboxActionType.INTERACT:
      return nextState;

    case ComboboxActionType.FOCUS:
      return _objectSpread(_objectSpread({}, nextState), {}, {
        navigationOption: findNavigationValue(nextState, action)
      });

    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};
export function useReducerMachine(reducerFn, initialData, defaultPayload) {
  const stateRef = useRef(stateChart.initial);
  const [data, dispatch] = useReducer(reducerFn, initialData);

  function transition(action, payload = defaultPayload) {
    const currentState = stateChart.states[stateRef.current];
    const nextState = currentState.on[action];

    if (!nextState) {
      console.warn(`Unknown action "${action}" for state "${stateRef.current}"`);
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