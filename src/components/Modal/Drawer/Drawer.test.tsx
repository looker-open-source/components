import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../../test/utils/snapshot'

import { Drawer } from './Drawer'

import { Button } from '../../Button'
import { Heading } from '../../Heading'
import { ModalContent, ModalFooter, ModalHeader } from '../Layout'

test('Drawer Hidden', () => {
  assertSnapshot(
    <Drawer content="words and stuff">
      <Button>🥑</Button>
    </Drawer>
  )
})

test('Drawer Shown', () => {
  assertSnapshot(<Drawer content="words and stuff" open />)
})

test('Drawer, backdrop customized', () => {
  assertSnapshot(
    <Drawer
      open
      content="words and stuff"
      backdropStyles={{ background: 'purple', opacity: 1 }}
    >
      <Button>🥑</Button>
    </Drawer>
  )
})

test('Selection Drawer, Shown', () => {
  assertSnapshot(
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
