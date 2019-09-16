import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../../../test/utils/snapshot'
import { FieldToggleSwitch } from './FieldToggleSwitch'

test('A FieldToggleSwitch', () => {
  assertSnapshot(
    <FieldToggleSwitch label="👍" name="thumbsUp" id="thumbs-up" />
  )
})

test('A FieldToggleSwitch with label aligned left', () => {
  assertSnapshot(
    <FieldToggleSwitch
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      alignLabel="left"
    />
  )
})

test('A FieldToggleSwitch turned on', () => {
  assertSnapshot(
    <FieldToggleSwitch label="👍" name="thumbsUp" id="thumbs-up" on={true} />
  )
})
