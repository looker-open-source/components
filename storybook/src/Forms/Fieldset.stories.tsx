/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, { FC } from 'react'
import { Fieldset, FieldText, FieldCheckbox } from '@looker/components'

export default {
  title: 'Forms/Fieldset',
}

const Fields: FC<{ inline?: boolean }> = ({ inline }) => (
  <>
    <FieldText inline={inline} required label="Neat Stuff" />
    <FieldText inline={inline} label="Neat Stuff" />
    <FieldText inline={inline} label="Neat Stuff" />
  </>
)

export const Basic = () => (
  <Fieldset>
    <Fields />
  </Fieldset>
)

export const Inline = () => (
  <Fieldset inline>
    <Fields />
  </Fieldset>
)

export const Legend = () => (
  <Fieldset legend="Standard Legend, Standard FieldText">
    <Fields />
  </Fieldset>
)

export const InlineLegend = () => (
  <Fieldset inline legend="Inline Legend, Inline FieldText">
    <Fields />
  </Fieldset>
)

export const LegendInlineFields = () => (
  <Fieldset legend="Standard Legend, Inline FieldText">
    <Fields inline />
  </Fieldset>
)

export const Accordion = () => (
  <Fieldset legend="This is the Legend" accordion defaultOpen>
    <FieldCheckbox name="box1" label="you can click here" />
    <FieldCheckbox name="box2" label="here too" />
    <FieldCheckbox name="box3" label="also here" />
  </Fieldset>
)
