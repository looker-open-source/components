/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import 'jest-styled-components'
import React from 'react'
import {
  mountWithTheme,
  assertSnapshotShallow,
} from '@looker/components-test-utils'
import { ModalFooter, ModalHeader } from '../Layout'
import { SimpleContent } from '../modal.test.helpers'
import { ModalBackdrop } from '../ModalBackdrop'
import { InterstitialPortal } from '../../Interstitial/InterstitialPortal'
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
    expect(dialog.find(InterstitialPortal).exists()).toBeFalsy()

    const button = dialog.find('a')
    expect(button.exists()).toBeTruthy()
    button.simulate('click') // Click to open

    // Drawer open
    expect(dialog.find(InterstitialPortal).exists()).toBeTruthy()

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

  expect(dialog.find(InterstitialPortal).exists()).toBeFalsy()

  const button = dialog.find('a')
  expect(button.exists()).toBeTruthy()
  button.simulate('click')

  expect(dialog.find(InterstitialPortal).exists()).toBeTruthy()

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
