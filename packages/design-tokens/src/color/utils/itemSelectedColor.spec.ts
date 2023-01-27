/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { itemSelectedColor } from './itemSelectedColor'

test('itemSelectedColor', () => {
  expect(itemSelectedColor('#cc0000')).toEqual('#e00000')
})
