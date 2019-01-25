import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../../../test/utils/snapshot'
import { FieldToggleSwitch } from './FieldToggleSwitch'

test('A FieldToggleSwitch', () => {
  assertSnapshot(
    <FieldToggleSwitch
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      ariaId="thumb-toggle"
    />
  )
})

test('A FieldToggleSwitch with label aligned left', () => {
  assertSnapshot(
    <FieldToggleSwitch
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      ariaId="thumb-toggle"
      alignLabel="left"
    />
  )
})

test('A FieldToggleSwitch turned on', () => {
  assertSnapshot(
    <FieldToggleSwitch
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      on={true}
      ariaId="thumb-toggle"
    />
  )
})
