import {
  snapshotTestTextComponent,
  snapshotTestTextComponentAlign,
  snapshotTestTextComponentFontRamp,
  snapshotTestTextComponentFontWeight,
  snapshotTestTextComponentTransform,
  snapshotTestTextComponentTruncate,
  snapshotTestTextComponentVariant
} from '../../../test/text'
import { Paragraph } from './Paragraph'

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
