import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../../test/utils/snapshot'
import { LuminositySlider } from './LuminositySlider'

describe('LuminositySlider', () => {
  test('default styling', () => {
    assertSnapshot(<LuminositySlider />)
  })
})
