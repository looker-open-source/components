import React from 'react'
import { assertSnapshot } from 'looker-components-test-utils'
import { Legend } from './Legend'

test('A Legend', () => {
  assertSnapshot(<Legend>This is a legend</Legend>)
})
