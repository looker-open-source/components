import 'jest-styled-components'
import * as React from 'react'
import { Button } from '../Button'
import {
  assertClosed,
  assertOpen,
  returnTriggerAndOverlay,
  SimpleContent,
} from './overlay.test.helpers'
import { Popover, PopoverProps } from './Popover'

const TestPopover: React.SFC<PopoverProps> = ({ ...props }) => (
  <Popover {...props}>
    <Button>Trigger</Button>
  </Popover>
)

describe('Popover', () => {
  test('opens on click', () => {
    const [popover, trigger] = returnTriggerAndOverlay(
      <TestPopover content={SimpleContent} />
    )
    trigger.simulate('click')
    assertOpen(popover)
    trigger.simulate('click')
    assertClosed(popover)
  })

  test('contains the content passed to it', () => {
    const [popover, trigger] = returnTriggerAndOverlay(
      <TestPopover content={SimpleContent} />
    )
    trigger.simulate('click')
    assertOpen(popover)
    expect(popover.contains(SimpleContent)).toBeTruthy()
  })
})
