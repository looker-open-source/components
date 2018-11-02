import 'jest-styled-components'
import * as React from 'react'
import { Button } from '../Button'
import {
  assertClosed,
  assertOpen,
  mouseEventSimulator,
  returnTriggerAndOverlay,
  SimpleContent,
} from './overlay.test.helpers'
import { RichTooltip, RichTooltipProps } from './RichTooltip'

const TestRichTooltip: React.SFC<RichTooltipProps> = ({ ...props }) => (
  <RichTooltip {...props}>
    <Button>Trigger</Button>
  </RichTooltip>
)

describe('RichTooltip', () => {
  test('opens on mouseover', () => {
    const [popover, trigger] = returnTriggerAndOverlay(
      <TestRichTooltip content={SimpleContent} />
    )
    trigger.simulate('mouseover', mouseEventSimulator)
    assertOpen(popover)
    trigger.simulate('mouseout', mouseEventSimulator)
    assertClosed(popover)
  })

  test('contains the content passed to it', () => {
    const [popover, trigger] = returnTriggerAndOverlay(
      <TestRichTooltip content={SimpleContent} />
    )
    trigger.simulate('mouseover', mouseEventSimulator)
    assertOpen(popover)
    expect(popover.contains(SimpleContent)).toBeTruthy()
  })
})
