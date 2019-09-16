import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../../test/utils/snapshot'

import { Box } from '../../Box'
import { ModalContent } from './ModalContent'

test('ModalContent - no overflow', () => {
  assertSnapshot(<ModalContent>Stuff</ModalContent>)
})

test('ModalContent - no overflow', () => {
  assertSnapshot(
    <ModalContent>
      <Box height="4rem">Stuff</Box>
    </ModalContent>
  )
})
