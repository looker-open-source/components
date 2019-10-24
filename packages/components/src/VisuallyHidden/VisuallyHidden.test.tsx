import { assertSnapshot } from 'looker-components-test-utils'
import 'jest-styled-components'
import React from 'react'
import { VisuallyHidden } from './VisuallyHidden'

test('VisuallyHiddenText default', () => {
  assertSnapshot(<VisuallyHidden>I am hidden</VisuallyHidden>)
})
