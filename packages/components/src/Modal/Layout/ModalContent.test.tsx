import 'jest-styled-components'
import React from 'react'
import { assertSnapshot } from '@looker/components-test-utils'

import { Box } from '../../Layout/Box'
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
