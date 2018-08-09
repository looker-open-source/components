import { Span } from './Span'
import {
  snapshotTestTextComponent,
  snapshotTestTextComponentAlign,
  snapshotTestTextComponentTransform,
  snapshotTestTextComponentVariant,
  snapshotTestTextComponentTruncate,
  snapshotTestTextComponentFontWeight,
  snapshotTestTextComponentFontRamp
} from '../../../test/text'

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
