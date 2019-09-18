import 'jest-styled-components'
import React from 'react'
import { assertSnapshot } from '@looker/components-test-utils'

import { Heading } from '../../Heading'
import { ModalHeader } from './ModalHeader'

test('ModalHeader', () => {
  assertSnapshot(
    <ModalHeader>
      <Heading>The Heading for a Dialog</Heading>
    </ModalHeader>
  )
})
