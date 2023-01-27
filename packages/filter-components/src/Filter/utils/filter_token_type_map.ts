/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

/**
 * A map of valid filter UI types
 */
const filterTokenTypeMap: { [key: string]: string } = {
  button_group: 'button_group',
  checkboxes: 'checkboxes',
  tag_list: 'tag_list',
  radio_buttons: 'radio_buttons',
  button_toggles: 'button_toggles',
  dropdown_menu: 'dropdown_menu',
  relative_timeframes: 'relative_timeframes',
  day_picker: 'day_picker',
  day_range_picker: 'day_range_picker',
  date_time_range_input: 'date_time_range_input',
  slider: 'slider',
  range_slider: 'range_slider',
}

/** Checks if given filter UI type is valid. If it's not, or if it's advanced, return false */
export const isValidFilterType = (type?: string): boolean =>
  !!(type && filterTokenTypeMap[type])
