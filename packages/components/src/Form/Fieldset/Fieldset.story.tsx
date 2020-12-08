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

import { Story } from '@storybook/react/types-6-0'
import React, { FC } from 'react'
import { Button } from '../../Button'
import { Divider } from '../../Divider'
import { Link } from '../../Link'
import { Status } from '../../Status'
import { Tooltip } from '../../Tooltip'
import {
  FieldCheckbox,
  FieldCheckboxGroup,
  FieldRadioGroup,
  FieldText,
} from '../Fields'
import { Form } from '../Form'
import { Fieldset, FieldsetProps } from './Fieldset'

export default {
  component: Fieldset,
  title: 'Fieldset',
}

const Fields: FC<{ inline?: boolean }> = ({ inline }) => (
  <>
    <FieldText
      inline={inline}
      placeholder="First name"
      required
      label="First name"
      description="This is a description"
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

const Template: Story<FieldsetProps> = (args) => {
  return (
    <Form m="xxlarge" maxWidth="600px">
      <Fieldset {...args}>
        <Fields />
      </Fieldset>
    </Form>
  )
}

export const Basic = Template.bind({})

export const Inline = Template.bind({})
Inline.args = { inline: true }

export const Legend = Template.bind({})
Legend.args = { legend: 'Standard Legend, Standard FieldText' }

export const InlineLegend = Template.bind({})
InlineLegend.args = { inline: true, legend: 'Inline w/ Legend' }

export const LegendInlineFields = () => (
  <Fieldset legend="Individual fields inline">
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

AccordionAlt.parameters = {
  storyshots: { disable: true },
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

Nesting.parameters = {
  storyshots: { disable: true },
}

export const FieldsHideLabel = () => (
  <Fieldset fieldsHideLabel legend="This is the Legend 1">
    <FieldText label="First Label" />
    <FieldText label="Second Label" />
    <FieldText label="Third Label" hideLabel={false} />
  </Fieldset>
)
