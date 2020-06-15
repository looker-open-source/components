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
  ButtonGroup,
  ButtonItem,
  Space,
  Box,
  Grid,
  FieldToggleSwitch,
  Divider,
  ButtonToggle,
} from '@looker/components'
import React, { useEffect, useState, FormEvent } from 'react'

export const All = () => (
  <Grid columns={1}>
    <Basic />
    <InitialValues />
    <Options />
    <Wrapping />
  </Grid>
)

export default {
  component: All,
  title: 'Buttons/ButtonGroup',
}

export const Basic = () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <ButtonGroup value={value} onChange={setValue}>
      <ButtonItem value="CA">California</ButtonItem>
      <ButtonItem value="AK">Alaska</ButtonItem>
      <ButtonItem value="UT">Utah</ButtonItem>
    </ButtonGroup>
  )
}

export const InitialValues = () => {
  const [value, setValue] = useState<string[]>(['CA', 'AK'])

  return (
    <ButtonGroup value={value} onChange={setValue}>
      <ButtonItem value="CA">California</ButtonItem>
      <ButtonItem value="AK">Alaska</ButtonItem>
      <ButtonItem value="UT">Utah</ButtonItem>
    </ButtonGroup>
  )
}

export const Options = () => {
  const options = [
    { label: 'Smoked Gouda', value: 'Gouda' },
    { value: 'Cheddar' },
    { disabled: true, value: 'Swiss' },
  ]

  const [value, setValue] = useState<string[]>(['Gouda'])
  return <ButtonGroup options={options} value={value} onChange={setValue} />
}

const stateOptions = [
  { label: 'Alabama', value: 'Alabama' },
  { label: 'Alaska', value: 'Alaska' },
  { label: 'Arizona', value: 'Arizona' },
  { label: 'Arkansas', value: 'Arkansas' },
  { label: 'California', value: 'California' },
  { label: 'Colorado', value: 'Colorado' },
  { label: 'Connecticut', value: 'Connecticut' },
  { label: 'Delaware', value: 'Delaware' },
  { label: 'Florida', value: 'Florida' },
  { label: 'Georgia', value: 'Georgia' },
  { label: 'Hawaii', value: 'Hawaii' },
  { label: 'Idaho', value: 'Idaho' },
  { label: 'Illinois', value: 'Illinois' },
  { label: 'Indiana', value: 'Indiana' },
  { label: 'Iowa', value: 'Iowa' },
  { label: 'Kansas', value: 'Kansas' },
  { label: 'Kentucky', value: 'Kentucky' },
  { label: 'Louisiana', value: 'Louisiana' },
  { label: 'Maine', value: 'Maine' },
  { label: 'Maryland', value: 'Maryland' },
  { label: 'Massachusetts', value: 'Massachusetts' },
  { label: 'Michigan', value: 'Michigan' },
  { label: 'Minnesota', value: 'Minnesota' },
  { label: 'Mississippi', value: 'Mississippi' },
  { label: 'Missouri', value: 'Missouri' },
  { label: 'Montana', value: 'Montana' },
  { label: 'Nebraska', value: 'Nebraska' },
  { label: 'Nevada', value: 'Nevada' },
  { label: 'New Hampshire', value: 'New Hampshire' },
  { label: 'New Jersey', value: 'New Jersey' },
  { label: 'New Mexico', value: 'New Mexico' },
  { label: 'New York', value: 'New York' },
  { label: 'North Carolina', value: 'North Carolina' },
  { label: 'North Dakota', value: 'North Dakota' },
  { label: 'Ohio', value: 'Ohio' },
  { label: 'Oklahoma', value: 'Oklahoma' },
  { label: 'Oregon', value: 'Oregon' },
  { label: 'Pennsylvania', value: 'Pennsylvania' },
  { label: 'Rhode Island', value: 'Rhode Island' },
  { label: 'South Carolina', value: 'South Carolina' },
  { label: 'South Dakota', value: 'South Dakota' },
  { label: 'Tennessee', value: 'Tennessee' },
  { label: 'Texas', value: 'Texas' },
  { label: 'Utah', value: 'Utah' },
  { label: 'Vermont', value: 'Vermont' },
  { label: 'Virginia', value: 'Virginia' },
  { label: 'Washington', value: 'Washington' },
  { label: 'West Virginia', value: 'West Virginia' },
  { label: 'Wisconsin', value: 'Wisconsin' },
  { label: 'Wyoming', value: 'Wyoming' },
]

export const Wrapping = () => {
  const [border, setBorder] = useState(false)
  const [value, setValue] = useState<string[]>([])
  const [value2, setValue2] = useState<string[]>([])
  const [toggle, setToggle] = useState('')
  const [toggle2, setToggle2] = useState('')
  function handleChange(e: FormEvent<HTMLInputElement>) {
    setBorder(e.currentTarget.checked)
  }

  const [states, setStates] = useState<Array<{ label: string; value: string }>>(
    []
  )
  useEffect(() => {
    const t = setTimeout(() => {
      setStates(stateOptions)
    }, 1000)
    return () => clearTimeout(t)
  }, [])
  return (
    <Space>
      <Box flex={1} border={border ? '1px solid' : 'none'}>
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
        <ButtonToggle
          value={toggle2}
          onChange={setToggle2}
          nullable
          options={states}
        />
        Inline text
      </Box>
    </Space>
  )
}
