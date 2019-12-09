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
      mediaum
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

//         <Badge round m="medium">
//           small
//         </Badge>
//         <Badge size="medium" m="medium">
//           medium
//         </Badge>
//         <Badge round size="medium" m="medium">
//           medium
//         </Badge>
//         <Badge size="large" m="medium">
//           large
//         </Badge>
//         <Badge round size="large" m="medium">
//           large
//         </Badge>

//         <Badge intent="plain" size="medium" m="medium">
//           plain
//         </Badge>
//         <Badge intent="positive" size="medium" m="medium">
//           positive
//         </Badge>
//         <Badge intent="info" size="medium" m="medium">
//           info
//         </Badge>
//         <Badge intent="neutral" size="medium" m="medium">
//           neutral
//         </Badge>
//         <Badge intent="warning" size="medium" m="medium">
//           warning
//         </Badge>
//         <Badge intent="critical" size="medium" m="medium">
//           critical
//         </Badge>

//         <Badge size="medium" transparent m="medium">
//           transparent
//         </Badge>
