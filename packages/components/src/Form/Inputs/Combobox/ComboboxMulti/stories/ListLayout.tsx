/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ChangeEvent } from 'react';
import React, { useState } from 'react';
import { Slider, Label } from '../../../..';
import { Card } from '../../../../../Card';
import { SpaceVertical } from '../../../../../Layout';
import {
  ComboboxMulti,
  ComboboxMultiOption,
  ComboboxMultiList,
  ComboboxMultiInput,
} from '../..';

export default function ListLayout() {
  const [containerWidth, setContainerWidth] = useState(400);
  const handleWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContainerWidth(parseInt(e.target.value, 10));
  };

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
          <ComboboxMulti>
            <ComboboxMultiInput placeholder="width=500" />
            <ComboboxMultiList width={500}>
              <ComboboxMultiOption value="Apples" />
              <ComboboxMultiOption value="Oranges" />
              <ComboboxMultiOption value="Grapes" />
              <ComboboxMultiOption value="Bananas" />
              <ComboboxMultiOption value="Pineapples" />
            </ComboboxMultiList>
          </ComboboxMulti>
          <ComboboxMulti>
            <ComboboxMultiInput placeholder="minWidth=420" />
            <ComboboxMultiList minWidth={420}>
              <ComboboxMultiOption value="Apples" />
              <ComboboxMultiOption value="Oranges" />
              <ComboboxMultiOption value="Grapes" />
              <ComboboxMultiOption value="Bananas" />
              <ComboboxMultiOption value="Pineapples" />
            </ComboboxMultiList>
          </ComboboxMulti>
        </SpaceVertical>
      </Card>
    </SpaceVertical>
  );
}
