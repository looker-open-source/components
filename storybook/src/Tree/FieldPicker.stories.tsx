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

import React, { useState } from 'react'
import {
  IconButton,
  Tooltip,
  Tree,
  TreeItem,
  TreeGroup,
  Menu,
  MenuDisclosure,
  MenuItem,
  MenuList,
  Space,
  HoverDisclosure,
  usePopover,
  ButtonTransparent,
} from '@looker/components'

const PickerItem = () => {
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

  const pivot = (
    <IconButton
      icon="Sync"
      label="Pivot"
      tooltipPlacement="top"
      onClick={(event) => {
        event.stopPropagation()
        alert('Pivot')
      }}
      onKeyDown={(event) => {
        event.stopPropagation()
      }}
    />
  )

  const itemLabel = (
    <Space between>
      <span>Cost</span>
      {!overlay ? <HoverDisclosure>{pivot}</HoverDisclosure> : pivot}
    </Space>
  )

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
          detailHoverDisclosure={!overlay}
          onClick={() => alert('Clicked on cost!')}
          selected={!!overlay}
          icon="FieldNumber"
        >
          {itemLabel}
        </TreeItem>
      </Menu>
    </>
  )
}

const addButton = (
  <ButtonTransparent
    size="xxsmall"
    iconBefore="Plus"
    onClick={() => alert('Hello Mouse')}
    onKeyDown={(event) => {
      if (event.keyCode === 13) {
        event.preventDefault()
        alert('Hello Keyboard')
      }
    }}
  >
    Add
  </ButtonTransparent>
)

export const FieldPicker = () => (
  <Tree defaultOpen detailAccessory detail={addButton} label="Custom Fields">
    <TreeGroup label="DIMENSIONS">
      <PickerItem />
      <PickerItem />
      <PickerItem />
      <PickerItem />
    </TreeGroup>
    <TreeGroup label="MEASURES" color="keyFocus">
      <Tree visuallyAsBranch label="Hello">
        <PickerItem />
      </Tree>
      <TreeItem color="orange" icon="FieldString">
        Name
      </TreeItem>
      <PickerItem />
      <PickerItem />
      <PickerItem />
    </TreeGroup>
  </Tree>
)

export default {
  component: FieldPicker,
  title: 'Tree',
}
