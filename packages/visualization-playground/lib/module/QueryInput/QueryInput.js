let _ = t => t,
  _t;

import React, { useEffect, useRef, useContext } from 'react';
import { Grid, InputText, FieldRadio, Link, Space } from '@looker/components';
import { ExtensionContext } from '@looker/extension-sdk-react';
import debounce from 'lodash/debounce';
import styled from 'styled-components';
import { useLocalStorage } from '../utils';
import { ShareLink } from '../ShareLink';
export const QueryInput = ({
  onChange,
  dashboardId,
  queryId,
  fetchBy,
  setFetchBy
}) => {
  const {
    extensionSDK
  } = useContext(ExtensionContext);
  const [storedInputType, setStoredInputType] = useLocalStorage('visComponentInputType', fetchBy);
  const [storedQueryIdentifier, setStoredQueryIdentifier] = useLocalStorage('visComponentQueryIdentifier', queryId);
  const [storedDashboardId, setStoredDashboardId] = useLocalStorage('visComponentDashboardId', dashboardId);
  const debouncedOnChange = useRef(debounce((nextType, nextValue) => {
    onChange({
      type: nextType,
      value: nextValue
    });
  }, 500)).current;
  const handleInputTypeChange = e => {
    const {
      value: type
    } = e.target;
    setFetchBy(type);
    setStoredInputType(type);
    const inputValue = type === 'query' ? storedQueryIdentifier : storedDashboardId;
    onChange({
      type: type,
      value: inputValue
    });
  };
  const handleQueryIdChange = e => {
    const {
      value
    } = e.target;
    if (storedInputType) {
      debouncedOnChange(storedInputType, value);
    }
    setStoredQueryIdentifier(value);
  };
  const handleDashboardIdChange = e => {
    const {
      value
    } = e.target;
    if (storedInputType) {
      debouncedOnChange(storedInputType, value);
    }
    setStoredDashboardId(Number(value));
  };

  useEffect(() => {
    if (fetchBy) {
      setStoredInputType(fetchBy);
    }
    if (dashboardId) {
      setStoredDashboardId(dashboardId);
    }
    if (queryId) {
      setStoredQueryIdentifier(queryId);
    }
  }, [dashboardId, queryId, fetchBy, setStoredDashboardId, setStoredInputType, setStoredQueryIdentifier]);

  useEffect(() => {
    const inputValue = storedInputType === 'query' ? storedQueryIdentifier : storedDashboardId;
    if (!fetchBy && storedInputType && inputValue) {
      setFetchBy(storedInputType);
      onChange({
        type: storedInputType,
        value: inputValue
      });
    }
  }, [storedInputType, storedQueryIdentifier, storedDashboardId, fetchBy, onChange, setFetchBy]);
  return React.createElement(Grid, null, React.createElement("div", null, React.createElement(FieldRadio, {
    name: "input-selector",
    label: "Query (Numeric ID or Slug)",
    onChange: handleInputTypeChange,
    value: "query",
    checked: storedInputType === 'query'
  }), React.createElement(InputText, {
    name: "query",
    value: storedQueryIdentifier,
    disabled: storedInputType !== 'query',
    onChange: handleQueryIdChange,
    my: "xsmall",
    placeholder: 'CmBbGK2\u2026'
  }), storedInputType === 'query' && React.createElement(ShareLink, {
    slug: queryId
  })), React.createElement("div", null, React.createElement(FieldRadio, {
    name: "input-selector",
    label: "Dashboard (Numeric ID)",
    onChange: handleInputTypeChange,
    value: "dashboard",
    checked: storedInputType === 'dashboard'
  }), React.createElement(InputText, {
    name: "dashboard",
    disabled: storedInputType !== 'dashboard',
    my: "xsmall",
    value: storedDashboardId || '',
    onChange: handleDashboardIdChange,
    placeholder: "123"
  }), storedInputType === 'dashboard' && dashboardId ? React.createElement(Space, {
    gap: "u1"
  }, React.createElement(Link, {
    href: "#",
    onClick: () => {
      extensionSDK.openBrowserWindow(`/dashboards/${dashboardId}`, '_blank');
    },
    fontSize: "small"
  }, "View Dashboard"), React.createElement(Middot, null), React.createElement(ShareLink, {
    dashboard: Number(dashboardId)
  })) : null));
};
const Middot = styled.div.withConfig({
  displayName: "QueryInput__Middot",
  componentId: "sc-18hmla6-0"
})(_t || (_t = _`
  background: ${0};
  border-radius: 2px;
  height: 2px;
  width: 2px;
`), ({
  theme
}) => theme.colors.text);
//# sourceMappingURL=QueryInput.js.map