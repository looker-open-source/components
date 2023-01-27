import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
  lookml_model_explore: () => mockSDK.lookml_model_explore('thelook', 'orders').then(result => {
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