import 'jest-styled-components'
import React from 'react'
import {
  assertSnapshot,
  assertSnapshotShallow,
} from '@looker/components-test-utils'
import { FieldColor } from './FieldColor'

test('Default FieldColor', () => {
  assertSnapshot(<FieldColor />)
})

test('FieldColor with hidden input', () => {
  assertSnapshot(<FieldColor hideInput={true} />)
})

test('FieldColor with a named color and size values', () => {
  assertSnapshot(<FieldColor value="blue" cwSize={300} />)
})

test('FieldColor with a label', () => {
  assertSnapshot(
    <FieldColor value="#e1ff83" label="Pick a color" alignLabel="left" />
  )
})

test('FieldColor with a validation message', () => {
  assertSnapshot(
    <FieldColor
      value="#4c6670"
      label="Pick a color"
      alignLabel="left"
      validationMessage={{ message: 'Error!', type: 'error' }}
    />
  )
})

test('FieldColor renders a color picker in a Popover', () => {
  assertSnapshotShallow(<FieldColor open />)
})
