/*
 MIT License
 Copyright (c) 2019 Looker Data Sciences, Inc.
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

import React, { MouseEvent } from 'react'
import {
  Button,
  DialogManager,
  ModalContent,
  ModalContext,
  ModalHeader,
  ModalFooter,
  Divider,
  Box,
  Paragraph,
  Popover,
  PopoverContent,
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  useControlledCombobox,
} from '@looker/components'

function LongText() {
  return (
    <>
      <Paragraph my="xlarge">Text</Paragraph>
      <Paragraph my="xlarge">Text</Paragraph>
      <Paragraph my="xlarge">Text</Paragraph>
      <Paragraph my="xlarge">Text</Paragraph>
      <Paragraph my="xlarge">Text</Paragraph>
      <Paragraph my="xlarge">Text</Paragraph>
      <Paragraph my="xlarge">Text</Paragraph>
      <Paragraph my="xlarge">Text</Paragraph>
      <Paragraph my="xlarge">Text</Paragraph>
      <Paragraph my="xlarge">Text</Paragraph>
      <Paragraph my="xlarge">Text</Paragraph>
      <Paragraph my="xlarge">Text</Paragraph>
      <Paragraph my="xlarge">Text</Paragraph>
      <Paragraph my="xlarge">Text</Paragraph>
      <Paragraph my="xlarge">Text</Paragraph>
      <Paragraph my="xlarge">Text</Paragraph>
      <Paragraph my="xlarge">Text</Paragraph>
    </>
  )
}

function ModalInner() {
  const { closeModal } = React.useContext(ModalContext)
  // useEffect(() => {
  //   scrollLockEnabled && disableScrollLock && disableScrollLock()
  // }, [disableScrollLock, scrollLockEnabled])

  return (
    <>
      <ModalHeader>A Modal</ModalHeader>
      <ModalContent>
        <LongText />
        <ComposedCombobox />
      </ModalContent>
      <ModalFooter>
        <Button onClick={closeModal}>Close</Button>
      </ModalFooter>
    </>
  )
}

function ComposedCombobox() {
  return (
    <Combobox width={240}>
      <ComboboxInput />
      <ComboboxList>
        <ComboboxOption value="Foo" />
        <ComboboxOption value="Bar" />
        <ComboboxOption value="Baz" />
        <ComboboxOption value="Qux" />
      </ComboboxList>
    </Combobox>
  )
}

const options = [
  { data: { id: 1 }, value: 'Apples' },
  { data: { id: 2 }, value: 'Bananas' },
  { data: { id: 3 }, value: 'Oranges' },
  { data: { id: 4 }, value: 'Pineapples' },
  { data: { id: 5 }, value: 'Kiwis' },
]
const listProps = { persistComboboxion: true }

export function SelectDemo() {
  const { inputProps, ...selectProps } = useControlledCombobox('Apples')
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const fruit = e.currentTarget.getAttribute('data-fruit') || ''
    selectProps.onCombobox({ value: fruit })
  }
  const inputPropsMemo = React.useMemo(
    () => ({
      ...inputProps,
      autocomplete: false,
      placeholder: 'Placeholder text',
    }),
    [inputProps]
  )
  return (
    <Box m="xlarge">
      <Combobox
        openOnFocus={true}
        width={240}
        mb="medium"
        inputProps={inputPropsMemo}
        listProps={listProps}
        options={options}
        aria-label="Fruits"
        {...selectProps}
      />
      <Paragraph>{selectProps.value}</Paragraph>
      <Button mt="medium" mr="small" data-fruit="Kiwis" onClick={handleClick}>
        Kiwis
      </Button>
      <Button mt="medium" data-fruit="Oranges" onClick={handleClick}>
        Oranges
      </Button>
      <Divider my="xlarge" />
      <ComposedCombobox />
      <Divider my="xlarge" />
      <DialogManager content={<ModalInner />}>
        {onClick => <Button onClick={onClick}>Open Modal</Button>}
      </DialogManager>
      <Divider my="xlarge" />
      <Popover
        content={
          <PopoverContent>
            <Box height={300} />
            <ComposedCombobox />
          </PopoverContent>
        }
      >
        {(onClick, ref, className) => (
          <Button onClick={onClick} ref={ref} className={className}>
            Open Popover
          </Button>
        )}
      </Popover>
      <LongText />
    </Box>
  )
}
