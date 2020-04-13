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
  title: 'Components',
  path: 'components',
  children: [
    {
      title: 'Layout',
      path: 'layout',
      children: [
        { title: 'Box', path: 'box' },
        { title: 'Flex', path: 'flex' },
      ],
    },
    {
      title: 'Text',
      path: 'text',
      children: [
        { title: 'Headings', path: 'headings' },
        { title: 'Paragraph', path: 'paragraph' },
        { title: 'Text', path: 'text' },
        { title: 'Code', path: 'code' },
      ],
    },
    {
      title: 'Actions',
      path: 'actions',
      children: [
        { title: 'Button', path: 'button' },
        {
          title: 'ButtonGroup & ButtonToggle',
          path: 'button-group',
        },
        { title: 'IconButton', path: 'icon-button' },
        { title: 'Link', path: 'link' },
        { title: 'PageSize', path: 'page-size' },
        { title: 'Pagination', path: 'pagination' },
      ],
    },
    {
      title: 'Forms',
      path: 'forms',
      children: [
        { title: 'Checkbox', path: 'checkbox' },
        {
          title: 'Form',
          path: 'form',
        },
        {
          title: 'Fieldset',
          path: 'fieldset',
        },
        {
          title: 'Fields',
          path: 'fields',
        },
        {
          title: 'InlineInputText',
          path: 'inline-input-text',
        },
        {
          title: 'InputChips',
          path: 'input-chips',
        },
        {
          title: 'InputDate',
          path: 'input-date',
        },
        {
          title: 'InputDateRange',
          path: 'input-date-range',
        },
        {
          title: 'InputHidden',
          path: 'input-hidden',
        },
        {
          title: 'InputSearch',
          path: 'input-search',
        },
        {
          title: 'InputText',
          path: 'input-text',
        },
        {
          title: 'InputTimeSelect',
          path: 'input-time-select',
        },
        {
          title: 'Label',
          path: 'label',
        },
        {
          title: 'Radio',
          path: 'radio',
        },
        {
          title: 'Select',
          path: 'select',
        },
        {
          title: 'SelectMulti',
          path: 'select-multi',
        },
        {
          title: 'Slider',
          path: 'slider',
        },
        {
          title: 'TextArea',
          path: 'text-area',
        },
        {
          title: 'ToggleSwitch',
          path: 'toggle-switch',
        },
      ],
    },
    {
      title: 'Modal',
      path: 'modals',
      children: [
        { title: 'Layout and Styling', path: '' },
        { title: 'Confirm', path: 'confirm' },
        { title: 'Dialog', path: 'dialog' },
        { title: 'Drawer', path: 'drawer' },
        { title: 'Prompt', path: 'prompt' },
      ],
    },
    {
      title: 'Overlay',
      path: 'overlays',
      children: [
        { title: 'Menu', path: 'menu' },
        { title: 'Popover', path: 'popover' },
        { title: 'Tooltip', path: 'tooltip' },
      ],
    },
    {
      title: 'Content',
      path: 'content',
      children: [
        { title: 'ActionList', path: 'action-list' },
        { title: 'Avatar', path: 'avatar' },
        { title: 'Badge', path: 'badge' },
        { title: 'Banner', path: 'banner' },
        { title: 'Card', path: 'card' },
        { title: 'Calendar', path: 'calendar' },
        { title: 'Chip', path: 'chip' },
        { title: 'ColorWheel', path: 'color-wheel' },
        { title: 'DateTimeFormat', path: 'date-time-format' },
        { title: 'Divider', path: 'divider' },
        { title: 'Icon', path: 'icon' },
        { title: 'List', path: 'list' },
        { title: 'Spinner', path: 'spinner' },
        { title: 'Swatch', path: 'swatch' },
        { title: 'Table', path: 'table' },
        { title: 'Tabs', path: 'tabs' },
        { title: 'VisuallyHidden', path: 'visually-hidden' },
      ],
    },
  ],
}

export default components
