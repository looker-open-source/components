import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../../test/utils/snapshot'

import { Button } from '../../Button'
import { ModalContext } from '../ModalContext'
import { ModalFooter } from './ModalFooter'

test('ModalFooter with Button', () => {
  assertSnapshot(
    <ModalFooter>
      <Button variant="transparent" mr="xsmall">
        Cancel
      </Button>
    </ModalFooter>
  )
})

/* tslint:disable:jsx-no-lambda */

test('ModalFooter with ModalContext', () => {
  assertSnapshot(
    <ModalContext.Consumer>
      {({ closeModal }) => (
        <ModalFooter>
          <Button onClick={closeModal} variant="transparent" mr="small">
            Cancel
          </Button>
          <Button
            onClick={() => {
              alert("doin' things...")
              close && close()
            }}
            color="danger"
          >
            Yes, Delete "Stuff"
          </Button>
        </ModalFooter>
      )}
    </ModalContext.Consumer>
  )
})

/* tslint:enable:jsx-no-lambda */
