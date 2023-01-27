/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Flex, FlexItem, Box } from '../../..'

export default function FlexBasis() {
  return (
    <>
      <Flex>
        <FlexItem flexBasis="20%">
          <Box p="u3" m="u3" bg="ui4">
            I am 20% of container
          </Box>
        </FlexItem>
        <FlexItem flexBasis="5.5rem">
          <Box p="u3" m="u3" bg="ui3">
            I am 5.5rem of container
          </Box>
        </FlexItem>
        <FlexItem flexBasis="150px">
          <Box p="u3" m="u3" bg="ui2">
            I am 150px of container
          </Box>
        </FlexItem>
        <FlexItem>
          <Box p="u3" m="u3" bg="ui1">
            I am sized to my content
          </Box>
        </FlexItem>
      </Flex>
    </>
  )
}
