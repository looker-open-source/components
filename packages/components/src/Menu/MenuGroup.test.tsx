import 'jest-styled-components'
import React from 'react'
import { assertSnapshot } from '@looker/components-test-utils'

import { palette } from '@looker/design-tokens'
import { Box } from '../Box'
import { MenuGroup } from './MenuGroup'
import { MenuItem } from './MenuItem'

test('MenuGroup', () => {
  assertSnapshot(
    <MenuGroup>
      <MenuItem>who!</MenuItem>
    </MenuGroup>
  )
})

test('MenuGroup - label', () => {
  assertSnapshot(
    <MenuGroup label="Questions">
      <MenuItem>what?</MenuItem>
      <MenuItem>who?</MenuItem>
      <MenuItem>where?</MenuItem>
    </MenuGroup>
  )
})

test('MenuGroup - JSX label', () => {
  assertSnapshot(
    <MenuGroup label={<Box>Questions</Box>}>
      <MenuItem>what?</MenuItem>
      <MenuItem>who?</MenuItem>
      <MenuItem>where?</MenuItem>
    </MenuGroup>
  )
})

test('MenuGroup - labelProps & labelStyles', () => {
  assertSnapshot(
    <MenuGroup
      label="Questions"
      labelStyles={{ color: 'rebeccapurple' }}
      labelProps={{ fontSize: 'xxlarge' }}
    >
      <MenuItem>what?</MenuItem>
      <MenuItem>who?</MenuItem>
      <MenuItem>where?</MenuItem>
    </MenuGroup>
  )
})

test('MenuGroup - menu customization', () => {
  // tslint:disable:object-literal-sort-keys
  const menuCustomizations = {
    bg: palette.purple500,
    color: palette.purple200,
    iconColor: palette.purple300,
    iconSize: 20,
    current: {
      bg: palette.purple200,
      color: palette.purple900,
      iconColor: palette.purple500,
    },
    hover: {
      bg: palette.purple700,
      color: palette.white,
      iconColor: palette.purple100,
    },
    marker: {
      color: palette.purple900,
      size: 10,
    },
  }
  // tslint:disable:enable-literal-sort-keys

  const menu = assertSnapshot(
    <MenuGroup customizationProps={menuCustomizations}>
      <MenuItem icon="LogoRings">Looker</MenuItem>
      <MenuItem icon="Validate">Validate</MenuItem>
      <MenuItem icon="ChartPie">Pizza!</MenuItem>
    </MenuGroup>
  )

  expect(menu).toMatchSnapshot()
})
