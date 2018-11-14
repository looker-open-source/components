import 'jest-styled-components'
import * as React from 'react'
import { assertSnapshot } from '../../../test/utils/snapshot'
import { SpinnerMarker } from './SpinnerMarker'

describe('A SpinnerMarker', () => {
  test('A default SpinnerMarker', () => {
    assertSnapshot(
      <SpinnerMarker
        rotateAngle={20}
        circleSize={200}
        speed={1000}
        delay={200}
      />
    )
  })

  test('A SpinnerMarker radius can be changed', () => {
    assertSnapshot(
      <SpinnerMarker
        rotateAngle={20}
        circleSize={200}
        speed={1000}
        delay={200}
        radius={200}
      />
    )
  })

  test('A SpinnerMarker color can be changed', () => {
    assertSnapshot(
      <SpinnerMarker
        rotateAngle={20}
        circleSize={200}
        speed={1000}
        delay={200}
        color={'blue'}
      />
    )
  })
})
