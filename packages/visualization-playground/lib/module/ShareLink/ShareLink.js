
import React, { useContext } from 'react';
import { DataState, useQueryId, useQueryIdFromDashboard } from '@looker/components-data';
import { Link } from '@looker/components';
import { ExtensionContext } from '@looker/extension-sdk-react';
export const ShareLink = ({
  slug,
  dashboard
}) => {
  const {
    extensionSDK
  } = useContext(ExtensionContext);
  const {
    queryId: dashboardQueryId
  } = useQueryIdFromDashboard(dashboard);
  const {
    queryId
  } = useQueryId(slug);
  const {
    getById
  } = DataState.useContainer();
  const {
    share_url = ''
  } = getById(dashboardQueryId || queryId, 'metadata') || {};
  if (!extensionSDK) return null;
  const handleClick = () => {
    extensionSDK.openBrowserWindow(share_url || '', '_blank');
  };
  if (share_url) {
    return React.createElement(Link, {
      href: "#",
      onClick: handleClick,
      fontSize: "small"
    }, "View query in Explore");
  } else {
    return null;
  }
};
//# sourceMappingURL=ShareLink.js.map