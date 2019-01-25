import 'jest-styled-components'
import * as React from 'react'
import {
  assertSnapshot,
  assertSnapshotShallow,
} from '../../../../test/utils/snapshot'

import { Drawer } from './Drawer'

import { Button } from '../../Button'
import { Heading } from '../../Heading'
import { ModalContent, ModalFooter, ModalHeader } from '../Layout'

const content = (
  <>
    words and stuff <button>boo!</button>
  </>
)

test('Drawer Hidden', () => {
  assertSnapshot(
    <Drawer content={content}>
      <Button>🥑</Button>
    </Drawer>
  )
})

test('Drawer Shown', () => {
  assertSnapshotShallow(<Drawer content={content} open />)
})

test('Drawer, backdrop customized', () => {
  assertSnapshotShallow(
    <Drawer
      open
      content={content}
      backdropStyles={{ background: 'purple', opacity: 1 }}
    >
      <Button>🥑</Button>
    </Drawer>
  )
})

test('Selection Drawer, Shown', () => {
  assertSnapshotShallow(
    <Drawer
      open
      content={
        <>
          <ModalHeader>
            <Heading>Pick stuff</Heading>
          </ModalHeader>
          <ModalContent>Stuff and things...</ModalContent>
          <ModalFooter>
            <Button variant="transparent" mr="small">
              Cancel
            </Button>
            <Button>Pick some stuff</Button>
          </ModalFooter>
        </>
      }
    >
      <Button variant="outline">Pick Stuff</Button>
    </Drawer>
  )
})
