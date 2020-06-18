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
import {
  Button,
  Fieldset,
  FieldText,
  FieldCheckbox,
  FieldCheckboxGroup,
  FieldRadioGroup,
  Link,
  Status,
  Tooltip,
  Divider,
} from '@looker/components'

export default {
  title: 'Forms/Fieldset',
}

const Fields: FC<{ inline?: boolean }> = ({ inline }) => (
  <>
    <FieldText
      inline={inline}
      placeholder="First name"
      required
      label="First name"
    />
    <FieldText inline={inline} label="Middle" placeholder="Middle" />
    <FieldText
      inline={inline}
      required
      label="Last name"
      placeholder="Last name"
    />
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

export const AccordionAlt = () => {
  const options = [
    {
      detail: (
        <Tooltip content="PNW > Wisconsin" placement="right">
          <Status size="small" intent="neutral" />
        </Tooltip>
      ),
      label: 'Cheddar',
      required: true,
      value: 'cheddar',
    },
    {
      detail: (
        <Tooltip
          placement="right"
          content={
            <>
              Some helpful explanatory text. <Link>Learn more</Link>
            </>
          }
        >
          <Status size="small" intent="neutral" />

          {/* <Badge intent="neutral">&gt; 100,000 results</Badge> */}
        </Tooltip>
      ),
      disabled: true,
      label: 'Green',
      value: 'blue',
    },
    { label: 'Swiss', tooltip: 'Has holes', value: 'swiss' },
  ]

  const value = 'blue'

  return (
    <>
      <Fieldset
        width="26rem"
        legend="Advanced Cheese Options"
        accordion
        defaultOpen
      >
        <FieldRadioGroup
          defaultValue={value}
          label="Favorite"
          options={options}
        />
        <FieldRadioGroup defaultValue={value} label="Worst" options={options} />
        <FieldCheckboxGroup
          defaultValue={[value]}
          label="Would Eat"
          options={options}
        />
      </Fieldset>
      <Divider my="xxlarge" />
      <Fieldset legend="Advanced Cheese Options" accordion defaultOpen>
        {' '}
        <FieldRadioGroup
          defaultValue={value}
          label="Favorite"
          options={options}
          inline
        />
        <FieldCheckboxGroup
          defaultValue={[value]}
          label="Edible"
          options={options}
          inline
        />
      </Fieldset>
    </>
  )
}

export const Nesting = () => (
  <Fieldset gap="xxlarge">
    <Button fullWidth>Button A</Button>
    <Button fullWidth>Button B</Button>
    <Button fullWidth>Button C</Button>

    <Fieldset gap="none">
      <Button fullWidth>Button A</Button>
      <Button fullWidth>Button B</Button>
      <Button fullWidth>Button C</Button>

      <Fieldset gap="medium">
        <Button fullWidth>Button A</Button>
        <Button fullWidth>Button B</Button>
        <Button fullWidth>Button C</Button>
      </Fieldset>
    </Fieldset>
  </Fieldset>
)

export const fieldsHideLabel = () => (
  <>
    <Fieldset fieldsHideLabel legend="This is the Legend 1">
      <FieldText label="First Label" />
      <FieldText label="Second Label" />
      <FieldText label="Third Label" hideLabel={false} />
    </Fieldset>
    <Fieldset legend="This is the Legend 1">
      <FieldText label="First Label" hideLabel />
      <FieldText label="Second Label" />
      <FieldText label="Third Label" />
    </Fieldset>
    <FieldText label="FieldText Label" hideLabel={false} />
    <FieldText label="FieldText Label" hideLabel />
  </>
)
