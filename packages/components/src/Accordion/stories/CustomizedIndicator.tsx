/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Accordion } from '../..';
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export default function CustomizedIndicator() {
  return (
    <Accordion
      density={1}
      indicatorIcons={{
        close: <MaterialIcons.ChevronLeft />,
        open: <MaterialIcons.ExpandMore />,
      }}
      content={lorem}
    >
      See more...
    </Accordion>
  );
}
