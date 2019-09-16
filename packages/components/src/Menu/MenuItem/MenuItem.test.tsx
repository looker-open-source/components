import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../../test/utils/snapshot'
import { palette } from '../../../style'

import { MenuItem } from './MenuItem'

test('MenuItem', () => {
  assertSnapshot(<MenuItem>who!</MenuItem>)
})
test('MenuItem - icon', () => {
  assertSnapshot(<MenuItem icon="Beaker">who!</MenuItem>)
})
test('MenuItem - detail', () => {
  assertSnapshot(<MenuItem detail="Is an excellent question">who!</MenuItem>)
})

test('MenuItem - current', () => {
  assertSnapshot(
    <MenuItem current icon="Home">
      who!
    </MenuItem>
  )
})

test('MenuItem - current + marker', () => {
  assertSnapshot(
    <MenuItem current currentMarker icon="Home">
      who!
    </MenuItem>
  )
})

test('MenuItem - with customizations', () => {
  const menuCustomizations =
    // tslint:disable:object-literal-sort-keys
    {
      bg: palette.purple500,
      color: palette.purple200,
      iconColor: palette.purple300,
      iconSize: 20,
      marker: {
        color: palette.purple900,
        size: 10,
      },
      hover: {
        bg: palette.purple700,
        color: palette.white,
        iconColor: palette.purple100,
      },
      current: {
        bg: palette.purple200,
        color: palette.purple900,
        iconColor: palette.purple500,
      },
      // tslint:disable:enable-literal-sort-keys
    }

  assertSnapshot(
    <MenuItem current currentMarker customizationProps={menuCustomizations}>
      who!
    </MenuItem>
  )
})

test('MenuItem - with single customization', () => {
  const menuCustomizations = {
    bg: palette.purple500,
  }

  assertSnapshot(
    <MenuItem current currentMarker customizationProps={menuCustomizations}>
      who!
    </MenuItem>
  )
})
