/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { FormEvent } from 'react'
import React, { useState } from 'react'
import { Slider, Label } from '../../../..'
import { Card } from '../../../../../Card'
import { SpaceVertical } from '../../../../../Layout'
import { Combobox, ComboboxOption, ComboboxList, ComboboxInput } from '../..'

export default function ListLayout() {
  const [containerWidth, setContainerWidth] = useState(400)
  const handleWidthChange = (e: FormEvent<HTMLInputElement>) => {
    setContainerWidth(parseInt(e.currentTarget.value, 10))
  }

  return (
    <SpaceVertical p="u5">
      <Label>Move slider to adjust container width:</Label>
      <Slider
        min={100}
        max={1000}
        step={10}
        value={containerWidth}
        onChange={handleWidthChange}
        width={400}
      />
      <Card p={20} width={containerWidth + 40}>
        <SpaceVertical>
          <Combobox>
            <ComboboxInput placeholder="width=500" />
            <ComboboxList width={500}>
              <ComboboxOption value="Apples" />
              <ComboboxOption value="Oranges" />
              <ComboboxOption value="Grapes" />
              <ComboboxOption value="Bananas" />
              <ComboboxOption value="Pineapples" />
            </ComboboxList>
          </Combobox>
          <Combobox>
            <ComboboxInput placeholder="minWidth=420" />
            <ComboboxList minWidth={420}>
              <ComboboxOption value="Apples" />
              <ComboboxOption value="Oranges" />
              <ComboboxOption value="Grapes" />
              <ComboboxOption value="Bananas" />
              <ComboboxOption value="Pineapples" />
            </ComboboxList>
          </Combobox>
        </SpaceVertical>
      </Card>
    </SpaceVertical>
  )
}
