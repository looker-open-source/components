/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { ReactNode } from 'react'
import { Accordion, UnorderedList } from '../..'

export default function Nested() {
  return (
    <Branch>
      <Branch>
        <Branch>
          <Branch />
        </Branch>
      </Branch>
    </Branch>
  )
}

const Branch = ({ children }: { children?: ReactNode }) => (
  <Accordion
    indicatorPosition="left"
    defaultOpen
    pl="medium"
    content={
      <UnorderedList>
        <li>Cheddar</li>
        <li>Gouda</li>
        <li>Swiss</li>
        {children}
      </UnorderedList>
    }
  >
    Hello World
  </Accordion>
)
