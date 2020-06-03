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

import {
  Box,
  ButtonGroup,
  ButtonItem,
  ButtonToggle,
  Divider,
  Paragraph,
  Space,
  Heading,
  FieldToggleSwitch,
} from '@looker/components'
import React, { FormEvent, useState } from 'react'

const options = [
  { label: 'Smoked Gouda', value: 'Gouda' },
  { value: 'Cheddar' },
  { disabled: true, value: 'Swiss' },
]

function ButtonGroupDemo() {
  const [value, setValue] = useState<string[]>([])
  const [value2, setValue2] = useState<string[]>(['CA', 'AK'])
  const [value3, setValue3] = useState<string[]>(['Gouda'])

  return (
    <Box p="large" flex={1}>
      <Heading>Button Group State</Heading>
      <ButtonGroup value={value} onChange={setValue}>
        <ButtonItem value="CA">California</ButtonItem>
        <ButtonItem value="AK">Alaska</ButtonItem>
        <ButtonItem value="UT">Utah</ButtonItem>
      </ButtonGroup>
      <Divider my="large" />
      <Divider my="large" />
      <Paragraph>With initial values</Paragraph>
      <ButtonGroup value={value2} onChange={setValue2}>
        <ButtonItem value="CA">California</ButtonItem>
        <ButtonItem value="AK">Alaska</ButtonItem>
        <ButtonItem value="UT">Utah</ButtonItem>
      </ButtonGroup>
      <Divider my="large" />
      <Paragraph>Options</Paragraph>
      <ButtonGroup options={options} value={value3} onChange={setValue3} />
      <Divider my="large" />
    </Box>
  )
}
function ButtonToggleDemo() {
  const [toggle, setToggle] = useState<string>()
  const [toggle2, setToggle2] = useState('Ruby')
  const [toggle3, setToggle3] = useState<string>()
  const [toggle4, setToggle4] = useState('Ruby')
  const [toggle5, setToggle5] = useState('Gouda')

  return (
    <Box p="large" flex={1}>
      <Heading>Button Toggle State</Heading>
      <ButtonToggle value={toggle} onChange={setToggle}>
        <ButtonItem>Ruby</ButtonItem>
        <ButtonItem>TypeScript</ButtonItem>
        <ButtonItem>Python</ButtonItem>
      </ButtonToggle>
      <Divider my="large" />
      <Paragraph>With initial value</Paragraph>
      <ButtonToggle value={toggle2} onChange={setToggle2}>
        <ButtonItem>Ruby</ButtonItem>
        <ButtonItem>TypeScript</ButtonItem>
        <ButtonItem>Python</ButtonItem>
      </ButtonToggle>
      <Divider my="large" />
      <Paragraph>Nullable</Paragraph>
      <ButtonToggle nullable value={toggle3} onChange={setToggle3}>
        <ButtonItem>Ruby</ButtonItem>
        <ButtonItem>TypeScript</ButtonItem>
        <ButtonItem>Python</ButtonItem>
      </ButtonToggle>
      <Divider my="large" />
      <Paragraph>Nullable with initial value</Paragraph>
      <ButtonToggle nullable value={toggle4} onChange={setToggle4}>
        <ButtonItem>Ruby</ButtonItem>
        <ButtonItem>TypeScript</ButtonItem>
        <ButtonItem>Python</ButtonItem>
      </ButtonToggle>
      <Divider my="large" />
      <Paragraph>Options</Paragraph>
      <ButtonToggle options={options} value={toggle5} onChange={setToggle5} />
    </Box>
  )
}

export function ButtonSetDemo() {
  const [border, setBorder] = useState(true)
  const [value, setValue] = useState<string[]>([])
  const [value2, setValue2] = useState<string[]>([])
  const [toggle, setToggle] = useState('')
  const [toggle2, setToggle2] = useState('')
  function handleChange(e: FormEvent<HTMLInputElement>) {
    setBorder(e.currentTarget.checked)
  }
  return (
    <Space width="100%" alignItems="flex-start">
      <ButtonToggleDemo />
      <ButtonGroupDemo />
      <Box flex={1} m="xlarge" border={border ? '1px solid' : 'none'}>
        <Heading>Wrapping</Heading>
        <FieldToggleSwitch
          label="Show border"
          on={border}
          onChange={handleChange}
        />
        <Divider my="large" />
        <ButtonGroup value={value} onChange={setValue}>
          <ButtonItem value="CA" selected>
            California
          </ButtonItem>
          <ButtonItem value="AK">Alaska</ButtonItem>
          <ButtonItem value="UT">Utah</ButtonItem>
        </ButtonGroup>
        Inline text
        <Divider my="large" />
        <ButtonToggle value={toggle} onChange={setToggle}>
          <ButtonItem selected>Ruby</ButtonItem>
          <ButtonItem>TypeScript</ButtonItem>
          <ButtonItem>Python</ButtonItem>
        </ButtonToggle>
        Inline text
        <Divider my="large" />
        <ButtonGroup value={value2} onChange={setValue2}>
          <ButtonItem value="CA" selected>
            California
          </ButtonItem>
          <ButtonItem value="AK">Alaska</ButtonItem>
          <ButtonItem value="UT">Utah</ButtonItem>
          <ButtonItem value="CO">Colorado</ButtonItem>
          <ButtonItem value="MS">Missouri</ButtonItem>
          <ButtonItem value="MI">Mississippi</ButtonItem>
          <ButtonItem value="MA">Massachusets</ButtonItem>
          <ButtonItem value="VT" disabled>
            Vermont
          </ButtonItem>
          <ButtonItem value="NH">New Hampshire</ButtonItem>
          <ButtonItem value="DE">Delaware</ButtonItem>
          <ButtonItem value="ME">Maine</ButtonItem>
          <ButtonItem value="WA">Washington</ButtonItem>
          <ButtonItem value="OR">Oregon</ButtonItem>
        </ButtonGroup>
        Inline text
        <Divider my="large" />
        <ButtonToggle value={toggle2} onChange={setToggle2} nullable>
          <ButtonItem>Alabama</ButtonItem>
          <ButtonItem>Alaska</ButtonItem>
          <ButtonItem>Arizona</ButtonItem>
          <ButtonItem>Arkansas</ButtonItem>
          <ButtonItem disabled>California</ButtonItem>
          <ButtonItem>Colorado</ButtonItem>
          <ButtonItem>Connecticut</ButtonItem>
          <ButtonItem>Delaware</ButtonItem>
          <ButtonItem>Florida</ButtonItem>
          <ButtonItem>Georgia</ButtonItem>
          <ButtonItem>Hawaii</ButtonItem>
          <ButtonItem>Idaho</ButtonItem>
          <ButtonItem>Illinois</ButtonItem>
          <ButtonItem>Indiana</ButtonItem>
          <ButtonItem>Iowa</ButtonItem>
          <ButtonItem>Kansas</ButtonItem>
          <ButtonItem>Kentucky</ButtonItem>
          <ButtonItem>Louisiana</ButtonItem>
          <ButtonItem>Maine</ButtonItem>
          <ButtonItem>Maryland</ButtonItem>
          <ButtonItem>Massachusetts</ButtonItem>
          <ButtonItem>Michigan</ButtonItem>
          <ButtonItem>Minnesota</ButtonItem>
          <ButtonItem>Mississippi</ButtonItem>
          <ButtonItem>Missouri</ButtonItem>
          <ButtonItem>Montana</ButtonItem>
          <ButtonItem>Nebraska</ButtonItem>
          <ButtonItem>Nevada</ButtonItem>
          <ButtonItem>New Hampshire</ButtonItem>
          <ButtonItem>New Jersey</ButtonItem>
          <ButtonItem>New Mexico</ButtonItem>
          <ButtonItem>New York</ButtonItem>
          <ButtonItem>North Carolina</ButtonItem>
          <ButtonItem>North Dakota</ButtonItem>
          <ButtonItem>Ohio</ButtonItem>
          <ButtonItem>Oklahoma</ButtonItem>
          <ButtonItem>Oregon</ButtonItem>
          <ButtonItem>Pennsylvania</ButtonItem>
          <ButtonItem>Rhode Island</ButtonItem>
          <ButtonItem>South Carolina</ButtonItem>
          <ButtonItem>South Dakota</ButtonItem>
          <ButtonItem>Tennessee</ButtonItem>
          <ButtonItem>Texas</ButtonItem>
          <ButtonItem>Utah</ButtonItem>
          <ButtonItem>Vermont</ButtonItem>
          <ButtonItem>Virginia</ButtonItem>
          <ButtonItem>Washington</ButtonItem>
          <ButtonItem>West Virginia</ButtonItem>
          <ButtonItem>Wisconsin</ButtonItem>
          <ButtonItem>Wyoming</ButtonItem>
        </ButtonToggle>
        Inline text
      </Box>
    </Space>
  )
}
