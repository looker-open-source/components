import { ReactWrapper } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../test/utils/snapshot'
import { Button } from '../Button'
import {
  mouseEventSimulator,
  returnTriggerAndOverlay,
} from './overlay.test.helpers'
import { Tooltip, TooltipProps } from './Tooltip'

const TestTooltip: React.SFC<TooltipProps> = ({ ...props }) => (
  <Tooltip {...props}>
    <Button>Trigger</Button>
  </Tooltip>
)

export const assertOverlayState = (
  overlay: ReactWrapper,
  content: string,
  open: boolean = true
) => {
  expect(overlay.contains(content)).toEqual(open)
}

describe('Tooltip', () => {
  test('opens on mouseover', () => {
    const [popover, trigger] = returnTriggerAndOverlay(
      <TestTooltip content="Hello world" />
    )
    trigger.simulate('mouseover', mouseEventSimulator)
    assertOverlayState(popover, 'Hello world')
    trigger.simulate('mouseout', mouseEventSimulator)
    assertOverlayState(popover, 'Hello world', false)
  })

  test('contains the content passed to it', () => {
    const [popover, trigger] = returnTriggerAndOverlay(
      <TestTooltip content="Hello world" />
    )
    trigger.simulate('mouseover', mouseEventSimulator)
    assertOverlayState(popover, 'Hello world')
    expect(popover.contains('Hello world')).toBeTruthy()
  })

  test('Generates a simple Tooltip', () => {
    assertSnapshot(
      <Tooltip content="Hello world" open>
        <Button>Example</Button>
      </Tooltip>
    )
  })
})
