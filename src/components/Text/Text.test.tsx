import { Text } from './Text'

import {
  snapshotTestTextComponent,
  snapshotTestTextComponentFontRamp,
  snapshotTestTextComponentFontWeight,
  snapshotTestTextComponentTransform,
  snapshotTestTextComponentVariant,
  snapshotTestTextComponentWrap,
} from '../../../test/text'

test('A default Text component', () => {
  snapshotTestTextComponent(Text)
})

test('A Text component resized', () => {
  snapshotTestTextComponentFontRamp(Text)
})

test('A Text component weight', () => {
  snapshotTestTextComponentFontWeight(Text)
})

test('A Text component with variant', () => {
  snapshotTestTextComponentVariant(Text)
})

test('A Text component text transformed', () => {
  snapshotTestTextComponentTransform(Text)
})

test('A Text component wrapped', () => {
  snapshotTestTextComponentWrap(Text)
})
