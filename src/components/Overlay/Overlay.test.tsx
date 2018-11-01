import { ReactWrapper } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { mountWithTheme } from '../../../test/utils/create_with_theme'
import { assertSnapshot } from '../../../test/utils/snapshot'
import { Overlay, OverlayEvent } from './Overlay'

const SimpleContent = () => <div>Simple Overlay</div>
const simpleContentFactory = () => <SimpleContent />

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

const returnTriggerAndOverlay = ({ ...props }: OverlayTestProps) => {
  const overlay = mountWithTheme(<SimpleOverlay {...props} />)
  return [overlay, overlay.find('button')]
}

const assertOverlayOpen = (overlay: ReactWrapper, open: boolean) => {
  expect(overlay.contains(<SimpleContent />)).toEqual(open)
}

describe('Overlay', () => {
  test('Generates a simple Overlay', () => {
    assertSnapshot(<SimpleOverlay />)
  })

  describe('showImmediately', () => {
    let overlay: ReactWrapper
    beforeEach(() =>
      ([overlay] = returnTriggerAndOverlay({
        showImmediately: true,
        trigger: 'click',
      })))
    afterEach(() => overlay.unmount())

    test('shows the overlay immediately', () => {
      assertOverlayOpen(overlay, true)
    })
  })

  describe('trigger: hover', () => {
    let overlay: ReactWrapper
    let trigger: ReactWrapper
    beforeEach(() => ([overlay, trigger] = returnTriggerAndOverlay({})))
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
    beforeEach(() =>
      ([overlay, trigger] = returnTriggerAndOverlay({
        backdropStyles: { backgroundColor: 'pink' },
        trigger: 'click',
      })))
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
      const backdrop = overlay.find({ position: 'fixed' }).find('div')
      expect(backdrop.exists()).toEqual(true)
      backdrop.simulate('click')
      assertOverlayOpen(overlay, false)
    })

    test('applies the backdrop styles', () => {
      trigger.simulate('click')
      assertOverlayOpen(overlay, true)
      const backdrop = overlay.find({ position: 'fixed' }).find('div')
      expect(backdrop.props().style).toEqual({ backgroundColor: 'pink' })
      trigger.simulate('click')
      assertOverlayOpen(overlay, false)
    })
  })
})
