/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Flex, FlexItem, Box } from '../../..'

export default function FlexShrink() {
  return (
    <>
      <Flex width="500px">
        <FlexItem flex="1 0 200px">
          <Box p="u3" bg="ui4">
            No Shrink
          </Box>
        </FlexItem>
        <FlexItem flex="1 1 200px">
          <Box p="u3" bg="ui3">
            I'll shrink
          </Box>
        </FlexItem>
        <FlexItem flex="1 1 200px">
          <Box p="u3" bg="ui2">
            I'll shrink
          </Box>
        </FlexItem>
      </Flex>
    </>
  )
}
