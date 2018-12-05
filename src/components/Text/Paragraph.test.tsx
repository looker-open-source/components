import * as React from 'react'
import {
  snapshotTestTextComponent,
  snapshotTestTextComponentAlign,
  snapshotTestTextComponentFontRamp,
  snapshotTestTextComponentFontWeight,
  snapshotTestTextComponentTransform,
  snapshotTestTextComponentVariant,
  snapshotTestTextComponentWrap,
} from '../../../test/text'
import { assertSnapshot } from '../../../test/utils/snapshot'
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

test('A Paragraph component tuncated', () => {
  assertSnapshot(<Paragraph truncate>Hello</Paragraph>)
})

test('A Paragraph component with variant', () => {
  snapshotTestTextComponentVariant(Paragraph)
})

test('A Paragraph component text transformed', () => {
  snapshotTestTextComponentTransform(Paragraph)
})

test('A Paragraph component Aligned', () => {
  snapshotTestTextComponentAlign(Paragraph)
})

test('A Text component wrapped', () => {
  snapshotTestTextComponentWrap(Paragraph)
})
