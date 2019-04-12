import 'jest-styled-components'
import * as React from 'react'
import {
  assertSnapshot,
  assertSnapshotShallow,
} from '../../../../test/utils/snapshot'
import { Button } from '../../Button'
import { Heading } from '../../Heading'
import { ModalContent, ModalFooter, ModalHeader } from '../Layout'
import { Drawer } from './Drawer'
import { DrawerManager } from './DrawerManager'

const content = (
  <>
    words and stuff <button>boo!</button>
  </>
)

test('Drawer Hidden', () => {
  assertSnapshot(
    <DrawerManager content={content}>
      {onClick => <Button onClick={onClick}>🥑</Button>}
    </DrawerManager>
  )
})

test('Drawer Shown', () => {
  assertSnapshotShallow(<Drawer isOpen>{content}</Drawer>)
})

test('Drawer, backdrop customized', () => {
  assertSnapshotShallow(
    <Drawer isOpen backdropStyles={{ background: 'purple', opacity: 1 }}>
      {content}
    </Drawer>
  )
})

test('Selection Drawer, Shown', () => {
  assertSnapshotShallow(
    <Drawer isOpen>
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
    </Drawer>
  )
})
