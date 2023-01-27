/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Card, CardContent } from '../../../Card'
import { Paragraph } from '../Paragraph'

export default function TextAlign() {
  return (
    <>
      <Card>
        <CardContent>
          <Paragraph> I am aligned left by default</Paragraph>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Paragraph textAlign="center">
            This is how you can center align Paragraph text
          </Paragraph>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Paragraph textAlign="right">
            This is how you can right align Paragraph text
          </Paragraph>
        </CardContent>
      </Card>
    </>
  )
}
