import {
  snapshotTestTextComponent,
  snapshotTestTextComponentFontRamp,
  snapshotTestTextComponentFontWeight,
  snapshotTestTextComponentTransform,
  snapshotTestTextComponentVariant,
  snapshotTestTextComponentWrap,
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

test('A Code component with variant', () => {
  snapshotTestTextComponentVariant(Code)
})

test('A Code component text transformed', () => {
  snapshotTestTextComponentTransform(Code)
})

test('A Code component wrapped', () => {
  snapshotTestTextComponentWrap(Code)
})
