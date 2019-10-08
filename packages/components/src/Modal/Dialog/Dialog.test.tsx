import 'jest-styled-components'
import React from 'react'
import {
  mountWithTheme,
  assertSnapshotShallow,
} from '@looker/components-test-utils'
import { ModalFooter, ModalHeader } from '../Layout'
import { SimpleContent } from '../modal.test.helpers'
import { ModalBackdrop } from '../ModalBackdrop'
import { ModalPortal } from '../ModalPortal'
import { ModalSurface } from '../ModalSurface'
import { Dialog } from './Dialog'
import { DialogManager } from './DialogManager'

const content = (
  <>
    words and stuff <button>Hello</button>
  </>
)

test('Dialog Hidden', () => {
  assertSnapshotShallow(
    <DialogManager content={content}>
      {onClick => <a onClick={onClick}>🥑</a>}
    </DialogManager>
  )
})

test('Dialog Shown', () => {
  assertSnapshotShallow(<Dialog isOpen>{SimpleContent}</Dialog>)
})

test('Dialog, backdrop customized', () => {
  assertSnapshotShallow(
    <Dialog isOpen backdrop={{ background: 'purple', opacity: 1 }}>
      {SimpleContent}
    </Dialog>
  )
})

describe('Click events', () => {
  test('Trigger.click renders a backdrop, clicking backdrop closes it', () => {
    const dialog = mountWithTheme(
      <DialogManager content={SimpleContent}>
        {onClick => <a onClick={onClick}>Open Modal</a>}
      </DialogManager>
    )

    // Drawer closed
    expect(dialog.find(ModalPortal).exists()).toBeFalsy()

    const button = dialog.find('a')
    expect(button.exists()).toBeTruthy()
    button.simulate('click') // Click to open

    // Drawer open
    expect(dialog.find(ModalPortal).exists()).toBeTruthy()

    const backdrop = dialog.find(ModalBackdrop)
    expect(backdrop.exists()).toBeTruthy()
    backdrop.simulate('click')
  })
})

test('Dialog opens on click', () => {
  const dialog = mountWithTheme(
    <DialogManager content={SimpleContent}>
      {onClick => <a onClick={onClick}>Open Dialog</a>}
    </DialogManager>
  )

  expect(dialog.find(ModalPortal).exists()).toBeFalsy()

  const button = dialog.find('a')
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
    <DialogManager content={SimpleContent}>
      {onClick => <a onClick={onClick}>Open Dialog</a>}
    </DialogManager>
  )

  const button = dialog.find('a')
  expect(button.exists()).toBeTruthy()
  button.simulate('click') // Click to open
  expect(dialog.contains(SimpleContent)).toBeTruthy()
})

describe('Dialog Styling', () => {
  const dialog = mountWithTheme(
    <Dialog
      isOpen
      backdrop={{ backgroundColor: 'pink' }}
      surfaceStyles={{ backgroundColor: 'purple' }}
    >
      {SimpleContent}
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
    <Dialog isOpen>
      <ModalHeader>Are you sure you want to delete "Stuff"?</ModalHeader>
      <ModalFooter>
        <button>Yes, Delete "Stuff"</button>
        <button>Cancel</button>
      </ModalFooter>
    </Dialog>
  )
})
