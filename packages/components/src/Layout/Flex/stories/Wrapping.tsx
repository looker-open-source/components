/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Flex, FlexItem } from '../../..'

export default function Wrapping() {
  return (
    <>
      <Flex width="80%" flexWrap="nowrap" mb="u5">
        <FlexItem width="40%" p="u5" bg="ui4">
          These Lines
        </FlexItem>
        <FlexItem width="40%" p="u5" bg="ui2">
          Will NOT
        </FlexItem>
        <FlexItem width="40%" p="u5" bg="ui3">
          Wrap
        </FlexItem>
      </Flex>
      <Flex width="50%" flexWrap="wrap" mb="u5">
        <FlexItem width="40%" p="u5" bg="ui4">
          These Lines
        </FlexItem>
        <FlexItem width="40%" p="u5" bg="ui2">
          Will
        </FlexItem>
        <FlexItem width="40%" p="u5" bg="ui3">
          Wrap
        </FlexItem>
      </Flex>
      <Flex width="50%" flexWrap="wrap-reverse" mb="u5">
        <FlexItem width="40%" p="u5" bg="ui4">
          These Lines
        </FlexItem>
        <FlexItem width="40%" p="u5" bg="ui2">
          Will
        </FlexItem>
        <FlexItem width="40%" p="u5" bg="ui3">
          Wrap Reverse
        </FlexItem>
      </Flex>
    </>
  )
}
