import { ReactWrapper } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../../test/utils/snapshot'

import { mountWithTheme } from '../../../../test/utils/create_with_theme'

import { Button } from '../../Button'
import { Heading } from '../../Heading'
import { ModalFooter, ModalHeader } from '../Layout'
import { SimpleContent } from '../modal.test.helpers'

import { ModalBackdrop } from '../ModalBackdrop'
import { ModalContainer } from '../ModalContainer'
import { ModalSurface } from '../ModalSurface'
import { Dialog } from './Dialog'

test('Dialog Hidden', () => {
  assertSnapshot(
    <Dialog content="words and stuff">
      <Button>🥑</Button>
    </Dialog>
  )
})

test('Dialog Shown', () => {
  assertSnapshot(<Dialog content={SimpleContent} open />)
})

test('Dialog, backdrop customized', () => {
  assertSnapshot(
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

  expect(dialog.find(ModalContainer).exists()).toEqual(false)
  dialog.find('button').simulate('click')
  expect(dialog.find(ModalContainer).exists()).toEqual(true)

  const backdrop = dialog.find(ModalBackdrop)
  expect(backdrop.exists()).toEqual(true)
  backdrop.simulate('click')

  expect(dialog.find(ModalContainer).exists()).toEqual(false)
})

test('contains the content passed to it', () => {
  const dialog = mountWithTheme(
    <Dialog content={SimpleContent}>
      <Button>Open Modal</Button>
    </Dialog>
  )

  dialog.find('button').simulate('click') // Click to open
  expect(dialog.contains(SimpleContent)).toBeTruthy()
})

describe('Dialog Styling', () => {
  let dialog: ReactWrapper
  beforeEach(() =>
    (dialog = mountWithTheme(
      <Dialog
        open
        content={SimpleContent}
        backdropStyles={{ backgroundColor: 'pink' }}
        surfaceStyles={{ backgroundColor: 'purple' }}
      >
        <Button>Open Modal</Button>
      </Dialog>
    )))
  afterEach(() => dialog.unmount())

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
  assertSnapshot(
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
      <Button variant="outline" color="danger">
        Delete Stuff
      </Button>
    </Dialog>
  )
})
