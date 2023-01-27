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
import type React from 'react'
import type { FilterModel } from '@looker/filter-expressions'
import {
  addDays,
  dateToFilterDateTimeModel,
  filterDateTimeModelToDate,
} from '@looker/filter-expressions'
import isArray from 'lodash/isArray'
import keyBy from 'lodash/keyBy'
import partition from 'lodash/partition'

import { ButtonToggles } from '../components/ControlFilter/components/ButtonToggles'
import { ButtonGroup } from '../components/ControlFilter/components/ButtonGroup'
import { CheckboxGroup } from '../components/ControlFilter/components/CheckboxGroup'
import { DateInput } from '../components/AdvancedFilter/components/DateFilter/components/DateInput'
import { DateRange } from '../components/AdvancedFilter/components/DateFilter/components/DateRange'
import { DayRangeInput } from '../components/AdvancedFilter/components/DateFilter/components/DayRangeInput'
import { RelativeTimeframes } from '../components/AdvancedFilter/components/DateFilter/components/RelativeTimeframes'
import type { RelativeTimeframeModel } from '../components/AdvancedFilter/components/DateFilter/types/relative_timeframe_types'
import {
  filterModelToRelativeTimeframeModel,
  relativeTimeframeModelToFilterModel,
} from '../components/AdvancedFilter/components/DateFilter/utils/relative_timeframe_conversions'
import { DropdownMenu } from '../components/ControlFilter/components/DropdownMenu'
import { RadioGroup } from '../components/ControlFilter/components/RadioGroup'
import {
  RangeSlider,
  Slider,
} from '../components/ControlFilter/components/Slider'
import type {
  RangeSliderProps,
  SliderProps,
} from '../components/ControlFilter/components/Slider/types'
import { TagList } from '../components/ControlFilter/components/TagList'
import type { Option } from '../types/option'
import { createEnumeration, createOptions } from './option_utils'
import type { FilterProps, InternalFilterProps } from '../types/filter_props'

interface AdapterProps extends Omit<FilterProps, 'expression'> {
  changeFilter: InternalFilterProps['changeFilter']
}

interface FilterMaxes {
  button_group: number
  button_toggles: number
  checkboxes: number
  radio_buttons: number
  [key: string]: number
}

/**
 * Defines the max number of options allowed for the defined options.
 * If a type is not defined, means it has no concept of max.
 */
const filterMaxMap: FilterMaxes = {
  button_group: 30,
  button_toggles: 30,
  checkboxes: 50,
  radio_buttons: 50,
}

/**
 * Returns the max number of options for a given filter type. Can be undefined
 */
export const maxForFilterType = (type: string) => filterMaxMap[type]

const getStringOptions = ({
  field,
  suggestions,
  enumerations,
  config,
}: AdapterProps): Option[] => {
  const options = config?.options
  const escapeEnumerationVaues = field?.has_allowed_values && field?.parameter
  let stringOptions: Option[] = []
  const noOptions = !(isArray(options) && options.length > 0)

  if (noOptions && suggestions && suggestions.length !== 0) {
    stringOptions = createOptions(suggestions)
  } else if (noOptions && enumerations) {
    stringOptions = enumerations.map(createEnumeration(escapeEnumerationVaues))
  } else if (isArray(options)) {
    if (enumerations && enumerations.length > 0) {
      stringOptions = enumerations
        .map(createEnumeration(escapeEnumerationVaues))
        .filter(({ value }) => options.includes(value))
    } else {
      stringOptions = createOptions(options)
    }
  }

  return stringOptions
}

const getPartitionedOptions = (
  item: FilterModel,
  optionsMap: { [key: string]: Option }
) => {
  // Partition out values that are included in the options array and those
  // that are not.
  const valueGroups: string[][] = isArray(item.value)
    ? partition(item.value.map(String), (value) => optionsMap[value])
    : [[], []]
  return valueGroups
}

// Multi Selects

// When suggestions/options are empty for checkboxes/button_groups (may not have fully loaded yet)
// but filter values exists, return filter values.
const getMultiStringSelectChange =
  (item: FilterModel, changeFilter: AdapterProps['changeFilter']) =>
  (value: string[]) =>
    changeFilter(Number(item.id), { ...item, value })

/**
 * Adapter for Button Group props
 */
const buttonGroupAdapter: FilterTokenAdapter<typeof ButtonGroup> = (
  item: FilterModel,
  { isLoading, ...props }: AdapterProps
): React.ComponentProps<typeof ButtonGroup> => {
  const stringOptions = getStringOptions(props)
  const optionsMap = keyBy(stringOptions, 'value')
  const [included, excluded] = getPartitionedOptions(item, optionsMap)
  // When suggestions/options are empty for checkboxes/button_groups (may not have fully loaded yet)
  // but filter values exists, return filter values.
  const value = included.length ? included : excluded
  const changeFilter = props.changeFilter

  return {
    onChange: getMultiStringSelectChange(item, changeFilter),
    value,
    options: stringOptions,
    max: maxForFilterType('button_group'),
    isLoading,
  }
}

/**
 * Returns the props needed to render a Checkbox Group control
 * @param item
 * @param props
 */
const checkboxGroupAdapter: FilterTokenAdapter<typeof CheckboxGroup> = (
  item: FilterModel,
  { isLoading, ...props }: AdapterProps
): React.ComponentProps<typeof CheckboxGroup> => {
  const adapterProps = buttonGroupAdapter(item, props)
  const { onChange, value, options } = adapterProps
  return {
    onChange,
    value,
    options,
    max: maxForFilterType('checkboxes'),
    isLoading,
  }
}

const getSingleValue = (
  item: FilterModel,
  stringOptions: Option[],
  onlyValuesFromOptions: boolean,
  fieldCategory?: string | null
) => {
  const optionsMap = keyBy(stringOptions, 'value')

  /**
   * Many filter components use only values that are present in options,
   * but at least one (DropdownMenu) can use values that are not present in options
   * (typically because there are 1000+ suggestions)
   */
  let singleValue: string
  if (onlyValuesFromOptions) {
    // If the value does not appear in options, return an empty string
    singleValue = String(
      item.value?.length && optionsMap[item.value[0]] ? item.value[0] : ''
    )
  } else {
    // If filter has a value, include it, regardless of whether it exists in options
    singleValue = item.value?.length ? String(item.value[0]) : ''
  }

  if (
    fieldCategory === 'parameter' &&
    singleValue === '' &&
    stringOptions &&
    stringOptions.length
  ) {
    singleValue = stringOptions[0].value
  }

  return singleValue
}

const getSingleStringSelectChange =
  (item: FilterModel, changeFilter: AdapterProps['changeFilter']) =>
  (value: string) => {
    changeFilter(Number(item.id), { ...item, value: [value] })
  }

/**
 * Returns the props needed to render a Button Toggle control
 * @param item
 * @param props
 */
const buttonTogglesAdapter = (
  item: FilterModel,
  { isLoading, ...props }: AdapterProps
): React.ComponentProps<typeof ButtonToggles> => {
  const { changeFilter, field } = props
  const stringOptions = getStringOptions(props)
  const value = getSingleValue(item, stringOptions, true, field?.category)

  return {
    onChange: getSingleStringSelectChange(item, changeFilter),
    value,
    options: stringOptions,
    isLoading,
    // TODO: max: maxForFilterType('button_toggles'),
  }
}

const relativeTimeframesAdapter = (
  item: FilterModel,
  props: AdapterProps
): React.ComponentProps<typeof RelativeTimeframes> | undefined => {
  if (item.type === 'range' && (item.start == null || item.end == null)) {
    return undefined
  }
  const { changeFilter } = props
  // Relative Timeframes
  const relativeTimeframeValue = filterModelToRelativeTimeframeModel(item)
  if (relativeTimeframeValue === undefined) {
    return undefined
  }
  const relativeTimeframeOnChange = (
    relativeTimeframe: RelativeTimeframeModel
  ) => {
    const newItem = relativeTimeframeModelToFilterModel(relativeTimeframe)
    changeFilter(Number(item.id), { ...item, ...newItem })
  }
  return {
    onChange: relativeTimeframeOnChange,
    value: relativeTimeframeValue,
  }
}

/**
 * Builds the props for the DateInput control
 */
const dateInputAdapter = (
  item: FilterModel,
  props: AdapterProps
): React.ComponentProps<typeof DateInput> | undefined => {
  if (item.date == null) {
    return undefined
  }
  const { changeFilter } = props

  // Day Picker
  const dateValue = filterDateTimeModelToDate(item.date)
  const dateChange = (date: Date) => {
    const dateModel = dateToFilterDateTimeModel(date)
    changeFilter(Number(item.id), { ...item, type: 'on', date: dateModel })
  }
  return {
    onChange: dateChange,
    date: dateValue,
  }
}

/**
 * Builds the props for the DayRangeInput control
 */
const dayRangeInputAdapter = (
  item: FilterModel,
  props: AdapterProps
): React.ComponentProps<typeof DayRangeInput> | undefined => {
  if (item.start == null || item.end == null) {
    return undefined
  }
  const { changeFilter } = props

  // Day Range Picker
  const dateRangeValue = {
    from: filterDateTimeModelToDate(item.start),
    to: addDays(filterDateTimeModelToDate(item.end), -1), // DateRange is inclusive, grammar is exclusive
  }
  const dateRangeChange = ({ from, to }: { from: Date; to: Date }) => {
    const startDateModel = dateToFilterDateTimeModel(from)
    // DateRange is inclusive, grammar is exclusive
    const translatedTo = addDays(to, 1)
    const endDateModel = dateToFilterDateTimeModel(translatedTo)

    changeFilter(Number(item.id), {
      ...item,
      start: startDateModel,
      end: endDateModel,
      type: 'range',
    })
  }

  return {
    onChange: dateRangeChange,
    value: dateRangeValue,
  }
}

/**
 * Builds the props for the DateRange control
 */
const dateRangeAdapter = (
  item: FilterModel,
  props: AdapterProps
): React.ComponentProps<typeof DateRange> | undefined => {
  if (item.start == null || item.end == null) {
    return undefined
  }
  // Date/Time Range input
  const dateTimeRangeValue = {
    ...item,
    id: item.id || '',
    start: item.start,
    end: item.end,
  } as FilterModel

  const { changeFilter } = props

  const dateTimeRangeChange = (id: string, item: Partial<FilterModel>) => {
    const { from, to } = item
    const startDateModel = dateToFilterDateTimeModel(from)
    // DateRange is inclusive, grammar is exclusive
    const translatedTo = addDays(to, 1)
    const endDateModel = dateToFilterDateTimeModel(translatedTo)

    changeFilter(Number(id), {
      ...(item as FilterModel),
      start: startDateModel,
      end: endDateModel,
      type: 'range',
    })
  }

  return {
    onChange: dateTimeRangeChange,
    item: dateTimeRangeValue,
    showTime: true,
  }
}

const sliderAdapter = (
  item: FilterModel,
  props: AdapterProps
): React.ComponentProps<typeof Slider> | undefined => {
  if (item.value?.length !== 1) {
    return undefined
  }
  const { changeFilter, config } = props
  // Slider
  const sliderValue: number = item.value[0]
  const sliderChange = (value: SliderProps['value']) => {
    changeFilter(Number(item.id), { ...item, type: '=', value: [value] })
  }

  return {
    onChange: sliderChange,
    value: sliderValue,
    options: config?.options as SliderProps['options'],
  }
}

const rangeSliderAdapter = (
  item: FilterModel,
  props: AdapterProps
): React.ComponentProps<typeof RangeSlider> | undefined => {
  if (item.low == null || item.high == null) {
    return undefined
  }
  const { changeFilter, config } = props
  // Range Slider
  const rangeSliderValue: RangeSliderProps['value'] = {
    min: item.low,
    max: item.high,
  }
  const rangeSliderChange = (range: RangeSliderProps['value']) => {
    changeFilter(Number(item.id), {
      ...item,
      bounds: '[]',
      low: range.min,
      high: range.max,
      type: 'between',
    })
  }

  return {
    value: rangeSliderValue,
    options: config?.options as RangeSliderProps['options'],
    onChange: rangeSliderChange,
    name: props.name,
  }
}

/**
 * Returns the props needed to render a Dropdown Menu control
 * @param item
 * @param props
 */
const dropdownMenuAdapter = (
  item: FilterModel,
  props: AdapterProps
): React.ComponentProps<typeof DropdownMenu> => {
  const { changeFilter, config, field, isLoading, onInputChange } = props
  const stringOptions = getStringOptions(props)
  const value = getSingleValue(item, stringOptions, false, field?.category)
  const tokenStyle = config?.display !== 'popover'

  return {
    onChange: getSingleStringSelectChange(item, changeFilter),
    isLoading,
    onInputChange,
    value,
    options: stringOptions,
    max: maxForFilterType('dropdown_menu'),
    tokenStyle,
  }
}

/**
 * Returns the props needed to render a TagList control
 * @param item
 * @param props
 */
const tagListAdapter = (
  item: FilterModel,
  props: AdapterProps
): React.ComponentProps<typeof TagList> => {
  const { changeFilter, config, isLoading, onInputChange } = props

  const stringOptions = getStringOptions(props)
  const optionsMap = keyBy(stringOptions, 'value')
  const [included, excluded] = getPartitionedOptions(item, optionsMap)
  const values = [...included, ...excluded]

  const tokenStyle = config?.display !== 'popover'

  return {
    onChange: getMultiStringSelectChange(item, changeFilter),
    onInputChange,
    value: values,
    options: stringOptions,
    max: maxForFilterType('tag_list'),
    isLoading,
    tokenStyle,
  }
}

/**
 * Returns the props needed to render a Radio Group control
 * @param item
 * @param props
 */
const radioGroupAdapter = (
  item: FilterModel,
  { isLoading, ...props }: AdapterProps
): React.ComponentProps<typeof RadioGroup> => {
  const { changeFilter, field } = props
  const stringOptions = getStringOptions(props)
  const value = getSingleValue(item, stringOptions, true, field?.category)

  return {
    onChange: getSingleStringSelectChange(item, changeFilter),
    value,
    options: stringOptions,
    max: maxForFilterType('radio_buttons'),
    isLoading,
  }
}

export const getControlFilterInfo = (
  item: FilterModel,
  adapterProps: AdapterProps
): {
  Component?: React.ElementType
  props?: React.ComponentProps<React.ElementType>
} => {
  const { Component, adapter } = filterTokenAdapterMap[
    adapterProps.config.type
  ] || {
    Component: undefined,
    adapter: undefined,
  }
  const props = adapter?.(item, adapterProps)

  return { Component, props }
}

/**
 * A map of valid filter UI types
 */
const filterTokenAdapterMap: Record<
  string,
  FilterTokenProps<React.ElementType>
> = {
  button_group: { Component: ButtonGroup, adapter: buttonGroupAdapter },
  button_toggles: { Component: ButtonToggles, adapter: buttonTogglesAdapter },
  checkboxes: { Component: CheckboxGroup, adapter: checkboxGroupAdapter },
  date_time_range_input: { Component: DateRange, adapter: dateRangeAdapter },
  day_picker: { Component: DateInput, adapter: dateInputAdapter },
  day_range_picker: {
    Component: DayRangeInput,
    adapter: dayRangeInputAdapter,
  },
  dropdown_menu: { Component: DropdownMenu, adapter: dropdownMenuAdapter },
  radio_buttons: { Component: RadioGroup, adapter: radioGroupAdapter },
  range_slider: { Component: RangeSlider, adapter: rangeSliderAdapter },
  relative_timeframes: {
    Component: RelativeTimeframes,
    adapter: relativeTimeframesAdapter,
  },
  slider: { Component: Slider, adapter: sliderAdapter },
  tag_list: { Component: TagList, adapter: tagListAdapter },
}

type FilterTokenAdapter<T extends React.ElementType> = (
  item: FilterModel,
  props: AdapterProps
) => React.ComponentProps<T>

type FilterTokenProps<T extends React.ElementType> = {
  Component: T
  adapter: FilterTokenAdapter<T>
}

export const TEST_ONLY = {
  getSingleValue,
}
