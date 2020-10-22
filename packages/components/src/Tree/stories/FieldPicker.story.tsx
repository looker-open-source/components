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

import React, { useState, FC } from 'react'
import {
  ButtonTransparent,
  HoverDisclosure,
  IconButton,
  Menu,
  MenuDisclosure,
  MenuList,
  MenuItem,
  Space,
  Tooltip,
  Truncate,
  usePopover,
  Flex,
} from '../..'
import { TreeItem, Tree, TreeGroup } from '..'

const Span: FC<any> = ({ children }) => <span>{children}</span>

const PickerItem = ({ children = 'Cost', truncate = false }) => {
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
    <Flex alignItems="center">
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
    </Flex>
  )

  const TextWrapper = truncate ? Truncate : Span

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
          onMetaEnter={() => alert("Cmd + Enter'ed on cost!")}
          selected={!!overlay}
          // icon="FieldNumber"
        >
          <Space between>
            <TextWrapper>{children}</TextWrapper>
            {!overlay ? <HoverDisclosure>{pivot}</HoverDisclosure> : pivot}
          </Space>
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
      <PickerItem>
        Over a thousand types of cheese exist and are currently produced in
        various countries. Their styles, textures and flavors depend on the
        origin of the milk (including the animal's diet), whether they have been
        pasteurized, the butterfat content, the bacteria and mold, the
        processing, and how long they have been aged for.
      </PickerItem>
      <PickerItem truncate>
        Herbs, spices, or wood smoke may be used as flavoring agents. The yellow
        to red color of many cheeses is produced by adding annatto. Other
        ingredients may be added to some cheeses, such as black pepper, garlic,
        chives or cranberries.
      </PickerItem>
    </TreeGroup>
    <TreeGroup label="MEASURES" color="orange">
      <Tree noIndent visuallyAsBranch label="Hello">
        <PickerItem />
      </Tree>
      <TreeItem>Name</TreeItem>
      <PickerItem />
      <PickerItem />
      <PickerItem />
    </TreeGroup>
  </Tree>
)
