/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { TextSnippet } from '@styled-icons/material/TextSnippet'
import { Explore } from '@styled-icons/material-outlined/Explore'
import { TableChart } from '@styled-icons/material-outlined/TableChart'
import { Visibility } from '@styled-icons/material-outlined/Visibility'

import { Tree } from '../Tree'
import { TreeCollection } from '../TreeCollection'
import { TreeItem } from '../TreeItem'
import { TreeProps } from '../types'

const Template: Story<TreeProps> = (args) => (
  <TreeCollection>
    <Tree {...args} label="thelook" icon={<Explore />}>
      <Tree label="Users" icon={<Visibility />} defaultOpen branchFontWeight>
        <Tree label="Orders" icon={<TableChart />} defaultOpen branchFontWeight>
          <TreeItem icon={<TextSnippet />}>ID</TreeItem>
          <TreeItem icon={<TextSnippet />}>Status</TreeItem>
          <TreeItem icon={<TextSnippet />}>Created</TreeItem>
        </Tree>
        <Tree label="Users" icon={<TableChart />} defaultOpen branchFontWeight>
          <TreeItem icon={<TextSnippet />}>ID</TreeItem>
          <TreeItem icon={<TextSnippet />}>Name</TreeItem>
          <TreeItem icon={<TextSnippet />}>Created</TreeItem>
        </Tree>
      </Tree>
    </Tree>
  </TreeCollection>
)

export const FileTree = Template.bind({})
FileTree.args = {
  defaultOpen: true,
}

export const FileTreeClosed = Template.bind({})
FileTreeClosed.args = {}
