/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { CAll } from '@looker/visualizations-adapters';
import {
  useVisConfig,
  useQueryId,
  useQueryIdFromDashboard,
} from '@looker/components-data';
import { Box2 } from '@looker/components';
import { sortObjectByKeys } from '../utils';
import { CodeBlock } from '../CodeBlock';

type CodeEditorProps = {
  config: Partial<CAll>;
} & (
  | {
      dashboard?: never;
      query?: string | number;
    }
  | {
      dashboard?: number;
      query?: never;
    }
);

export const CodeEditor = ({
  config: configOverrides,
  query,
  dashboard,
}: CodeEditorProps) => {
  const { queryId: dashboardQueryId } = useQueryIdFromDashboard(dashboard);
  const { queryId } = useQueryId(query || dashboardQueryId);
  const { visConfig } = useVisConfig(queryId, configOverrides);
  const visConfigSorted = sortObjectByKeys(visConfig);
  const visConfigToDisplay = JSON.stringify(visConfigSorted, null, 2);

  return (
    <Box2 mt="large" height="100%" width="100%">
      <CodeBlock code={visConfigToDisplay} language="json" />
    </Box2>
  );
};
