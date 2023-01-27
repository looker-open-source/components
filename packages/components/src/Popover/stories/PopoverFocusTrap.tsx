/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
  Button,
  Paragraph,
  FieldSelect,
  Space,
  ButtonOutline,
  SpaceVertical,
  Heading,
  FieldToggleSwitch,
  useToggle,
} from '@looker/components'
import React from 'react'
import { Popover, PopoverContent } from '..'

const options = [
  { label: 'Apples', value: '1' },
  { label: 'Bananas', value: '2' },
  { label: 'Oranges', value: '3' },
  { label: 'Pineapples', value: '4' },
  { label: 'Kiwis', value: '5' },
  { label: 'Apples2', value: '12' },
  { label: 'Bananas2', value: '22' },
  { label: 'Oranges2', value: '32' },
  { label: 'Pineapples2', value: '42' },
  { label: 'Kiwis3', value: '52' },
  { label: 'Apples3', value: '13' },
  { label: 'Bananas3', value: '23' },
  { label: 'Oranges3', value: '33' },
  { label: 'Pineapples3', value: '43' },
  { label: 'Kiwis3', value: '53' },
  { label: 'Apples4', value: '14' },
  { label: 'Bananas4', value: '24' },
  { label: 'Oranges4', value: '34' },
  { label: 'Pineapples4', value: '44' },
  { label: 'Kiwis4', value: '54' },
  { label: 'Apples5', value: '15' },
  { label: 'Bananas5', value: '25' },
  { label: 'Oranges5', value: '35' },
  { label: 'Pineapples5', value: '45' },
  { label: 'Kiwis5', value: '55' },
]

export default function PopoverFocusTrap() {
  const { value, toggle } = useToggle(false)
  function getButtonAlert(text: string) {
    return () => alert(text)
  }

  return (
    <SpaceVertical mt="large">
      <Heading>Focus Trap Test</Heading>
      <FieldToggleSwitch
        on={value}
        onChange={() => toggle()}
        label="Cancel Click Outside"
      />
      <Space>
        <Popover
          cancelClickOutside={value}
          content={
            <PopoverContent p="u5" width="360px">
              <Paragraph>
                Does tabbing focus only loop through these 3 buttons &amp;
                Select?
              </Paragraph>
              <Paragraph>
                Does clicking (or mousedown) each trigger an alert?
              </Paragraph>
              <Button mr="small" onClick={getButtonAlert('First')}>
                First
              </Button>
              <Button mr="small" onClick={getButtonAlert('Second')}>
                Second
              </Button>
              <Button
                mt="small"
                mb="medium"
                onMouseDown={getButtonAlert('Third')}
              >
                Third (mousedown)
              </Button>
              <FieldSelect
                label="Default Value"
                width={300}
                options={options}
                aria-label="Fruits"
                defaultValue="1"
              />
              <Paragraph>
                Does it scroll here when the Select is closed?
              </Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
              <Paragraph>Long text</Paragraph>
            </PopoverContent>
          }
        >
          <Button>Open Focus Trap Test Popover</Button>
        </Popover>
        <ButtonOutline onClick={() => alert(`You clicked the button!`)}>
          Click me with the popover open
        </ButtonOutline>
      </Space>
      <Paragraph>Does it scroll here when the Popover is closed?</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
      <Paragraph>Long text</Paragraph>
    </SpaceVertical>
  )
}
