import { assertSnapshot } from '@looker/components-test-utils'
import React from 'react'
import { Badge } from './Badge'

test('Badge renders all sizes', () => {
  assertSnapshot(<Badge>default (medium)</Badge>)
  assertSnapshot(<Badge size="small">small</Badge>)
  assertSnapshot(<Badge size="medium">medium</Badge>)
  assertSnapshot(<Badge size="large">large</Badge>)
})

test('Badge renders all intents', () => {
  assertSnapshot(<Badge intent="plain">plain</Badge>)
  assertSnapshot(<Badge intent="positive">positive</Badge>)
  assertSnapshot(<Badge intent="info">info</Badge>)
  assertSnapshot(<Badge intent="neutral">neutral</Badge>)
  assertSnapshot(<Badge intent="warning">warning</Badge>)
  assertSnapshot(<Badge intent="critical">critical</Badge>)
})

test('Badge rendered with rounded property', () => {
  assertSnapshot(<Badge rounded>small</Badge>)
  assertSnapshot(
    <Badge size="medium" rounded>
      medium
    </Badge>
  )
  assertSnapshot(
    <Badge size="large" intent="info" rounded>
      large
    </Badge>
  )
})
