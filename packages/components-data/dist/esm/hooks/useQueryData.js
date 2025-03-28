function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { useEffect } from 'react';
import { useNormalizedPivotLabels, buildPivotFields, tabularPivotResponse, tabularResponse, formatTotals } from '@looker/visualizations-adapters';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import useSWR from 'swr';
import { getErrorResponse } from '../utils';
import { useSDK } from './useSDK';
import { DataState } from './useDataState';
export const useQueryData = (id, agentTag) => {
  const sdk = useSDK();
  const {
    getById,
    setById
  } = DataState.useContainer();
  const data = getById(id, 'data');
  const fields = getById(id, 'fields');
  const pivots = getById(id, 'pivots');
  const totals = getById(id, 'totals');
  const fetcher = async () => {
    if (id && isEmpty(data)) {
      return await sdk.run_query({
        query_id: String(id),
        result_format: `json_detail`
      }, {
        agentTag
      });
    }
    return undefined;
  };
  const {
    data: SWRData,
    isValidating
  } = useSWR(`useQueryData-${id}`, fetcher, {
    revalidateOnFocus: false
  });
  useEffect(() => {
    const {
      data: rawData,
      fields: rawFields,
      pivots: rawPivots,
      totals_data: rawTotals
    } = SWRData !== null && SWRData !== void 0 && SWRData.ok ? SWRData.value : {};
    if (id && !isEmpty(rawData) && !isEqual(rawData, data)) {
      setById(id, _objectSpread(_objectSpread(_objectSpread({
        data: rawData
      }, rawFields ? {
        fields: rawFields
      } : {}), rawPivots ? {
        pivots: rawPivots
      } : {}), rawTotals ? {
        totals: rawTotals
      } : {}));
    }
  }, [id, SWRData, setById, data]);
  const normalizedPivots = useNormalizedPivotLabels(pivots);
  const normalizedFields = normalizedPivots && fields ? buildPivotFields({
    fields,
    pivots: normalizedPivots
  }) : fields;
  const normalizedData = pivots && data && fields ? tabularPivotResponse({
    data,
    fields,
    pivots
  }) : tabularResponse(data || []);
  const normalizedTotals = totals ? formatTotals(totals) : undefined;
  return _objectSpread({
    data: normalizedData,
    fields: normalizedFields,
    isOK: !!data,
    isPending: isValidating,
    pivots,
    totals: normalizedTotals
  }, getErrorResponse(SWRData));
};
//# sourceMappingURL=useQueryData.js.map