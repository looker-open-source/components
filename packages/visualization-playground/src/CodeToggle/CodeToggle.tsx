/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { SetStateAction, Dispatch } from 'react';
import type { CAll } from '@looker/visualizations-adapters';
import {
  useVisConfig,
  useQueryId,
  useQueryIdFromDashboard,
} from '@looker/components-data';
import { CopyToClipboard, Space, IconButton } from '@looker/components';
import styled from 'styled-components';
import { sortObjectByKeys } from '../utils';
import { Code } from '@styled-icons/material/Code';

type CodeToggleProps = {
  config: Partial<CAll>;
  codeToggled?: boolean;
  setCodeToggled: Dispatch<SetStateAction<boolean>>;
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

export const CodeToggle = ({
  config: configOverrides,
  query,
  dashboard,
  codeToggled,
  setCodeToggled,
}: CodeToggleProps) => {
  const { queryId: dashboardQueryId } = useQueryIdFromDashboard(dashboard);
  const { queryId } = useQueryId(query || dashboardQueryId);
  const { visConfig } = useVisConfig(queryId, configOverrides);
  const visConfigSorted = sortObjectByKeys(visConfig);
  const visConfigToDisplay = JSON.stringify(visConfigSorted, null, 2);

  return (
    <Space reverse>
      <IconButton
        icon={<Code />}
        label="Show code"
        size="large"
        toggle={codeToggled}
        toggleBackground
        onClick={() => setCodeToggled(!codeToggled)}
      />
      {codeToggled ? (
        <StyledCopyToClipboard
          content={visConfigToDisplay}
          success="Copied to clipboard!"
        />
      ) : (
        ''
      )}
    </Space>
  );
};

const StyledCopyToClipboard = styled(CopyToClipboard)`
  display: inline;
`;
