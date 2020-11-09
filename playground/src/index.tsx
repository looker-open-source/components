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
import React, { MouseEvent, useState, useMemo } from 'react'
import { render } from 'react-dom'
import {
  ComponentsProvider,
  FieldSelect,
  SpaceVertical,
  Heading,
  Label,
  Flex,
  Button,
  Divider,
  Icon,
  usePopover,
  Popover,
  PopoverContent,
  Dialog,
  DialogContent,
  Space,
  Card,
  CardContent,
  Form,
  Text,
  SelectOptionProps,
  SelectOptionGroupProps,
  ComboboxOptionObject,
} from '@looker/components'
import { options1k } from '@looker/components/src/Form/Fields/FieldSelect/options1k'
import 'core-js/stable'

const options = [
  { label: 'Apples', value: '1' },
  { label: 'Bananas', value: '2' },
  { label: 'Oranges', value: '3' },
  { label: 'Pineapples', value: '4' },
  { label: 'Kiwis', value: '5' },
]
const options2 = [
  { label: 'Apples2', value: '12' },
  { label: 'Bananas2', value: '22' },
  { label: 'Oranges2', value: '32' },
  { label: 'Pineapples2', value: '42' },
  { label: 'Kiwis2', value: '52' },
]
const options3 = [
  { label: 'Apples3', value: '13' },
  { label: 'Bananas3', value: '23' },
  { label: 'Oranges3', value: '33' },
  { label: 'Pineapples3', value: '43' },
  { label: 'Kiwis3', value: '53' },
]
const options4 = [
  { label: 'Apples4', value: '14' },
  { label: 'Bananas4', value: '24' },
  { label: 'Oranges4', value: '34' },
  { label: 'Pineapples4', value: '44' },
  { label: 'Kiwis4', value: '54' },
]
const options5 = [
  { label: 'Apples5', value: '15' },
  { label: 'Bananas5', value: '25' },
  { label: 'Oranges5', value: '35' },
  { label: 'Pineapples5', value: '45' },
  { label: 'Kiwis5', value: '55' },
]
const optionsWithDescriptions = options.map((option: ComboboxOptionObject) => ({
  ...option,
  description: `${option.label} are the best ever!`,
}))

const TestIndicator = () => {
  return <Text color="pink">***</Text>
}
const optionsWithGroups = [
  { options },
  { options: options2 },
  { options: options3 },
  { options: options4 },
  { options: options5 },
  {
    label: 'CARS',
    options: [
      { description: 'Great resale value', label: 'Honda', value: 'honda' },
      { description: 'Most popular make', label: 'Toyota', value: 'toyota' },
    ],
  },
]
const checkOption = (option: ComboboxOptionObject, searchTerm: string) => {
  return (
    option.label &&
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  )
}

const optionReducer = (searchTerm: string) => {
  return (acc: SelectOptionProps[], option: SelectOptionProps) => {
    const optionAsGroup = option as SelectOptionGroupProps
    if (optionAsGroup.options) {
      const filteredGroupOptions = optionAsGroup.options.filter((option) =>
        checkOption(option, searchTerm)
      )
      if (filteredGroupOptions.length > 0) {
        return [...acc, { ...optionAsGroup, options: filteredGroupOptions }]
      }
      return acc
    }
    if (checkOption(option as ComboboxOptionObject, searchTerm)) {
      return [...acc, option]
    }
    return acc
  }
}

const SelectContent = () => {
  const [value, setValue] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const fruit = e.currentTarget.getAttribute('data-fruit') || ''
    setValue(fruit)
  }
  const handleChange = (value: string) => {
    setValue(value)
  }
  const handleFilter = (term: string) => {
    setSearchTerm(term)
  }
  const newOptions = useMemo(() => {
    if (searchTerm === '') return options1k
    return options1k.reduce(optionReducer(searchTerm), [])
  }, [searchTerm])

  // For testing a bug where the options are overly-sensitive to "changes"
  // This component re-renders on mousedown due to an upstream usePopover*
  // thus these options will be newly instantiated on mousedown
  // but the options should NOT un/re-mount – if they do, the click to
  // select an option will not register. Instead it will close the Popover,
  // b/c the clicked option has been unmounted and Popover's check for the
  // target being "above" it will fail and its "close on click outside" behavior
  // will be triggered

  // * State changes in usePopover, like the one triggered by mousedown,
  // belong to SelectDemo, this component's parent, and parent state changes
  // cause child re-renders. If Popover were used instead, it would be a sibling
  // to this component thus "protecting" it from the state change.
  const unMemoizedOptions = [{ value: 'Cheddar' }, { value: 'Gouda' }]

  return (
    <SpaceVertical align="start" maxWidth={600}>
      <Popover
        focusTrap={false}
        content={
          <SpaceVertical p="large">
            <Button>1</Button>
            <Button>2</Button>
          </SpaceVertical>
        }
      >
        <Button>A non-focus-trap Popover</Button>
      </Popover>
      <Heading>Select</Heading>
      <FieldSelect
        label="1k (windowed) options"
        width={300}
        options={options1k}
        aria-label="Fruits"
        placeholder="Select Brand"
        defaultValue="Boulder Creek"
        autoFocus
      />
      <Label>
        Use alignSelf="flex-start" to avoid filling height as a flex child
      </Label>
      <Flex>
        <Flex
          height={200}
          width={200}
          bg="ui3"
          alignItems="center"
          justifyContent="center"
          mr="small"
        >
          200 x 200
        </Flex>
        <FieldSelect
          width={300}
          options={newOptions}
          aria-label="Fruits"
          placeholder="Controlled, searchable, clearable"
          isClearable
          value={value}
          onChange={handleChange}
          onFilter={handleFilter}
          isFilterable
          alignSelf="flex-start"
        />
      </Flex>
      <Button mt="medium" mr="small" data-fruit="5" onClick={handleClick}>
        Kiwis
      </Button>
      <Button mt="medium" data-fruit="3" onClick={handleClick}>
        Oranges
      </Button>
      <Divider my="xlarge" />
      <FieldSelect
        label="Default Value"
        options={options}
        aria-label="Fruits"
        defaultValue="1"
      />
      <FieldSelect
        label="Groups"
        options={optionsWithGroups}
        aria-label="Fruits"
        defaultValue="1"
      />
      <FieldSelect
        label="Descriptions"
        options={optionsWithDescriptions}
        aria-label="Fruits"
        defaultValue="1"
      />
      <FieldSelect
        label="Error"
        options={options}
        aria-label="Fruits"
        placeholder="Select One"
        defaultValue="1"
        validationMessage={{ message: 'An error message', type: 'error' }}
      />
      <FieldSelect
        label="Disabled"
        options={options}
        aria-label="Fruits"
        placeholder="Select One"
        disabled
        defaultValue="1"
      />
      <FieldSelect
        label="Indicator"
        options={[
          ...options,
          {
            indicator: TestIndicator,
            label: 'I have my own indicator',
            value: 'indicator',
          },
        ]}
        aria-label="Fruits"
        defaultValue="1"
        indicator={<Icon name="Favorite" />}
      />
      <FieldSelect
        label="Test option re-render bug"
        options={unMemoizedOptions}
      />
    </SpaceVertical>
  )
}

const SelectDemo = () => {
  const [isOpen, setOpen] = useState(false)
  const handleClick = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { popover, domProps } = usePopover({
    content: (
      <PopoverContent>
        <SelectContent />
      </PopoverContent>
    ),
  })
  return (
    <SpaceVertical align="start">
      {popover}
      <Dialog isOpen={isOpen} onClose={handleClose}>
        <DialogContent>
          <SelectContent />
        </DialogContent>
      </Dialog>
      <Space>
        <Button {...domProps}>Open Popover</Button>
        <Button onClick={handleClick}>Open Dialog</Button>
      </Space>
      <Card maxWidth="500px" maxHeight="300px">
        <CardContent>
          <Form
            validationMessages={{
              fruitGroups: { message: 'This is an error', type: 'error' },
            }}
          >
            <Heading>Error State</Heading>
            <FieldSelect
              label="Fruit Groups"
              name="fruitGroups"
              width={300}
              options={optionsWithGroups}
              aria-label="Fruits"
              defaultValue="1"
            />
            <FieldSelect
              label="Another Grouped Dropdown"
              name="anotherGroup"
              width={300}
              options={optionsWithGroups}
              aria-label="Fruits"
              defaultValue="1"
              isClearable
              autoFocus
            />
          </Form>
        </CardContent>
      </Card>
    </SpaceVertical>
  )
}

const App = () => {
  return (
    <ComponentsProvider loadGoogleFonts>
      <SelectDemo />
    </ComponentsProvider>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('container'))
})
