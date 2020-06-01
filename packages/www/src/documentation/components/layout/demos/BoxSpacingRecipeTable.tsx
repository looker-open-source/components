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

import { Box, Code, List, ListItem, Text } from '@looker/components'
import React, { Component } from 'react'
import styled from 'styled-components'

const spacingTypes = [
  { label: 'Margin', value: 'm' },
  { label: 'Padding', value: 'p' },
]

const spacingSides = [
  { defaultLabel: '(default)', label: 'All', value: '-' },
  { label: 'Top', value: 't' },
  { label: 'Right', value: 'r' },
  { label: 'Bottom', value: 'b' },
  { label: 'Left', value: 'l' },
  { label: 'Left & Right', value: 'x' },
  { label: 'Top & Bottom', value: 'y' },
]

const spacingSizes = [
  { label: '4px', value: 'xxsmall' },
  { label: '8px', value: 'xsmall' },
  { label: '12px', value: 'small' },
  { label: '16px', value: 'medium' },
  { label: '20px', value: 'large' },
  { label: '32px', value: 'xlarge' },
  { label: '40px', value: 'xxlarge' },
  { label: '60px', value: 'xxxlarge' },
]

export interface ColumnExample {
  value: string
  label: string
  defaultLabel?: string
}

const SpacingTable = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  margin: 2rem 0;
  & > div {
    border-right: 1px solid ${(props) => props.theme.colors.ui2};
    &:last-child {
      border-right: none;
    }
  }
`
const SpaceListHeader = (text: string, defaultLabel?: string) => {
  return (
    <Box mb="medium">
      <Text
        fontSize="medium"
        variant="secondary"
        textTransform="uppercase"
        fontWeight="semiBold"
      >
        {text}
      </Text>
      <Box as="span" ml="xsmall">
        <Text fontSize="xsmall" variant="subdued">
          {defaultLabel}
        </Text>
      </Box>
    </Box>
  )
}

const ListRender = (
  value: string,
  label: string,
  key: number,
  defaultLabel?: string
) => {
  return (
    <ListItem key={key}>
      <Box
        px="small"
        as="span"
        bg="ui1"
        borderRadius="4px"
        display="inline-block"
        color="key"
      >
        <Code fontSize="xsmall">{value}</Code>
      </Box>
      <Box ml="small" as="span">
        <Text fontSize="small">{label}</Text>
        <Box as="span" ml="xsmall">
          <Text fontSize="xsmall" variant="subdued">
            {defaultLabel}
          </Text>
        </Box>
      </Box>
    </ListItem>
  )
}

export class BoxSpacingRecipeTable extends Component<
  {},
  {
    types: ColumnExample[]
    sides: ColumnExample[]
    sizes: ColumnExample[]
  }
> {
  constructor(props: {}) {
    super(props)
    this.state = {
      sides: spacingSides,
      sizes: spacingSizes,
      types: spacingTypes,
    }
  }

  public render() {
    return (
      <SpacingTable>
        <div>
          {SpaceListHeader('1. Type')}
          <List pl="none">
            {this.state.types.map((col, i) => {
              return ListRender(col.value, col.label, i)
            })}
          </List>
        </div>
        <div>
          {SpaceListHeader('2. Side', '(optional)')}
          <List pl="none">
            {this.state.sides.map((col, i) => {
              return ListRender(col.value, col.label, i, col.defaultLabel)
            })}
          </List>
        </div>
        <div>
          {SpaceListHeader('3. Amount')}
          <List pl="none">
            {this.state.sizes.map((col, i) => {
              return ListRender(col.value, col.label, i)
            })}
          </List>
        </div>
      </SpacingTable>
    )
  }
}
