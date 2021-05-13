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

import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { FilterList } from '@styled-icons/material/FilterList'
import { MoreVert } from '@styled-icons/material/MoreVert'
import { SubdirectoryArrowLeft } from '@styled-icons/material/SubdirectoryArrowLeft'
import { Info } from '@styled-icons/material-outlined/Info'
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Popover,
  Paragraph,
  Flex,
} from '../..'
import { TreeCollection, TreeItem, TreeBranch, Tree } from '..'
import { HoverDisclosure } from '../../utils'
import { generateBorderRadius } from '../utils/generateBorderRadius'
import { listItemDimensions } from '../../List'

const BorderRadiusOverrideTree = styled(Tree)`
  ${({ theme }) => generateBorderRadius('medium', theme)}
`

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
      <Tooltip placement="top" content="Some exciting info or something">
        <IconButton icon={<Info />} label="Info" />
      </Tooltip>
      <Menu
        isOpen={overlay === 'menu'}
        setOpen={toggleMenu}
        density={-1}
        content={
          <>
            <MenuItem>Brie</MenuItem>
            <MenuItem>Cheddar</MenuItem>
            <MenuItem>Gouda</MenuItem>
          </>
        }
      >
        <IconButton
          icon={<MoreVert />}
          label="Options"
          tooltipPlacement="top"
        />
      </Menu>
    </>
  )

  const handleFieldClick = () => alert(`Clicked on ${children}`)

  const { height: fieldHeight } = listItemDimensions(-3)

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
      itemRole="none"
      onClickWhitespace={handleFieldClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          if (event.target === event.currentTarget) {
            alert(`Key downed on ${children}`)
          }
        }
        if (event.key === 'Enter' && event.metaKey) {
          alert(`CMD + Enter'ed on ${children}!`)
        }
      }}
      truncate={truncate}
    >
      <Flex alignItems="center" px="xxsmall">
        <Flex
          alignItems="center"
          flex={1}
          height={fieldHeight}
          onClick={handleFieldClick}
        >
          {children}
        </Flex>
        <HoverDisclosure>
          <IconButton
            icon={<SubdirectoryArrowLeft />}
            label="Pivot"
            tooltipPlacement="top"
            onClick={() => alert('Pivot')}
          />
          <Popover
            content="hello world"
            isOpen={overlay === 'popover'}
            setOpen={togglePopover}
          >
            <IconButton
              icon={<FilterList />}
              label="Filter"
              tooltipPlacement="top"
            />
          </Popover>
        </HoverDisclosure>
      </Flex>
    </TreeItem>
  )
}

const StyledParagraph = styled(Paragraph)`
  line-height: 0.75rem;
`

const fields = (
  <>
    <TreeBranch>
      <StyledParagraph
        color="text1"
        fontSize="xxsmall"
        fontWeight="semiBold"
        pt="xsmall"
        pb="xxsmall"
        px="xxsmall"
        truncate={true}
      >
        DIMENSIONS
      </StyledParagraph>
    </TreeBranch>
    <BorderRadiusOverrideTree
      branchFontWeight
      label={<Box px="xxsmall">Created</Box>}
    >
      <PickerItem>Created Date</PickerItem>
      <PickerItem>Created Month</PickerItem>
      <PickerItem>Created Year</PickerItem>
    </BorderRadiusOverrideTree>
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
        px="xxsmall"
        truncate={true}
      >
        MEASURES
      </StyledParagraph>
    </TreeBranch>
    <PickerItem color="orange">Sum</PickerItem>
    <PickerItem color="orange">Max</PickerItem>
  </>
)

export const FieldPicker = () => (
  <TreeCollection>
    <BorderRadiusOverrideTree
      density={-3}
      defaultOpen={true}
      detail={3}
      label={<Box px="xxsmall">Orders</Box>}
      labelBackgroundOnly
    >
      {fields}
    </BorderRadiusOverrideTree>
    <BorderRadiusOverrideTree
      density={-3}
      label={<Box px="xxsmall">Order Items</Box>}
      labelBackgroundOnly
    >
      {fields}
    </BorderRadiusOverrideTree>
    <BorderRadiusOverrideTree
      density={-3}
      label={<Box px="xxsmall">Users</Box>}
      labelBackgroundOnly
    >
      {fields}
    </BorderRadiusOverrideTree>
  </TreeCollection>
)
