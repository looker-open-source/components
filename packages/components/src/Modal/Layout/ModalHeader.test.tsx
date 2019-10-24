import 'jest-styled-components'
import React from 'react'
import { assertSnapshot } from 'looker-components-test-utils'
import { ModalHeader } from './ModalHeader'

test('ModalHeader', () => {
  assertSnapshot(<ModalHeader>The Heading for a Dialog</ModalHeader>)
})
