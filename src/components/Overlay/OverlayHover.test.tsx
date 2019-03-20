import 'jest-styled-components'
import * as React from 'react'
import { mountWithTheme } from '../../../test/utils/create_with_theme'
import { assertSnapshot } from '../../../test/utils/snapshot'
import { SimpleContentSFC } from './overlay.test.helpers'
import { OverlayHover } from './OverlayHover'

interface OverlayTestProps {
  isOpen?: boolean
}

const SimpleOverlayHover: React.SFC<OverlayTestProps> = ({ ...props }) => (
  <OverlayHover {...props}>{SimpleContentSFC}</OverlayHover>
)

describe('Overlay', () => {
  test('Generates a simple instance', () => {
    assertSnapshot(<SimpleOverlayHover isOpen />)
  })

  test('Generates a simple instanced, closed', () => {
    assertSnapshot(<SimpleOverlayHover />)
  })

  test('Contains content', () => {
    const content = <div>simple content</div>
    const contentFC = () => content
    const overlay = mountWithTheme(
      <OverlayHover isOpen>{contentFC}</OverlayHover>
    )

    expect(overlay.contains(content)).toBeTruthy()
  })
})
