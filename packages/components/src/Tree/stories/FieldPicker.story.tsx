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

import React, { FC, useState } from 'react'
import {
  IconButton,
  Menu,
  MenuDisclosure,
  MenuList,
  MenuItem,
  Tooltip,
  usePopover,
  Badge,
} from '../..'
import { TreeItem, Tree, TreeGroup } from '..'

const PickerItem = ({
  children = 'Cost',
  selected = false,
  truncate = false,
}) => {
  const [overlay, setOverlay] = useState<string | undefined>(undefined)

  const toggleMenu = () =>
    overlay === 'menu' ? setOverlay(undefined) : setOverlay('menu')
  const togglePopover = () =>
    overlay === 'popover' ? setOverlay(undefined) : setOverlay('popover')
  const closeOverlay = () => setOverlay(undefined)

  const { popover, ref } = usePopover({
    content: 'hello world',
    isOpen: overlay === 'popover',
    setOpen: closeOverlay,
  })

  return (
    <>
      {popover}
      <Menu isOpen={overlay === 'menu'} setOpen={closeOverlay}>
        <MenuList compact>
          <MenuItem>Brie</MenuItem>
          <MenuItem>Cheddar</MenuItem>
          <MenuItem>Gouda</MenuItem>
        </MenuList>
        <TreeItem
          detail={
            <>
              <IconButton
                icon="Pivot"
                label="Pivot"
                tooltipPlacement="top"
                onClick={() => alert('Pivot')}
              />
              <IconButton
                ref={ref}
                icon="Filter"
                label="Filter"
                tooltipPlacement="top"
                onClick={togglePopover}
              />
              <Tooltip
                placement="top"
                content="Some exciting info or something"
              >
                <IconButton icon="CircleInfoOutline" label="Info" />
              </Tooltip>
              <MenuDisclosure>
                <IconButton
                  onClick={toggleMenu}
                  icon="DotsVert"
                  label="Options"
                  tooltipPlacement="top"
                />
              </MenuDisclosure>
            </>
          }
          detailAccessory={true}
          detailHoverDisclosure={!overlay}
          onClick={() => alert(`Clicked on ${children}!`)}
          onMetaEnter={() => alert(`Cmd + Enter'ed on ${children}!`)}
          selected={selected}
          truncate={truncate}
        >
          {children}
        </TreeItem>
      </Menu>
    </>
  )
}

const ViewTree: FC<{ children: string; defaultOpen?: boolean }> = ({
  children,
  defaultOpen,
}) => (
  <Tree
    defaultOpen={defaultOpen}
    detail={<Badge intent="inform">1</Badge>}
    detailAccessory={false}
    indicatorIcons={{ close: 'CaretRight', open: 'CaretDown' }}
    indicatorPosition="right"
    label={children}
  >
    <TreeGroup label="DIMENSIONS">
      <Tree branchFontWeight label="Created">
        <PickerItem>Created Date</PickerItem>
        <PickerItem>Created Month</PickerItem>
        <PickerItem>Created Year</PickerItem>
      </Tree>
      <PickerItem selected>City</PickerItem>
      <PickerItem>Country</PickerItem>
      <PickerItem>ID</PickerItem>
    </TreeGroup>
    <TreeGroup label="MEASURES" color="orange">
      <Tree branchFontWeight label="My Measure Group">
        <PickerItem>Count of IDs</PickerItem>
        <PickerItem>Count of Cities</PickerItem>
      </Tree>
      <PickerItem>Sum</PickerItem>
      <PickerItem>Max</PickerItem>
    </TreeGroup>
  </Tree>
)

export const FieldPicker = () => (
  <>
    <ViewTree defaultOpen={true}>Orders</ViewTree>
    <ViewTree>Orders Items</ViewTree>
    <ViewTree>Users</ViewTree>
  </>
)
