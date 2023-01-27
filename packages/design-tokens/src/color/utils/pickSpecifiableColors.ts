/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import pick from 'lodash/pick'
import type { Colors } from '../types'
import { specifiableColors } from '../types'

export const pickSpecifiableColors = (colors: Colors) =>
  pick(colors, specifiableColors)
