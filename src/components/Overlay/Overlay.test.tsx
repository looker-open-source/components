import { ReactWrapper } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../test/utils/snapshot'
import { Overlay, OverlayEvent } from './Overlay'
import {
  assertClosed,
  assertOpen,
  mouseEventSimulator,
  returnTriggerAndOverlay,
  SimpleContentSFC,
} from './overlay.test.helpers'

const simpleContentFactory = () => <SimpleContentSFC />

interface OverlayTestProps {
  backdropStyles?: React.CSSProperties
  showImmediately?: boolean
  trigger?: OverlayEvent
}

const SimpleOverlay: React.SFC<OverlayTestProps> = ({ ...props }) => (
  <Overlay overlayContentFactory={simpleContentFactory} {...props}>
    <button>Trigger</button>
  </Overlay>
)

describe('Overlay', () => {
  test('Generates a simple Overlay', () => {
    assertSnapshot(<SimpleOverlay />)
  })

  describe('showImmediately', () => {
    let overlay: ReactWrapper
    beforeEach(() =>
      ([overlay] = returnTriggerAndOverlay(
        <SimpleOverlay showImmediately trigger="click" />
      )))
    afterEach(() => overlay.unmount())

    test('shows the overlay immediately', () => {
      assertOpen(overlay)
    })
  })

  describe('trigger: hover', () => {
    let overlay: ReactWrapper
    let trigger: ReactWrapper
    beforeEach(() =>
      ([overlay, trigger] = returnTriggerAndOverlay(<SimpleOverlay />)))
    afterEach(() => overlay.unmount())

    test('opens & closes the overlay on hover', () => {
      assertClosed(overlay)
      trigger.simulate('mouseover')
      assertOpen(overlay)
      trigger.simulate('mouseout', mouseEventSimulator)
      assertClosed(overlay)
    })

    test('mouseout the SimpleContent closes on hover', () => {
      assertClosed(overlay)
      trigger.simulate('mouseover')
      assertOpen(overlay)
      overlay.find(SimpleContentSFC).simulate('mouseout', mouseEventSimulator)
      assertClosed(overlay)
    })

    test('overlay opens & closes on focus', () => {
      assertClosed(overlay)
      trigger.simulate('focus')
      assertOpen(overlay)
      trigger.simulate('blur')
      assertClosed(overlay)
    })
  })

  describe('trigger: click', () => {
    let overlay: ReactWrapper
    let trigger: ReactWrapper
    beforeEach(() =>
      ([overlay, trigger] = returnTriggerAndOverlay(
        <SimpleOverlay
          trigger="click"
          backdropStyles={{ backgroundColor: 'pink' }}
        />
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
      const backdrop = overlay.find({ position: 'fixed' }).find('div')
      expect(backdrop.exists()).toEqual(true)
      backdrop.simulate('click')
      assertClosed(overlay)
    })

    test('applies the backdrop styles', () => {
      trigger.simulate('click')
      assertOpen(overlay)
      const backdrop = overlay.find({ position: 'fixed' }).find('div')
      expect(backdrop.props().style).toEqual({ backgroundColor: 'pink' })
      trigger.simulate('click')
      assertClosed(overlay)
    })
  })
})
