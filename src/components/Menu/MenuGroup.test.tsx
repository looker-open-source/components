import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../test/utils/snapshot'

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
