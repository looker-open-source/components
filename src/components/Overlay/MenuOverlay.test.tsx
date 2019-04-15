import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshotShallow } from '../../../test/utils/snapshot'
import { Box } from '../Box'
import { Button } from '../Button'
import { MenuOverlay } from './MenuOverlay'

const content = <Box>Hello World</Box>

describe('MenuOverlay', () => {
  test('Normal menu overlay', () => {
    assertSnapshotShallow(
      <MenuOverlay content={content}>
        {(onClick, ref) => (
          <Button onClick={onClick} innerRef={ref}>
            Menu
          </Button>
        )}
      </MenuOverlay>
    )
  })

  test('Normal menu overlay arrow hidden', () => {
    assertSnapshotShallow(
      <MenuOverlay content={content} arrow={false}>
        {(onClick, ref) => (
          <Button onClick={onClick} innerRef={ref}>
            Menu
          </Button>
        )}
      </MenuOverlay>
    )
  })

  test('Open menu overlay with backdrop top=50px', () => {
    assertSnapshotShallow(
      <MenuOverlay content={content} backdropOffset={{ top: '50px' }} isOpen>
        {(onClick, ref) => (
          <Button onClick={onClick} innerRef={ref}>
            Menu
          </Button>
        )}
      </MenuOverlay>
    )
  })

  test('Open menu overlay with pinned content', () => {
    assertSnapshotShallow(
      <MenuOverlay content={content} pin isOpen>
        {(onClick, ref) => (
          <Button onClick={onClick} innerRef={ref}>
            Menu
          </Button>
        )}
      </MenuOverlay>
    )
  })

  test('Open menu overlay with backdrop bottom=50px', () => {
    assertSnapshotShallow(
      <MenuOverlay content={content} backdropOffset={{ bottom: '50px' }} isOpen>
        {(onClick, ref) => (
          <Button onClick={onClick} innerRef={ref}>
            Menu
          </Button>
        )}
      </MenuOverlay>
    )
  })

  test('Open menu overlay with backdrop left=50px', () => {
    assertSnapshotShallow(
      <MenuOverlay content={content} backdropOffset={{ left: '50px' }} isOpen>
        {(onClick, ref) => (
          <Button onClick={onClick} innerRef={ref}>
            Menu
          </Button>
        )}
      </MenuOverlay>
    )
  })

  test('Open menu overlay with backdrop right=50px', () => {
    assertSnapshotShallow(
      <MenuOverlay content={content} backdropOffset={{ right: '50px' }} isOpen>
        {(onClick, ref) => (
          <Button onClick={onClick} innerRef={ref}>
            Menu
          </Button>
        )}
      </MenuOverlay>
    )
  })
})
