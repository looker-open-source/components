import { ReactWrapper } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../test/utils/snapshot'
import { Button } from '../Button'
import { ModalBackdrop } from '../Modal'
import { Overlay } from './Overlay'
import {
  assertClosed,
  assertOpen,
  returnTriggerAndOverlay,
  SimpleContentSFC,
} from './overlay.test.helpers'

const simpleContentFactory = () => <SimpleContentSFC />

interface OverlayTestProps {
  backdropStyles?: React.CSSProperties
  open?: boolean
}

const SimpleOverlay: React.SFC<OverlayTestProps> = ({ ...props }) => (
  <Overlay render={simpleContentFactory} {...props}>
    <Button>Trigger</Button>
  </Overlay>
)

describe('Overlay', () => {
  test('Generates a simple Overlay', () => {
    assertSnapshot(<SimpleOverlay />)
  })

  describe('open', () => {
    let overlay: ReactWrapper
    beforeEach(() =>
      ([overlay] = returnTriggerAndOverlay(<SimpleOverlay open />)))
    afterEach(() => overlay.unmount())

    test('shows the overlay immediately', () => {
      assertOpen(overlay)
    })
  })

  describe('trigger: click', () => {
    let overlay: ReactWrapper
    let trigger: ReactWrapper
    beforeEach(() =>
      ([overlay, trigger] = returnTriggerAndOverlay(
        <SimpleOverlay backdropStyles={{ backgroundColor: 'pink' }} />
      )))
    afterEach(() => overlay.unmount())

    test('Trigger click opens and closes the overlay', () => {
      assertClosed(overlay)
      trigger.simulate('click')
      assertOpen(overlay)
      trigger.simulate('click')
      assertClosed(overlay)
    })

    test('Trigger click renders a backdrop, clicking backdrop closes it', () => {
      assertClosed(overlay)
      trigger.simulate('click')
      const backdrop = overlay.find(ModalBackdrop)
      expect(backdrop.exists()).toEqual(true)
      backdrop.simulate('click')
      assertClosed(overlay)
    })

    test('applies the backdrop styles', () => {
      trigger.simulate('click')
      assertOpen(overlay)
      const backdrop = overlay.find(ModalBackdrop)
      expect(backdrop.props().style).toEqual({ backgroundColor: 'pink' })
      trigger.simulate('click')
      assertClosed(overlay)
    })
  })
})
