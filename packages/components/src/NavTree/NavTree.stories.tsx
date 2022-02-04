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

import React from 'react'
import { Folder } from '@styled-icons/material'
// import type { Page } from 'puppeteer'
import type { Story } from '@storybook/react/types-6-0'
import { NavList } from '../NavList'
import { defaultArgTypes as argTypes } from '../../../../apps/storybook/src/defaultArgTypes'
import { NavTree } from './NavTree'
import { NavTreeItem } from './NavTreeItem'
import type { NavTreeProps } from './types'

export default {
  argTypes,
  component: NavTree,
  title: 'NavTree',
}

const Template: Story<NavTreeProps> = args => (
  <NavList>
    <NavTree {...args}>
      <NavTreeItem parentIcon>Cheddar</NavTreeItem>
    </NavTree>
  </NavList>
)

export const Basic = Template.bind({})
Basic.args = {
  defaultOpen: true,
  icon: <Folder />,
  label: 'Cheeses',
}

export const Link = () => (
  <NavList>
    <NavTree
      defaultOpen
      label="Click me to go to Google"
      icon={<Folder />}
      href="https://google.com"
      target="_blank"
      indicatorLabel="Google Link Indicator"
    >
      <NavTreeItem href="https://google.com" target="_blank" parentIcon>
        Some Item
      </NavTreeItem>
    </NavTree>
  </NavList>
)

export const ParentIcon = () => {
  return (
    <NavList>
      <NavTree defaultOpen label="Parent Tree with Icon" icon={<Folder />}>
        <NavTreeItem parentIcon>Cheddar</NavTreeItem>
        <NavTreeItem parentIcon>Cheddar 2</NavTreeItem>
        <NavTreeItem parentIcon>Cheddar 3</NavTreeItem>
      </NavTree>
      <NavTree defaultOpen label="Grandparent Tree with Icon" icon={<Folder />}>
        <NavTree defaultOpen label="Parent Tree with No Icon">
          <NavTreeItem>Swiss</NavTreeItem>
          <NavTreeItem>Swiss 2</NavTreeItem>
          <NavTreeItem>Swiss 3</NavTreeItem>
        </NavTree>
      </NavTree>
    </NavList>
  )
}
