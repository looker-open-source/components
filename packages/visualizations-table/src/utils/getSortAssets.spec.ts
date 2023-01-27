/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { getSortAssets } from './getSortAssets'
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  SwapVert,
} from '@styled-icons/material'

import identity from 'lodash/identity'

it('renders swap icon when sorting state is undefined', () => {
  const { SortIcon, sortText } = getSortAssets(identity)
  expect(SortIcon).toEqual(SwapVert)
  expect(sortText).toEqual('Shift + Click to sort additional columns')
})

it('renders arrow down icon when sorting state is descending', () => {
  const { SortIcon, sortText } = getSortAssets(identity, {
    id: 'orders.count',
    desc: true,
  })
  expect(SortIcon).toEqual(KeyboardArrowDown)
  expect(sortText).toEqual('Sort ascending')
})

it('renders arrow up icon when sorting state is ascending', () => {
  const { SortIcon, sortText } = getSortAssets(identity, {
    id: 'orders.count',
    desc: false,
  })
  expect(SortIcon).toEqual(KeyboardArrowUp)
  expect(sortText).toEqual('Sort descending')
})
