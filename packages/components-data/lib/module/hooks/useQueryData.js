import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
    if (id > 0 && isEmpty(data)) {
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
  } = useSWR(`useQueryData-${id}`,
  fetcher, {
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