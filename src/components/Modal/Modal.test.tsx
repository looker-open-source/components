import { mount } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'

import { mountWithTheme } from '../../../test/utils/create_with_theme'
import { assertSnapshotShallow } from '../../../test/utils/snapshot'

import { theme, ThemeProvider } from '../../style'

import { Button } from '../Button'
import { Modal } from './Modal'
import { SimpleContent, SimpleContentSFC } from './modal.test.helpers'

import { ModalBackdrop } from './ModalBackdrop'
import { ModalPortal } from './ModalPortal'

const simpleContentFactory = () => <SimpleContentSFC />

describe('Modal', () => {
  test('Inactive', () => {
    assertSnapshotShallow(<Modal render={simpleContentFactory} />)
  })

  test('Active', () => {
    assertSnapshotShallow(<Modal isOpen render={simpleContentFactory} />)
  })

  test('Inactive w/ wrapped element', () => {
    assertSnapshotShallow(
      <Modal render={simpleContentFactory}>
        <Button>Click Here</Button>
      </Modal>
    )
  })

  test('Active w/ wrapped element', () => {
    assertSnapshotShallow(
      <Modal isOpen render={simpleContentFactory}>
        <Button>Click Here</Button>
      </Modal>
    )
  })

  test('Verify initial state', () => {
    const modal = mount(
      <ThemeProvider theme={theme}>
        <Modal render={simpleContentFactory} />
      </ThemeProvider>
    )

    expect(modal.find(ModalPortal).exists()).toEqual(false)
    expect(modal.contains(SimpleContent)).toBeFalsy()
  })

  test('Verify "open" prop', () => {
    const modal = mount(
      <ThemeProvider theme={theme}>
        <Modal isOpen render={simpleContentFactory} />
      </ThemeProvider>
    )

    expect(modal.find(ModalPortal).exists()).toEqual(true)
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
