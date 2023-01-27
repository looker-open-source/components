import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["id"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { useEffect } from 'react';
import useSWR from 'swr';
import { getErrorResponse, isSuccessResponse } from '../utils';
import { useSDK } from './useSDK';
import { DataState } from './useDataState';

export const useCreateQuery = newQuery => {
  const sdk = useSDK();
  const {
    setById
  } = DataState.useContainer();
  const fetcher = async () => {
    if (newQuery) {
      return await sdk.create_query(newQuery);
    }
    return undefined;
  };
  const {
    data: SWRData,
    isValidating
  } = useSWR(JSON.stringify(newQuery), fetcher, {
    revalidateOnFocus: false
  });
  const _ref = (SWRData === null || SWRData === void 0 ? void 0 : SWRData.value) || {},
    {
      id: draftId
    } = _ref,
    draftMetadata = _objectWithoutProperties(_ref, _excluded);
  useEffect(() => {
    setById(Number(draftId), {
      metadata: draftMetadata
    });
  }, [draftId]);
  return _objectSpread({
    isOK: isSuccessResponse(SWRData) || typeof newQuery === 'undefined',
    isPending: isValidating,
    queryId: draftId ? Number(draftId) : undefined
  }, getErrorResponse(SWRData));
};
//# sourceMappingURL=useCreateQuery.js.map