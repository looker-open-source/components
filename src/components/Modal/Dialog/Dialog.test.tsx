import 'jest-styled-components'
import * as React from 'react'

import { mountWithTheme } from '../../../../test/utils/create_with_theme'
import { assertSnapshotShallow } from '../../../../test/utils/snapshot'

import { Button } from '../../Button'
import { Heading } from '../../Heading'
import { ModalFooter, ModalHeader } from '../Layout'
import { SimpleContent } from '../modal.test.helpers'

import { ModalBackdrop } from '../ModalBackdrop'
import { ModalPortal } from '../ModalPortal'
import { ModalSurface } from '../ModalSurface'
import { Dialog } from './Dialog'

test('Dialog Hidden', () => {
  assertSnapshotShallow(
    <Dialog
      content={
        <>
          words and stuff <button>Hello</button>
        </>
      }
    >
      <Button>🥑</Button>
    </Dialog>
  )
})

test('Dialog Shown', () => {
  assertSnapshotShallow(<Dialog content={SimpleContent} open />)
})

test('Dialog, backdrop customized', () => {
  assertSnapshotShallow(
    <Dialog
      open
      content={SimpleContent}
      backdropStyles={{ background: 'purple', opacity: 1 }}
    >
      <Button>🥑</Button>
    </Dialog>
  )
})

test('Dialog opens on click', () => {
  const dialog = mountWithTheme(
    <Dialog content={SimpleContent}>
      <Button>Open Modal</Button>
    </Dialog>
  )

  expect(dialog.find(ModalPortal).exists()).toBeFalsy()

  const button = dialog.find(Button)
  expect(button.exists()).toBeTruthy()
  button.simulate('click')

  expect(dialog.find(ModalPortal).exists()).toBeTruthy()

  const backdrop = dialog.find(ModalBackdrop)
  expect(backdrop.exists()).toEqual(true)
  backdrop.simulate('click')

  //
  // @TODO - Deal with animation timing
  //
  // expect(dialog.find(ModalContainer).exists()).toBeFalsy()
})

test('contains the content passed to it', () => {
  const dialog = mountWithTheme(
    <Dialog content={SimpleContent}>
      <Button>Open Modal</Button>
    </Dialog>
  )

  const button = dialog.find(Button)
  expect(button.exists()).toBeTruthy()
  button.simulate('click') // Click to open
  expect(dialog.contains(SimpleContent)).toBeTruthy()
})

describe('Dialog Styling', () => {
  const dialog = mountWithTheme(
    <Dialog
      open
      content={SimpleContent}
      backdropStyles={{ backgroundColor: 'pink' }}
      surfaceStyles={{ backgroundColor: 'purple' }}
    >
      <Button>Open Modal</Button>
    </Dialog>
  )

  test('Dialog applies the backdrop styles', () => {
    const backdrop = dialog.find(ModalBackdrop)
    expect(backdrop.props().style).toEqual({ backgroundColor: 'pink' })
  })

  test('Dialog applies the surface styles', () => {
    const surface = dialog.find(ModalSurface)
    expect(surface.props().style).toEqual({ backgroundColor: 'purple' })
  })
})

test('Confirmation Dialog, Shown', () => {
  assertSnapshotShallow(
    <Dialog
      open
      content={
        <>
          <ModalHeader>
            <Heading>Are you sure you want to delete "Stuff"?</Heading>
          </ModalHeader>
          <ModalFooter>
            <Button variant="transparent" mr="medium">
              Cancel
            </Button>
            <Button color="danger">Yes, Delete "Stuff"</Button>
          </ModalFooter>
        </>
      }
    >
      <Button variant="outline" color="danger" autoFocus>
        Delete Stuff
      </Button>
    </Dialog>
  )
})
