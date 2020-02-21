/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

// import { ReactWrapper } from 'enzyme'
import 'jest-styled-components'
import React from 'react'
import {
  mountWithTheme,
  assertSnapshotShallow,
} from '@looker/components-test-utils'

import { Box } from '../Layout/Box'
import { Button } from '../Button'
import { OverlaySurface } from '../Overlay/OverlaySurface'
import { Popover } from '../Popover'
import { Tooltip } from './Tooltip'
import { TooltipContent } from './TooltipContent'
import { mouseEventSimulator } from './tooltip.test.helpers'

describe('Tooltip', () => {
  let rafSpy: jest.SpyInstance<number, [FrameRequestCallback]>

  beforeEach(() => {
    rafSpy = jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((cb: any) => cb())
  })

  afterEach(() => {
    rafSpy.mockRestore()
  })

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
      <Tooltip content="Hello world" width="20rem" textAlign="right">
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

    const content = surface.find(TooltipContent)
    expect(content.props().width).toEqual('20rem')
    expect(content.props().textAlign).toEqual('right')
  })

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
