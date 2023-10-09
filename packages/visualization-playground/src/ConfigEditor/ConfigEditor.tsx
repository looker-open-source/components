/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { DEFAULT_EMPTY_FIELDS } from '@looker/visualizations-adapters';
import type { CAll } from '@looker/visualizations-adapters';
import type { QueryProps } from '@looker/visualizations';
import {
  useVisConfig,
  useQueryId,
  useQueryData,
  useQueryIdFromDashboard,
} from '@looker/components-data';
import { Series } from '../Series';
import { XAxis, YAxis } from '../axes';
import { Heading, Tabs2, Tab2 } from '@looker/components';
import { StyledCard } from '../StyledCard';

type ConfigEditorProps = {
  config: Partial<CAll>;
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>;
} & Pick<QueryProps, 'dashboard' | 'query'>;

export const ConfigEditor = ({
  config: configOverrides,
  onConfigChange,
  query,
  dashboard,
}: ConfigEditorProps) => {
  const { queryId: dashboardQueryId } = useQueryIdFromDashboard(dashboard);
  const { queryId } = useQueryId(query || dashboardQueryId);
  const { visConfig } = useVisConfig(queryId, configOverrides);

  const { fields = DEFAULT_EMPTY_FIELDS } = useQueryData(queryId);

  return (
    <StyledCard>
      <Heading as="h4">2. Customize</Heading>
      <Tabs2 distributed>
        <Tab2 id="series" label="Series" p="0">
          <Series
            config={visConfig}
            fields={fields}
            onConfigChange={onConfigChange}
          />
        </Tab2>
        <Tab2 id="axis" label="Axis">
          <XAxis config={visConfig} onConfigChange={onConfigChange} />
          <YAxis config={visConfig} onConfigChange={onConfigChange} />
        </Tab2>
      </Tabs2>
    </StyledCard>
  );
};
