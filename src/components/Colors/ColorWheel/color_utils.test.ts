import { mappableArray } from '../../../javascript/utilities'
import { isValidColor } from './color_utils'

describe('color_utils', () => {
  const testColor = (pred: boolean) => (color: string) => {
    test(`${color}`, () => {
      expect(isValidColor(color)).toBe(pred)
    })
  }

  const rand = (num: number) => Math.floor(Math.random() * num)
  const randChar = (str: string) => str[rand(str.length)]
  const randString = (chars: string, size: number) =>
    '#'.concat(
      mappableArray(size)
        .map(() => randChar(chars))
        .join('')
    )

  describe('Valid CSS word colors', () => {
    ;[
      'red',
      'green',
      'papayawhip',
      'white',
      'aqua',
      'ivory',
      'cadetblue',
      'thistle',
      'yellow',
      'olive',
      'snow',
    ].forEach(testColor(true))
  })

  describe('Invalid CSS word colors', () => {
    ;[
      'Lipstickred',
      'applegreen',
      'papayawhipsmoothie',
      'offwhite',
      'aquaman',
      'ivorytower',
      'armygreen',
      'thistleandweeds',
      'yellowbanana',
      'oliveoil',
      'snowwhite',
    ].forEach(testColor(false))
  })

  describe('Valid 3 string RGB colors', () => {
    mappableArray(20)
      .map(() => randString('0123456789ABCDEF', 3))
      .map(testColor(true))
  })

  describe('Inalid 3 string RGB colors', () => {
    mappableArray(20)
      .map(() => randString('GHIJKLMNOPpo_+!&^%$', 3))
      .map(testColor(false))
  })

  describe('Valid 6 string RGB colors', () => {
    mappableArray(20)
      .map(() => randString('0123456789ABCDEF', 6))
      .map(testColor(true))
  })

  describe('Invalid 6 string RGB colors', () => {
    mappableArray(20)
      .map(() => randString('GHIJKLMNOPpo_+!&^%$', 6))
      .map(testColor(false))
  })
})
