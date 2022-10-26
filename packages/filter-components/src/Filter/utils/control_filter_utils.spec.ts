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
import type {
  FilterDateTimeModel,
  FilterModel,
} from '@looker/filter-expressions'
import { dateToFilterDateTimeModel } from '@looker/filter-expressions'
import { ButtonToggles } from '../components/ControlFilter/components/ButtonToggles'
import { DropdownMenu } from '../components/ControlFilter/components/DropdownMenu'
import { DateInput } from '../components/AdvancedFilter/components/DateFilter/components/DateInput'
import { DateRange } from '../components/AdvancedFilter/components/DateFilter/components/DateRange'
import type { Option } from '../types/option'
import {
  getControlFilterInfo,
  maxForFilterType,
  TEST_ONLY,
} from './control_filter_utils'
const getSingleValue = TEST_ONLY.getSingleValue

const getConfig = (
  options = {},
  type = 'button_toggles',
  display = 'inline'
) => ({
  options,
  type,
  display,
})

describe('getControlFilterInfo', () => {
  it('Returns props for ButtonToggles Component', () => {
    const item: FilterModel = {
      id: 'filter',
      type: '=',
      is: true,
    }
    const filterOptions = ['Yes', 'No']
    const tokenInfo = getControlFilterInfo(item, {
      config: getConfig(filterOptions),
      changeFilter: jest.fn(),
      name: '',
    })
    expect(tokenInfo).not.toBeNull()
    expect(tokenInfo?.Component).toBe(ButtonToggles)
  })

  it('Returns a Dropdown Menu Control Filter with suggestions', () => {
    const item: FilterModel = {
      id: 'filter',
      type: '=',
      is: true,
    }
    const filterOptions = {}
    const suggestions = ['Snap', 'Crackle', 'Pop']
    const tokenInfo = getControlFilterInfo(item, {
      config: getConfig(filterOptions, 'dropdown_menu'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      suggestions,
      name: '',
    })

    expect(tokenInfo).not.toBeNull()
    expect(tokenInfo?.Component).toBe(DropdownMenu)
    expect(tokenInfo?.props.options).toHaveLength(3)

    const filterOptionsArray = [] as any
    const tokenInfoTwo = getControlFilterInfo(item, {
      config: getConfig(filterOptionsArray, 'dropdown_menu'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      suggestions,
      name: '',
    })

    expect(tokenInfoTwo).not.toBeNull()
    expect(tokenInfoTwo?.Component).toBe(DropdownMenu)
    expect(tokenInfoTwo?.props.options).toHaveLength(3)
  })

  it('Returns DropdownMenu ControlFilter props with enumerations', () => {
    const item: FilterModel = {
      id: 'filter',
      type: '=',
      is: true,
    }
    const filterOptions = {}
    const enumerations = [
      { label: 'Snap', value: 'caret^_escaped' },
      { label: 'Crackle', value: '1' },
      { label: 'Pop', value: '2' },
      { label: 'Count Chocula', value: '4' },
    ] as Option[]

    const field = {
      has_allowed_values: true,
      parameter: true,
      enumerations,
    }
    const tokenInfo = getControlFilterInfo(item, {
      config: getConfig(filterOptions, 'dropdown_menu'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      enumerations,
      field,
      name: '',
    })

    const filterOptionsArray = [] as any
    const tokenInfoTwo = getControlFilterInfo(item, {
      config: getConfig(filterOptionsArray, 'dropdown_menu'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      enumerations,
      name: '',
    })
    expect(tokenInfoTwo?.props?.options).toHaveLength(4)
    expect(tokenInfo?.props?.options[0].value).toEqual('caret_escaped')
  })

  it('Returns DropdownMenu ControlFilter props with enumerations if suggestions is an empty array', () => {
    const item: FilterModel = {
      id: 'filter',
      type: '=',
      is: true,
    }
    const filterOptions = {}
    const enumerations = [
      { label: 'Snap', value: '0' },
      { label: 'Crackle', value: '1' },
      { label: 'Pop', value: '2' },
      { label: 'Count Chocula', value: '4' },
    ] as Option[]
    const tokenInfo = getControlFilterInfo(item, {
      config: getConfig(filterOptions, 'dropdown_menu'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      suggestions: [],
      enumerations,
      name: '',
    })

    const filterOptionsArray = [] as any
    const tokenInfoTwo = getControlFilterInfo(item, {
      config: getConfig(filterOptionsArray, 'dropdown_menu'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      suggestions: [],
      enumerations,
      name: '',
    })
    expect(tokenInfo?.props?.options).toHaveLength(4)
    expect(tokenInfoTwo?.props?.options).toHaveLength(4)
  })

  it("Returns Checkbox ControlFilter props preserving a filter's default value, if suggestions are an empty array", () => {
    const item: FilterModel = {
      id: 'filter',
      type: '=',
      is: true,
      value: ['one', 'two', 'three'],
    }

    const filterOptions = {}
    const suggestions = [] as any

    const checkboxes = getControlFilterInfo(item, {
      config: getConfig(filterOptions, 'checkboxes'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      suggestions,
      name: '',
    })

    expect(checkboxes?.props?.value).toEqual(['one', 'two', 'three'])
    expect(checkboxes?.props.max).toEqual(50)

    const buttonGroup = getControlFilterInfo(item, {
      config: getConfig(filterOptions, 'button_group'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      suggestions,
      name: '',
    })
    expect(buttonGroup?.props?.value).toEqual(['one', 'two', 'three'])
  })

  it('Returns props for checkbox component with options', () => {
    const item: FilterModel = {
      id: 'filter',
      type: '=',
      is: true,
    }
    const filterOptions = ['Snap', 'Crackle', 'Pop']
    const checkboxes = getControlFilterInfo(item, {
      config: getConfig(filterOptions, 'checkboxes'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      name: '',
    })

    expect(checkboxes?.props.options).toHaveLength(3)
  })

  it('Returns a ButtonGroup with multiple values selected', () => {
    const item: FilterModel = {
      id: 'filter',
      type: '=',
      is: true,
      value: ['Snap', 'Crackle'],
    }
    const filterOptions = ['Snap', 'Crackle', 'Pop']
    const tokenInfo = getControlFilterInfo(item, {
      config: getConfig(filterOptions, 'button_group'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      name: '',
    })

    expect(tokenInfo?.props.value).toHaveLength(2)
    expect(tokenInfo?.props.value[0]).toBe('Snap')
    expect(tokenInfo?.props.value[1]).toBe('Crackle')
    expect(tokenInfo?.props.options).toHaveLength(3)
  })

  it('Returns Component & props for a Date input control', () => {
    const date: FilterDateTimeModel = {
      year: 2019,
      month: 9,
      day: 6,
    }

    const item: FilterModel = {
      id: 'filter',
      type: '=',
      is: true,
      date,
    }

    const filterOptions = ['Snap', 'Crackle', 'Pop']
    const tokenInfo = getControlFilterInfo(item, {
      config: getConfig(filterOptions, 'day_picker'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      name: '',
    })

    expect(tokenInfo?.Component).toBe(DateInput)
    const { year, month, day } = dateToFilterDateTimeModel(
      tokenInfo?.props.date
    )
    expect(year).toBe(2019)
    expect(month).toBe(9)
    expect(day).toBe(6)
  })

  it('Returns a dictionary with all supported controls for date ranges', () => {
    const date: FilterDateTimeModel = {
      year: 2019,
      month: 9,
      day: 6,
    }

    const item: FilterModel = {
      id: 'filter',
      type: 'range',
      is: true,
      start: date,
      end: date,
    }

    const tokenInfo = getControlFilterInfo(item, {
      config: getConfig({}, 'date_time_range_input'),
      changeFilter: jest.fn(),
      onInputChange: jest.fn(),
      name: '',
    })

    expect(tokenInfo?.Component).toBe(DateRange)
    const { year, month, day } = tokenInfo?.props.item.start ?? {}
    expect(year).toBe(2019)
    expect(month).toBe(9)
    expect(day).toBe(6)
  })

  describe('Ensure change filter is called for each filter token map value', () => {
    const numberStringControls = [
      'checkboxes',
      'button_group',
      'tag_list',
      'radio_buttons',
      'button_toggles',
      'dropdown_menu',
    ]

    numberStringControls.forEach((control) => {
      it(`${control} calls changeFilter `, () => {
        const item: FilterModel = {
          id: 'filter',
          type: '=',
          is: true,
        }
        const filterOptions = {}
        const changeFilter = jest.fn()
        const tokenInfo = getControlFilterInfo(item, {
          config: getConfig(filterOptions, control),
          changeFilter,
          name: '',
        })

        tokenInfo?.props?.onChange?.(1234)
        expect(changeFilter).toHaveBeenCalledTimes(1)
      })
    })

    it('Ensure change filter is called for number slider', () => {
      const changeFilter = jest.fn()
      const item: FilterModel = {
        id: 'filter',
        type: 'range',
        is: true,
        value: [50],
      }

      const tokenInfo = getControlFilterInfo(item, {
        config: getConfig({}, 'slider'),
        changeFilter,
        name: '',
      })

      tokenInfo?.props?.onChange?.(25)
      expect(changeFilter).toHaveBeenCalledTimes(1)
    })

    it('Ensure change filter is called for number range slider', () => {
      const changeFilter = jest.fn()
      const item: FilterModel = {
        id: 'filter',
        type: 'range',
        is: true,
        low: 20,
        high: 30,
      }

      const tokenInfo = getControlFilterInfo(item, {
        config: getConfig({}, 'range_slider'),
        changeFilter,
        name: '',
      })

      tokenInfo?.props?.onChange?.(25)
      expect(changeFilter).toHaveBeenCalledTimes(1)
    })

    it('Ensure change filter is called for relative frame changes', () => {
      const date: FilterDateTimeModel = {
        year: 2019,
        month: 9,
        day: 6,
      }

      const changeFilter = jest.fn()
      const item: FilterModel = {
        id: 'filter',
        type: 'range',
        is: true,
        start: date,
        end: date,
      }

      const tokenInfo = getControlFilterInfo(item, {
        config: getConfig({}, 'relative_timeframes'),
        changeFilter,
        name: '',
      })
      const range = {
        from: new Date(),
        to: new Date(),
      }

      tokenInfo?.props?.onChange?.(range)
      expect(changeFilter).toHaveBeenCalledTimes(1)
    })

    it('Ensure change filter is called for day range picker', () => {
      const date: FilterDateTimeModel = {
        year: 2019,
        month: 9,
        day: 6,
      }

      const changeFilter = jest.fn()
      const item: FilterModel = {
        id: 'filter',
        type: 'range',
        is: true,
        start: date,
        end: date,
      }

      const tokenInfo = getControlFilterInfo(item, {
        config: getConfig({}, 'day_range_picker'),
        changeFilter,
        name: '',
      })
      tokenInfo?.props?.onChange?.(new Date())
      expect(changeFilter).toHaveBeenCalledTimes(1)
    })

    it('Ensure change filter is called for date picker', () => {
      const date: FilterDateTimeModel = {
        year: 2019,
        month: 9,
        day: 6,
      }

      const changeFilter = jest.fn()
      const item: FilterModel = {
        id: 'filter',
        type: 'on',
        is: true,
        date,
      }

      const tokenInfo = getControlFilterInfo(item, {
        config: getConfig({}, 'day_picker'),
        changeFilter,
        name: '',
      })
      tokenInfo?.props.onChange(new Date())
      expect(changeFilter).toHaveBeenCalledTimes(1)
    })
  })
})

describe('maxForFilterType', () => {
  it('Checkboxes have a defined max', () => {
    expect(maxForFilterType('checkboxes')).toEqual(50)
  })

  it('Radio buttons have a defined max', () => {
    expect(maxForFilterType('radio_buttons')).toEqual(50)
  })

  it('Button groups have a defined max', () => {
    expect(maxForFilterType('button_group')).toEqual(30)
  })

  it('Button toggles have a defined max', () => {
    expect(maxForFilterType('button_toggles')).toEqual(30)
  })

  const controlsWithNoMax = [
    'advanced',
    'tag_list',
    'dropdown_menu',
    'relative_timeframes',
    'day_picker',
    'slider',
    'range_slider',
  ]

  controlsWithNoMax.forEach((control) => {
    it(`${control} has no defined max`, () => {
      expect(maxForFilterType(control)).toBeUndefined()
    })
  })
})

describe('getSingleValue', () => {
  const item = {
    id: '1',
    is: true,
    type: 'match',
    value: ['Buddy McGee'],
    attributeName: '',
    attributeValue: '',
    left: null,
    right: null,
  }
  const baseOptions = [
    {
      value: 'Mr Blue Sky',
      label: 'Mr Blue Sky',
    },
    {
      value: 'Ms Pretty Face',
      label: 'Ms Pretty Face',
    },
    {
      value: 'The Whole Human Race',
      label: 'The Whole Human Race',
    },
  ]
  const fieldCategory = 'dimension'

  it("should return an the item's value when the value does not appear in options and onlyValuesFromOptions is set to false", () => {
    expect(getSingleValue(item, baseOptions, false, fieldCategory)).toEqual(
      'Buddy McGee'
    )
  })

  it('should return an empty string when the value does not appear in options and onlyValuesFromOptions is set to true', () => {
    expect(getSingleValue(item, baseOptions, true, fieldCategory)).toEqual('')
  })
})
