import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../test/utils/snapshot'
import { palette } from '../../style'

import { MenuLink } from './MenuLink'

test('MenuLink', () => {
  assertSnapshot(<MenuLink href="test">who!</MenuLink>)
})
test('MenuLink - icon', () => {
  assertSnapshot(
    <MenuLink href="test" icon="Beaker">
      who!
    </MenuLink>
  )
})
test('MenuLink - detail', () => {
  assertSnapshot(
    <MenuLink href="test" detail="Is an excellent question">
      who!
    </MenuLink>
  )
})

test('MenuLink - active', () => {
  assertSnapshot(
    <MenuLink href="test" active>
      who!
    </MenuLink>
  )
})

test('MenuLink - active + icon', () => {
  assertSnapshot(
    <MenuLink href="test" active icon="Beaker">
      who!
    </MenuLink>
  )
})

test('MenuLink - canActivate', () => {
  assertSnapshot(
    <MenuLink href="test" canActivate>
      who!
    </MenuLink>
  )
})

test('MenuLink - canActivate + active', () => {
  assertSnapshot(
    <MenuLink href="test" canActivate active>
      who!
    </MenuLink>
  )
})

test('MenuLink - current', () => {
  assertSnapshot(
    <MenuLink href="test" current icon="Home">
      who!
    </MenuLink>
  )
})

test('MenuLink - current + marker', () => {
  assertSnapshot(
    <MenuLink href="test" current currentMarker icon="Home">
      who!
    </MenuLink>
  )
})

test('MenuLink - with customizations', () => {
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
    <MenuLink
      href="test"
      current
      currentMarker
      customizationProps={menuCustomizations}
    >
      who!
    </MenuLink>
  )
})
