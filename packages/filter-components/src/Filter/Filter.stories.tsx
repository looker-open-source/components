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
import React, { useEffect, useState } from 'react'
import type { Story } from '@storybook/react/types-6-0'
import { getLocale } from '../../'
import { i18nInit } from '../utils/i18n'
import { i18nResources } from '../locales'
import type { FilterProps, FilterChangeProps } from './types/filter_props'
import { Filter } from './Filter'

const Template: Story<FilterProps & { locale?: string }> = ({
  locale = 'en',
  ...args
}) => {
  const [expression, setExpression] = useState(args.expression)
  const handleChange = (value: FilterChangeProps) => {
    setExpression(value.expression)
    args.onChange?.(value)
  }

  const [ready, setReady] = useState(false)
  useEffect(() => {
    // Update the locale
    i18nInit({
      locale,
      resources: i18nResources,
      dateLocale: getLocale(locale),
    }).then(() => {
      setReady(true)
    })
  }, [locale])

  return ready ? (
    <Filter {...args} expression={expression} onChange={handleChange} />
  ) : (
    <p>Loading...</p>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  locale: 'en',
  expressionType: 'number',
  expression: '',
  allowMultipleValues: true,
}

export const MultiConditionNumber = Template.bind({})
MultiConditionNumber.args = {
  ...Basic.args,
  expression: '[0,20],>30',
}

export const MultiConditionDate = Template.bind({})
MultiConditionDate.args = {
  locale: 'en',
  expressionType: 'date',
  expression: 'this week,last week, next week',
  allowMultipleValues: true,
}

export const MultiConditionString = Template.bind({})
MultiConditionString.args = {
  expressionType: 'string',
  expression: '%Active%,MV Sport,-Activewear Apparel',
  allowMultipleValues: true,
}

export const MultiConditionTier = Template.bind({})
MultiConditionTier.args = {
  expressionType: 'tier',
  expression: "20 to 29,{{ _user_attributes['locale'] }}",
  allowMultipleValues: true,
}

export const Config = Template.bind({})
Config.args = {
  ...Basic.args,
  config: { max: 100, min: 0, type: 'slider' },
  expression: '20',
}

export const RelativeTimeframes = Template.bind({})
RelativeTimeframes.args = {
  locale: 'en',
  config: { type: 'relative_timeframes' },
  expression: 'Today',
  expressionType: 'date',
  allowMultipleValues: true,
}

export default {
  title: 'Filters / Filter',
  component: Filter,
}
