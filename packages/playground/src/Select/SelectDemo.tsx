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
  Dialog,
  Divider,
  Box,
  Select,
  FieldSelect,
  ModalContent,
} from '@looker/components'

const options = [
  { label: 'Apples', value: '1' },
  { label: 'Bananas', value: '2' },
  { label: 'Oranges', value: '3' },
  { label: 'Pineapples', value: '4' },
  { label: 'Kiwis', value: '5' },
]

export function SelectContent() {
  const [value, setValue] = React.useState()
  const [searchTerm, setSearchTerm] = React.useState('')
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const fruit = e.currentTarget.getAttribute('data-fruit') || ''
    setValue(fruit)
  }
  function handleChange(value: string) {
    setValue(value)
  }
  function handleFilter(term: string) {
    setSearchTerm(term)
  }
  const newOptions = React.useMemo(() => {
    if (searchTerm === '') return options
    return options.filter((option: { label: string; value: string }) => {
      return option.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }, [searchTerm])
  return (
    <Box m="xlarge">
      <Select
        width={300}
        mb="medium"
        options={newOptions}
        aria-label="Fruits"
        placeholder="Controlled, searchable, clearable"
        isClearable
        value={value}
        onChange={handleChange}
        onFilter={handleFilter}
        isFilterable
        mr="small"
      />
      <Box>
        <Button mt="medium" mr="small" data-fruit="5" onClick={handleClick}>
          Kiwis
        </Button>
        <Button mt="medium" data-fruit="3" onClick={handleClick}>
          Oranges
        </Button>
      </Box>
      <Divider my="xlarge" />
      <FieldSelect
        label="Default Value"
        width={300}
        mb="medium"
        options={options}
        aria-label="Fruits"
        defaultValue="1"
      />
      <FieldSelect
        label="Disabled"
        width={300}
        mb="medium"
        options={options}
        aria-label="Fruits"
        placeholder="Select One"
        disabled
        defaultValue="1"
      />
      <FieldSelect
        label="Error"
        width={300}
        options={options}
        aria-label="Fruits"
        placeholder="Select One"
        defaultValue="1"
        validationMessage={{ message: 'An error message', type: 'error' }}
      />
    </Box>
  )
}

const ModalInner = () => {
  return (
    <ModalContent>
      <SelectContent />
    </ModalContent>
  )
}

export const SelectDemo = () => {
  const [isOpen, setOpen] = React.useState(false)
  const handleClick = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Dialog isOpen={isOpen} onClose={handleClose}>
        <ModalInner />
      </Dialog>
      <Button onClick={handleClick}>Open</Button>
    </>
  )
}
