import { Paragraph } from './Paragraph'
import {
  snapshotTestTextComponent,
  snapshotTestTextComponentAlign,
  snapshotTestTextComponentTransform,
  snapshotTestTextComponentVariant,
  snapshotTestTextComponentTruncate,
  snapshotTestTextComponentFontWeight,
  snapshotTestTextComponentFontRamp
} from '../../../test/text'

test('A default Paragraph component', () => {
  snapshotTestTextComponent(Paragraph)
})

test('A Paragraph component resized', () => {
  snapshotTestTextComponentFontRamp(Paragraph)
})

test('A Paragrapht component weight', () => {
  snapshotTestTextComponentFontWeight(Paragraph)
})

test('A Text component tuncated', () => {
  snapshotTestTextComponentTruncate(Paragraph)
})

test('A Paragraph component with variant', () => {
  snapshotTestTextComponentVariant(Paragraph)
})

test('A Paragraph component transformed', () => {
  snapshotTestTextComponentTransform(Paragraph)
})

test('A Paragraph component Aligned', () => {
  snapshotTestTextComponentAlign(Paragraph)
})
