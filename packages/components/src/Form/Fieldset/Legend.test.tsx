import * as React from 'react'
import { assertSnapshot } from '../../../../test/utils/snapshot'
import { Legend } from './Legend'

test('A Legend', () => {
  assertSnapshot(<Legend>This is a legend</Legend>)
})
