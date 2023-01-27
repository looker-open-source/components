/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Flex, FlexItem, Box } from '../../..'

export default function ItemOrder() {
  return (
    <>
      <Flex bg="ui1" mb="u5">
        <FlexItem>
          <Box m="u3" p="u5" bg="ui2">
            0
          </Box>
        </FlexItem>
        <FlexItem>
          <Box m="u3" p="u5" bg="ui1">
            1
          </Box>
        </FlexItem>
        <FlexItem>
          <Box m="u3" p="u5" bg="ui3">
            2
          </Box>
        </FlexItem>
        <FlexItem>
          <Box m="u3" p="u5" bg="ui5" color="inverseOn">
            3
          </Box>
        </FlexItem>
        <FlexItem>
          <Box m="u3" p="u5" bg="ui4">
            4
          </Box>
        </FlexItem>
      </Flex>
      <Flex bg="ui1">
        <FlexItem>
          <Box m="u3" p="u5" bg="ui2">
            0
          </Box>
        </FlexItem>
        <FlexItem order="2">
          <Box m="u3" p="u5" bg="ui1">
            1
          </Box>
        </FlexItem>
        <FlexItem order="1">
          <Box m="u3" p="u5" bg="ui3">
            2
          </Box>
        </FlexItem>
        <FlexItem>
          <Box m="u3" p="u5" bg="ui5" color="inverseOn">
            3
          </Box>
        </FlexItem>
        <FlexItem order="-1">
          <Box m="u3" p="u5" bg="ui4">
            4
          </Box>
        </FlexItem>
      </Flex>
    </>
  )
}
