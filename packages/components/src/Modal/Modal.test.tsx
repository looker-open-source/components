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

import { mount } from 'enzyme'
import 'jest-styled-components'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
  mountWithTheme,
  assertSnapshotShallow,
} from '@looker/components-test-utils'
import { theme } from '@looker/design-tokens'
import { InterstitialPortal } from '../Interstitial/InterstitialPortal'
import { Modal } from './Modal'
import { SimpleContent, SimpleContentSFC } from './modal.test.helpers'
import { ModalBackdrop } from './ModalBackdrop'

const simpleContentFactory = () => <SimpleContentSFC />

describe('Modal', () => {
  test('Inactive', () => {
    assertSnapshotShallow(<Modal render={simpleContentFactory} />)
  })

  test('Active', () => {
    assertSnapshotShallow(<Modal isOpen render={simpleContentFactory} />)
  })

  test('Inactive w/ wrapped element', () => {
    assertSnapshotShallow(<Modal render={simpleContentFactory} />)
  })

  test('Active w/ wrapped element', () => {
    assertSnapshotShallow(<Modal isOpen render={simpleContentFactory} />)
  })

  test('Verify initial state', () => {
    const modal = mount(
      <ThemeProvider theme={theme}>
        <Modal render={simpleContentFactory} />
      </ThemeProvider>
    )

    expect(modal.find(InterstitialPortal).exists()).toEqual(false)
    expect(modal.contains(SimpleContent)).toBeFalsy()
  })

  test('Verify "open" prop', () => {
    const modal = mount(
      <ThemeProvider theme={theme}>
        <Modal isOpen render={simpleContentFactory} />
      </ThemeProvider>
    )

    expect(modal.find(InterstitialPortal).exists()).toEqual(true)
    expect(modal.contains(SimpleContent)).toBeTruthy()
  })

  describe('Modal styled', () => {
    const modal = mountWithTheme(
      <Modal
        isOpen
        render={simpleContentFactory}
        backdrop={{ backgroundColor: 'pink' }}
        surfaceStyles={{ backgroundColor: 'purple' }}
      />
    )

    test('Modal applies the backdrop styles', () => {
      const backdrop = modal.find(ModalBackdrop)

      expect(backdrop.exists()).toBeTruthy()

      expect(backdrop.props().style).toEqual({ backgroundColor: 'pink' })
    })
  })
})
