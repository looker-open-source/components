/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { TransitionRamp } from '../system'

const none = 0
const rapid = 100
const quick = 150
const simple = 200
const moderate = 300
const complex = 400
const intricate = 500

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const transitions: TransitionRamp = {
  none,
  rapid,
  quick,
  simple,
  moderate,
  complex,
  intricate,
}
/* eslint-enable sort-keys */
