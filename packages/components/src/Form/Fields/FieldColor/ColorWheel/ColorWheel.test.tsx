import 'jest-styled-components'
import React from 'react'
import { assertSnapshot } from 'looker-components-test-utils'
import { ColorWheel } from './ColorWheel'

test('Color wheel default ', () => {
  assertSnapshot(<ColorWheel />)
})

test('Color wheel with h, s, v defined ', () => {
  assertSnapshot(<ColorWheel hue={260} saturation={0.5} value={1} />)
})

test('Color wheel with h, s, v, size defined ', () => {
  assertSnapshot(<ColorWheel hue={260} saturation={0.5} value={1} size={400} />)
})
