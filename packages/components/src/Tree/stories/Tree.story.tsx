/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import { Tree, TreeProps, TreeItem } from '..'

export * from './BorderRadius.story'
export * from './FieldPicker.story'
export * from './FileTree.story'
export * from './Flat.story'
export * from './LongLabels.story'

export default {
  title: 'Tree',
}

const Template: Story<TreeProps> = (args) => (
  <Tree label="Orders" {...args}>
    <Tree label="Orders" defaultOpen>
      <TreeItem>ID</TreeItem>
      <TreeItem>Status</TreeItem>
      <Tree label="Created" defaultOpen>
        <TreeItem>Created Date</TreeItem>
        <TreeItem>Created Month</TreeItem>
        <TreeItem>Created Year</TreeItem>
        <TreeItem>Created Quarter</TreeItem>
      </Tree>
    </Tree>
  </Tree>
)

export const Basic = Template.bind({})
Basic.args = {
  defaultOpen: true,
}

export const Border = Template.bind({})
Border.args = {
  ...Basic.args,
  border: true,
}
