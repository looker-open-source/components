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
import styled from 'styled-components'
import {
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Popover,
  Accordion,
  AccordionContent,
  AccordionDisclosure,
  Space,
  Truncate,
  Badge,
  Paragraph,
} from '../..'
import { Tree, TreeArtificial, TreeItem, TreeBranch } from '..'

const PickerItem: FC<{ color?: string; truncate?: boolean }> = ({
  children = 'Cost',
  color,
  truncate = false,
}) => {
  const [overlay, setOverlay] = useState<string | undefined>(undefined)

  const toggleMenu = () =>
    overlay === 'menu' ? setOverlay(undefined) : setOverlay('menu')
  const togglePopover = () =>
    overlay === 'popover' ? setOverlay(undefined) : setOverlay('popover')
  const detailContent = (
    <>
      <IconButton
        icon="Pivot"
        label="Pivot"
        tooltipPlacement="top"
        onClick={() => alert('Pivot')}
      />
      <Popover
        content="hello world"
        isOpen={overlay === 'popover'}
        setOpen={togglePopover}
      >
        <IconButton icon="Filter" label="Filter" tooltipPlacement="top" />
      </Popover>
      <Tooltip placement="top" content="Some exciting info or something">
        <IconButton icon="CircleInfoOutline" label="Info" />
      </Tooltip>
      <Menu
        isOpen={overlay === 'menu'}
        setOpen={toggleMenu}
        compact
        content={
          <>
            <MenuItem>Brie</MenuItem>
            <MenuItem>Cheddar</MenuItem>
            <MenuItem>Gouda</MenuItem>
          </>
        }
      >
        <IconButton icon="DotsVert" label="Options" tooltipPlacement="top" />
      </Menu>
    </>
  )

  return (
    <TreeItem
      color={color}
      detail={{
        content: detailContent,
        options: {
          accessory: true,
          hoverDisclosure: !overlay,
        },
      }}
      onClick={() => alert(`Clicked on ${children}!`)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' && event.metaKey) {
          alert(`CMD + Enter'ed on ${children}!`)
        }
      }}
      truncate={truncate}
    >
      {children}
    </TreeItem>
  )
}

const StyledParagraph = styled(Paragraph)`
  line-height: 0.75rem;
`

const fields = (
  <TreeArtificial density={-3}>
    <TreeBranch>
      <StyledParagraph
        color="text1"
        fontSize="xxsmall"
        fontWeight="semiBold"
        pt="xsmall"
        pb="xxsmall"
        pr="xxsmall"
        truncate={true}
      >
        DIMENSIONS
      </StyledParagraph>
    </TreeBranch>
    <Tree branchFontWeight label="Created">
      <PickerItem>Created Date</PickerItem>
      <PickerItem>Created Month</PickerItem>
      <PickerItem>Created Year</PickerItem>
    </Tree>
    <PickerItem>City</PickerItem>
    <PickerItem>Country</PickerItem>
    <PickerItem>ID</PickerItem>
    <TreeBranch>
      <StyledParagraph
        color="orange"
        fontSize="xxsmall"
        fontWeight="semiBold"
        pt="xsmall"
        pb="xxsmall"
        pr="xxsmall"
        truncate={true}
      >
        MEASURES
      </StyledParagraph>
    </TreeBranch>
    <PickerItem color="orange">Sum</PickerItem>
    <PickerItem color="orange">Max</PickerItem>
  </TreeArtificial>
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
    <AccordionDisclosure px="xxsmall" py="none" fontSize="xsmall">
      <Space between>
        <Truncate>{label}</Truncate>
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
