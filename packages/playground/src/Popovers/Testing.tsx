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

import React, { Ref } from 'react'
import {
  Box,
  Button,
  ButtonOutline,
  ButtonTransparent,
  DialogManager,
  Divider,
  FieldSelect,
  Heading,
  Menu,
  MenuDisclosure,
  MenuList,
  MenuItem,
  ModalContent,
  Paragraph,
  Popover,
  PopoverContent,
  usePopover,
  useToggle,
} from '@looker/components'

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

function PopoverFocusTrap() {
  function getButtonAlert(text: string) {
    return () => alert(text)
  }
  return (
    <Box mt="large">
      <Heading>Focus Trap Test</Heading>
      <Popover
        content={
          <PopoverContent p="large" width="360px">
            <Paragraph>
              Does tabbing focus only loop through these 3 buttons?
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
        {(onClick, ref, className) => (
          <Button mt="medium" onClick={onClick} ref={ref} className={className}>
            Open Focus Trap Test Popover
          </Button>
        )}
      </Popover>
    </Box>
  )
}

function MenuOpenDialog() {
  function openAlert() {
    alert(`It's working!`)
  }
  return (
    <Box mt="large">
      <Heading>Menu Opening Modal</Heading>
      <Menu>
        <MenuDisclosure tooltip="Select your favorite kind">
          <Button mr="small" mt="medium">
            Open Menu
          </Button>
        </MenuDisclosure>
        <DialogManager
          content={
            <ModalContent>
              <Paragraph>Some content inside the Dialog</Paragraph>
              <Button onClick={openAlert}>Open Alert</Button>
            </ModalContent>
          }
        >
          {(onClick) => (
            <MenuList>
              <MenuItem onClick={onClick}>Open Modal</MenuItem>
            </MenuList>
          )}
        </DialogManager>
      </Menu>
    </Box>
  )
}

function Placement() {
  const popoverContent = (
    <PopoverContent>
      <Paragraph width={300} p="xxlarge">
        👋 Hello, I am a popover!
      </Paragraph>
    </PopoverContent>
  )

  const button = (
    title: string,
    onClick: (e: any) => void,
    ref: Ref<HTMLButtonElement>,
    className?: string
  ) => (
    <Button
      aria-haspopup="true"
      onClick={onClick}
      ref={ref}
      className={className}
      mr="xlarge"
    >
      {title}
    </Button>
  )

  return (
    <Box mt="large">
      <Heading>Placement</Heading>
      <Box my="medium">
        <Popover content={popoverContent}>
          {(onClick, ref, className) =>
            button('Default', onClick, ref, className)
          }
        </Popover>
        <Popover content={popoverContent} placement="right">
          {(onClick, ref, className) =>
            button('Right', onClick, ref, className)
          }
        </Popover>
        <Popover content={popoverContent} placement="left">
          {(onClick, ref, className) => button('Left', onClick, ref, className)}
        </Popover>
      </Box>
      <Box my="medium">
        <Popover content={popoverContent} placement="bottom-start">
          {(onClick, ref, className) =>
            button('Bottom Start', onClick, ref, className)
          }
        </Popover>
        <Popover content={popoverContent} placement="right-end">
          {(onClick, ref, className) =>
            button('Right End', onClick, ref, className)
          }
        </Popover>
        <Popover content={popoverContent} placement="top-start" arrow={false}>
          {(onClick, ref, className) =>
            button('Top Start - No arrow', onClick, ref, className)
          }
        </Popover>
      </Box>
    </Box>
  )
}

function Grouped() {
  const groupRef = React.useRef<HTMLDivElement>(null)
  const content = (
    <PopoverContent p="large" width="360px">
      Example Popover text.
    </PopoverContent>
  )
  return (
    <Box mt="large">
      <Heading>Grouped Popovers</Heading>
      <Box display="flex">
        <Box
          display="flex"
          justifyContent="space-around"
          ref={groupRef}
          p="large"
          border="3px solid green"
        >
          <Popover content={content} groupedPopoversRef={groupRef}>
            {(onClick, ref, className) => (
              <Button
                aria-haspopup="true"
                onClick={onClick}
                ref={ref}
                className={className}
              >
                Instant Click
              </Button>
            )}
          </Popover>
          <Popover content={content} groupedPopoversRef={groupRef}>
            {(onClick, ref, className) => (
              <Button
                aria-haspopup="true"
                onClick={onClick}
                ref={ref}
                mx="large"
                className={className}
              >
                Instant Click
              </Button>
            )}
          </Popover>
          <Popover content={content}>
            {(onClick, ref, className) => (
              <ButtonOutline
                aria-haspopup="true"
                onClick={onClick}
                ref={ref}
                className={className}
              >
                Defer Click
              </ButtonOutline>
            )}
          </Popover>
        </Box>
        <Popover content={content}>
          {(onClick, ref, className) => (
            <ButtonTransparent
              aria-haspopup="true"
              mx="xlarge"
              my="large"
              onClick={onClick}
              ref={ref}
              className={className}
            >
              Outside Group
            </ButtonTransparent>
          )}
        </Popover>
      </Box>
    </Box>
  )
}

function MovingTarget() {
  const { value, toggle } = useToggle()

  const { popover, popperInstanceRef, open, ref, isOpen } = usePopover({
    content: (
      <PopoverContent p="large" width="360px">
        <Paragraph>
          The anchor is moving around so the Popover position must be updated
          via popperInstanceRef.current.update.
        </Paragraph>
      </PopoverContent>
    ),
    placement: 'right-end',
  })

  React.useEffect(() => {
    popperInstanceRef.current && popperInstanceRef.current.update()
  }, [popperInstanceRef, value])

  React.useEffect(() => {
    const int = setInterval(() => {
      toggle()
    }, 6000)
    return () => {
      clearInterval(int)
    }
  }, [toggle])
  return (
    <Box mt="large">
      <Heading>Moving Target</Heading>
      {popover}
      <Box
        mt={value ? 'xxxlarge' : 'medium'}
        border="2px solid"
        width={150}
        p="small"
        cursor="pointer"
        height={value ? 80 : undefined}
        onClick={open}
        ref={ref}
        className={isOpen ? 'active' : ''}
      >
        Open Popover
      </Box>
    </Box>
  )
}

export function TestPopovers() {
  return (
    <Box m="large" display="flex" height={1500}>
      <Box>
        <MenuOpenDialog />
        <Divider my="large" />
        <PopoverFocusTrap />
        <Divider my="large" />
        <Placement />
        <Grouped />
      </Box>
      <Box>
        <MovingTarget />
      </Box>
    </Box>
  )
}
