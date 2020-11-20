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

import { NavigationSection } from '../../Layout'

const components: NavigationSection = {
  children: [
    {
      children: [
        { path: 'box', title: 'Box' },
        { path: 'flex', title: 'Flex' },
        { path: 'grid', title: 'Grid' },
        { path: 'space', title: 'Space' },
      ],
      path: 'layout',
      title: 'Layout',
    },
    {
      children: [
        { path: 'headings', title: 'Headings' },
        { path: 'paragraph', title: 'Paragraph' },
        { path: 'span', title: 'Span' },
        { path: 'code', title: 'Code' },
        { path: 'truncate', title: 'Truncate' },
      ],
      path: 'text',
      title: 'Text',
    },
    {
      children: [
        { path: 'button', title: 'Button' },
        {
          path: 'button-group',
          title: 'ButtonGroup & ButtonToggle',
        },
        { path: 'icon-button', title: 'IconButton' },
        { path: 'link', title: 'Link' },
        { path: 'page-size', title: 'PageSize' },
        { path: 'pagination', title: 'Pagination' },
      ],
      path: 'actions',
      title: 'Actions',
    },
    {
      children: [
        { path: 'checkbox', title: 'Checkbox' },
        { path: 'checkbox-group', title: 'CheckboxGroup' },
        {
          path: 'form',
          title: 'Form',
        },
        {
          path: 'fieldset',
          title: 'Fieldset, Legend, Label',
        },
        {
          path: 'fields',
          title: 'Fields',
        },
        {
          path: 'inline-input-text',
          title: 'InlineInputText',
        },
        {
          path: 'inline-text-area',
          title: 'InlineTextArea',
        },
        {
          path: 'input-chips',
          title: 'InputChips',
        },
        {
          path: 'input-color',
          title: 'InputColor',
        },
        {
          path: 'input-date',
          title: 'InputDate',
        },
        {
          path: 'input-date-range',
          title: 'InputDateRange',
        },
        {
          path: 'input-hidden',
          title: 'InputHidden',
        },
        {
          path: 'input-filters',
          title: 'InputFilters',
        },
        {
          path: 'input-search',
          title: 'InputSearch',
        },
        {
          path: 'input-text',
          title: 'InputText',
        },
        {
          path: 'input-time',
          title: 'InputTime',
        },
        {
          path: 'input-time-select',
          title: 'InputTimeSelect',
        },
        {
          path: 'radio',
          title: 'Radio',
        },
        {
          path: 'radio-group',
          title: 'RadioGroup',
        },
        {
          path: 'range-slider',
          title: 'RangeSlider',
        },
        {
          path: 'input-select',
          title: 'Select',
        },
        {
          path: 'select-multi',
          title: 'SelectMulti',
        },
        {
          path: 'slider',
          title: 'Slider',
        },
        {
          path: 'text-area',
          title: 'TextArea',
        },
        {
          path: 'toggle-switch',
          title: 'ToggleSwitch',
        },
      ],
      path: 'forms',
      title: 'Forms',
    },
    {
      children: [
        { path: '', title: 'Dialog' },
        { path: 'confirm', title: 'Confirm' },
        { path: 'drawer', title: 'Drawer' },
        { path: 'layout', title: 'Layout' },
        { path: 'prompt', title: 'Prompt' },
      ],
      path: 'dialogs',
      title: 'Dialog',
    },
    {
      children: [
        { path: 'menu', title: 'Menu' },
        { path: 'popover', title: 'Popover' },
        { path: 'tooltip', title: 'Tooltip' },
      ],
      path: 'overlays',
      title: 'Overlay',
    },
    {
      children: [
        { path: 'accordion', title: 'Accordion' },
        { path: 'avatar', title: 'Avatar' },
        { path: 'badge', title: 'Badge' },
        { path: 'card', title: 'Card' },
        { path: 'calendar', title: 'Calendar' },
        { path: 'chip', title: 'Chip' },
        { path: 'color-wheel', title: 'ColorWheel' },
        { path: 'data-table', title: 'DataTable' },
        { path: 'date-format', title: 'DateFormat' },
        { path: 'divider', title: 'Divider' },
        { path: 'fade-in', title: 'FadeIn' },
        { path: 'icon', title: 'Icon' },
        { path: 'list', title: 'List' },
        { path: 'message-bar', title: 'MessageBar' },
        { path: 'spinner', title: 'Spinner' },
        { path: 'status', title: 'Status' },
        { path: 'swatch', title: 'Swatch' },
        { path: 'table', title: 'Table' },
        { path: 'tabs', title: 'Tabs' },
        { path: 'time-format', title: 'TimeFormat' },
        { path: 'tree', title: 'Tree' },
        { path: 'visually-hidden', title: 'VisuallyHidden' },
      ],
      path: 'content',
      title: 'Content',
    },
  ],
  path: 'components',
  title: 'Components',
}

export default components
