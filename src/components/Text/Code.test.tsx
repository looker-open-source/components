import {
  snapshotTestTextComponent,
  snapshotTestTextComponentAlign,
  snapshotTestTextComponentFontRamp,
  snapshotTestTextComponentFontWeight,
  snapshotTestTextComponentTransform,
  snapshotTestTextComponentTruncate,
  snapshotTestTextComponentVariant
} from '../../../test/text'
import { Code } from './Code'

test('A default Code component', () => {
  snapshotTestTextComponent(Code)
})

test('A Code component resized', () => {
  snapshotTestTextComponentFontRamp(Code)
})

test('A Codet component weight', () => {
  snapshotTestTextComponentFontWeight(Code)
})

test('A Text component tuncated', () => {
  snapshotTestTextComponentTruncate(Code)
})

test('A Code component with variant', () => {
  snapshotTestTextComponentVariant(Code)
})

test('A Code component transformed', () => {
  snapshotTestTextComponentTransform(Code)
})

test('A Code component Aligned', () => {
  snapshotTestTextComponentAlign(Code)
})
