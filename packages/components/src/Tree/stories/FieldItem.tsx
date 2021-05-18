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
import { FilterList } from '@styled-icons/material/FilterList'
import { MoreVert } from '@styled-icons/material/MoreVert'
import { SubdirectoryArrowLeft } from '@styled-icons/material/SubdirectoryArrowLeft'
import { Info } from '@styled-icons/material-outlined/Info'
import {
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Flex,
  Truncate,
  ToggleColor,
} from '../..'
import { TreeItem } from '..'
import { HoverDisclosure } from '../../utils'
import { listItemDimensions } from '../../List'

type FieldItemProps = {
  color?: ToggleColor
  filter?: boolean
  pivot?: boolean
  selected?: boolean
}

export const FieldItem: FC<FieldItemProps> = ({
  children = 'Cost',
  color = 'dimension',
  filter = false,
  pivot = false,
  selected = false,
}) => {
  const [isFieldMenuOpen, setIsFieldMenuOpen] = useState<boolean>(false)

  const [isFilter, setIsFilter] = useState(filter)
  const [isPivot, setIsPivot] = useState(pivot)
  const [isSelected, setIsSelected] = useState(selected)

  const toggleMenu = () =>
    isFieldMenuOpen ? setIsFieldMenuOpen(false) : setIsFieldMenuOpen(true)

  const detailContent = (
    <>
      <Tooltip placement="top" content="Some exciting info or something">
        <IconButton icon={<Info />} label="Info" />
      </Tooltip>
      <Menu
        isOpen={isFieldMenuOpen}
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

  const toggleField = () => setIsSelected(!isSelected)

  const { height } = listItemDimensions(-3)

  return (
    <TreeItem
      color={color}
      selected={isSelected}
      detail={{
        content: detailContent,
        options: {
          accessory: true,
          hoverDisclosure: !isFieldMenuOpen,
          padding: false,
        },
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter' && event.metaKey) {
          alert(`CMD + Enter'ed on ${children}!`)
        } else if (event.key === 'Enter') {
          toggleField()
        }
      }}
      itemRole="none"
      onClickWhitespace={toggleField}
    >
      <Flex alignItems="center" pl="xxsmall">
        <Flex
          onClick={toggleField}
          height={height}
          alignItems="center"
          overflow="hidden"
          width="100%"
        >
          <Truncate>{children}</Truncate>
        </Flex>
        <HoverDisclosure visible={isPivot} strategy="display">
          <IconButton
            icon={<SubdirectoryArrowLeft />}
            onClick={() => setIsPivot(!isPivot)}
            toggle={isPivot}
            toggleBackground
            toggleColor={color}
            label="Pivot"
            tooltipPlacement="top"
          />
        </HoverDisclosure>
        <HoverDisclosure
          visible={isFilter}
          strategy={isPivot ? 'visibility' : 'display'}
        >
          <IconButton
            onClick={() => setIsFilter(!isFilter)}
            toggle={isFilter}
            toggleBackground
            toggleColor={color}
            icon={<FilterList />}
            label="Filter"
            tooltipPlacement="top"
          />
        </HoverDisclosure>
      </Flex>
    </TreeItem>
  )
}
