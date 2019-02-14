import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshotShallow } from '../../../test/utils/snapshot'
import { Box } from '../Box'
import { Button } from '../Button'
import { MenuOverlay, MenuOverlayProps } from './MenuOverlay'

const content = <Box>Hello World</Box>

const TestMenuOverlay: React.SFC<MenuOverlayProps> = ({ ...props }) => (
  <MenuOverlay {...props}>
    <Button>Trigger</Button>
  </MenuOverlay>
)

describe('MenuOverlay', () => {
  test('Normal menu overlay', () => {
    assertSnapshotShallow(<TestMenuOverlay content={content} />)
  })

  test('Open menu overlay with backdrop top=50px', () => {
    assertSnapshotShallow(
      <TestMenuOverlay content={content} backdrop={{ top: '50px' }} open />
    )
  })

  test('Open menu overlay with backdrop bottom=50px', () => {
    assertSnapshotShallow(
      <TestMenuOverlay content={content} backdrop={{ bottom: '50px' }} open />
    )
  })

  test('Open menu overlay with backdrop left=50px', () => {
    assertSnapshotShallow(
      <TestMenuOverlay content={content} backdrop={{ left: '50px' }} open />
    )
  })

  test('Open menu overlay with backdrop right=50px', () => {
    assertSnapshotShallow(
      <TestMenuOverlay content={content} backdrop={{ right: '50px' }} open />
    )
  })
})
