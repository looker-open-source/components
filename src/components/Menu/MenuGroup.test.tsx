import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../test/utils/snapshot'

import { palette } from '../../style'
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

test('MenuGroup - canActivate', () => {
  assertSnapshot(
    <MenuGroup canActivate>
      <MenuItem>what?</MenuItem>
      <MenuItem>who?</MenuItem>
      <MenuItem>where?</MenuItem>
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

test('MenuGrouo - menu customization', () => {
  const menuCustomizations =
    // tslint:disable:object-literal-sort-keys
    {
      bg: palette.purple500,
      color: palette.purple200,
      icon: {
        color: palette.purple300,
        size: 20,
      },
      marker: {
        color: palette.purple900,
        size: 10,
      },
      hover: {
        bg: palette.purple700,
        color: palette.white,
        icon: {
          color: palette.purple100,
        },
      },
      current: {
        bg: palette.purple200,
        color: palette.purple900,
        icon: {
          color: palette.purple500,
        },
      },
      activated: {
        color: palette.blue500,
      },
      // tslint:disable:enable-literal-sort-keys
    }

  const menu = assertSnapshot(
    <MenuGroup customizationProps={menuCustomizations}>
      <MenuItem icon="LogoRings">Looker</MenuItem>
      <MenuItem icon="Validate">Validate</MenuItem>
      <MenuItem icon="ChartPie">Pizza!</MenuItem>
    </MenuGroup>
  )

  expect(menu).toMatchSnapshot()
})
