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
    if (draftId) {
      setById(draftId, {
        metadata: draftMetadata
      });
    }
  }, [draftId]);
  return _objectSpread({
    isOK: isSuccessResponse(SWRData) || typeof newQuery === 'undefined',
    isPending: isValidating,
    queryId: draftId || undefined
  }, getErrorResponse(SWRData));
};
//# sourceMappingURL=useCreateQuery.js.map