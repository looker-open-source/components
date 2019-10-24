import 'jest-styled-components'
import React from 'react'
import { assertSnapshot } from 'looker-components-test-utils'
import { ModalContext } from '../ModalContext'
import { ModalFooter } from './ModalFooter'

test('ModalFooter with Button', () => {
  assertSnapshot(
    <ModalFooter>
      <button>Cancel</button>
    </ModalFooter>
  )
})

test('ModalFooter with ModalContext', () => {
  assertSnapshot(
    <ModalContext.Consumer>
      {({ closeModal }) => (
        <ModalFooter>
          <button onClick={closeModal}>Cancel</button>
          <button
            onClick={() => {
              alert("doin' things...")
              close && close()
            }}
          >
            Yes, Delete "Stuff"
          </button>
        </ModalFooter>
      )}
    </ModalContext.Consumer>
  )
})
