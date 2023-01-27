/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { DensityRamp } from '@looker/design-tokens'
import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown'
import { ArrowRight } from '@styled-icons/material/ArrowRight'
import { ExpandLess } from '@styled-icons/material-rounded/ExpandLess'
import { ExpandMore } from '@styled-icons/material-rounded/ExpandMore'
import React from 'react'
import type { AccordionIndicatorIcons } from './types'

export type AccordionDefaultProps = {
  density: DensityRamp
  indicatorIcons: AccordionIndicatorIcons
  indicatorPosition: 'left' | 'right'
}

export const accordionDefaults: AccordionDefaultProps = {
  density: 0,
  indicatorIcons: {
    close: <ExpandMore />,
    open: <ExpandLess />,
  },
  indicatorPosition: 'right',
}

export const accordionLeftDefaults: AccordionDefaultProps = {
  ...accordionDefaults,
  indicatorIcons: {
    close: <ArrowRight />,
    open: <ArrowDropDown />,
  },
  indicatorPosition: 'left',
}
