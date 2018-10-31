import { ReactWrapper } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { mountWithTheme } from '../../../test/utils/create_with_theme'
import { assertSnapshot } from '../../../test/utils/snapshot'
import { Overlay, OverlayEvent } from './Overlay'

const SimpleContent = () => <div>Simple Overlay</div>
const simpleContentFactory = () => <SimpleContent />

const SimpleOverlay: React.SFC<{ trigger?: OverlayEvent }> = ({ ...props }) => (
  <Overlay overlayContentFactory={simpleContentFactory} trigger={props.trigger}>
    <button>Trigger</button>
  </Overlay>
)

const returnTriggerAndOverlay = (trigger?: OverlayEvent) => {
  const overlay = mountWithTheme(<SimpleOverlay trigger={trigger} />)
  return [overlay, overlay.find('button')]
}

const assertOverlayOpen = (overlay: ReactWrapper, open: boolean) => {
  expect(overlay.contains(<SimpleContent />)).toEqual(open)
}

describe('Overlay', () => {
  test('Generates a simple Overlay', () => {
    assertSnapshot(<SimpleOverlay />)
  })

  describe('trigger: hover', () => {
    let overlay: ReactWrapper
    let trigger: ReactWrapper
    beforeEach(() => ([overlay, trigger] = returnTriggerAndOverlay()))
    afterEach(() => overlay.unmount())

    test('opens & closes the overlay on hover', () => {
      assertOverlayOpen(overlay, false)
      trigger.simulate('mouseover')
      assertOverlayOpen(overlay, true)
      trigger.simulate('mouseout', {
        currentTarget: {},
        relatedTarget: document.body,
      })
      assertOverlayOpen(overlay, false)
    })

    test('mouseout the SimpleOverlayContent closes on hover', () => {
      assertOverlayOpen(overlay, false)
      trigger.simulate('mouseover')
      assertOverlayOpen(overlay, true)
      overlay.find(SimpleContent).simulate('mouseout', {
        currentTarget: {},
        relatedTarget: document.body,
      })
      assertOverlayOpen(overlay, false)
    })

    test('overlay opens & closes on focus', () => {
      assertOverlayOpen(overlay, false)
      trigger.simulate('focus')
      assertOverlayOpen(overlay, true)
      trigger.simulate('blur')
      assertOverlayOpen(overlay, false)
    })
  })

  describe('trigger: click', () => {
    let overlay: ReactWrapper
    let trigger: ReactWrapper
    beforeEach(() => ([overlay, trigger] = returnTriggerAndOverlay('click')))
    afterEach(() => overlay.unmount())

    test('Trigger click opens and closes the overlay', () => {
      assertOverlayOpen(overlay, false)
      trigger.simulate('click')
      assertOverlayOpen(overlay, true)
      trigger.simulate('click')
      assertOverlayOpen(overlay, false)
    })

    test('Trigger click renders a backdrop, clicking backdrop closes it', () => {
      assertOverlayOpen(overlay, false)
      trigger.simulate('click')
      const backdrop = overlay.find({ position: 'fixed' }).first()
      expect(backdrop.exists()).toEqual(true)
      backdrop.simulate('click')
      assertOverlayOpen(overlay, false)
    })
  })
})
