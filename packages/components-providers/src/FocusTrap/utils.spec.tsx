/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { waitFor, render } from '@testing-library/react'
import { activateFocusTrap } from './utils'

// Even though JSDom doesn't natively support :focus-visible, this test still
// works because we mock matches() and it will not throw.
test('activateFocusTrap calls document.activeElement.matches(":focus-visible") to focus the first element', async () => {
  const mockMatches = jest.fn()

  // The activeElement property has only a getter, thus we need to redefine
  // it using Object.defineProperty.
  Object.defineProperty(document, 'activeElement', {
    value: document.createElement('button'),
  })

  // TS does not see the Object.defineProperty.
  if (document.activeElement) {
    document.activeElement.matches = mockMatches
  }

  const { container } = render(<button>Button</button>)
  activateFocusTrap({ element: container })
  await waitFor(() => {
    expect(mockMatches).toHaveBeenCalledWith(':focus-visible')
  })
})
