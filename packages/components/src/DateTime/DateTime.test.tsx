import { assertSnapshot } from '@looker/components-test-utils'
import React from 'react'
import { DateTime } from './DateTime'

test('DateTime renders', () => {
  assertSnapshot(<DateTime />)
})
