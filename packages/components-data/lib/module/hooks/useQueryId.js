import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["id"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { useEffect, useMemo } from 'react';
import { isNumeric } from '@looker/visualizations-adapters';
import useSWR from 'swr';
import { getErrorResponse } from '../utils';
import { useSDK } from './useSDK';
import { DataState } from './useDataState';

export const useQueryId = (slugOrId = '') => {
  const sdk = useSDK();
  const {
    getIdFromSlug,
    setBySlug,
    getById
  } = DataState.useContainer();

  const querySlug = slugOrId.toString();
  const queryId = getIdFromSlug(querySlug);
  const cachedQuery = useMemo(() => getById(queryId, 'metadata') || {}, [getById, queryId]);

  const fetcher = async () => {
    if (isNumeric(querySlug)) {
      return Promise.resolve({
        ok: true,
        value: {
          id: querySlug
        }
      });
    } else if (querySlug && !queryId) {
      return await sdk.query_for_slug(querySlug);
    }
    return undefined;
  };
  const {
    data: SWRData,
    isValidating
  } = useSWR(`useQueryId-${querySlug}`,
  fetcher, {
    revalidateOnFocus: false
  });

  useEffect(() => {
    const _ref = SWRData !== null && SWRData !== void 0 && SWRData.ok ? SWRData.value : {},
      {
        id
      } = _ref,
      SWRValue = _objectWithoutProperties(_ref, _excluded);
    const draftQuery = _objectSpread(_objectSpread({}, cachedQuery), SWRValue);
    if (id && Number(id) !== queryId) {
      setBySlug(querySlug, Number(id), {
        metadata: draftQuery
      });
    }
  }, [SWRData, queryId, querySlug, setBySlug, cachedQuery]);
  return _objectSpread({
    isOK: !!queryId,
    isPending: isValidating,
    queryId
  }, getErrorResponse(SWRData));
};
//# sourceMappingURL=useQueryId.js.map