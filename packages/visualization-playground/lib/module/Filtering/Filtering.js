import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["client_id"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState, useEffect, useCallback } from 'react';
import { useQueryId, useQueryIdFromDashboard, useQueryMetadata, useCreateQuery } from '@looker/components-data';
import { Button, Fieldset } from '@looker/components';
import { ActiveFilters } from '../ActiveFilters';
const createQueryRequest = (_ref, newFilters) => {
  let {
      client_id
    } = _ref,
    query = _objectWithoutProperties(_ref, _excluded);
  const result = _objectSpread(_objectSpread({}, query), {}, {
    filters: newFilters
  });
  return result;
};
export const Filtering = ({
  query,
  dashboard,
  setQueryIdentifier,
  setFetchBy
}) => {
  const [draftQueryMetadata, setDraftQueryMetadata] = useState();
  const {
    queryId: dashboardQueryId
  } = useQueryIdFromDashboard(dashboard);
  const {
    queryId
  } = useQueryId(query || dashboardQueryId);
  const {
    metadata,
    metadata: {
      filters: currentFilters = {}
    }
  } = useQueryMetadata(queryId);
  const [draftFilters, setDraftFilters] = useState(currentFilters);
  const [isFieldsetOpen, setIsFieldsetOpen] = useState(false);

  const {
    queryId: draftQueryId
  } = useCreateQuery(draftQueryMetadata);
  const handleFilterSubmit = e => {
    e.preventDefault();
    const newQuery = createQueryRequest(metadata, draftFilters);
    setDraftQueryMetadata(newQuery);
  };

  const draftFilterJSONString = JSON.stringify(draftFilters);
  const handleRemoveFilter = useCallback(name => {
    const draftFiltersCopy = JSON.parse(draftFilterJSONString);
    delete draftFiltersCopy[name];
    setDraftFilters(draftFiltersCopy);
  }, [draftFilterJSONString]);
  const handleUpdateFilter = useCallback((name, expression) => {
    const draftFiltersCopy = JSON.parse(draftFilterJSONString);
    setDraftFilters(_objectSpread(_objectSpread({}, draftFiltersCopy), {}, {
      [name]: expression
    }));
  }, [draftFilterJSONString]);
  useEffect(() => {
    if (draftQueryId && draftQueryId !== queryId) {
      setQueryIdentifier(draftQueryId);
      setFetchBy('query');
      setDraftQueryMetadata(undefined);
    }
  }, [draftQueryId, queryId, setFetchBy, setQueryIdentifier]);
  useEffect(() => {
    setDraftFilters(metadata.filters);
    setIsFieldsetOpen(Object.keys(currentFilters || {}).length > 0);
  }, [currentFilters, metadata.filters]);
  if (!queryId) {
    return null;
  }
  return React.createElement("form", {
    onSubmit: handleFilterSubmit
  }, React.createElement(Fieldset, {
    legend: "Filters",
    accordion: true,
    isOpen: isFieldsetOpen,
    toggleOpen: setIsFieldsetOpen
  }, React.createElement(ActiveFilters, {
    onRemoveFilter: handleRemoveFilter,
    onUpdateFilter: handleUpdateFilter,
    queryId: queryId,
    filters: draftFilters
  }), React.createElement(Button, {
    onClick: handleFilterSubmit
  }, "Run")));
};
//# sourceMappingURL=Filtering.js.map