import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../test/utils/snapshot'
import { VisuallyHidden } from './VisuallyHidden'

test('VisuallyHiddenText default', () => {
  assertSnapshot(<VisuallyHidden>I am hidden</VisuallyHidden>)
})
