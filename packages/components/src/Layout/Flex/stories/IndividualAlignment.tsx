/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Flex, FlexItem, Box } from '../../..'

export default function IndividualAlignment() {
  return (
    <>
      <Flex height="200px" bg="key">
        <FlexItem alignSelf="flex-start">
          <Box m="u3" p="u5" bg="ui1">
            Flex Start
          </Box>
        </FlexItem>
        <FlexItem alignSelf="flex-end">
          <Box m="u3" p="u5" bg="ui1">
            Flex End
          </Box>
        </FlexItem>
        <FlexItem alignSelf="center">
          <Box m="u3" p="u5" bg="ui1">
            Center
          </Box>
        </FlexItem>
        <FlexItem alignSelf="baseline">
          <Box m="u3" p="u5" bg="ui1">
            Baseline
          </Box>
        </FlexItem>
      </Flex>
    </>
  )
}
