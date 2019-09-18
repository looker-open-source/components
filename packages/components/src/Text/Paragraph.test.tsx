import React from 'react'
import {
  snapshotTestTextComponent,
  snapshotTestTextComponentAlign,
  snapshotTestTextComponentDecoration,
  snapshotTestTextComponentFontRamp,
  snapshotTestTextComponentFontWeight,
  snapshotTestTextComponentTransform,
  snapshotTestTextComponentVariant,
  snapshotTestTextComponentWrap,
} from './textTestHelpers'
import { assertSnapshot } from '@looker/components-test-utils'
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

test('A Paragraph component truncated', () => {
  assertSnapshot(<Paragraph truncate>Hello</Paragraph>)
})

test('A Paragraph component with multiline truncate', () => {
  assertSnapshot(<Paragraph truncateLines={3}>Hello</Paragraph>)
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

test('A Text component decorated', () => {
  snapshotTestTextComponentDecoration(Paragraph)
})
