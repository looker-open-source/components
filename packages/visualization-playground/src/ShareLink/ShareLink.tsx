/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useContext } from 'react';
import {
  DataState,
  useQueryId,
  useQueryIdFromDashboard,
} from '@looker/components-data';
import { Link } from '@looker/components';
import type { ExtensionContextData } from '@looker/extension-sdk-react';
import type { IQuery } from '@looker/sdk';
import { ExtensionContext } from '@looker/extension-sdk-react';

type ShareLinkProps = {
  slug?: string | number;
  dashboard?: number;
};

export const ShareLink = ({ slug, dashboard }: ShareLinkProps) => {
  const { extensionSDK } = useContext<ExtensionContextData>(ExtensionContext);

  const { queryId: dashboardQueryId } = useQueryIdFromDashboard(dashboard);
  const { queryId } = useQueryId(slug);
  const { getById } = DataState.useContainer();

  const { share_url = '' } =
    getById(dashboardQueryId || queryId, 'metadata') || ({} as IQuery);

  if (!extensionSDK) return null;

  const handleClick = () => {
    extensionSDK.openBrowserWindow(share_url || '', '_blank');
  };

  if (share_url) {
    return (
      <Link href="#" onClick={handleClick} fontSize="small">
        View query in Explore
      </Link>
    );
  } else {
    return null;
  }
};
