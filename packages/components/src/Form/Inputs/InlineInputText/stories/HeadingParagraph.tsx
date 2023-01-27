/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Space } from '../../../../Layout'
import { Heading, Paragraph } from '../../../../Text'
import { InlineInputText } from '../InlineInputText'

export default function HeadingParagraph() {
  return (
    <Space around>
      <Heading>
        <InlineInputText value="Type here..." />
      </Heading>
      <Paragraph color="text1">
        <InlineInputText placeholder="Type here..." />
      </Paragraph>
    </Space>
  )
}
