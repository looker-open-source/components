/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import {
  charcoal000,
  charcoal100,
  charcoal200,
  charcoal300,
  charcoal400,
  charcoal500,
  charcoal600,
  charcoal700,
  charcoal800,
  purple000,
  purple100,
  purple300,
  purple400,
  red000,
  red100,
  red300,
  red400,
  red500,
  white,
} from '../legacy/palette'
import { defaultSpecifiableColors } from './defaultSpecifiableColors'
import type { BlendColors, StatefulColors } from './types'
import { generateInteractive, generatePressed } from './utils'
import { generateExtendedStatefulColors } from './utils/generateStatefulColors'

/* eslint-disable sort-keys-fix/sort-keys-fix */

export const fallbackBlends: BlendColors = {
  ui1: charcoal100,
  ui2: charcoal200,
  ui3: charcoal300,
  ui4: charcoal400,
  ui5: charcoal800,
  text1: charcoal400,
  text2: charcoal500,
  text3: charcoal600,
  text4: charcoal700,
  text5: charcoal800,
}

export const fallbackStateful: StatefulColors = {
  keySubtle: purple000,
  keyAccent: purple100,
  keyFocus: purple300,
  keyInteractive: generateInteractive(purple400),
  keyPressed: generatePressed(purple400),
  keyText: white,
  keyBorder: purple400,

  criticalSubtle: red000,
  criticalAccent: red100,
  criticalFocus: red300,
  criticalInteractive: generateInteractive(red500),
  criticalPressed: generatePressed(red500),
  criticalText: white,
  criticalBorder: red400,

  neutralSubtle: charcoal000,
  neutralAccent: charcoal100,
  neutralFocus: charcoal300,
  neutralInteractive: generateInteractive(charcoal500),
  neutralPressed: generatePressed(charcoal500),
  neutralText: white,
  neutralBorder: charcoal400,

  ...generateExtendedStatefulColors(defaultSpecifiableColors),
}
