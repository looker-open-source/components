/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Flex, FlexItem, Box } from '../../..'

export default function FlexGrow() {
  return (
    <>
      <Flex>
        <FlexItem flex="2">
          <Box p="u3" bg="ui4">
            Flex: 2
          </Box>
        </FlexItem>
        <FlexItem flex="1">
          <Box p="u3" bg="ui3">
            Flex: 1
          </Box>
        </FlexItem>
        <FlexItem flex="1">
          <Box p="u3" bg="ui2">
            Flex: 1
          </Box>
        </FlexItem>
      </Flex>
    </>
  )
}
