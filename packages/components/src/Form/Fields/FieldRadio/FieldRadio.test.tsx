import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '@looker/components-test-utils'
import { FieldRadio } from './FieldRadio'

test('A FieldRadio', () => {
  assertSnapshot(<FieldRadio label="👍" name="thumbsUp" id="thumbs-up" />)
})

test('A FieldRadio with label aligned left', () => {
  assertSnapshot(
    <FieldRadio label="👍" name="thumbsUp" id="thumbs-up" alignLabel="left" />
  )
})

test('A FieldRadio checked', () => {
  assertSnapshot(
    <FieldRadio label="👍" name="thumbsUp" id="thumbs-up" checked />
  )
})
