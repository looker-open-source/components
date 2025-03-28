function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
    if (id && (isEmpty(metadata.vis_config) || !metadata.model || !metadata.view)) {
      return await sdk.query(String(id));
    }
    return undefined;
  };
  const {
    data: SWRData,
    isValidating
  } = useSWR(`useQueryMetadata-${id}`, fetcher, {
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