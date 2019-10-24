import React from 'react'
import { assertSnapshot } from 'looker-components-test-utils'
import { Label } from './Label'

test('A Label', () => {
  assertSnapshot(<Label htmlFor="party">🎉</Label>)
})

test('Label supports fontWeight', () => {
  assertSnapshot(
    <Label htmlFor="party" fontWeight="normal">
      test
    </Label>
  )
})
