import {
  snapshotTestTextComponent,
  snapshotTestTextComponentAlign,
  snapshotTestTextComponentFontRamp,
  snapshotTestTextComponentFontWeight,
  snapshotTestTextComponentTransform,
  snapshotTestTextComponentTruncate,
  snapshotTestTextComponentVariant,
} from '../../../test/text'
import { Span } from './Span'

test('A default Span component', () => {
  snapshotTestTextComponent(Span)
})

test('A Span component resized', () => {
  snapshotTestTextComponentFontRamp(Span)
})

test('A Span component weight', () => {
  snapshotTestTextComponentFontWeight(Span)
})

test('A Span component tuncated', () => {
  snapshotTestTextComponentTruncate(Span)
})

test('A Span component with variant', () => {
  snapshotTestTextComponentVariant(Span)
})

test('A Span component transformed', () => {
  snapshotTestTextComponentTransform(Span)
})

test('A Span component aligned', () => {
  snapshotTestTextComponentAlign(Span)
})
