/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import {
  defaultArgTypes as argTypes,
  disableStoryshot,
} from '@looker/storybook'
import { RangeSlider } from '../'

import Basic from './Basic'
import Controlled from './Controlled'
import Disabled from './Disabled'
import FilterRangeSlider from './FilterRangeSlider'
import InvalidValue from './InvalidValue'
import MinMax from './MinMax'
import ReadOnly from './ReadOnly'
import Step from './Step'
import Value from './Value'
import WithLabel from './WithLabel'

disableStoryshot(
  Basic,
  Controlled,
  FilterRangeSlider,
  InvalidValue,
  MinMax,
  ReadOnly,
  Step,
  WithLabel
)

export {
  Basic,
  Controlled,
  Disabled,
  FilterRangeSlider,
  InvalidValue,
  MinMax,
  ReadOnly,
  Step,
  Value,
  WithLabel,
}

export default {
  argTypes,
  component: RangeSlider,
  title: 'Stories/RangeSlider',
}
