"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataState = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = require("react");
var _unstatedNext = require("unstated-next");
var _set = _interopRequireDefault(require("lodash/set"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var setModelExplore = function setModelExplore(state, action) {
  var _action$payload = action.payload,
    model = _action$payload.model,
    view = _action$payload.view,
    explore = _action$payload.explore;
  var draftModelExplore = _objectSpread({}, state.modelExplore);
  (0, _set["default"])(draftModelExplore, [model, view], explore);
  return draftModelExplore;
};
var setById = function setById(state, action) {
  var _action$payload2 = action.payload,
    id = _action$payload2.id,
    queryInfo = _action$payload2.queryInfo;
  return _objectSpread(_objectSpread({}, state.byId), {}, (0, _defineProperty2["default"])({}, id, _objectSpread(_objectSpread({}, state.byId[id]), queryInfo)));
};
var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'update_by_slug':
      return _objectSpread(_objectSpread({}, state), {}, {
        byId: setById(state, action),
        slugIdMap: _objectSpread(_objectSpread({}, state.slugIdMap), {}, (0, _defineProperty2["default"])({}, action.payload.slug, action.payload.id))
      });
    case 'update_by_id':
      return _objectSpread(_objectSpread({}, state), {}, {
        byId: setById(state, action)
      });
    case 'update_by_dashboard_id':
      return _objectSpread(_objectSpread({}, state), {}, {
        byId: setById(state, action),
        dashboardIdMap: _objectSpread(_objectSpread({}, state.dashboardIdMap), {}, (0, _defineProperty2["default"])({}, action.payload.dashboardId, action.payload.id))
      });
    case 'update_model_view':
      return _objectSpread(_objectSpread({}, state), {}, {
        modelExplore: setModelExplore(state, action)
      });
    default:
      return state;
  }
};
var defaultInitialState = {
  byId: {},
  dashboardIdMap: {},
  modelExplore: {},
  slugIdMap: {}
};

var useDataState = function useDataState() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultInitialState;
  var _useReducer = (0, _react.useReducer)(reducer, initialState),
    _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
    _useReducer2$ = _useReducer2[0],
    dashboardIdMap = _useReducer2$.dashboardIdMap,
    slugIdMap = _useReducer2$.slugIdMap,
    byId = _useReducer2$.byId,
    modelExplore = _useReducer2$.modelExplore,
    dispatch = _useReducer2[1];
  var getIdFromDashboard = function getIdFromDashboard(dashboardId) {
    return dashboardId && dashboardIdMap[dashboardId];
  };
  var getIdFromSlug = function getIdFromSlug(slug) {
    return slugIdMap[slug];
  };
  var getById = function getById(id, key) {
    var _byId$id;
    return (_byId$id = byId[id]) === null || _byId$id === void 0 ? void 0 : _byId$id[key];
  };
  var setById = function setById(id, queryInfo) {
    return dispatch({
      payload: {
        id: id,
        queryInfo: queryInfo
      },
      type: 'update_by_id'
    });
  };
  var setBySlug = function setBySlug(slug, id, queryInfo) {
    return dispatch({
      payload: {
        id: id,
        queryInfo: queryInfo,
        slug: slug
      },
      type: 'update_by_slug'
    });
  };
  var setByDashboardId = function setByDashboardId(dashboardId, queryId, queryInfo) {
    dispatch({
      payload: {
        dashboardId: dashboardId,
        id: queryId,
        queryInfo: queryInfo
      },
      type: 'update_by_dashboard_id'
    });
  };
  var setModelExplore = function setModelExplore(model, view, explore) {
    return dispatch({
      payload: {
        explore: explore,
        model: model,
        view: view
      },
      type: 'update_model_view'
    });
  };
  var getModelExplore = function getModelExplore(model, view) {
    var _modelExplore$model;
    return model && view ? (_modelExplore$model = modelExplore[model]) === null || _modelExplore$model === void 0 ? void 0 : _modelExplore$model[view] : undefined;
  };
  return {
    getById: getById,
    getIdFromDashboard: getIdFromDashboard,
    getIdFromSlug: getIdFromSlug,
    getModelExplore: getModelExplore,
    setByDashboardId: setByDashboardId,
    setById: setById,
    setBySlug: setBySlug,
    setModelExplore: setModelExplore
  };
};
var DataState = (0, _unstatedNext.createContainer)(useDataState);
exports.DataState = DataState;
//# sourceMappingURL=useDataState.js.map