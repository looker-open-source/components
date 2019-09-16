// import { ReactWrapper } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { mountWithTheme } from '../../../test/utils/create_with_theme'
import { assertSnapshotShallow } from '../../../test/utils/snapshot'
import { Box } from '../Box'
import { Button } from '../Button'
import { OverlaySurface } from '../Overlay/OverlaySurface'
import { Popover } from '../Popover'
import { Paragraph } from '../Text'
import { Tooltip } from './Tooltip'
import { mouseEventSimulator } from './tooltip.test.helpers'

describe('Tooltip', () => {
  test('snapshot', () => {
    assertSnapshotShallow(
      <Tooltip content="Hello world" isOpen>
        {(eventHandlers, ref) => (
          <Button ref={ref} {...eventHandlers}>
            Example
          </Button>
        )}
      </Tooltip>
    )
  })

  test('Tooltip can hide its arrow', () => {
    assertSnapshotShallow(
      <Tooltip content="Hello world" arrow={false} isOpen>
        {(eventHandlers, ref) => (
          <Button ref={ref} {...eventHandlers}>
            Example
          </Button>
        )}
      </Tooltip>
    )
  })

  test('trigger: open on mouseover, close on mouseout', () => {
    const tooltip = mountWithTheme(
      <Tooltip content="Hello world">
        {(eventHandlers, ref) => (
          <Button ref={ref} {...eventHandlers}>
            Test
          </Button>
        )}
      </Tooltip>
    )

    const trigger = tooltip.find(Button)

    trigger.simulate('mouseover', mouseEventSimulator)
    const surface = tooltip.find(OverlaySurface)
    expect(surface.exists()).toBeTruthy()

    trigger.simulate('mouseout', mouseEventSimulator)
    const postMouseoutSurface = tooltip.find(OverlaySurface)
    expect(postMouseoutSurface.exists()).toBeFalsy()
  })

  test('close on surface mouseout', () => {
    const tooltip = mountWithTheme(
      <Tooltip content="Hello world" isOpen>
        {(eventHandlers, ref) => (
          <Button ref={ref} {...eventHandlers}>
            Test
          </Button>
        )}
      </Tooltip>
    )

    const surface = tooltip.find(OverlaySurface)
    expect(surface.exists()).toBeTruthy()
    surface.simulate('mouseout', mouseEventSimulator)

    const postMouseoutSurface = tooltip.find(OverlaySurface)
    expect(postMouseoutSurface.exists()).toBeFalsy()
  })

  test('contains content', () => {
    const tooltip = mountWithTheme(
      <Tooltip content="Hello world">
        {(eventHandlers, ref) => (
          <Button ref={ref} {...eventHandlers}>
            Test
          </Button>
        )}
      </Tooltip>
    )

    const trigger = tooltip.find(Button)
    trigger.simulate('mouseover', mouseEventSimulator)
    const surface = tooltip.find(OverlaySurface)
    expect(surface.text()).toEqual('Hello world')
  })

  test('open initially, collapse on mouseout', () => {
    const tooltip = mountWithTheme(
      <Tooltip content="Hello world" isOpen>
        {(eventHandlers, ref) => (
          <Button ref={ref} {...eventHandlers}>
            Test
          </Button>
        )}
      </Tooltip>
    )

    const surface = tooltip.find(OverlaySurface)
    expect(surface.exists()).toBeTruthy()

    const trigger = tooltip.find(Button)
    trigger.simulate('mouseout', mouseEventSimulator)

    const postMouseoutSurface = tooltip.find(OverlaySurface)
    expect(postMouseoutSurface.exists()).toBeFalsy()
  })

  test('supports styling props', () => {
    const tooltip = mountWithTheme(
      <Tooltip content="Hello world" maxWidth="20rem" textAlign="right">
        {(eventHandlers, ref) => (
          <Button ref={ref} {...eventHandlers}>
            Test
          </Button>
        )}
      </Tooltip>
    )

    const trigger = tooltip.find(Button)

    trigger.simulate('mouseover', mouseEventSimulator)

    const surface = tooltip.find(OverlaySurface)
    expect(surface.exists()).toBeTruthy()

    const paragraph = surface.find(Paragraph)
    expect(paragraph.props().maxWidth).toEqual('20rem')
    expect(paragraph.props().textAlign).toEqual('right')
  })

  // Proves LENS-119 is invalid
  test('tooltip can exceed bounds of containing overlay', () => {
    const tooltip = (
      <Tooltip content="Great knowledge here!" isOpen>
        {(eventHandlers, ref) => (
          <Box ref={ref} {...eventHandlers}>
            I wish I knew more about this...
          </Box>
        )}
      </Tooltip>
    )

    const popover = (
      <Popover isOpen content={tooltip}>
        {(onClick, ref) => (
          <Button onClick={onClick} ref={ref}>
            Test
          </Button>
        )}
      </Popover>
    )

    assertSnapshotShallow(popover)
  })
})
