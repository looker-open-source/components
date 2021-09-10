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
import { Alarm } from '@styled-icons/material/Alarm'
import { Download } from '@styled-icons/material/Download'
import type { Story } from '@storybook/react/types-6-0'
import { defaultArgTypes as argTypes } from '../../../../../storybook/src/defaultArgTypes'
import type { TreeProps } from '..'
import { Tree, TreeCollection, TreeItem } from '..'
import { Button } from '../../Button'
import { Space } from '../../Layout'
import { FieldToggleSwitch } from '../../Form'
import { useToggle } from '../../utils'

export * from './BorderRadius.stories'
export * from './ColorfulTree.stories'
export * from './Density.stories'
export * from './DisabledAndSelected.stories'
export * from './FileTree.stories'
export * from './HoverDisclosure.stories'
export * from './LabelBackgroundOnly.stories'
export * from './LongLabels.stories'
export * from './Windowing.stories'

export default {
  argTypes,
  component: Tree,
  title: 'Tree',
}

const Template: Story<TreeProps> = ({
  label = <strong>Orders</strong>,
  ...args
}) => (
  <TreeCollection>
    <Tree label={label} {...args}>
      <Tree label={<strong>Orders</strong>} defaultOpen>
        <TreeItem>ID</TreeItem>
        <TreeItem>Status</TreeItem>
        <Tree label={<strong>Created</strong>} defaultOpen>
          <TreeItem>Created Date</TreeItem>
          <TreeItem>Created Month</TreeItem>
          <TreeItem>Created Year</TreeItem>
          <TreeItem>Created Quarter</TreeItem>
        </Tree>
      </Tree>
    </Tree>
  </TreeCollection>
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

export const Link = Template.bind({})
Link.args = {
  ...Basic.args,
  href: 'https://google.com',
  itemRole: 'link',
  label: <strong>Click my label to go to Google</strong>,
  rel: 'noopener noreferrer',
  target: '_blank',
}

export const Icon = () => (
  <TreeCollection>
    <Tree
      defaultOpen
      icon={<Alarm />}
      label={
        <strong>
          <Space between>
            "Alarm" icon has margin-right, but "Download" icon does not
            <Download size={20} />
          </Space>
        </strong>
      }
    >
      <TreeItem>Don't mind me</TreeItem>
    </Tree>
  </TreeCollection>
)

export const Accessory = Template.bind({})
Accessory.args = {
  ...Basic.args,
  detail: {
    content: (
      <Button ml="large" onClick={() => alert('Accessory Button')}>
        Accessory Button
      </Button>
    ),
    options: {
      accessory: true,
    },
  },
}
Accessory.parameters = {
  storyshots: { disable: true },
}

export const Controlled = () => {
  const { value, change, toggle } = useToggle(true)

  return (
    <>
      <FieldToggleSwitch on={value} onChange={toggle} label="Toggle" />
      <Tree isOpen={value} toggleOpen={change} label="Controlled Tree">
        Stuff here
      </Tree>
    </>
  )
}
Controlled.parameters = {
  storyshots: { disable: true },
}
