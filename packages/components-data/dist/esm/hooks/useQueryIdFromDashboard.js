const _excluded = ["id"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import { useEffect } from 'react';
import useSWR from 'swr';
import { getErrorResponse } from '../utils';
import { DataState } from './useDataState';
import { useSDK } from './useSDK';
export const useQueryIdFromDashboard = dashboardId => {
  const sdk = useSDK();
  const {
    getIdFromDashboard,
    setByDashboardId
  } = DataState.useContainer();
  const queryId = getIdFromDashboard(dashboardId);
  const fetcher = async () => {
    if (dashboardId && !queryId) {
      return await sdk.dashboard(String(dashboardId), 'dashboard_elements');
    }
    return undefined;
  };
  const {
    data: SWRData,
    isValidating
  } = useSWR(`useQueryIdFromDashboard-${dashboardId}`, fetcher, {
    revalidateOnFocus: false
  });
  useEffect(() => {
    var _SWRData$value;
    const firstTile = SWRData !== null && SWRData !== void 0 && SWRData.ok ? SWRData === null || SWRData === void 0 || (_SWRData$value = SWRData.value) === null || _SWRData$value === void 0 || (_SWRData$value = _SWRData$value.dashboard_elements) === null || _SWRData$value === void 0 || (_SWRData$value = _SWRData$value[0]) === null || _SWRData$value === void 0 ? void 0 : _SWRData$value.query : undefined;
    const _ref = firstTile || {},
      {
        id
      } = _ref,
      query = _objectWithoutProperties(_ref, _excluded);
    if (dashboardId && id && id !== queryId) {
      setByDashboardId(dashboardId, id, {
        metadata: query
      });
    }
  }, [SWRData, dashboardId, setByDashboardId, queryId]);
  return _objectSpread({
    isOK: !!queryId || typeof dashboardId === 'undefined',
    isPending: isValidating,
    queryId
  }, getErrorResponse(SWRData));
};
//# sourceMappingURL=useQueryIdFromDashboard.js.map