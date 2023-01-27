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
  SpaceVertical,
  Heading,
  useToggle,
  Dialog,
  DialogContent,
  Box,
  FieldSelect,
  Menu,
  MenuItem,
  Tooltip,
} from '@looker/components'
import {
  ScrollLockContext,
  FocusTrapContext,
} from '@looker/components-providers'
import React, { useContext } from 'react'
import { Popover } from '..'

export default function OverlayOpenDialog() {
  const { value, setOn, setOff } = useToggle()
  return (
    <SpaceVertical mt="large" align="start" width={1000} mx="auto">
      <Paragraph>
        Centered layout would be affected by the scrollbar "jump" bug on scroll
        lock.
      </Paragraph>
      <Heading>Popover Opening a Dialog</Heading>
      <Popover
        content={
          <SpaceVertical p="u5">
            <Button onClick={setOn}>Open Dialog</Button>
            <Box height={500} />
          </SpaceVertical>
        }
      >
        <Button>Open Popover</Button>
      </Popover>
      <Dialog isOpen={value} onClose={setOff}>
        <DialogInner />
      </Dialog>
      <Heading>Menu Opening a Dialog</Heading>
      <Menu content={<MenuItem onClick={setOn}>Open Dialog</MenuItem>}>
        <Tooltip content="Select your favorite kind">
          <Button mt="medium">Open Menu</Button>
        </Tooltip>
      </Menu>
      <Heading>Opening a Dialog Directly</Heading>
      <Button onClick={setOn}>Open Dialog</Button>
      <Box height={1000} />
    </SpaceVertical>
  )
}

const DialogInner = () => {
  const {
    activeTrapRef: activeLockRef,
    disableCurrentTrap: disableCurrentLock,
    enableCurrentTrap: enableCurrentLock,
  } = useContext(ScrollLockContext)
  const toggleScrollLock = () => {
    if (activeLockRef && activeLockRef.current) {
      disableCurrentLock?.()
    } else {
      enableCurrentLock?.()
    }
  }
  const { activeTrapRef, disableCurrentTrap, enableCurrentTrap } =
    useContext(FocusTrapContext)
  const toggleFocusTrap = () => {
    if (activeTrapRef && activeTrapRef.current) {
      disableCurrentTrap?.()
    } else {
      enableCurrentTrap?.()
    }
  }
  function openAlert() {
    alert(`It's working!`)
  }
  return (
    <DialogContent>
      <SpaceVertical align="start">
        <Paragraph>
          Scroll lock can be disabled via ScrollLockContext but due to fixed
          positioning in Dialog, there will be a scrollbar jump.
        </Paragraph>
        <Button onClick={toggleScrollLock}>Toggle Scroll Lock</Button>
        <Button onClick={toggleFocusTrap}>Toggle Focus Trap</Button>
        <Paragraph>Try opening the Select and picking an option:</Paragraph>
        <FieldSelect
          label="Default Value"
          width={300}
          options={options}
          aria-label="Fruits"
          defaultValue="1"
        />
        <Paragraph>Try clicking the button:</Paragraph>
        <Button onClick={openAlert}>Open Alert</Button>
        <Box height={500} />
      </SpaceVertical>
    </DialogContent>
  )
}

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
