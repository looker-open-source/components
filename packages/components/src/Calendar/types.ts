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

export type NavCB = (date: Date) => void

export type RangeModifier = {
  from?: Date
  to?: Date
}

export type RangeType = 'draft' | 'selected' | 'none'
export type RangeProps = {
  rangeType: RangeType
  rangePosition?: 'start' | 'middle' | 'end'
}

export type DateSelectionProps = {
  onSelect: (date: Date) => void
  onDraftSelect: (date: Date) => void
}

export type DateStateProps = {
  datesSelected: Date[]
  draftTo?: Date
}

export type CalendarLocaleProps = {
  /**
   * The day to use as first day of the week, starting from 0 (Sunday) to 6 (Saturday).
   * Uses the locale default (0 for en-US)
   */
  firstDayOfWeek: number
  /**
   * Locale object from date-fns
   * @default date-fns/locale/en-US
   * @example
   * import ko from 'date-fns/locale/ko'
   */
  locale: Locale
}

export type MonthBaseProps = DateSelectionProps &
  CalendarLocaleProps &
  DateStateProps & {
    className?: string
    datesSelected: Date[]
    draftTo?: Date
  }

export type YearBaseProps = {
  selectedMonth?: Date
  onMonthClick: (month: number) => void
  locale: Locale
}

/**
 * Used for the scrollable list of months/years
 */
export type ScrollableDateListBaseProps = {
  currentDate: Date
  onMonthChange: NavCB
  baseMonth: Date
  setBaseMonth: (month: Date) => void
}

/**
 * Used for the items in the scrollable list of months/years
 */
export type ScrollableDateListItemProps = {
  date: Date
  index: number
  setItemPosition: (index: number, element: HTMLElement) => void
  fullRender: boolean
}

export type MonthListProps = MonthBaseProps & ScrollableDateListBaseProps
export type MonthListItemProps = Omit<
  MonthListProps,
  'currentDate' | 'baseMonth' | 'setBaseMonth' | 'onMonthChange'
>

export type YearListProps = ScrollableDateListBaseProps & YearBaseProps
export type YearListItemProps = Omit<
  YearListProps,
  'currentDate' | 'baseMonth' | 'setBaseMonth' | 'onMonthChange'
>
