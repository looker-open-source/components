"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataState = void 0;
var _react = require("react");
var _unstatedNext = require("unstated-next");
var _set = _interopRequireDefault(require("lodash/set"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
  return _objectSpread(_objectSpread({}, state.byId), {}, _defineProperty({}, id, _objectSpread(_objectSpread({}, state.byId[id]), queryInfo)));
};
var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'update_by_slug':
      return _objectSpread(_objectSpread({}, state), {}, {
        byId: setById(state, action),
        slugIdMap: _objectSpread(_objectSpread({}, state.slugIdMap), {}, _defineProperty({}, action.payload.slug, action.payload.id))
      });
    case 'update_by_id':
      return _objectSpread(_objectSpread({}, state), {}, {
        byId: setById(state, action)
      });
    case 'update_by_dashboard_id':
      return _objectSpread(_objectSpread({}, state), {}, {
        byId: setById(state, action),
        dashboardIdMap: _objectSpread(_objectSpread({}, state.dashboardIdMap), {}, _defineProperty({}, action.payload.dashboardId, action.payload.id))
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
    _useReducer2 = _slicedToArray(_useReducer, 2),
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