import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../../test/utils/snapshot'

import { Heading } from '../../Heading'
import { ModalHeader } from './ModalHeader'

test('ModalHeader', () => {
  assertSnapshot(
    <ModalHeader>
      <Heading>The Heading for a Dialog</Heading>
    </ModalHeader>
  )
})
