import 'jest-styled-components'
import * as React from 'react'
import { mountWithTheme } from '../../../test/utils/create_with_theme'
import { Button } from '../Button'
import { ModalBackdrop } from '../Modal/ModalBackdrop'
import { SimpleContent } from './overlay.test.helpers'
import { Popover } from './Popover'

describe('Popover', () => {
  test('opens on click', () => {
    const popover = mountWithTheme(
      <Popover content={SimpleContent}>
        {(onClick, ref) => (
          <Button innerRef={ref} onClick={onClick}>
            Test
          </Button>
        )}
      </Popover>
    )

    // Verify hidden
    expect(popover.contains(SimpleContent)).toBeFalsy()

    const trigger = popover.find(Button)
    trigger.simulate('click')

    // Find content
    expect(popover.contains(SimpleContent)).toBeTruthy()

    const backdrop = popover.find(ModalBackdrop)
    backdrop.simulate('click')

    expect(popover.find(SimpleContent).exists()).toBeFalsy()
  })

  test('contains the content passed to it', () => {
    const popover = mountWithTheme(
      <Popover content={SimpleContent}>
        {(onClick, ref) => (
          <Button innerRef={ref} onClick={onClick}>
            Test
          </Button>
        )}
      </Popover>
    )
    const trigger = popover.find(Button)
    trigger.simulate('click')
    expect(popover.contains(SimpleContent)).toBeTruthy()
  })

  test('stopPropagation works - event on container is not called', () => {
    const mockContainerOnClick = jest.fn()

    const popover = mountWithTheme(
      <div onClick={mockContainerOnClick}>
        <Popover content={SimpleContent} stopPropagation>
          {(onClick, ref) => (
            <Button innerRef={ref} onClick={onClick}>
              Test
            </Button>
          )}
        </Popover>
      </div>
    )
    const trigger = popover.find(Button)
    trigger.simulate('click')
    expect(popover.contains(SimpleContent)).toBeTruthy()
    expect(mockContainerOnClick).not.toHaveBeenCalled()
  })
})
