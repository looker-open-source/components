/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Box, DialogLayout, DialogContent } from '../../..'

export default function NoPadding() {
  return (
    <Box bg="ui1">
      <DialogLayout>
        <DialogContent hasFooter={false} hasHeader={false}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </DialogContent>
      </DialogLayout>
    </Box>
  )
}
