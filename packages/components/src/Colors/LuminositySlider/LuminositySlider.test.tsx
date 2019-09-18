import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '@looker/components-test-utils'
import { LuminositySlider } from './LuminositySlider'

describe('LuminositySlider', () => {
  test('default styling', () => {
    assertSnapshot(<LuminositySlider />)
  })
})
