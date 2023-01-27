

import React, { Children } from 'react';
import { useTheme } from 'styled-components';
import flow from 'lodash/flow';
import { useQueryId, useVisConfig, useQueryData, useQueryIdFromDashboard } from '@looker/components-data';
import { ProgressCircular, Space, ComponentsProvider } from '@looker/components';
import { useTranslation } from '../utils';
import { ErrorBoundary, buildTrackingTag, sortByDateTime, nullValueZero, xAxisReversed } from '@looker/visualizations-adapters';
import { QueryError } from '../QueryError';
const QueryInternal = ({
  query,
  dashboard,
  children,
  config: configProp,
  LoadingIndicator
}) => {
  const {
    t
  } = useTranslation('Query');
  if (dashboard && query) {
    console.warn(t('Query component received both dashboard and query props'));
  }
  const {
    queryId: dashboardQueryId,
    isPending: isDashboardPending,
    isOK: isDashboardOK,
    error: dashboardError
  } = useQueryIdFromDashboard(dashboard);
  const {
    queryId,
    isPending: isQueryIdPending,
    isOK: isQueryIdOK,
    error: queryIdError
  } = useQueryId(query || dashboardQueryId);
  const {
    visConfig,
    isPending: isVisConfigPending,
    isOK: isVisConfigOK,
    error: visConfigError
  } = useVisConfig(queryId, configProp);
  const {
    data,
    fields,
    pivots,
    totals,
    isPending: isQueryDataPending,
    isOK: isQueryDataOK,
    error: queryDataError
  } = useQueryData(queryId, buildTrackingTag(visConfig.type));

  const isLoading = [isDashboardPending, isQueryIdPending, isVisConfigPending, isQueryDataPending].some(Boolean);
  const isEveryResponseOk = [isDashboardOK, isQueryIdOK, isVisConfigOK, isQueryDataOK].every(responseOk => responseOk === true);
  if (!query && !dashboard) {
    return null;
  }
  if (isLoading) {
    return React.createElement(Space, {
      justify: "center",
      p: "small"
    }, LoadingIndicator ? React.createElement(LoadingIndicator, null) : React.createElement(ProgressCircular, null));
  }
  if (!isEveryResponseOk) {
    return React.createElement(QueryError, {
      message: (visConfigError === null || visConfigError === void 0 ? void 0 : visConfigError.message) || (queryIdError === null || queryIdError === void 0 ? void 0 : queryIdError.message) || (dashboardError === null || dashboardError === void 0 ? void 0 : dashboardError.message) || (queryDataError === null || queryDataError === void 0 ? void 0 : queryDataError.message)
    });
  }
  const dataTransformations = [sortByDateTime, nullValueZero, xAxisReversed];
  const {
    data: transformedData
  } = flow(dataTransformations)({
    data,
    config: visConfig,
    fields
  });

  if (Children.count(children) >= 1) {
    return React.createElement(React.Fragment, null, Children.map(children, child => {
      return React.isValidElement(child) ? React.cloneElement(child, {
        config: visConfig,
        data: transformedData,
        fields,
        pivots,
        loading: isLoading,
        ok: isEveryResponseOk,
        totals
      }) : child;
    }));
  } else {
    console.warn(t('No children passed to Query component'));
    return null;
  }
};
export const Query = props => {
  const theme = useTheme();
  if (!theme) {
    return React.createElement(ComponentsProvider, null, React.createElement(Query, props));
  }
  return React.createElement(ErrorBoundary, null, React.createElement(QueryInternal, props));
};
//# sourceMappingURL=Query.js.map