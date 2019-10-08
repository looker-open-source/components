import 'jest-styled-components'
import React from 'react'
import {
  assertSnapshot,
  assertSnapshotShallow,
} from '@looker/components-test-utils'
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
      {onClick => <a onClick={onClick}>🥑</a>}
    </DrawerManager>
  )
})

test('Drawer Shown', () => {
  assertSnapshotShallow(<Drawer isOpen>{content}</Drawer>)
})

test('Drawer, backdrop customized', () => {
  assertSnapshotShallow(
    <Drawer isOpen backdrop={{ background: 'purple', opacity: 1 }}>
      {content}
    </Drawer>
  )
})

test('Selection Drawer, Shown', () => {
  assertSnapshotShallow(
    <Drawer isOpen>
      <ModalHeader>Pick stuff</ModalHeader>
      <ModalContent>Stuff and things...</ModalContent>
      <ModalFooter>
        <button>Pick some stuff</button>
        <button>Cancel</button>
      </ModalFooter>
    </Drawer>
  )
})
