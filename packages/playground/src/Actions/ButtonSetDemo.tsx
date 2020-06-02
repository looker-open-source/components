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

function ButtonGroupDemo() {
  const [value, setValue] = useState<string[]>([])
  const [value2, setValue2] = useState<string[]>(['CA', 'AK'])

  return (
    <Box p="large" flex={1}>
      <Heading>Button Group State</Heading>
      <Paragraph>Uncontrolled</Paragraph>
      <ButtonGroup>
        <ButtonItem value="CA">California</ButtonItem>
        <ButtonItem value="AK">Alaska</ButtonItem>
        <ButtonItem value="UT">Utah</ButtonItem>
      </ButtonGroup>
      <Divider m="none" />
      <Paragraph>Controlled</Paragraph>
      <ButtonGroup value={value} onChange={setValue}>
        <ButtonItem value="CA">California</ButtonItem>
        <ButtonItem value="AK">Alaska</ButtonItem>
        <ButtonItem value="UT">Utah</ButtonItem>
      </ButtonGroup>
      <Divider />
      <Paragraph>Uncontrolled with items selected</Paragraph>
      <ButtonGroup>
        <ButtonItem value="CA" selected>
          California
        </ButtonItem>
        <ButtonItem value="AK" selected>
          Alaska
        </ButtonItem>
        <ButtonItem value="UT">Utah</ButtonItem>
      </ButtonGroup>
      <Divider />
      <Paragraph>Controlled with initial values</Paragraph>
      <ButtonGroup value={value2} onChange={setValue2}>
        <ButtonItem value="CA">California</ButtonItem>
        <ButtonItem value="AK">Alaska</ButtonItem>
        <ButtonItem value="UT">Utah</ButtonItem>
      </ButtonGroup>
      <Divider />
    </Box>
  )
}
function ButtonToggleDemo() {
  const [toggle, setToggle] = useState<string>()
  function handleChange(value: string) {
    setToggle(value)
  }
  const [toggle2, setToggle2] = useState('Ruby')
  function handleChange2(value: string) {
    setToggle2(value)
  }
  const [toggle3, setToggle3] = useState<string>()
  function handleChange3(value: string) {
    setToggle3(value)
  }
  const [toggle4, setToggle4] = useState('Ruby')
  function handleChange4(value: string) {
    setToggle4(value)
  }
  const [value3, setValue3] = useState('')

  return (
    <Box p="large" flex={1}>
      <Heading>Button Toggle State</Heading>
      <Paragraph>Uncontrolled</Paragraph>
      <ButtonToggle>
        <ButtonItem>Ruby</ButtonItem>
        <ButtonItem>TypeScript</ButtonItem>
        <ButtonItem>Python</ButtonItem>
      </ButtonToggle>
      <Divider m="none" />
      <Paragraph>Controlled</Paragraph>
      <ButtonToggle value={toggle} onChange={handleChange}>
        <ButtonItem>Ruby</ButtonItem>
        <ButtonItem>TypeScript</ButtonItem>
        <ButtonItem>Python</ButtonItem>
      </ButtonToggle>
      <Divider m="none" />
      <Paragraph>Uncontrolled with item selected</Paragraph>
      <ButtonToggle>
        <ButtonItem selected>Ruby</ButtonItem>
        <ButtonItem>TypeScript</ButtonItem>
        <ButtonItem>Python</ButtonItem>
      </ButtonToggle>
      <Divider m="none" />
      <Paragraph>Controlled with initial value</Paragraph>
      <ButtonToggle value={toggle2} onChange={handleChange2}>
        <ButtonItem>Ruby</ButtonItem>
        <ButtonItem>TypeScript</ButtonItem>
        <ButtonItem>Python</ButtonItem>
      </ButtonToggle>
      <Divider m="none" />
      <Paragraph>Nullable Uncontrolled</Paragraph>
      <ButtonToggle nullable>
        <ButtonItem>Ruby</ButtonItem>
        <ButtonItem>TypeScript</ButtonItem>
        <ButtonItem>Python</ButtonItem>
      </ButtonToggle>
      <Divider m="none" />
      <Paragraph>Nullable Controlled</Paragraph>
      <ButtonToggle nullable value={toggle3} onChange={handleChange3}>
        <ButtonItem>Ruby</ButtonItem>
        <ButtonItem>TypeScript</ButtonItem>
        <ButtonItem>Python</ButtonItem>
      </ButtonToggle>
      <Divider />
      <Paragraph>Nullable Uncontrolled with item selected</Paragraph>
      <ButtonToggle nullable>
        <ButtonItem selected>Ruby</ButtonItem>
        <ButtonItem>TypeScript</ButtonItem>
        <ButtonItem>Python</ButtonItem>
      </ButtonToggle>
      <Divider />
      <Paragraph>Nullable Controlled with initial value</Paragraph>
      <ButtonToggle nullable value={toggle4} onChange={handleChange4}>
        <ButtonItem>Ruby</ButtonItem>
        <ButtonItem>TypeScript</ButtonItem>
        <ButtonItem>Python</ButtonItem>
      </ButtonToggle>
      <Divider />
      <ButtonToggle value={value3} onChange={setValue3} nullable>
        <ButtonItem>Alabama</ButtonItem>
        <ButtonItem>Alaska</ButtonItem>
        <ButtonItem>Arizona</ButtonItem>
        <ButtonItem>Arkansas</ButtonItem>
        <ButtonItem>California</ButtonItem>
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
    </Box>
  )
}

export function ButtonSetDemo() {
  const [border, setBorder] = useState(true)
  function handleChange(e: FormEvent<HTMLInputElement>) {
    setBorder(e.currentTarget.checked)
  }
  return (
    <Space width="100%">
      <ButtonToggleDemo />
      <ButtonGroupDemo />
      <Box flex={1} m="xlarge" border={border ? '1px solid' : 'none'}>
        <Heading>Wrapping</Heading>
        <FieldToggleSwitch
          label="Show border"
          on={border}
          onChange={handleChange}
        />
        <Divider m="none" />
        <ButtonGroup>
          <ButtonItem value="CA" selected>
            California
          </ButtonItem>
          <ButtonItem value="AK">Alaska</ButtonItem>
          <ButtonItem value="UT">Utah</ButtonItem>
        </ButtonGroup>
        Inline text
        <Divider m="none" />
        <ButtonToggle>
          <ButtonItem selected>Ruby</ButtonItem>
          <ButtonItem>TypeScript</ButtonItem>
          <ButtonItem>Python</ButtonItem>
        </ButtonToggle>
        Inline text
        <Divider m="none" />
        <ButtonGroup>
          <ButtonItem value="CA" selected>
            California
          </ButtonItem>
          <ButtonItem value="AK">Alaska</ButtonItem>
          <ButtonItem value="UT">Utah</ButtonItem>
          <ButtonItem value="CO">Colorado</ButtonItem>
          <ButtonItem value="MS">Missouri</ButtonItem>
          <ButtonItem value="MI">Mississippi</ButtonItem>
          <ButtonItem value="MA">Massachusets</ButtonItem>
          <ButtonItem value="VT">Vermont</ButtonItem>
          <ButtonItem value="NH">New Hampshire</ButtonItem>
          <ButtonItem value="DE">Delaware</ButtonItem>
          <ButtonItem value="ME">Maine</ButtonItem>
          <ButtonItem value="WA">Washington</ButtonItem>
          <ButtonItem value="OR">Oregon</ButtonItem>
        </ButtonGroup>
        Inline text
        <Divider m="none" />
        <ButtonToggle>
          <ButtonItem selected>Ruby</ButtonItem>
          <ButtonItem>TypeScript</ButtonItem>
          <ButtonItem>Python</ButtonItem>
          <ButtonItem>Java</ButtonItem>
          <ButtonItem>Kotlin</ButtonItem>
          <ButtonItem>Go</ButtonItem>
          <ButtonItem>C++</ButtonItem>
          <ButtonItem>Clojure</ButtonItem>
          <ButtonItem>Perl</ButtonItem>
          <ButtonItem>Scala</ButtonItem>
        </ButtonToggle>
        Inline text
      </Box>
    </Space>
  )
}
