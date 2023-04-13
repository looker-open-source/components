/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { mockTreeData } from '../stories/examples'
import { openOrCloseNodes } from './open_or_close_nodes'

describe('openOrCloseNodes tests', () => {
  it('should match the snapshot', () => {
    expect(
      openOrCloseNodes(mockTreeData, { id: '.Root2.anotha one2', isOpen: true })
    ).toMatchSnapshot()
  })
})
