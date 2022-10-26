import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { createContext, useCallback, useReducer } from 'react';

const getFilterMap = (filterMap, payload) => {
  const {
    filter,
    expression
  } = payload;

  if (expression) {
    const newKeyValue = filter.title ? {
      [filter.title]: payload
    } : {};
    return _objectSpread(_objectSpread({}, filterMap), newKeyValue);
  }

  if (filter.title) {
    const _filter$title = filter.title,
          {
      [_filter$title]: filterToRemove
    } = filterMap,
          rest = _objectWithoutProperties(filterMap, [_filter$title].map(_toPropertyKey));

    return rest;
  }

  return filterMap;
};

const reducer = (state, action) => {
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

const noop = () => {};

const initialState = {
  filterMap: {}
};
const initialContext = {
  removeFilter: noop,
  state: initialState,
  updateExpression: noop
};
export const FilterContext = createContext(initialContext);
export const FilterCollection = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateExpression = useCallback((filter, expression) => {
    dispatch({
      type: 'UPDATE_EXPRESSION',
      payload: {
        filter,
        expression
      }
    });
  }, []);
  const removeFilter = useCallback(filter => {
    dispatch({
      type: 'REMOVE_FILTER',
      payload: {
        filter
      }
    });
  }, []);
  return React.createElement(FilterContext.Provider, {
    value: {
      removeFilter,
      state,
      updateExpression
    }
  }, children);
};
//# sourceMappingURL=FilterCollection.js.map