import { Box, Code, List, ListItem, Text } from '@looker/components'
import { theme } from '@looker/design-tokens'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { SpacingTable } from './BoxSpacingRecipeTable.styles'

const spacingTypes = [
  { value: 'm', label: 'Margin' },
  { value: 'p', label: 'Padding' },
]

const spacingSides = [
  { value: ' ', label: 'All', defaultLabel: '(default)' },
  { value: 't', label: 'Top' },
  { value: 'r', label: 'Right' },
  { value: 'b', label: 'Bottom' },
  { value: 'l', label: 'Left' },
  { value: 'x', label: 'Left & Right' },
  { value: 'y', label: 'Top & Bottom' },
]

const spacingSizes = [
  { value: 'xxsmall', label: '4px' },
  { value: 'xsmall', label: '8px' },
  { value: 'small', label: '12px' },
  { value: 'medium', label: '16px' },
  { value: 'large', label: '20px' },
  { value: 'xlarge', label: '32px' },
  { value: 'xxlarge', label: '40px' },
  { value: 'xxxlarge', label: '60px' },
]

export interface ColumnExample {
  value: string
  label: string
  defaultLabel?: string
}

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
        bg="palette.charcoal200"
        borderRadius="4px"
        display="inline-block"
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

class BoxSpacingRecipeTableRender extends React.Component<
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
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    )
  }
}

export default BoxSpacingRecipeTableRender
