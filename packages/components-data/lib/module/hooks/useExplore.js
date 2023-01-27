import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
    if (id > 0 && model && view && isEmpty(explore)) {
      return await sdk.lookml_model_explore(model, view);
    }
    return undefined;
  };
  const {
    data: SWRData,
    isValidating
  } = useSWR(`useExplore-${model}-${view}`,
  fetcher, {
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