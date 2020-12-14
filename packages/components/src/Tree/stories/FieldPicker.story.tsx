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

import React, { FC, ReactNode, useState } from 'react'
import {
  IconButton,
  Menu,
  MenuDisclosure,
  MenuList,
  MenuItem,
  Tooltip,
  usePopover,
  Accordion,
  AccordionContent,
  AccordionDisclosure,
  Space,
  Truncate,
  Text,
  Badge,
} from '../..'
import { TreeItem, Tree, TreeGroup } from '..'
import { TreeContext } from '../TreeContext'
import { TreeStyle } from '../TreeStyle'

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

// Wrapper for Tree and TreeItem elements that doesn't render an actual Tree
const FauxTree: FC<{ children: ReactNode }> = ({ children }) => (
  <TreeStyle depth={-1}>
    <TreeContext.Provider value={{ depth: 0 }}>{children}</TreeContext.Provider>
  </TreeStyle>
)

const fields = (
  <FauxTree>
    <TreeGroup label="DIMENSIONS">
      <Tree branchFontWeight label="Created">
        <PickerItem>Created Date</PickerItem>
        <PickerItem>Created Month</PickerItem>
        <PickerItem>Created Year</PickerItem>
      </Tree>
      <PickerItem>City</PickerItem>
      <PickerItem>Country</PickerItem>
      <PickerItem>ID</PickerItem>
    </TreeGroup>
    <TreeGroup label="MEASURES" color="orange">
      <PickerItem>Sum</PickerItem>
      <PickerItem>Max</PickerItem>
    </TreeGroup>
  </FauxTree>
)

const ViewAccordion: FC<{
  children: ReactNode
  defaultOpen?: boolean
  label: string
}> = ({ children, defaultOpen, label }) => (
  <Accordion
    defaultOpen={defaultOpen}
    indicatorSize="xxsmall"
    indicatorIcons={{ close: 'CaretRight', open: 'CaretDown' }}
  >
    <AccordionDisclosure px="4px" py="0" height="24px" color="text4">
      <Space between>
        <Text fontSize="xsmall">
          <Truncate>{label}</Truncate>
        </Text>
        <Badge intent="inform">1</Badge>
      </Space>
    </AccordionDisclosure>
    <AccordionContent>{children}</AccordionContent>
  </Accordion>
)

export const FieldPicker = () => (
  <>
    <ViewAccordion defaultOpen={true} label="Orders">
      {fields}
    </ViewAccordion>
    <ViewAccordion label="Order Items">{fields}</ViewAccordion>
    <ViewAccordion label="Users">{fields}</ViewAccordion>
  </>
)
