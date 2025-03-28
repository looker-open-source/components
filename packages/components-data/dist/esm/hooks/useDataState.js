function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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