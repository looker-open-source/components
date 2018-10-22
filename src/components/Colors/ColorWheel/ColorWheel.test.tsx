import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../../test/utils/snapshot'
import { ColorWheel } from './ColorWheel'

test('Color wheel default ', () => {
  assertSnapshot(<ColorWheel />)
})

test('Color wheel with h, s, v defined ', () => {
  assertSnapshot(<ColorWheel hue={260} saturation={0.5} value={1} />)
})
