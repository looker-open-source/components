import { assertSnapshot } from '@looker/components-test-utils'
import React from 'react'
import { Badge } from './Badge'

test('Badge renders all sizes', () => {
  assertSnapshot(<Badge>small</Badge>)
  assertSnapshot(<Badge size="medium">medium</Badge>)
  assertSnapshot(<Badge size="large">large</Badge>)
})

test('Badge renders all intents', () => {
  assertSnapshot(<Badge intent="plain">plain</Badge>)
  assertSnapshot(<Badge intent="plain">positive</Badge>)
  assertSnapshot(<Badge intent="plain">info</Badge>)
  assertSnapshot(<Badge intent="plain">neutral</Badge>)
  assertSnapshot(<Badge intent="plain">warning</Badge>)
  assertSnapshot(<Badge intent="plain">critical</Badge>)
})

test('Badge renders with round flag', () => {
  assertSnapshot(<Badge round>small</Badge>)
  assertSnapshot(
    <Badge size="medium" round>
      medium
    </Badge>
  )
  assertSnapshot(
    <Badge size="large" round>
      large
    </Badge>
  )
})

test('Badge renders with transparent flag', () => {
  assertSnapshot(<Badge transparent>small</Badge>)
})
