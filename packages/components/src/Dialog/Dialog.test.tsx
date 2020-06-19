/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
  assertSnapshotShallow,
  mountWithTheme,
} from '@looker/components-test-utils'
import { Portal } from '../Portal'
import { Backdrop } from './Backdrop'
import { Dialog } from './Dialog'
import { DialogManager } from './DialogManager'

const simpleContent = (
  <div>
    simple content
    <button>Done</button>
  </div>
)

describe('Dialog', () => {
  test('Inactive', () => {
    assertSnapshotShallow(<Dialog>{simpleContent}</Dialog>)
  })

  test('Active', () => {
    assertSnapshotShallow(<Dialog isOpen>{simpleContent}</Dialog>)
  })

  test('Verify initial state', () => {
    const dialog = mountWithTheme(<Dialog>{simpleContent}</Dialog>)

    expect(dialog.find(Portal).exists()).toEqual(false)
    expect(dialog.contains(simpleContent)).toBeFalsy()
  })

  test('Verify "open" prop', () => {
    const dialog = mountWithTheme(<Dialog isOpen>{simpleContent}</Dialog>)

    expect(dialog.find(Portal).exists()).toEqual(true)
    expect(dialog.contains(simpleContent)).toBeTruthy()
  })

  describe('Dialog styled', () => {
    const dialog = mountWithTheme(
      <Dialog
        isOpen
        backdrop={{ backgroundColor: 'pink' }}
        surfaceStyles={{ backgroundColor: 'purple' }}
      >
        {simpleContent}
      </Dialog>
    )

    test('Dialog applies the backdrop styles', () => {
      const backdrop = dialog.find(Backdrop)

      expect(backdrop.exists()).toBeTruthy()

      expect(backdrop.props().style).toEqual({ backgroundColor: 'pink' })
    })
  })
})

const content = (
  <>
    words and stuff <button>Hello</button>
  </>
)

describe('DialogManager - click events', () => {
  test('inactive', () => {
    assertSnapshotShallow(
      <DialogManager content={content}>
        {(onClick) => <a onClick={onClick}>🥑</a>}
      </DialogManager>
    )
  })

  test('Trigger.click renders a backdrop, clicking backdrop closes it', () => {
    const dialog = mountWithTheme(
      <DialogManager content={simpleContent}>
        {(onClick) => <a onClick={onClick}>Open Dialog</a>}
      </DialogManager>
    )

    // Dialog closed
    expect(dialog.find(Portal).exists()).toBeFalsy()

    const button = dialog.find('a')
    expect(button.exists()).toBeTruthy()
    button.simulate('click') // Click to open

    // Dialog open
    expect(dialog.find(Portal).exists()).toBeTruthy()

    const backdrop = dialog.find(Backdrop)
    expect(backdrop.exists()).toBeTruthy()
    window.document.body.click()
  })
})

test('contains the content passed to it', () => {
  const dialog = mountWithTheme(
    <DialogManager content={simpleContent}>
      {(onClick) => <a onClick={onClick}>Open Dialog</a>}
    </DialogManager>
  )

  const button = dialog.find('a')
  expect(button.exists()).toBeTruthy()
  button.simulate('click') // Click to open
  expect(dialog.contains(simpleContent)).toBeTruthy()
  window.document.body.click()
})
