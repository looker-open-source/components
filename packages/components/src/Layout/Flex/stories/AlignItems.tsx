/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import React from 'react'
import { Flex, FlexItem } from '../../..'

export default function AlignItems() {
  return (
    <>
      <Flex mb="u10">
        <FlexItem p="u10" bg="ui1">
          Default (stretch)
        </FlexItem>
        <FlexItem p="u5" bg="ui2">
          One
        </FlexItem>
        <FlexItem p="u4" bg="ui3">
          Two
        </FlexItem>
        <FlexItem p="u3" bg="ui4">
          Three
        </FlexItem>
      </Flex>
      <Flex alignItems="center" mb="u10">
        <FlexItem p="u10" bg="ui1">
          Center
        </FlexItem>
        <FlexItem p="u5" bg="ui2">
          One
        </FlexItem>
        <FlexItem p="u4" bg="ui3">
          Two
        </FlexItem>
        <FlexItem p="u3" bg="ui4">
          Three
        </FlexItem>
      </Flex>
      <Flex alignItems="flex-start" mb="u10">
        <FlexItem p="u10" bg="ui1">
          Start
        </FlexItem>
        <FlexItem p="u5" bg="ui2">
          Two
        </FlexItem>
        <FlexItem p="u4" bg="ui3">
          Three
        </FlexItem>
        <FlexItem p="u3" bg="ui4">
          Four
        </FlexItem>
      </Flex>
      <Flex alignItems="flex-end" mb="u10">
        <FlexItem p="u10" bg="ui1">
          End
        </FlexItem>
        <FlexItem p="u5" bg="ui2">
          Two
        </FlexItem>
        <FlexItem p="u4" bg="ui3">
          Three
        </FlexItem>
        <FlexItem p="u3" bg="ui4">
          Four
        </FlexItem>
      </Flex>
      <Flex alignItems="baseline" mb="u10">
        <FlexItem p="u10" bg="ui1">
          Baseline
        </FlexItem>
        <FlexItem p="u5" bg="ui2">
          Two
        </FlexItem>
        <FlexItem p="u4" bg="ui3">
          Three
        </FlexItem>
        <FlexItem p="u3" bg="ui4">
          Four
        </FlexItem>
      </Flex>
    </>
  )
}
