/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Flex, FlexItem } from '../../..'

export default function ChangeDirectionOrder() {
  return (
    <Flex>
      <Flex mr="u5">
        <FlexItem>1️⃣</FlexItem>
        <FlexItem>2️⃣</FlexItem>
        <FlexItem>3️⃣</FlexItem>
      </Flex>
      <Flex flexDirection="column" mr="u5">
        <FlexItem>1️⃣</FlexItem>
        <FlexItem>2️⃣</FlexItem>
        <FlexItem>3️⃣</FlexItem>
      </Flex>
      <Flex flexDirection="column-reverse" mr="u5">
        <FlexItem>1️⃣</FlexItem>
        <FlexItem>2️⃣</FlexItem>
        <FlexItem>3️⃣</FlexItem>
      </Flex>
      <Flex flexDirection="row-reverse" mr="u5">
        <FlexItem>1️⃣</FlexItem>
        <FlexItem>2️⃣</FlexItem>
        <FlexItem>3️⃣</FlexItem>
      </Flex>
    </Flex>
  )
}
