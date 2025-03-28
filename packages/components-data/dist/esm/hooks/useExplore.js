function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import useSWR from 'swr';
import { getErrorResponse } from '../utils';
import { useSDK, useQueryMetadata, DataState } from '.';
export const useExplore = id => {
  const sdk = useSDK();
  const {
    setModelExplore,
    getModelExplore
  } = DataState.useContainer();
  const {
    metadata: {
      model,
      view
    }
  } = useQueryMetadata(id);
  const explore = getModelExplore(model, view);
  const fetcher = async () => {
    if (id && model && view && isEmpty(explore)) {
      const request = {
        add_drills_metadata: false,
        explore_name: view,
        lookml_model_name: model
      };
      return await sdk.lookml_model_explore(request);
    }
    return undefined;
  };
  const {
    data: SWRData,
    isValidating
  } = useSWR(`useExplore-${model}-${view}`, fetcher, {
    revalidateOnFocus: false
  });
  useEffect(() => {
    const draftExplore = (SWRData === null || SWRData === void 0 ? void 0 : SWRData.ok) && SWRData.value || {};
    if (id && model && view && !isEmpty(draftExplore) && !isEqual(draftExplore, explore)) {
      setModelExplore(model, view, draftExplore);
    }
  }, [id, SWRData, explore, model, setModelExplore, view]);
  return _objectSpread({
    explore,
    isOK: !!explore,
    isPending: isValidating
  }, getErrorResponse(SWRData));
};
//# sourceMappingURL=useExplore.js.map