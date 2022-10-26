import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import useSWR from 'swr';
import { getErrorResponse } from '../utils';
import { useSDK, useQueryMetadata, DataState } from '.';

const groupFields = fields => {
  if (!fields) return {};
  return fields.reduce((acc, dimension) => {
    const {
      view
    } = dimension;
    if (!view) return acc;

    if (!acc[view]) {
      acc[view] = [];
    }

    acc[view].push(dimension);
    return acc;
  }, {});
};

export const useFieldGroups = id => {
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
  const allModelFields = getModelExplore(model, view);

  const fetcher = async () => {
    if (id > 0 && model && view && isEmpty(allModelFields)) {
      return await sdk.lookml_model_explore(model, view, 'fields');
    }

    return undefined;
  };

  const {
    data: SWRData,
    isValidating
  } = useSWR(`useFieldGroups-${model}-${view}`, fetcher, {
    revalidateOnFocus: false
  });
  useEffect(() => {
    const {
      fields: draftModelFields
    } = (SWRData === null || SWRData === void 0 ? void 0 : SWRData.ok) && SWRData.value || {};

    if (id && model && view && draftModelFields && !isEqual(draftModelFields, allModelFields)) {
      setModelExplore(model, view, draftModelFields);
    }
  }, [id, SWRData, allModelFields, model, setModelExplore, view]);
  const fieldGroups = allModelFields !== null && allModelFields !== void 0 && allModelFields.dimensions ? groupFields(allModelFields === null || allModelFields === void 0 ? void 0 : allModelFields.dimensions) : {};
  return _objectSpread({
    fieldGroups,
    isOK: !!fieldGroups,
    isPending: isValidating
  }, getErrorResponse(SWRData));
};
//# sourceMappingURL=useFieldGroups.js.map