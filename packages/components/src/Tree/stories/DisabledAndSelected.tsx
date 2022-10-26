/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import type { FC, ReactNode } from 'react'
import React from 'react'
import { TreeCollection, TreeItem, Tree } from '..'
import { Grid } from '../../Layout/Grid'
import type { ListItemColor } from '../../ListItem'

const Basic: FC<{ children: ReactNode; color?: ListItemColor }> = ({
  children,
  ...props
}) => (
  <TreeCollection>
    <Tree label={children} defaultOpen {...props}>
      <Tree disabled label={<strong>Disabled Tree</strong>} defaultOpen>
        <TreeItem disabled>Disabled TreeItem</TreeItem>
        <TreeItem selected>Selected TreeItem</TreeItem>
      </Tree>
      <Tree selected label={<strong>Selected Tree</strong>} defaultOpen>
        <TreeItem disabled>Disabled TreeItem</TreeItem>
        <TreeItem selected>Selected TreeItem</TreeItem>
      </Tree>
    </Tree>
  </TreeCollection>
)

export const DisabledAndSelected = () => (
  <Grid columns={3}>
    <Basic>
      <strong>Default</strong>
    </Basic>
    <Basic color="key">
      <strong>Key</strong>
    </Basic>
    <Basic color="calculation">
      <strong>Dimension</strong>
    </Basic>
  </Grid>
)
