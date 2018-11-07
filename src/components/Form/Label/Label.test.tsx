import * as React from 'react'
import { assertSnapshot } from '../../../../test/utils/snapshot'
import { Label } from './Label'

test('A Label', () => {
  assertSnapshot(<Label htmlFor="party">🎉</Label>)
})

test('Label supports weight', () => {
  assertSnapshot(
    <Label htmlFor="party" weight="normal">
      test
    </Label>
  )
})
