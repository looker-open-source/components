function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { mockSDK } from '@looker/visualizations-adapters';
export const sdkMethodQueryListener = jest.fn();
export const sdkMethodQueryForSlugListener = jest.fn();
export const sdkMethodDashboardListener = jest.fn();
export const sdkMethodRunQueryListener = jest.fn();
export const sdkMethodLookmlModelExploreListener = jest.fn();
export const sdkMethodCreateQueryListener = jest.fn();
export const sdkMethodColorCollectionListener = jest.fn();
export const mockSDKWithListeners = _objectSpread(_objectSpread({}, mockSDK), {}, {
  color_collection: () => mockSDK.color_collection('abcdefghijklmnop').then(result => {
    sdkMethodColorCollectionListener(result);
    return result;
  }),
  create_query: () => mockSDK.create_query({}).then(result => {
    sdkMethodCreateQueryListener(result);
    return result;
  }),
  dashboard: () => mockSDK.dashboard('1').then(result => {
    sdkMethodDashboardListener(result);
    return result;
  }),
  lookml_model_explore: () => mockSDK.lookml_model_explore({
    add_drills_metadata: false,
    explore_name: 'orders',
    lookml_model_name: 'thelook'
  }).then(result => {
    sdkMethodLookmlModelExploreListener(result);
    return result;
  }),
  query: () => mockSDK.query('1').then(result => {
    sdkMethodQueryListener(result);
    return result;
  }),
  query_for_slug: () => mockSDK.query_for_slug('qz123').then(result => {
    sdkMethodQueryForSlugListener(result);
    return result;
  }),
  run_query: () => mockSDK.run_query({
    query_id: '1',
    result_format: 'json_detail'
  }).then(result => {
    sdkMethodRunQueryListener(result);
    return result;
  })
});
//# sourceMappingURL=mockSDKWithListeners.js.map