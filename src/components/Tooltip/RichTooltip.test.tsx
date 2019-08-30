import 'jest-styled-components'
import * as React from 'react'
import { mountWithTheme } from '../../../test/utils/create_with_theme'
import { Button } from '../Button'
import { RichTooltip } from './RichTooltip'
import {
  assertClosed,
  assertOpen,
  mouseEventSimulator,
  SimpleContent,
} from './tooltip.test.helpers'

describe('RichTooltip', () => {
  test('opens on mouseover', () => {
    const popover = mountWithTheme(
      <RichTooltip content={SimpleContent}>
        {(eventHandlers, ref) => (
          <Button ref={ref} {...eventHandlers}>
            Test
          </Button>
        )}
      </RichTooltip>
    )
    const trigger = popover.find(Button)
    trigger.simulate('mouseover', mouseEventSimulator)
    assertOpen(popover)
    trigger.simulate('mouseout', mouseEventSimulator)
    assertClosed(popover)
  })

  test('contains the content passed to it', () => {
    const popover = mountWithTheme(
      <RichTooltip content={SimpleContent}>
        {(eventHandlers, ref) => (
          <Button ref={ref} {...eventHandlers}>
            Test
          </Button>
        )}
      </RichTooltip>
    )
    const trigger = popover.find(Button)
    trigger.simulate('mouseover', mouseEventSimulator)
    assertOpen(popover)
    expect(popover.contains(SimpleContent)).toBeTruthy()
  })
})
