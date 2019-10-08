import { toPerc } from './math_utils'

describe('math_utils', () => {
  const correctValues = [60, 24, 10, 13, 25]
  test('toPerc', () => {
    ;[[60, 100], [60, 255], [25, 255], [32, 255], [96, 384]].map(
      (values, index) => {
        expect(toPerc(values[0], values[1])).toBe(correctValues[index])
      }
    )
  })
})
