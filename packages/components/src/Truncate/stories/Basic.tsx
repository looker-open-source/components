/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Box, Truncate } from '../..'

export default function Basic() {
  return (
    <Box maxWidth={500}>
      <Truncate>
        <strong>Hover over text to see the full content:</strong> Earliest
        proposed dates for the origin of cheesemaking range from around 8000
        BCE, when sheep were first domesticated. Since animal skins and inflated
        internal organs have, since ancient times, provided storage vessels for
        a range of foodstuffs, it is probable that the process of cheese making
        was discovered accidentally by storing milk in a container made from the
        stomach of an animal, resulting in the milk being turned to curd and
        whey by the rennet from the stomach. There is a legend—with
        variations—about the discovery of cheese by an Arab trader who used this
        method of storing milk.
      </Truncate>
    </Box>
  )
}
