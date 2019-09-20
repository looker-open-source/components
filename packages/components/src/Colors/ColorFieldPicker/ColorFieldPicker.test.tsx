import 'jest-styled-components'
import React from 'react'
import {
  assertSnapshot,
  assertSnapshotShallow,
} from '@looker/components-test-utils'
import { ColorFieldPicker } from './ColorFieldPicker'

test('Default ColorFieldPicker', () => {
  assertSnapshot(<ColorFieldPicker />)
})

test('ColorFieldPicker with hidden input', () => {
  assertSnapshot(<ColorFieldPicker hideInput={true} />)
})

test('ColorFieldPicker with a named color and size values', () => {
  assertSnapshot(<ColorFieldPicker value="blue" cwSize={300} />)
})

test('ColorFieldPicker with a label', () => {
  assertSnapshot(
    <ColorFieldPicker value="#e1ff83" label="Pick a color" alignLabel="left" />
  )
})

test('ColorFieldPicker with a validation message', () => {
  assertSnapshot(
    <ColorFieldPicker
      value="#4c6670"
      label="Pick a color"
      alignLabel="left"
      validationMessage={{ message: 'Error!', type: 'error' }}
    />
  )
})

test('ColorFieldPicker renders a color picker in a RichTooltip', () => {
  assertSnapshotShallow(<ColorFieldPicker open />)
})
