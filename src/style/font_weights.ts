import { FontWeightProps } from 'styled-system'

export type Bold = 'bold'
export type ExtraBold = 'extraBold'
export type Light = 'light'
export type Normal = 'normal'
export type SemiBold = 'semiBold'

export type FontWeights = Bold | ExtraBold | Light | Normal | SemiBold

export type FontWeightRamp = Record<FontWeights, number>

export const fontWeights: FontWeightRamp = {
  bold: 700,
  extraBold: 600,
  light: 300,
  normal: 400,
  semiBold: 600,
}

export type LensFontWeightProps = { [P in keyof FontWeightProps]: FontWeights }
