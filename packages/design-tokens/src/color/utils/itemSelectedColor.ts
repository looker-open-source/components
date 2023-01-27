/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import lighten from 'polished/lib/color/lighten'

export const itemSelectedColor = (color: string) => lighten(0.04, color)
