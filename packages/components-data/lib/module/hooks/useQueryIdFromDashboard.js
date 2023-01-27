import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["id"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
  } = useSWR(`useQueryIdFromDashboard-${dashboardId}`,
  fetcher, {
    revalidateOnFocus: false
  });

  useEffect(() => {
    var _SWRData$value, _SWRData$value$dashbo, _SWRData$value$dashbo2;
    const firstTile = SWRData !== null && SWRData !== void 0 && SWRData.ok ? SWRData === null || SWRData === void 0 ? void 0 : (_SWRData$value = SWRData.value) === null || _SWRData$value === void 0 ? void 0 : (_SWRData$value$dashbo = _SWRData$value.dashboard_elements) === null || _SWRData$value$dashbo === void 0 ? void 0 : (_SWRData$value$dashbo2 = _SWRData$value$dashbo[0]) === null || _SWRData$value$dashbo2 === void 0 ? void 0 : _SWRData$value$dashbo2.query : undefined;
    const _ref = firstTile || {},
      {
        id
      } = _ref,
      query = _objectWithoutProperties(_ref, _excluded);
    if (dashboardId && id && Number(id) !== queryId) {
      setByDashboardId(dashboardId, Number(id), {
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