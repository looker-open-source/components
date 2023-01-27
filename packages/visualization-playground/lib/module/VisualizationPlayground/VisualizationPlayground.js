import _extends from "@babel/runtime/helpers/extends";
let _ = t => t,
  _t;
import React, { useState, useEffect, useCallback } from 'react';
import { Query, Visualization } from '@looker/visualizations';
import { isNumeric, mockSDK, ErrorBoundary } from '@looker/visualizations-adapters';
import { DataProvider } from '@looker/components-data';
import { Box, Tab2, Tabs2, Aside, Section, ExtendComponentsThemeProvider, Page, theme } from '@looker/components';
import styled, { useTheme } from 'styled-components';
import { Radar } from '../Radar';
import { TurtleTable } from '../TurtleTable';
import { useLocalStorage } from '../utils';
import { EmbedEditor } from '../EmbedEditor';
import { ConfigEditor } from '../ConfigEditor';
import { QueryInput } from '../QueryInput';
import { Filtering } from '../Filtering';
import { CodeEditor } from '../CodeEditor';
import { CodeToggle } from '../CodeToggle';
export const setQueryProps = ({
  fetchBy,
  queryIdentifier,
  dashboardId,
  tabId
}) => {
  if (tabId === 'live') {
    return fetchBy === 'dashboard' ? {
      dashboard: dashboardId
    } : {
      query: queryIdentifier
    };
  } else {
    return {
      query: 'mock-query-slug'
    };
  }
};
export const VisualizationPlayground = ({
  sdk
}) => {
  const [storedTabId, setStoredTabId] = useLocalStorage('sdkTabId', sdk ? 'live' : 'mock');
  const [queryIdentifier, setQueryIdentifier] = useState('');
  const [dashboardId, setDashboardId] = useState();
  const [fetchBy, setFetchBy] = useState();
  const [configOverrides, setConfigOverrides] = useState({});
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [codeToggled, setCodeToggled] = useState(false);
  const handleQueryInputChange = useCallback(({
    type,
    value
  }) => {
    setFetchBy(type);
    if (type === 'query') {
      setQueryIdentifier(value);
    } else if (type === 'dashboard') {
      setDashboardId(isNumeric(value) ? Number(value) : undefined);
    }
  }, []);
  useEffect(() => {
    setConfigOverrides({});
  }, [storedTabId, fetchBy, dashboardId, queryIdentifier]);
  const {
    colors
  } = useTheme();
  const queryProps = setQueryProps({
    fetchBy,
    queryIdentifier,
    dashboardId,
    tabId: storedTabId
  });
  return React.createElement(DataProvider, {
    sdk: storedTabId === 'live' && sdk ? sdk : mockSDK
  }, React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      colors: {
        background: colors.ui5,
        key: '#609FF2',
        pageBackground: colors.ui5,
        text: colors.background
      }
    }
  }, React.createElement(PageLayout, {
    fixed: true,
    hasAside: true,
    p: "medium",
    borderRadius: "large"
  }, React.createElement(ErrorBoundary, null, React.createElement(Aside, {
    backgroundColor: "background",
    width: "25rem"
  }, React.createElement(EmbedEditor, _extends({
    width: width,
    setWidth: setWidth,
    height: height,
    setHeight: setHeight,
    config: configOverrides,
    onConfigChange: setConfigOverrides
  }, queryProps)), React.createElement(ConfigEditor, _extends({
    config: configOverrides,
    onConfigChange: setConfigOverrides
  }, queryProps)))), React.createElement(ExtendComponentsThemeProvider, {
    themeCustomizations: {
      colors: {
        background: colors.background,
        text: colors.text
      }
    }
  }, React.createElement(Section, {
    main: true,
    px: "large",
    py: "medium",
    bg: `${theme.colors.background}`,
    borderRadius: "medium"
  }, React.createElement(ErrorBoundary, null, React.createElement(CodeToggle, _extends({
    codeToggled: codeToggled,
    setCodeToggled: setCodeToggled,
    config: configOverrides
  }, queryProps)), codeToggled ? React.createElement(CodeEditor, _extends({
    config: configOverrides
  }, queryProps)) : React.createElement(Tabs2, {
    tabId: storedTabId,
    onTabChange: setStoredTabId
  }, React.createElement(Tab2, {
    id: "live",
    label: "Live SDK",
    disabled: typeof sdk === 'undefined'
  }, React.createElement(ErrorBoundary, null, React.createElement(Box, {
    my: "small"
  }, React.createElement(QueryInput, _extends({
    onChange: handleQueryInputChange,
    dashboardId: dashboardId,
    queryId: queryIdentifier,
    fetchBy: fetchBy,
    setFetchBy: setFetchBy
  }, queryProps))), React.createElement(Filtering, _extends({
    setQueryIdentifier: setQueryIdentifier,
    setFetchBy: setFetchBy
  }, queryProps)), React.createElement(Box, {
    my: "small"
  }, React.createElement(Query, _extends({
    config: configOverrides
  }, queryProps), React.createElement(Visualization, {
    width: isNumeric(width) ? Number(width) : undefined,
    height: isNumeric(height) ? Number(height) : undefined
    ,
    chartTypeMap: {
      radar: Radar,
      turtle_table: TurtleTable
    }
  }))))), React.createElement(Tab2, {
    id: "mock",
    label: "Mock Data"
  }, React.createElement(Query, {
    query: "mock-query-id",
    config: configOverrides
  }, React.createElement(Visualization, {
    width: isNumeric(width) ? Number(width) : undefined,
    height: isNumeric(height) ? Number(height) : undefined
    ,
    chartTypeMap: {
      radar: Radar
    }
  }))))))))));
};
const PageLayout = styled(Page).withConfig({
  displayName: "VisualizationPlayground__PageLayout",
  componentId: "sc-sb6oox-0"
})(_t || (_t = _`
  gap: ${0};
`), theme.space.medium);
//# sourceMappingURL=VisualizationPlayground.js.map