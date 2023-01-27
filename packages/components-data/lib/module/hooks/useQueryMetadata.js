import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { useEffect, useMemo } from 'react';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import useSWR from 'swr';
import { getErrorResponse, isSuccessResponse } from '../utils';
import { useSDK } from './useSDK';
import { DataState } from './useDataState';

export const useQueryMetadata = id => {
  const sdk = useSDK();
  const {
    getById,
    setById
  } = DataState.useContainer();

  const metadata = useMemo(() => getById(id, 'metadata') || {}, [id, getById]);

  const fetcher = async () => {
    if (id > 0 && (isEmpty(metadata.vis_config) || !metadata.model || !metadata.view)) {
      return await sdk.query(String(id));
    }
    return undefined;
  };
  const {
    data: SWRData,
    isValidating
  } = useSWR(`useQueryMetadata-${id}`,
  fetcher, {
    revalidateOnFocus: false
  });

  useEffect(() => {
    const SWRValue = isSuccessResponse(SWRData) ? SWRData.value : {};
    const {
      vis_config: draftConfig,
      model: draftModel,
      view: draftView
    } = SWRValue;
    if (id && (!isEmpty(draftConfig) && !isEqual(metadata.vis_config, draftConfig) || draftModel && draftModel !== metadata.model || draftView && draftView !== metadata.view)) {
      const draftQuery = _objectSpread(_objectSpread({}, metadata), SWRValue);
      setById(id, {
        metadata: draftQuery
      });
    }
  }, [id, SWRData, metadata, setById]);
  return _objectSpread({
    isOK: !!metadata,
    isPending: isValidating,
    metadata
  }, getErrorResponse(SWRData));
};
//# sourceMappingURL=useQueryMetadata.js.map