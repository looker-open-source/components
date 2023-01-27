/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { createEvent, fireEvent } from '@testing-library/react'

export function firePasteEvent(element: HTMLElement, value: string) {
  const eventProperties = {
    clipboardData: {
      getData: () => value,
    },
  }

  const pasteEvent = createEvent.paste(element, eventProperties)

  fireEvent(element, pasteEvent)
}
