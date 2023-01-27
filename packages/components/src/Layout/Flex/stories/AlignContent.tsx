/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Flex, FlexItem } from '../../..'

export default function AlignContent() {
  return (
    <>
      <Flex justifyContent="space-between">
        <Flex
          alignContent="space-around"
          width="30%"
          height="150px"
          flexWrap="wrap"
          bg="key"
        >
          <FlexItem width="70%" m="u3" p="u2" bg="ui1">
            Aligned w/
          </FlexItem>
          <FlexItem width="30%" m="u3" p="u2" bg="ui1">
            Space
          </FlexItem>
          <FlexItem width="50%" m="u3" p="u2" bg="ui1">
            Between
          </FlexItem>
        </Flex>
        <Flex
          alignContent="flex-end"
          width="30%"
          height="150px"
          flexWrap="wrap"
          bg="inform"
        >
          <FlexItem width="70%" m="u3" p="u2" bg="ui2">
            Aligned w/
          </FlexItem>
          <FlexItem width="30%" m="u3" p="u2" bg="ui2">
            Flex
          </FlexItem>
          <FlexItem width="50%" m="u3" p="u2" bg="ui2">
            End
          </FlexItem>
        </Flex>
        <Flex
          alignContent="center"
          width="30%"
          height="150px"
          flexWrap="wrap"
          bg="positive"
        >
          <FlexItem width="70%" m="u3" p="u2" bg="ui3">
            Aligned w/
          </FlexItem>
          <FlexItem width="30%" m="u3" p="u2" bg="ui3">
            Flex
          </FlexItem>
          <FlexItem width="50%" m="u3" p="u2" bg="ui3">
            Center
          </FlexItem>
        </Flex>
      </Flex>
    </>
  )
}
