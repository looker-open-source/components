import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../test/utils/snapshot'
import { palette } from '../../style'

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

test('MenuItem - active', () => {
  assertSnapshot(<MenuItem active>who!</MenuItem>)
})

test('MenuItem - active + icon', () => {
  assertSnapshot(
    <MenuItem active icon="Beaker">
      who!
    </MenuItem>
  )
})

test('MenuItem - canActivate', () => {
  assertSnapshot(<MenuItem canActivate>who!</MenuItem>)
})

test('MenuItem - canActivate + active', () => {
  assertSnapshot(
    <MenuItem canActivate active>
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

  assertSnapshot(
    <MenuItem current currentMarker customizableProps={menuCustomizations}>
      who!
    </MenuItem>
  )
})
