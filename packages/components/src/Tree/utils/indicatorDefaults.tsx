/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown'
import { ArrowRight } from '@styled-icons/material/ArrowRight'
import type { AccordionIndicatorProps } from '../../Accordion2/types'

export const indicatorDefaults: Required<
  Pick<AccordionIndicatorProps, 'indicatorIcons' | 'indicatorPosition'>
> = {
  indicatorIcons: {
    close: <ArrowRight />,
    open: <ArrowDropDown />,
  },
  indicatorPosition: 'left',
}
