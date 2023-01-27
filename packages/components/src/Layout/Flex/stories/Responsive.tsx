/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Flex, FlexItem } from '../../..'

export default function Responsive() {
  return (
    <>
      <Flex
        flexDirection={[
          'column', // column up to the first breakpoint
          null, // stay a column past first breakpoint
          'row', // switch to row layout after second breakpoint
        ]}
      >
        <FlexItem p="u4" bg="ui5">
          👋
        </FlexItem>
        <FlexItem p="u4" bg="ui3">
          💪
        </FlexItem>
        <FlexItem p="u4" bg="ui1">
          📦
        </FlexItem>
      </Flex>
    </>
  )
}
