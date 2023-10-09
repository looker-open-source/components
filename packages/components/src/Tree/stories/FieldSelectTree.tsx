/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import styled from 'styled-components';

import { Tree } from '../Tree';
import { TreeCollection } from '../TreeCollection';
import { TreeItem } from '../TreeItem';

const ViewTree = styled(Tree)`
  border-top: 1px solid ${({ theme }) => theme.colors.ui2};
  &:last-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.colors.ui2};
  }
`;

export default function FieldSelectTree() {
  return (
    <TreeCollection>
      <ViewTree label={<strong>Orders</strong>}>
        <Tree label="Created">
          <TreeItem ripple color="dimension" colorOnHover border>
            Created Date
          </TreeItem>
          <TreeItem ripple color="dimension" colorOnHover border>
            Created Month
          </TreeItem>
          <TreeItem ripple color="dimension" colorOnHover border>
            Created Year
          </TreeItem>
          <TreeItem ripple color="dimension" colorOnHover border>
            Created Quarter
          </TreeItem>
        </Tree>
        <TreeItem ripple color="dimension" colorOnHover border>
          ID
        </TreeItem>
        <TreeItem ripple color="dimension" colorOnHover border>
          Status
        </TreeItem>
        <TreeItem ripple color="measure" colorOnHover border>
          Count
        </TreeItem>
      </ViewTree>
      <ViewTree label={<strong>Users</strong>}>
        <Tree label="Created">
          <TreeItem ripple color="dimension" colorOnHover border>
            Created Date
          </TreeItem>
          <TreeItem ripple color="dimension" colorOnHover border>
            Created Month
          </TreeItem>
          <TreeItem ripple color="dimension" colorOnHover border>
            Created Year
          </TreeItem>
          <TreeItem ripple color="dimension" colorOnHover border>
            Created Quarter
          </TreeItem>
        </Tree>
        <TreeItem ripple color="dimension" colorOnHover border>
          ID
        </TreeItem>
        <TreeItem ripple color="dimension" colorOnHover border>
          First Name
        </TreeItem>
        <TreeItem ripple color="measure" colorOnHover border>
          Count
        </TreeItem>
      </ViewTree>
    </TreeCollection>
  );
}
