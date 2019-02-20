import { ReactWrapper } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../test/utils/snapshot'
import { OverlayHover } from './OverlayHover'

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
  open?: boolean
}

const SimpleOverlay: React.SFC<OverlayTestProps> = ({ ...props }) => (
  <OverlayHover render={simpleContentFactory} {...props}>
    <button>Trigger</button>
  </OverlayHover>
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

    test('overlay opens & closes on focus', () => {
      assertClosed(overlay)
      trigger.simulate('focus')
      assertOpen(overlay)
      trigger.simulate('blur')
      assertClosed(overlay)
    })
  })
})
