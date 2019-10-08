import 'jest-styled-components'
import React from 'react'
import { assertSnapshot } from '@looker/components-test-utils'
import { ModalContent } from './ModalContent'

test('ModalContent - no overflow', () => {
  assertSnapshot(<ModalContent>Stuff</ModalContent>)
})

test('ModalContent - no overflow', () => {
  assertSnapshot(
    <ModalContent>
      <div style={{ height: '4rem' }}>Stuff</div>
    </ModalContent>
  )
})
