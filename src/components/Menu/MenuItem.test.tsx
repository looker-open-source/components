import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../test/utils/snapshot'

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
