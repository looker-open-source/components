import 'jest-styled-components'
import * as React from 'react'
import { Button } from '../Button'
import {
  assertClosed,
  assertOpen,
  returnTriggerAndOverlay,
  SimpleContent,
} from './overlay.test.helpers'
import { Popover } from './Popover'

describe('Popover', () => {
  test('opens on click', () => {
    const [popover, trigger] = returnTriggerAndOverlay(
      <Popover content={SimpleContent}>
        {(onClick, ref) => (
          <Button innerRef={ref} onClick={onClick}>
            Test
          </Button>
        )}
      </Popover>
    )
    trigger.simulate('click')
    assertOpen(popover)
    trigger.simulate('click')
    assertClosed(popover)
  })

  test('contains the content passed to it', () => {
    const [popover, trigger] = returnTriggerAndOverlay(
      <Popover content={SimpleContent}>
        {(onClick, ref) => (
          <Button innerRef={ref} onClick={onClick}>
            Test
          </Button>
        )}
      </Popover>
    )
    trigger.simulate('click')
    assertOpen(popover)
    expect(popover.contains(SimpleContent)).toBeTruthy()
  })
})
