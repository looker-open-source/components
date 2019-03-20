import 'jest-styled-components'
import * as React from 'react'
import { mountWithTheme } from '../../../test/utils/create_with_theme'
import {
  assertSnapshot,
  assertSnapshotShallow,
} from '../../../test/utils/snapshot'
import { ModalBackdrop } from '../Modal'
import { Overlay } from './Overlay'
import { SimpleContentSFC } from './overlay.test.helpers'

describe('Overlay', () => {
  test('Generates a simple Overlay', () => {
    assertSnapshotShallow(
      <Overlay isOpen backdropStyles={{ backgroundColor: 'pink' }}>
        {SimpleContentSFC}
      </Overlay>
    )
  })

  test('Generates a closed Overlay', () => {
    assertSnapshot(<Overlay>{SimpleContentSFC}</Overlay>)
  })

  test('Overlay contains content', () => {
    const content = <div>simple content</div>
    const contentFC = () => content
    const overlay = mountWithTheme(<Overlay isOpen>{contentFC}</Overlay>)

    expect(overlay.contains(content)).toBeTruthy()
  })

  test('Overlay backdrop styles applied', () => {
    const content = <div>simple content</div>
    const contentFC = () => content
    const overlay = mountWithTheme(
      <Overlay isOpen backdropStyles={{ backgroundColor: 'pink' }}>
        {contentFC}
      </Overlay>
    )

    const backdrop = overlay.find(ModalBackdrop)
    expect(backdrop.props().style).toEqual({
      backgroundColor: 'pink',
    })
  })
})
