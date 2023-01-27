/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Card } from '../../Card'
import { CardContent } from '../../CardContent'
import { Paragraph, Heading } from '../../../Text'

export default () => {
  return (
    <Card raised>
      <CardContent>
        <Heading fontSize="xxxlarge">🎉 Looker Release Notes 🎉</Heading>
        <Heading as="h4" fontSize="small">
          Read all about our latest features
        </Heading>
        <Paragraph fontSize="xsmall" color="text1">
          Last updated 3 days ago
        </Paragraph>
      </CardContent>
    </Card>
  )
}
