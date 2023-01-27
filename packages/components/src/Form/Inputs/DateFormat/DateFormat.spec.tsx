/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { render } from '@testing-library/react'
import React from 'react'
import { DateFormat } from '../DateFormat'
const date = new Date('January 25, 1988 11:58:03')

test('DateFormat renders only date', () => {
  const { container } = render(<DateFormat>{date}</DateFormat>)
  expect(container).toMatchInlineSnapshot(`
    <div>
      Jan 25, 1988
    </div>
  `)
})
