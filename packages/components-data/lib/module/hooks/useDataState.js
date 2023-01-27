import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { useReducer } from 'react';
import { createContainer } from 'unstated-next';
import set from 'lodash/set';
const setModelExplore = (state, action) => {
  const {
    model,
    view,
    explore
  } = action.payload;
  const draftModelExplore = _objectSpread({}, state.modelExplore);
  set(draftModelExplore, [model, view], explore);
  return draftModelExplore;
};
const setById = (state, action) => {
  const {
    payload: {
      id,
      queryInfo
    }
  } = action;
  return _objectSpread(_objectSpread({}, state.byId), {}, {
    [id]: _objectSpread(_objectSpread({}, state.byId[id]), queryInfo)
  });
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'update_by_slug':
      return _objectSpread(_objectSpread({}, state), {}, {
        byId: setById(state, action),
        slugIdMap: _objectSpread(_objectSpread({}, state.slugIdMap), {}, {
          [action.payload.slug]: action.payload.id
        })
      });
    case 'update_by_id':
      return _objectSpread(_objectSpread({}, state), {}, {
        byId: setById(state, action)
      });
    case 'update_by_dashboard_id':
      return _objectSpread(_objectSpread({}, state), {}, {
        byId: setById(state, action),
        dashboardIdMap: _objectSpread(_objectSpread({}, state.dashboardIdMap), {}, {
          [action.payload.dashboardId]: action.payload.id
        })
      });
    case 'update_model_view':
      return _objectSpread(_objectSpread({}, state), {}, {
        modelExplore: setModelExplore(state, action)
      });
    default:
      return state;
  }
};
const defaultInitialState = {
  byId: {},
  dashboardIdMap: {},
  modelExplore: {},
  slugIdMap: {}
};

const useDataState = (initialState = defaultInitialState) => {
  const [{
    dashboardIdMap,
    slugIdMap,
    byId,
    modelExplore
  }, dispatch] = useReducer(reducer, initialState);
  const getIdFromDashboard = dashboardId => dashboardId && dashboardIdMap[dashboardId];
  const getIdFromSlug = slug => slugIdMap[slug];
  const getById = (id, key) => {
    var _byId$id;
    return (_byId$id = byId[id]) === null || _byId$id === void 0 ? void 0 : _byId$id[key];
  };
  const setById = (id, queryInfo) => dispatch({
    payload: {
      id,
      queryInfo
    },
    type: 'update_by_id'
  });
  const setBySlug = (slug, id, queryInfo) => dispatch({
    payload: {
      id,
      queryInfo,
      slug
    },
    type: 'update_by_slug'
  });
  const setByDashboardId = (dashboardId, queryId, queryInfo) => {
    dispatch({
      payload: {
        dashboardId,
        id: queryId,
        queryInfo
      },
      type: 'update_by_dashboard_id'
    });
  };
  const setModelExplore = (model, view, explore) => dispatch({
    payload: {
      explore,
      model,
      view
    },
    type: 'update_model_view'
  });
  const getModelExplore = (model, view) => {
    var _modelExplore$model;
    return model && view ? (_modelExplore$model = modelExplore[model]) === null || _modelExplore$model === void 0 ? void 0 : _modelExplore$model[view] : undefined;
  };
  return {
    getById,
    getIdFromDashboard,
    getIdFromSlug,
    getModelExplore,
    setByDashboardId,
    setById,
    setBySlug,
    setModelExplore
  };
};
export const DataState = createContainer(useDataState);
//# sourceMappingURL=useDataState.js.map