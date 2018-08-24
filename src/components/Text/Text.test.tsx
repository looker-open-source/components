import { Text } from './Text'

import {
  snapshotTestTextComponent,
  snapshotTestTextComponentAlign,
  snapshotTestTextComponentFontRamp,
  snapshotTestTextComponentFontWeight,
  snapshotTestTextComponentTransform,
  snapshotTestTextComponentTruncate,
  snapshotTestTextComponentVariant,
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

test('A Text component tuncated', () => {
  snapshotTestTextComponentTruncate(Text)
})

test('A Text component with variant', () => {
  snapshotTestTextComponentVariant(Text)
})

test('A Text component transformed', () => {
  snapshotTestTextComponentTransform(Text)
})

test('A Text component aligned', () => {
  snapshotTestTextComponentAlign(Text)
})
