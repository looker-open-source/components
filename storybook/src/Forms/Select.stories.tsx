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

import chunk from 'lodash/chunk'
import React, { FormEvent, MouseEvent, useMemo, useState } from 'react'
import {
  Card,
  CardContent,
  Form,
  Button,
  Dialog,
  Divider,
  Label,
  Box,
  Heading,
  Icon,
  Select,
  Fieldset,
  FieldSelect,
  FieldToggleSwitch,
  DialogContent,
  ComboboxOptionObject,
  SelectOptionProps,
  SelectOptionGroupProps,
  Space,
  SpaceVertical,
  Text,
  Flex,
  useToggle,
} from '@looker/components'
import { options1k } from './options1k'

export const All = () => (
  <Fieldset>
    <Basic />
    <Disabled />
    <Detail />
    <Description />
    <Error />
    <Inline />
    <InlineError />
    <SelectDemo />
    <UpdateOptions />
    <EmptyValue />
    <OptionIcons />
    <OptionIcons />
    <CreateOption />
  </Fieldset>
)

export default {
  component: All,
  title: 'Forms/Select',
}

const commonProps = {
  label: 'Label',
  options: [
    { label: 'Cheddar', value: 'cheddar' },
    { label: 'Gouda', value: 'gouda' },
    { label: 'Swiss', value: 'swiss' },
  ],
  placeholder: 'Placeholder',
}

export const Basic = () => <FieldSelect {...commonProps} />
export const Disabled = () => <FieldSelect {...commonProps} disabled />
export const Detail = () => (
  <FieldSelect {...commonProps} detail="0/50" required />
)
export const Description = () => (
  <FieldSelect {...commonProps} description="I'm a little teapot" />
)
export const Required = () => <FieldSelect {...commonProps} required />
export const Error = () => (
  <FieldSelect
    {...commonProps}
    validationMessage={{ message: 'Error Message', type: 'error' }}
  />
)
export const Inline = () => <FieldSelect {...commonProps} inline />
export const InlineError = () => (
  <FieldSelect
    {...commonProps}
    inline
    validationMessage={{ message: 'Error Message', type: 'error' }}
  />
)

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

const optionsWithDescriptions = options.map((option: ComboboxOptionObject) => ({
  ...option,
  description: `${option.label} are the best ever!`,
}))

function checkOption(option: ComboboxOptionObject, searchTerm: string) {
  return (
    option.label &&
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  )
}

function optionReducer(searchTerm: string) {
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

function TestIndicator() {
  return <Text color="pink">***</Text>
}

export function SelectContent() {
  const [value, setValue] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
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
  const newOptions = useMemo(() => {
    if (searchTerm === '') return options1k
    return options1k.reduce(optionReducer(searchTerm), [])
  }, [searchTerm])
  return (
    <>
      <Heading mb="large">Select</Heading>
      <FieldSelect
        label="1k (windowed) options"
        width={300}
        mb="medium"
        options={options1k}
        aria-label="Fruits"
        placeholder="Select Brand"
        defaultValue="Boulder Creek"
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
          alignSelf="flex-start"
        />
      </Flex>
      <Box>
        <Button mt="medium" mr="small" data-fruit="5" onClick={handleClick}>
          Kiwis
        </Button>
        <Button mt="medium" data-fruit="3" onClick={handleClick}>
          Oranges
        </Button>
      </Box>
      <Divider my="xlarge" />
      <SpaceVertical>
        <FieldSelect
          label="Default Value"
          width={300}
          mb="medium"
          options={options}
          aria-label="Fruits"
          defaultValue="1"
        />
        <FieldSelect
          label="Groups"
          width={300}
          mb="medium"
          options={optionsWithGroups}
          aria-label="Fruits"
          defaultValue="1"
        />
        <FieldSelect
          label="Descriptions"
          width={300}
          mb="medium"
          options={optionsWithDescriptions}
          aria-label="Fruits"
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
          label="Indicator"
          width={300}
          mb="medium"
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
      </SpaceVertical>
    </>
  )
}

export const SelectDemo = () => {
  const [isOpen, setOpen] = useState(false)
  const handleClick = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <SpaceVertical align="start">
      <Dialog isOpen={isOpen} onClose={handleClose}>
        <DialogContent>
          <SelectContent />
        </DialogContent>
      </Dialog>
      <Button onClick={handleClick}>Open</Button>
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
            />
          </Form>
        </CardContent>
      </Card>
    </SpaceVertical>
  )
}

export const UpdateOptions = () => {
  const [value, setValue] = useState('second')
  const { value: isPlural, toggle } = useToggle()
  const s = isPlural ? 's' : ''
  const options = useMemo(
    () => [
      { label: `Second${s}`, value: 'second' },
      { label: `Hour${s}`, value: 'hour' },
    ],
    [s]
  )
  return (
    <Space>
      <Button onClick={toggle}>Use {isPlural ? 'singular' : 'plural'}</Button>
      <Select autoResize options={options} value={value} onChange={setValue} />
    </Space>
  )
}

export const EmptyValue = () => {
  const [value, setValue] = useState(false)
  function handleToggle(e: FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.checked)
  }

  const [selectValue, setSelectValue] = useState('Option A')

  const options = [{ value: 'Option A' }, { value: 'Option B' }]

  return (
    <Space p="large">
      <FieldToggleSwitch
        label="Use empty value"
        on={value}
        onChange={handleToggle}
      />
      <Select
        value={value ? '' : selectValue}
        placeholder="Can't change me when toggle is on"
        onChange={setSelectValue}
        options={options}
      />
      <Select
        value={value ? '' : selectValue}
        onChange={setSelectValue}
        options={[
          { label: 'Option with empty string value', value: '' },
          ...options,
        ]}
      />
    </Space>
  )
}

const iconOptions = [
  { icon: 'ChartArea', label: 'Area', value: 'area' },
  { icon: 'ChartBar', label: 'Bar', value: 'bar' },
  { icon: 'ChartBoxPlot', label: 'Box Plot', value: 'boxplot' },
  { icon: 'ChartColumn', label: 'Column', value: 'column' },
  { icon: 'ChartCustom', label: 'Custom', value: 'custom' },
  { icon: 'ChartDonutMultiples', label: 'Donut', value: 'donut' },
  { icon: 'ChartFunnel', label: 'Funnel', value: 'funnel' },
  { icon: 'ChartLine', label: 'Line', value: 'line' },
  { icon: 'ChartMap', label: 'Map', value: 'map' },
  { icon: 'ChartPie', label: 'Pie', value: 'pie' },
  { icon: 'ChartScatterplot', label: 'Scatter Plot', value: 'scatterplot' },
  { icon: 'ChartSingleRecord', label: 'Single Record', value: 'singlerecord' },
  { icon: 'ChartSingleValue', label: 'Single Value', value: 'singlevalue' },
  { icon: 'ChartTable', label: 'Table', value: 'table' },
  { icon: 'ChartTimeline', label: 'Timeline', value: 'timeline' },
  { icon: 'ChartWaterfall', label: 'Waterfall', value: 'waterfall' },
  { icon: 'ChartWordCloud', label: 'Word Cloud', value: 'wordcloud' },
]

export const OptionIcons = () => {
  const [filterTerm, setFilterTerm] = useState('')
  const newOptions = useMemo(() => {
    return iconOptions.filter(
      (iconOption) =>
        iconOption.label.toLowerCase().indexOf(filterTerm.toLowerCase()) > -1
    )
  }, [filterTerm])
  return (
    <Space>
      <FieldSelect
        label="With Filtering"
        options={newOptions}
        placeholder="Search visualizations"
        isFilterable
        onFilter={setFilterTerm}
        isClearable
      />
      <FieldSelect
        label="No Filtering"
        options={iconOptions}
        placeholder="Select a visualization"
      />
      <FieldSelect
        label="Descriptions"
        options={iconOptions.map((option) => ({
          ...option,
          description: 'This is a description',
        }))}
        placeholder="Select a visualization"
      />
      <FieldSelect
        label="Groups"
        options={chunk(iconOptions, 5).map((arr, index) => ({
          label: `Group ${index + 1}`,
          options: arr,
        }))}
        placeholder="Select a visualization"
      />
      <FieldSelect
        label="Custom Artwork"
        options={[
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 1187.198"
                width="1000"
                height="1187.198"
              >
                <path
                  d="m 979.04184,925.18785 c -17.95397,41.47737 -39.20563,79.65705 -63.82824,114.75895 -33.56298,47.8528 -61.04356,80.9761 -82.22194,99.3698 -32.83013,30.192 -68.00529,45.6544 -105.67203,46.5338 -27.04089,0 -59.6512,-7.6946 -97.61105,-23.3035 -38.08442,-15.5358 -73.08371,-23.2303 -105.08578,-23.2303 -33.56296,0 -69.55888,7.6945 -108.06101,23.2303 -38.5608,15.6089 -69.62484,23.7432 -93.37541,24.5493 -36.12049,1.5389 -72.1237,-14.3632 -108.06101,-47.7796 -22.93711,-20.0059 -51.62684,-54.3017 -85.99592,-102.8874 C 92.254176,984.54592 61.937588,924.38175 38.187028,855.7902 12.750995,781.70252 0,709.95986 0,640.50361 0,560.94181 17.191859,492.32094 51.626869,434.81688 78.689754,388.62753 114.69299,352.19192 159.75381,325.44413 c 45.06086,-26.74775 93.74914,-40.37812 146.18212,-41.25019 28.68971,0 66.3125,8.8744 113.06613,26.31542 46.62174,17.49964 76.55727,26.37404 89.68198,26.37404 9.8124,0 43.06758,-10.37669 99.4431,-31.06405 53.31237,-19.18512 98.30724,-27.12887 135.16787,-23.99975 99.8828,8.06098 174.92313,47.43518 224.82789,118.37174 -89.33023,54.12578 -133.51903,129.93556 -132.63966,227.18753 0.8061,75.75115 28.28668,138.78795 82.2952,188.8393 24.47603,23.23022 51.81008,41.18421 82.22186,53.93522 -6.59525,19.12648 -13.557,37.44688 -20.95846,55.03446 z M 749.96366,23.751237 c 0,59.37343 -21.69138,114.810233 -64.92748,166.121963 -52.17652,60.99961 -115.28658,96.24803 -183.72426,90.68597 -0.87204,-7.12298 -1.37769,-14.61967 -1.37769,-22.49743 0,-56.99843 24.81315,-117.99801 68.87738,-167.873453 21.99909,-25.25281 49.978,-46.25018 83.90738,-63.00018 C 686.57507,10.688027 718.59913,1.5631274 748.71783,5.2734376e-4 749.59727,7.9378274 749.96366,15.875627 749.96366,23.750467 Z"
                  id="path4"
                />
              </svg>
            ),
            label: 'iOS',
            value: 'iOS',
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  fill="#7cb342"
                  d="M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"
                />
                <path
                  fill="#7cb342"
                  d="M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"
                />
                <path
                  fill="#7cb342"
                  d="M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"
                />
              </svg>
            ),
            label: 'Android',
            value: 'Android',
          },
        ]}
        placeholder="Select a mobile platform"
      />
    </Space>
  )
}

export const CreateOption = () => {
  const [filterTerm, setFilterTerm] = useState('')
  const newOptions = useMemo(() => {
    return options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(filterTerm.toLowerCase()) > -1
    )
  }, [filterTerm])
  function formatCreateLabel(inputValue: string) {
    return `Create a fruit: ${inputValue}`
  }
  return (
    <FieldSelect
      label="showCreate &amp; formatCreateLabel"
      options={newOptions}
      isFilterable
      onFilter={setFilterTerm}
      showCreate
      formatCreateLabel={formatCreateLabel}
      width={300}
    />
  )
}
