/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
export enum FilterUIDisplay {
  INLINE = 'inline',
  OVERFLOW = 'overflow',
  POPOVER = 'popover',
}

export enum FilterUIType {
  Advanced = 'advanced',
  ButtonGroup = 'button_group',
  Checkboxes = 'checkboxes',
  RadioButtons = 'radio_buttons',
  ButtonToggles = 'button_toggles',
  DropdownMenu = 'dropdown_menu',
  TagList = 'tag_list',
}
export interface FilterUIConfig {
  display: string // FilterUIDisplay
  options?: any
  type: string // FilterUIType
}
